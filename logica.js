function fazerCalculo(){
    let valorPeso = parseFloat (document.getElementById('peso').value);
    let valorAltura = parseFloat (document.getElementById('altura').value);
    let valorIdade = parseFloat (document.getElementById('idade').value);
    
    // verifica se os valores são números válidos
    if (isNaN(valorPeso) || isNaN(valorAltura) || isNaN(valorIdade)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let valorResultado = 88 + (13.397 * valorPeso) + (4.799 * valorAltura) - (5.677 * valorIdade);
    document.getElementById('resultado').textContent = "Resultado: " + valorResultado.toFixed(2);
    
}

document.getElementById('exibirResultado').addEventListener('click', fazerCalculo);
