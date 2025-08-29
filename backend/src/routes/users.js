/*const express = require("express");
const router = express.Router();

// rota de cadastro
router.post("/register", (req, res) => {
    const { firstname, lastname, email, password, confirmPassword } = req.body;

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "As senhas não coincidem" });
    }

    // simulação de cadastro bem-sucedido (sem banco de dados)
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
});

// rota de login
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }

    // simulação de login bem-sucedido (sem banco de dados)
    res.status(200).json({ message: "Login realizado com sucesso!" });
});

module.exports = router;*/
