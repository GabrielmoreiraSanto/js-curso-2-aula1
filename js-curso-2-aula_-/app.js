// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do Número Secretro";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Insira um número de 1 a 10";
let numeroAleatorio = 10;
let tentativa = 1;


function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag)
campo.innerHTML = texto;
}
function exibirTextoInical(){

exibirTextoNaTela('h1','Jogo do Número Secreto')
exibirTextoNaTela('p', 'Insira um Número de 1 a 10')
}
exibirTextoInical();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio){
      let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa"
      let mensagemTentativa = `Parabéns Você acertou o número secreto com ${tentativa} ${palavraTentativa}`
      exibirTextoNaTela('h1', 'Parabéns')
      exibirTextoNaTela('p' , mensagemTentativa)
      document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
      if(chute > numeroAleatorio){
          exibirTextoNaTela('p', "O número secreto é menor!");
      }else{
          exibirTextoNaTela('p', "O número secreto é maior!");
      }   
    }
    tentativa++
    limparCampo();
}
function gerarNumeroAleatorio(){
  return  parseInt(Math.random()*10+1);
}
function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo(){
  numeroAleatorio = gerarNumeroAleatorio();
  limparCampo();
  tentativa = 1;
 exibirTextoInical()
document.getElementById('reiniciar').setAttribute('disabled',true);
}