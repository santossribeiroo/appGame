//Pegar a altura e largura da tela
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var nivel = window.location.search;
var createTime = 1500;

/*-------------------------------------------------------------------*/

//Definir dificuldade do jogo
nivel = nivel.replace('?', '');

if(nivel === 'normal') {
    //1500
    createTime = 1500;
} else if(nivel === 'dificil') {
    //1000
    createTime = 1000;
} else if(nivel === 'impossivel') {
    //750
    createTime = 750;
}

//Defini o tempo restante para vitória
var cronometro = setInterval(function() {

    tempo -= 1;
    if(tempo <= 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else{

    document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);


//Captura o tamanho da tela
function ajustaTamanho(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}
ajustaTamanho();


/*-------------------------------------------------------------------*/

//Criar posição aleatória para o mosquito
function randomPosition(){
    
//Remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();

    if(vidas >= 3){
        window.location.href = 'fim_de_jogo.html';
    }
    else {
    document.getElementById('heart' + vidas).src= "imagens/coracao_vazio.png";

    vidas++;
    }
    }

//Pegar a posiçãoX e posiçãoY dentro da altura e larguta da tela
    var posicaoX = Math.floor(Math.random() * largura) - 100;
    var posicaoY = Math.floor(Math.random() * altura) - 100;


//Não recebe uma posição negativa dentro do jogo
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);


//Criar o elemento HTML para manipulação
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = randomSize() + ' ' + randomSide();  //Recebe função para randomizar os tamanhos
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);
}

//Função para criar tamanhos diferentes
function randomSize() {
    var classeSize = Math.floor(Math.random() * 3);

    if(classeSize == 0) {
        return 'mosquito1';
    }

    else if(classeSize == 1) {
        return 'mosquito2';
    }

    else if(classeSize == 2) {
        return 'mosquito3';
    }
}

//Função para alterar o lado do mosquito
function randomSide() {
    var classSide = Math.floor(Math.random() * 2);

    if(classSide == 0) {
        return 'ladoA';
    }

    else if(classSide == 1) {
        return 'ladoB';
    }
}