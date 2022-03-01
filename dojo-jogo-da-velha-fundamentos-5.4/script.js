const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]

/* 
Crie uma função para gerar de maneira dinâmica 9 divs

Deve conter a classe celula
Deve conter o id numerados de 0 a 8
Deve ser filho da div grid
Deve conter um evento de click chamando uma função com o nome Jogar
*/

gerarNoveDivs();

function gerarNoveDivs(){
  let divGrid = document.querySelector(".grid")
  
  for(let i=0; i<9; i+=1){
    let div = document.createElement("div");
    div.className = "celula";
    div.id = i
    divGrid.appendChild(div)

    div.addEventListener("click", jogar)
  }
}

/*
Crie a função Jogar que deve receber o evento do click

Deve guardar o alvo clicado
Checar de qual jogador é o turno
Alterar o texto com o id player para o texto jogador da vez ( X ou O )
Alterar o texto do alvo clicado para o texto do jogador da vez ( X ou O )
Alterar o turno dos jogadores
*/

function jogar(evento){
  let alvoClicado = evento.target.id
  let jogador = document.getElementById("player").innerText

  if(jogador == "Vez do jogador X") {
    evento.target.innerText = "X"
    if(checarSeHouveGanhador("X")){
      document.getElementById("player").innerText = "Jogador X ganhou!!!"
    }
    else if(checarSeHouveEmpate()){
      document.getElementById("player").innerText = "Empate!"
    }
    else{
      document.getElementById("player").innerText = "Vez do jogador O"
    }
    
  }
  else if(jogador == "Vez do jogador O") {
    evento.target.innerText = "O"
    if(checarSeHouveGanhador("O")){
      document.getElementById("player").innerText = "Jogador O ganhou!!!"
    }
    else if(checarSeHouveEmpate()){
      document.getElementById("player").innerText = "Empate!"
    }
    else{
      document.getElementById("player").innerText = "Vez do jogador X"
    }
    
  }
}

/*
Crie uma função que receba de quem foi o turno e deve checar se houve algum ganhador

Deve passar por cada index do array de combinações
Checar se cada posição dentro do array contem o texto do jogador da vez ( X ou O )
Somar um ponto para cada posição que conter o texto do jogador da vez dentro do array
Checar se os pontos são maiores ou iguais a 3
Alterar texto com o id player para o jogador ganhador caso tenha feito 3 pontos
*/

function checarSeHouveGanhador(jogador){

  let celulas = document.getElementsByClassName("celula")
  let contadorDePontos = 0;

  /*for (let i = 0; i < celulas.length; i++) {
    console.log(celulas[i].innerText)
  }*/

  for(let i=0; i<combinacoes.length; i+=1){    
    contadorDePontos = 0;
    for(let j=0; j<combinacoes[i].length; j+=1){
      //console.log(combinacoes[i][j])
      if(celulas[combinacoes[i][j]].innerText == jogador){
        contadorDePontos+=1;
      }

      if(contadorDePontos >= 3){
        return true
      }

      //console.log("celulas: "+celulas[i].innerText)
      //console.log("item a testar: "+combinacoes[i][j])
      
    } 
  }

  

}

/*
Crie uma função que verifique se deu empate

Deve passar por todas as células verificando se não estão vazias
Alterar o texto com o id player para Empatou
*/

function checarSeHouveEmpate(){
  let celulas = document.getElementsByClassName("celula");
  let empate = true

  for (let i = 0; i < celulas.length; i+=1) {
    //console.log(celulas[i].innerText)    
    if(celulas[i].innerText == ""){
      empate = false
    }
  }
  return empate
}




/*
Crie uma função para resetar o jogo

Deve limpar todas as celulas
*/

function resetar(){
  let celulas = document.getElementsByClassName("celula");

  for(let i=0; i<celulas.length; i+=1){
    celulas[i].innerText = ""
  }
}



/*
Adicione um evento de click ao botão com o id reset passando a função resetar
*/

let botaoReset = document.getElementById("reset");
botaoReset.addEventListener("click", resetar)