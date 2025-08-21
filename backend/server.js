const bodyParser = require("body-parser");
const app = require('./src/app'); // importa o app já configurado

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// importar rotas 
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

