const levels = [
    {
        question: 'Mercado Livre é a empresa de tecnologia líder na América Latina',
        answer: 'verdade',
        explanation: 'Em 2023, a marca foi considerada uma das 100 mais influentes do mundo pela revista TIME e uma das companhias que mudam o mundo pela Fortune.No mesmo ano, foi condecorada com o Responsible Business Award, da Reuters, por seu cuidado altamente elogiado à biodiversidade. Atualmente, o Mercado Livre emprega 58 mil colaboradores.'
    },
    {
        question: 'O e-commerce do Mercado Livre não possui o envio mais eficiente',
        answer: 'mito',
        explanation: 'Na liderança do e-commerce em toda América Latina, o Mercado Livre oferece serviço completo e sortimento acessível tanto para compradores quanto vendedores. A eficiência se comprova nos dados do quarto trimestre de 2023, que surpreendem: foram 407 milhões de itens enviados e 413 milhões de itens vendidos.'
    },
    {
        question: 'O Mercado Livre e o Mercado Pago não são da mesma companhia',
        answer: 'mito',
        explanation: 'O Mercado Pago é o banco digital do Mercado Livre, que também lidera em serviços financeiros na América Latina. São 53 milhões de usuários únicos ativos em toda a região.'
    },
    {
        question: 'O Mercado Livre promove inclusão financeira',
        answer: 'verdade',
        explanation: 'Empoderar pessoas e impulsionar negócios vem sendo um pilar essencial para a companhia. Para se ter uma ideia, 26 novos postos de empregos diretos e indiretos são criados por hora e + de 1,8 milhão de famílias têm sua principal fonte de renda através do Mercado Livre. Fonte: Euromonitor, Impactos que Importam, 2023.'
    },
    {
        question: 'Para o Mercado Livre, os impactos sociais e ambientais positivos vêm em primeiro lugar',
        answer: 'verdade',
        explanation: 'A redução dos impactos ambientais começa desde a frota, que conta com 2,4 mil veículos movidos à gás natural. Segundo o Relatório de Impacto (2023), foram vendidos +10 milhões de produtos de impacto positivo na plataforma, entre eles bicicletas e garrafas reutilizáveis. Mais de 22 milhões de pacotes enviados através de modais sustentáveis e +13 mil árvores nativas restauradas. Na esfera de equidade social, 28% de mulheres ocupam cargos de liderança e 48% de pessoas negras no Brasil. 12% dos colaboradores se identificam como LGBTQIA+.'
    }
];

let currentLevelIndex = 0;

const questionContainer = document.getElementById('question-container');
const explanationContainerTrue = document.getElementById('explanation-container-true');
const explanationContainerFalse = document.getElementById('explanation-container-false');
const nextButton = document.getElementById('next-button');
const trueButton = document.getElementById('true-button');
const falseButton = document.getElementById('false-button');

function showQuestion() {
    const currentLevel = levels[currentLevelIndex];
    questionContainer.innerHTML = currentLevel.question;
    explanationContainerTrue.style.display = 'none';
    explanationContainerFalse.style.display = 'none';

    explanationContainerTrue.innerHTML = '';
    explanationContainerFalse.innerHTML = '';
    nextButton.style.display = 'none';
    trueButton.style.display = 'block';
    falseButton.style.display = 'block';
}

function checkAnswer(answer) {
    const currentLevel = levels[currentLevelIndex];
    const isCorrect = answer === currentLevel.answer;

    if (currentLevel.answer == 'verdade') {
        explanationContainerTrue.innerHTML = currentLevel.explanation;
        explanationContainerTrue.style.display = 'block';
    }
    else {
        explanationContainerFalse.innerHTML = currentLevel.explanation;
        explanationContainerFalse.style.display = 'block';
    }

    if (!isCorrect) {
        console.log('Resposta incorreta!');
    }

    trueButton.style.display = 'block';
    falseButton.style.display = 'block';
    nextButton.style.display = 'block';
}

function goToNextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex < levels.length) {
        showQuestion();
    } else {
        alert('Quiz concluído!');
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
        alert('Quiz concluído!');
    }
});

showQuestion();