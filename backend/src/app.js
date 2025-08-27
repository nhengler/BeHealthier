const express = require('express');
const consign = require('consign');

const app = express(); // atribui o Express à variável app para podermos usar seus recursos 

// middleware que faz a API entender JSON
app.use(express.json());

consign()
  .include('/routes')       
  .then('/controllers')     
  .then('/models')          
  .then('/db')              
  .into(app);                 

module.exports = app; 