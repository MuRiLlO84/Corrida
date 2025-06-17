let xj = [0,0,0,0,0]
let yj = [50,130,210,290,370]
let j  = ["👻","👺","🤡","🤬","👽"]
let teclas = ['a','s','d','f','g']
let quant = j.length

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
  for (let i = 0; i < quant; i++) {
    text(j[i],xj[i],yj[i])
  }
}

//desenha linha de chegada
function desenhaChegada() {
  fill("black")
  rect(350,0,10,400)
  fill("red")
  for (let yAtual=0; yAtual < 400; yAtual += 20){
    rect(350,yAtual,10,10)
  }
}

//verifica vencedor
function verificaVencedor() {
  for (let i = 0; i < quant; i++) {
    if (xj[i] > 350) {
      text (j[i] + " venceu!", 100, 200)
    }
  }
}

//movimenta jogadores
function keyReleased () {
  for (let i = 0; i< quant; i++) {
    if (key == teclas[i]) {
      xj[i] += random(20)
    }
  }
}
