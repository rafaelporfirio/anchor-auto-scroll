var scrollY = 0,
    incremento = 0,
    animacao_1,
    animacao_2,
    botoesArr = ["botao_Header", "botao_Secao1", "botaoSecao2"];

function pegarBotoes(_botao) {

    return document.getElementById(_botao);
}

botoesArr[0] = pegarBotoes("botao-header");
botoesArr[1] = pegarBotoes("botao-secao-1");
botoesArr[2] = pegarBotoes("botao-secao-2");



botoesArr[0].addEventListener("click", function(e) {
    e.preventDefault();

    scrollParaCima("header");

}, false);

botoesArr[1].addEventListener("click", function(e) {
    e.preventDefault();

    scrollParaCima("secao-1");
    scrollParaBaixo("secao-1");

}, false);


botoesArr[2].addEventListener("click", function(e) {
    e.preventDefault();

    scrollParaCima("secao-2");
    scrollParaBaixo("secao-2");

}, false);




function scrollParaBaixo(el) {

    var estado_Atual_ScrollY = window.pageYOffset,
        posicao_Top_Cada_Elemento = document.getElementById(el).offsetTop,
        altura_Body = document.body.offsetHeight,
        posicao_Y_gerada = estado_Atual_ScrollY + window.innerHeight;


    animacao_1 = setTimeout(function() {

        scrollParaBaixo(el);

    }, 5);


    if (posicao_Y_gerada < altura_Body) {

        if (estado_Atual_ScrollY < posicao_Top_Cada_Elemento) {

            clearTimeout(animacao_2);
            incremento++;
            scrollY = estado_Atual_ScrollY + Math.pow(1.015, incremento);
            window.scroll(0, scrollY);


        } else {
            clearTimeout(animacao_1);
            scrollY = 0;
            incremento = 0;

        }

    } else {
        clearTimeout(animacao_1);

    }

}

function scrollParaCima(el) {

    var estado_Atual_ScrollY = window.pageYOffset,
        posicao_Top_Cada_Elemento = document.getElementById(el).offsetTop;

    animacao_2 = setTimeout(function() {

        scrollParaCima(el);

    }, 5);

    if (estado_Atual_ScrollY > posicao_Top_Cada_Elemento) {
        clearTimeout(animacao_1);

        incremento++;
        scrollY = estado_Atual_ScrollY - Math.pow(1.015, incremento);
        window.scroll(0, scrollY);


    } else {
        clearTimeout(animacao_2);
        scrollY = 0;
        incremento = 0;
    }

}