//TESTE DE CONEXÃO
module.exports = (app) => {
    app.get('/healthcheck', (req, res) => {
        res.status(200).json({ status: 'API funcionando!' });
    });
  };

/* Aqui o que estamos fazendo é exportar uma função que recebe o app como parâmetro:
    - Quando o consign carrega essa rota, ele vai chamar essa função, passando o app (que veio do app.js).
    - Dentro dessa função, registramos a rota específica (/healthcheck) no app.*/ 