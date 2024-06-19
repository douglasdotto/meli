// 1° Página
$(document).ready(function () {
    AOS.init();

    $(".btn-goToLink").on("click", function () {
        $('.btn-goToLink').attr('disabled', true);
        $("#triviaContainer").addClass("hidden");
        $("#roletaContainer").removeClass("hidden");
        $(main);
    });
});

// ROLETA
const options = [
    { id: "option1", categoria: "esporte", imgSrc: "./images/roleta1/1.png", nivel: 1 },
    { id: "option2", categoria: "cultura pop", imgSrc: "./images/roleta1/2.png", nivel: 1 },
    { id: "option3", categoria: "história", imgSrc: "./images/roleta1/3.png", nivel: 1 },
    { id: "option4", categoria: "esporte", imgSrc: "./images/roleta1/1.png", nivel: 1 },
    { id: "option5", categoria: "cultura pop", imgSrc: "./images/roleta1/2.png", nivel: 1 },
    { id: "option6", categoria: "história", imgSrc: "./images/roleta1/3.png", nivel: 1 },

    { id: "option1", categoria: "Mercado Livre", imgSrc: "./images/roleta1/4.png", nivel: 2 },
    { id: "option2", categoria: "ciência", imgSrc: "./images/roleta1/5.png", nivel: 2 },
    { id: "option3", categoria: "arte", imgSrc: "./images/roleta1/6.png", nivel: 2 },
    { id: "option4", categoria: "Mercado Livre", imgSrc: "./images/roleta1/4.png", nivel: 2 },
    { id: "option5", categoria: "ciência", imgSrc: "./images/roleta1/5.png", nivel: 2 },
    { id: "option6", categoria: "arte", imgSrc: "./images/roleta1/6.png", nivel: 2 },

    { id: "option1", categoria: "Mercado Livre ", imgSrc: "./images/roleta1/7.png", nivel: 3 },
    { id: "option2", categoria: "Caldeirão com Mion", imgSrc: "./images/roleta1/8.png", nivel: 3 },
    { id: "option3", categoria: "geografia", imgSrc: "./images/roleta1/9.png", nivel: 3 },
    { id: "option4", categoria: "Mercado Livre ", imgSrc: "./images/roleta1/7.png", nivel: 3 },
    { id: "option5", categoria: "Caldeirão com Mion", imgSrc: "./images/roleta1/8.png", nivel: 3 },
    { id: "option6", categoria: "geografia", imgSrc: "./images/roleta1/9.png", nivel: 3 },
];

const perguntas = {
    "esporte": [
        { pergunta: "Quando será a próxima Copa do Mundo?", alternativas: ["2028", "2026", "2032", "2035"], correta: "2026" },
        { pergunta: "Em qual esporte você faria um ‘touchdown’?", alternativas: ["Rugby", "Lacrosse", "Futebol Americano", "Basebol"], correta: "Futebol Americano" },
        { pergunta: "Quantos jogadores há em um time de futebol?", alternativas: ["11", "9", "10", "12"], correta: "11" }
    ],
    "cultura pop": [
        { pergunta: "Qual o nome que se dá a quem escreve novelas e séries de TV?", alternativas: ["Romancista", "Poeta", "Ensaista", "Dramaturgo"], correta: "Dramaturgo" },
        { pergunta: "Qual o gênero musical popular do Brasil?", alternativas: ["Sertanejo", "Funk", "MPB", "Pop"], correta: "MPB" },
        { pergunta: "Quem foi a campeã do Carnaval do Rio de Janeiro em 2018?", alternativas: ["Salgueiro", "Mangueira", "Portela", "Beija-flor"], correta: "Beija-flor" },
    ],
    "história": [
        { pergunta: "Qual é a capital da nação brasileira?", alternativas: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correta: "Brasília" },
        { pergunta: "Quantos anos tem a cidade de São Paulo?", alternativas: ["400 anos", "450 anos", "470 anos", "520 anos"], correta: "470 anos" },
        { pergunta: "Em qual país as vacas são consideradas animais sagrados?", alternativas: ["China", "Índia", "Japão", "Coreia do Sul"], correta: "Índia" }
    ],
    "Mercado Livre": [
        { pergunta: "Qual o país de origem do Mercado Livre?", alternativas: ["Brasil", "Argentina", "Uruguai", "Estados Unidos"], correta: "Argentina" },
        { pergunta: "Em que ano o Mercado Livre iniciou suas operações?", alternativas: ["1999", "1980", "2001", "2010"], correta: "1999" },
        { pergunta: "Quantos colaboradores o Mercado Livre emprega atualmente?", alternativas: ["40 mil", "58 mil", "30 mil", "70 mil"], correta: "58 mil" }
    ],
    "ciência": [
        { pergunta: "Qual é o tipo sanguíneo mais raro?", alternativas: ["AB Negativo", "B Negativo", "O Positivo", "A Negativo"], correta: "AB Negativo" },
        { pergunta: "As tartarugas pertencem a qual classe de animais?", alternativas: ["Anfíbio", "Réptil", "Mamífero", "Ave"], correta: "Réptil" },
        { pergunta: "Qual é a substância natural mais dura da Terra?", alternativas: ["Ametista", "Quartzo", "Diamante", "Turmalina negra"], correta: "Diamante" },
    ],
    "arte": [
        { pergunta: "O movimento artístico que colocou o ser humano no centro do universo foi:", alternativas: ["Barroco", "Romantismo", "Renascentismo", "Surrealismo"], correta: "Renascentismo" },
        { pergunta: "Qual desses movimentos simbolizou a cultura das massas nos anos 1960?", alternativas: ["Pop Art", "Impressionismo", "Dadaísmo", "Cubismo"], correta: "Pop Art" },
        { pergunta: "Qual o nome que se dá a artistas que se colocam à frente de seu tempo?", alternativas: ["Modernos", "Vanguarda", "Sábios", "Criativos"], correta: "Vanguarda" }
    ],
    "Mercado Livre ": [
        { pergunta: "Qual o nome do programa de benefícios do Mercado Livre e Mercado Pago?", alternativas: ["Mercado Livre Pontos", "Meli+", "Meli Benefícios", "Mercado Livre Premium"], correta: "Meli+" },
        { pergunta: "Quantos colaboradores o Mercado Livre emprega atualmente?", alternativas: ["40 mil", "58 mil", "30 mil", "70 mil"], correta: "58 mil" },
        { pergunta: "Em qual região o Mercado Livre exerce liderança em seu segmento?", alternativas: ["América do Norte", "América Latina", "Europa", "Ásia"], correta: "América Latina" },
        { pergunta: "Em que ano o Mercado Livre entrou para a lista das 100 marcas mais influentes do mundo pela TIME?", alternativas: ["2012", "2023", "2020", "2016"], correta: "2023" },
    ],
    "Caldeirão com Mion": [
        { pergunta: "Em que ano estreou o Caldeirão com Mion?", alternativas: ["2021", "2020", "2017", "2015"], correta: "2021" },
        { pergunta: "Em qual dia da semana é exibido o programa?", alternativas: ["Às quintas-feiras", "Às sextas-feiras", "Todos os dias", "Aos sábados"], correta: "Aos sábados" },
        { pergunta: "Qual o nome do novo quadro do programa onde os famosos cantam ao vivo?", alternativas: ["Karaokê dos famosos", "Solte a voz", "Caldeirokê", "Aumente o som"], correta: "Caldeirokê" },
    ],
    "geografia": [
        { pergunta: "O Maranhão fica onde?", alternativas: ["Sul", "Norte", "Nordeste", "Sudeste"], correta: "Nordeste" },
        { pergunta: "Qual a avenida mais famosa de SP?", alternativas: ["Avenida Nove de Julho", "Avenida Paulista", "Rua da Consolação", "Avenida São João"], correta: "Avenida Paulista" },
        { pergunta: "Em qual bairro do Rio de Janeiro fica o Cristo Redentor?", alternativas: ["Copacabana", "Leblon", "Cosme Velho", "Laranjeiras"], correta: "Cosme Velho" },
    ],
};

const perguntasRespondidas = {
    "esporte": 0,
    "cultura pop": 0,
    "história": 0,
    "Mercado Livre": 0,
    "ciência": 0,
    "arte": 0,
    "Mercado Livre ": 0,
    "Caldeirão com Mion": 0,
    "geografia": 0,
};

let vidas = 3;
let nivel = 1;
let maxNivel = 3;

const spin = async () => {
    const degBase = 1440;
    const deg = await randomSpinDeg();
    const section = getSection(deg);
    const totalDeg = deg + degBase;
    const sectionsElm = $('.optionRoulette');
    const $roulette = $('#roulette');
    const $btnSpin = $('#btnSpin');

    $btnSpin.prop('disabled', true);
    $roulette.removeClass('transition');
    $roulette.css('transform', `rotate(0deg)`);
    sectionsElm.addClass('brightness');

    setTimeout(() => {
        $roulette.addClass('transition');
        $roulette.css('transform', `rotate(${totalDeg}deg)`);
    }, 10);

    setTimeout(() => {
        sectionsElm.removeClass('brightness');
        sectionsElm.each(function (i) {
            $(this).toggleClass('brightness', i === section).toggleClass('opacity', i !== section);
        });

        const categoria = options.filter(x => x.nivel === nivel)[section].categoria;
        mostrarPergunta(categoria);

        $('.container').addClass('flyTop');
    }, 4000);
};

const mostrarPergunta = (categoria, timeout = 2000) => {
    var indexPergunta = perguntasRespondidas[categoria];

    if (indexPergunta >= perguntas[categoria].length) {
        if (nivel < maxNivel) {
            setTimeout(() => {
                nivel = nivel + 1;
                $("#nivel").html(nivel);
                atualizarOpcoesRoleta(nivel);
                Swal.fire({
                    html: "<p class='swal-bold'>Mandou bem, hein? 🤩</p><p class='swal-bold'>Pronto para a próxima fase?</p>",
                    confirmButtonText: 'AVANÇAR',
                    heightAuto: false
                }).then((result) => {
                    $('#btnSpin').attr('disabled', false);

                    $('.roleta-body').removeClass('hidden');
                    $('.question-body').addClass('hidden');
                });
            }, 2000);

            return;
        } else {
            setTimeout(() => {
                Swal.fire({
                    html: "<p class='swal-bold'>Arrasou! 🥳</p><p class='swal-regular'>Você acertou a maioria das perguntas e venceu esse game. <span class='swal-bold'>E o melhor está chegando, viu?</span> Tá na mão o seu <span class='swal-bold'>cupom de desconto</span> para usar em sua <span class='swal-bold'>próxima compra no app do Mercado Livre!</span></p>",
                    showCancelButton: true,
                    confirmButtonText: 'RESGATAR CUPOM',
                    cancelButtonText: 'JOGAR NOVAMENTE',
                    heightAuto: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Aqui você pode adicionar alguma lógica adicional se necessário
                    } else {
                        location.reload();
                    }
                });
                return;
            }, 2000);
        }
    }

    // Ocultar a roleta com animação
    setTimeout(() => {
        $('.roleta-body').addClass('hidden');
        $('.question-body').removeClass('hidden');
    }, timeout);

    setTimeout(() => {
        // Mostrar a categoria e as vidas
        $('#row-top').removeClass('hidden');
        $('#row-pergunta').removeClass('hidden');
        const questao = options.find(pergunta => pergunta.categoria === categoria && pergunta.nivel === nivel);
        // Definir a categoria e a imagem da categoria
        $("#categoria").html(questao.categoria);
        $("#categoriaImg").attr("src", questao.imgSrc);
        $('#tempo').html('20');

        // Mostrar a pergunta
        const perguntaAtual = perguntas[categoria][indexPergunta];
        const perguntaElement = $('<div>').addClass('pergunta').text(perguntaAtual.pergunta);
        $('#pergunta').html(perguntaElement);

        // Mostrar as alternativas
        const alternativasContainer = $('#alternativas').empty();
        perguntaAtual.alternativas.forEach((alternativa, index) => {
            const alternativaElement = $('<button>').addClass('custom-button alternativa my-2 my-md-3').text(alternativa);
            alternativaElement.on('click', () => {
                $(".alternativa").prop("disabled", true);
                if (alternativa === perguntaAtual.correta) {
                    alternativaElement.append('👍');
                    alternativaElement.addClass('acerto');

                    if (categoria == "Mercado Livre") {
                        setTimeout(() => {
                            nivel = nivel + 1;
                            $("#nivel").html(nivel);
                            atualizarOpcoesRoleta(nivel);
                            Swal.fire({
                                html: "<p class='swal-bold'>Mandou bem, hein? 🤩</p><p class='swal-bold'>Pronto para a próxima fase?</p>",
                                confirmButtonText: 'AVANÇAR',
                                heightAuto: false
                            }).then((result) => {
                                $('#btnSpin').attr('disabled', false);
                                $('.roleta-body').removeClass('hidden');
                                $('.question-body').addClass('hidden');
                            });
                        }, 2000);
                    } else if (categoria == "Mercado Livre ") {
                        setTimeout(() => {
                            Swal.fire({
                                html: "<p class='swal-bold'>Arrasou! 🥳</p><p class='swal-regular'>Você acertou a maioria das perguntas e venceu esse game. <span class='swal-bold'>E o melhor está chegando, viu?</span> Tá na mão o seu <span class='swal-bold'>cupom de desconto</span> para usar em sua <span class='swal-bold'>próxima compra no app do Mercado Livre!</span></p>",
                                showCancelButton: true,
                                confirmButtonText: 'RESGATAR CUPOM',
                                cancelButtonText: 'JOGAR NOVAMENTE',
                                heightAuto: false
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    // Aqui você pode adicionar alguma lógica adicional se necessário
                                } else {
                                    location.reload();
                                }
                            });
                            return;
                        }, 2000);
                    } else {
                        perguntasRespondidas[categoria]++;
                        mostrarPergunta(categoria);
                    }
                } else {
                    alternativaElement.append('👎');
                    alternativaElement.addClass('erro');
                    vidas--;
                    atualizarVidas();
                    if (vidas === 0) {
                        Swal.fire({
                            html: "<p class='swal-bold'>Ah, não foi dessa vez 🙁</p><p class='swal-bold'>Mas o seu melhor está chegando!</p>",
                            confirmButtonText: 'TENTE NOVAMENTE',
                            heightAuto: false
                        }).then((result) => {
                            if (result.isConfirmed) {
                                location.reload();
                            }
                        });
                    } else {
                        Swal.fire({
                            html: "<p class='swal-bold'>Ih! Tente outra vez! 😢</p><p class='swal-bold'>Você ainda tem " + vidas + " vida" + (vidas == 1 ? "" : "s") + ".</p>",
                            confirmButtonText: 'TENTE NOVAMENTE',
                            heightAuto: false
                        }).then((result) => {
                            perguntasRespondidas[categoria];
                            mostrarPergunta(categoria, 0);
                        });
                    }
                }
            });
            alternativasContainer.append(alternativaElement);
        });

        // Contador de tempo
        let tempoRestante = 20;
        const tempoInterval = setInterval(() => {
            tempoRestante--;
            $('#tempo').html(tempoRestante <= 9 ? "0" + tempoRestante : tempoRestante);
            if (tempoRestante <= 0) {
                clearInterval(tempoInterval);
                if (vidas === 0) {
                    Swal.fire({
                        html: "<p class='swal-bold'>Ah, não foi dessa vez 🙁</p><p class='swal-bold'>Mas o seu melhor está chegando!</p>",
                        confirmButtonText: 'TENTE NOVAMENTE',
                        heightAuto: false
                    }).then((result) => {
                        location.reload();
                    });
                } else {
                    vidas--;
                    atualizarVidas();
                    Swal.fire({
                        html: "<p class='swal-bold'>Tempo esgotado! 🙁</p><p class='swal-regular'>Você não respondeu a tempo e perdeu <span class='swal-bold'>uma vida!</span></p>",
                        confirmButtonText: 'SEGUIR',
                        heightAuto: false
                    }).then((result) => {
                        perguntasRespondidas[categoria];
                        mostrarPergunta(categoria, 0);
                    });
                }
            }
        }, 1000);

        // Limpar o intervalo se a pergunta for respondida antes do tempo acabar
        alternativasContainer.on('click', () => {
            clearInterval(tempoInterval);
        });
    }, timeout);
};

const atualizarVidas = () => {
    $('#vidas').text(vidas);
};

const getSection = (deg) => {
    const sectionLength = 6;
    const degBySection = 360 / sectionLength;
    const ranges = [];
    let value = 360;

    for (let i = 0; i < sectionLength; i++) {
        value -= (i === 0) ? degBySection / 2 : degBySection;
        ranges.push(value);
    }

    const result = ranges.map((elm, i) => (deg >= elm) ? i : null).filter(elm => elm != null);
    return (result.length === 0) ? 0 : result[0];
}

const randomSpinDeg = () => {
    return Math.floor(Math.random() * 361);
}

const main = () => {
    $('#btnSpin').on('click', spin);
    atualizarOpcoesRoleta(nivel);
}

const atualizarOpcoesRoleta = (nivelAtual) => {
    const $rouletteContainer = $('#rouletteContainer');
    $rouletteContainer.empty(); // Limpa as opções atuais da roleta

    // Seleciona as opções com base no nível atual
    const opcoesFiltradas = options.filter(opcao => opcao.nivel === nivelAtual);

    // Adiciona as novas opções à roleta
    opcoesFiltradas.forEach(opcao => {
        const $optionDiv = $('<div>').addClass('optionRoulette').attr('id', opcao.id);
        const $imgSectionDiv = $('<div>').addClass('imgSection').attr('id', `section${opcao.id.slice(-2)}`);
        const $rowDiv = $('<div>').addClass('row justify-content-center align-items-center text-center');
        const $colCategoriaDiv = $('<div>').addClass('col-12');
        const $spanCategoria = $('<span>').addClass('text-categoria').text(opcao.categoria);
        const $colImgDiv = $('<div>').addClass('col-12');
        const $imgElement = $('<img>').attr('src', opcao.imgSrc);

        $colCategoriaDiv.append($spanCategoria);
        $colImgDiv.append($imgElement);
        $rowDiv.append($colCategoriaDiv, $colImgDiv);
        $imgSectionDiv.append($rowDiv);
        $optionDiv.append($imgSectionDiv);
        $rouletteContainer.append($optionDiv);
    });
};