function calcularAreaEPerimetro() {

    let raio = parseFloat(prompt("Digite o raio da sala circular:"));

    if (raio <= 0) {
        console.log("Por favor, forneça um raio válido.");
        return;
    }

    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;

    alert(` Para um círculo com raio ${raio}:`);
    alert(` A Área é: ${area}`);
    alert(` O Perímetro é: ${perimetro.toFixed(2)}`);
}

calcularAreaEPerimetro();