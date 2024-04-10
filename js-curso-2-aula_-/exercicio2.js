let numero = parseFloat(prompt("informe um numero"));
let fatorial = calcularFatorial(numero);
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

alert(`O fatorial de ${numero} é ${fatorial}`);