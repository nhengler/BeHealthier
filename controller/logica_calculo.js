function fazerCalculo(){
    let valorPeso = parseFloat (document.getElementById('peso').value);
    let valorAltura = parseFloat (document.getElementById('altura').value);
    let valorIdade = parseFloat (document.getElementById('idade').value);
    let campoResultado = document.getElementById('resultado');

    // verifica se os valores são números válidos
    if (isNaN(valorPeso) || isNaN(valorAltura) || isNaN(valorIdade)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let valorResultado = 88 + (13.397 * valorPeso) + (4.799 * valorAltura) - (5.677 * valorIdade);
    campoResultado.style.maxHeight = "500px"; 
    campoResultado.style.opacity = "1"; 
    campoResultado.style.paddingBottom = "3rem"; 
    document.getElementById('resultado').innerHTML = "<h2>Resultado:<h2>" + valorResultado.toFixed(2) + "<br>";
    document.getElementById('resultado').innerHTML += "Com base nos seus resultados, fizemos um cardápio especial para você. Clique no botão abaixo para visualizar.";
    
    let botaoSugestao = document.createElement('button'); // cria o botão de sugestão no HTML
    botaoSugestao.textContent = "Visualizar cardápio";
    botaoSugestao.id = "exibirCardapio"; // id para editar no css
    
    resultado.appendChild(botaoSugestao); // método que adiciona "botaoSugestao" na div "resultado" 
    
    botaoSugestao.addEventListener('click', function(){
        if(valorResultado <= 2000){
            window.open("view/cardapios/cardapio1.html"); 
        
        }   else if (valorResultado > 2000 && valorResultado <= 2100){
            window.open("view/cardapios/cardapio2.html"); 
        }
        
            else if (valorResultado > 2000 && valorResultado <= 2200){
            window.open("view/cardapios/cardapio3.html"); 
        }

            else if (valorResultado > 2000 && valorResultado <= 2300){
            window.open("view/cardapios/cardapio4.html"); 
        }

            else if (valorResultado > 2000 && valorResultado <= 2400){
            window.open("view/cardapios/cardapio5.html"); 
        }

            else if (valorResultado > 2000 && valorResultado <= 2500){
            window.open("view/cardapios/cardapio6.html"); 
        }
            
        });
    }    
    
document.getElementById('exibirResultado').addEventListener('click', fazerCalculo);
