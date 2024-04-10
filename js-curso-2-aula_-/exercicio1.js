let altura = parseFloat(prompt("Informe sua altura"));
let peso = parseFloat(prompt("Informe o seu peso"));

function calculoIMC(parPESO, parALTURA){
    return  parPESO/(parALTURA*parALTURA);
}

 imc = calculoIMC(peso, altura);
alert(`O valor do IMC é ${imc.toFixed(2)}`);