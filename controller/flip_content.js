const SwitchButton = document.getElementById("switch-button");

const LoginContent = document.getElementById("card-login");
const RegisterContent = document.getElementById("card-register");

function flipCard(){
    if(LoginContent.classList.contains("conteudo-atual-flip")){
        // esconde o conteúdo atual
        LoginContent.classList.remove("conteudo-atual-flip");
        LoginContent.classList.add("conteudo-oculto-flip");

        // mostra o próximo conteúdo
        RegisterContent.classList.remove("conteudo-oculto-flip");
        RegisterContent.classList.add("conteudo-atual-flip");
    } else {
        // volta para o conteúdo inicial
        RegisterContent.classList.remove("conteudo-atual-flip");
        RegisterContent.classList.add("conteudo-oculto-flip");

        LoginContent.classList.remove("conteudo-oculto-flip");
        LoginContent.classList.add("conteudo-atual-flip");
    }
}

SwitchButton.addEventListener("click", flipCard);

