const levels = [
    {
        question: 'Mercado Livre é a empresa de tecnologia líder na América Latina <img src="./images/1.png" />',
        answer: 'verdade',
        explanation: 'Em 2023, a marca foi considerada uma das 100 mais influentes do mundo pela revista TIME e uma das companhias que mudam o mundo pela Fortune.No mesmo ano, foi condecorada com o Responsible Business Award, da Reuters, por seu cuidado altamente elogiado à biodiversidade. Atualmente, o Mercado Livre emprega 58 mil colaboradores.'
    },
    {
        question: 'O e-commerce do Mercado Livre não possui o envio mais eficiente <img src="./images/2.png" />',
        answer: 'mito',
        explanation: 'Na liderança do e-commerce em toda América Latina, o Mercado Livre oferece serviço completo e sortimento acessível tanto para compradores quanto vendedores. A eficiência se comprova nos dados do quarto trimestre de 2023, que surpreendem: foram 407 milhões de itens enviados e 413 milhões de itens vendidos.'
    },
    {
        question: 'O Mercado Livre e o Mercado Pago não são da mesma companhia <img src="./images/3.png" />',
        answer: 'mito',
        explanation: 'O Mercado Pago é o banco digital do Mercado Livre, que também lidera em serviços financeiros na América Latina. São 53 milhões de usuários únicos ativos em toda a região.'
    },
    {
        question: 'O Mercado Livre promove inclusão financeira <img src="./images/4.png" />',
        answer: 'verdade',
        explanation: 'Empoderar pessoas e impulsionar negócios vem sendo um pilar essencial para a companhia. Para se ter uma ideia, 26 novos postos de empregos diretos e indiretos são criados por hora e + de 1,8 milhão de famílias têm sua principal fonte de renda através do Mercado Livre.<br/><br/><small>Fonte: Euromonitor, Impactos que Importam, 2023.</small>'
    },
    {
        question: 'Para o Mercado Livre, os impactos sociais e ambientais positivos vêm em primeiro lugar <img src="./images/5.png" />',
        answer: 'verdade',
        explanation: 'A redução dos impactos ambientais começa desde a frota, que conta com 2,4 mil veículos movidos à gás natural. Segundo o Relatório de Impacto (2023), foram vendidos +10 milhões de produtos de impacto positivo na plataforma, entre eles bicicletas e garrafas reutilizáveis. Mais de 22 milhões de pacotes enviados através de modais sustentáveis e +13 mil árvores nativas restauradas. Na esfera de equidade social, 28% de mulheres ocupam cargos de liderança e 48% de pessoas negras no Brasil. 12% dos colaboradores se identificam como LGBTQIA+.'
    }
];

let currentLevelIndex = 0;
let score = 0;

const quizIndex = document.getElementById('quiz-index');
const quizQuestionWrapper = document.getElementById('quiz_question_wrapper');
const questionContainer = document.getElementById('question-container');
const explanationContainerTrue = document.getElementById('explanation-container-true');
const explanationContainerFalse = document.getElementById('explanation-container-false');
const imgCloseTrue = document.getElementById('img-true-close');
const imgCheckTrue = document.getElementById('img-true-check');
const imgCloseFalse = document.getElementById('img-false-close');
const imgCheckFalse = document.getElementById('img-false-check');
const nextButton = document.getElementById('next-button');
const trueButton = document.getElementById('true-button');
const falseButton = document.getElementById('false-button');

function showQuestion() {
    const currentLevel = levels[currentLevelIndex];
    questionContainer.innerHTML = currentLevel.question;
    explanationContainerTrue.style.display = 'none';
    explanationContainerFalse.style.display = 'none';

    quizIndex.innerHTML = (currentLevelIndex + 1) + '/5';
    explanationContainerTrue.innerHTML = '';
    explanationContainerFalse.innerHTML = '';
    imgCloseTrue.style.display = 'none';
    imgCheckTrue.style.display = 'none';
    imgCloseFalse.style.display = 'none';
    imgCheckFalse.style.display = 'none';
    nextButton.style.display = 'none';

    trueButton.style.color = "var(--text-primary)";
    falseButton.style.color = "var(--text-primary)";
    trueButton.classList.remove("btn-black");
    falseButton.classList.remove("btn-black");
    trueButton.style.display = 'block';
    falseButton.style.display = 'block';
    trueButton.disabled = false;
    falseButton.disabled = false;
}

function checkAnswer(answer) {
    const currentLevel = levels[currentLevelIndex];
    const isCorrect = answer === currentLevel.answer;

    if (isCorrect)
        score += 1;

    if (currentLevel.answer == 'verdade') {
        explanationContainerTrue.innerHTML = currentLevel.explanation;
        explanationContainerTrue.style.display = 'block';
        trueButton.style.color = "var(--confirmation-btn)";
    }
    else {
        explanationContainerFalse.innerHTML = currentLevel.explanation;
        explanationContainerFalse.style.display = 'block';
        falseButton.style.color = "var(--confirmation-btn)";
    }

    if (currentLevel.answer == 'mito' && answer == 'verdade') {
        trueButton.classList.add("btn-black");
        imgCloseTrue.style.display = 'block';
    } else if (currentLevel.answer == 'verdade' && answer == 'verdade') {
        imgCheckTrue.style.display = 'block';
    } else if (currentLevel.answer == 'verdade' && answer == 'mito') {
        falseButton.classList.add("btn-black");
        imgCloseFalse.style.display = 'block';
    } else if (currentLevel.answer == 'mito' && answer == 'mito') {
        imgCheckFalse.style.display = 'block';
    }

    trueButton.style.display = 'block';
    falseButton.style.display = 'block';
    trueButton.disabled = true;
    falseButton.disabled = true;
    nextButton.style.display = 'block';
}

function goToNextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex < levels.length) {
        showQuestion();
    } else {
        finish();
    }
}

trueButton.addEventListener('click', () => {
    checkAnswer('verdade');
});

falseButton.addEventListener('click', () => {
    checkAnswer('mito');
});

nextButton.addEventListener('click', () => {
    if (currentLevelIndex < levels.length) {
        goToNextLevel();
    } else {
        finish();
    }
});

const quiz = document.getElementById('quiz');
const quiz2 = document.getElementById('quiz-2');
const result1 = document.getElementById('result-1');
const result2 = document.getElementById('result-2');
const result3 = document.getElementById('result-3');

function finish() {
    trueButton.style.display = 'none';
    falseButton.style.display = 'none';
    nextButton.style.display = 'none';
    quizQuestionWrapper.style.display = 'none';
    questionContainer.style.display = 'none';

    quiz.style.display = 'none';
    quiz2.style.display = 'none';
    if (score >= 0 && score < 2) {
        result3.style.display = 'flex';
    } else if (score >= 2 && score < 5) {
        result2.style.display = 'flex';
    } else if (score == 5) {
        result1.style.display = 'flex';
    }
    quizIndex.innerHTML = 'Resultado';
}

showQuestion();