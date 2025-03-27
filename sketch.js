let xj1 = 0
let xj2 = 0
let xj3 = 0
let xj4 = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  ativaJogo()
  desenhaJogadores()
  desenhaChegada()
  verificaVencedor()  

}

//mostra se tá ativo
function ativaJogo() {
  if (focused == true) {
    background("blue")
  }  else {
    background("orange")
  }
}

//mostra jogadores
function desenhaJogadores() {
  textSize(35)
  text("👻",xj1,70)
  text("👺",xj2,160)
  text("🤡",xj3,250)
  text("🤬",xj4,340)
}

//desenha linha de chegada
function desenhaChegada() {
  rect(350,0,10,400)
}

//verifica vencedor
function verificaVencedor() {
  if (xj1 > 350) {
     text("Jogador 1 venceu!",50,200)
    noLoop()
  }
  if (xj2 > 350) {
     text("Jogador 2 venceu!",50,200)
    noLoop()
  }
    if (xj3 > 350) {
     text("Jogador 3 venceu!",50,200)
    noLoop()
  }
    if (xj4 > 350) {
     text("Jogador 3 venceu!",50,200)
    noLoop()
  }
}

//movimenta jogadores
function keyReleased () {
  if (key === 'a') {
    xj1 += random(20)
  }
  if (key == 's') {
    xj2 += random(20)
  }
  if (key == 'd') {
    xj3 += random(20)
  }
  if (key == 'f') {
    xj4 += random(20)
  }
}
