const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const conteudoCalculadora = document.getElementById("conteudo-da-calculadora");
const conteudoCardapio = document.getElementById("conteudo-do-cardapio");

function trocarConteudo() {
    // verifica qual conteúdo está visível atualmente
    if (conteudoCalculadora.classList.contains("conteudo-atual")) {
        // esconde o conteúdo atual
        conteudoCalculadora.classList.remove("conteudo-atual");
        conteudoCalculadora.classList.add("conteudo-oculto");

        // mostra o próximo conteúdo
        conteudoCardapio.classList.remove("conteudo-oculto");
        conteudoCardapio.classList.add("conteudo-atual");
    } else {
        // volta para o conteúdo inicial
        conteudoCardapio.classList.remove("conteudo-atual");
        conteudoCardapio.classList.add("conteudo-oculto");

        conteudoCalculadora.classList.remove("conteudo-oculto");
        conteudoCalculadora.classList.add("conteudo-atual");
    }
}

prevBtn.addEventListener("click", trocarConteudo);
nextBtn.addEventListener("click", trocarConteudo);


