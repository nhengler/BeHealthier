const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',      // ou IP do servidor MySQL
  user: 'root',    
  password: 'vssasuke',  
  database: 'login_system' // nome do banco
});

// exporta o pool com promises (para usar async/await)
module.exports = pool.promise(); 
