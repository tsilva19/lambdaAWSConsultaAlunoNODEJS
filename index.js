const mysql = require('mysql');

exports.handler = (event, context, callback) => {
  // Configurações de conexão com o banco de dados MySQL
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'database_name'
  });

  // Conexão com o banco de dados MySQL
  connection.connect();

  // Consulta SQL para buscar informações de alunos na tabela de alunos
  connection.query('SELECT * FROM alunos', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    // Fechar a conexão com o banco de dados MySQL
    connection.end();
    // Transformar os resultados em formato JSON
    const jsonResults = JSON.stringify(results);
    // Retornar os resultados da consulta em formato JSON com o status code 200
    const response = {
      statusCode: 200,
      body: jsonResults
    };
    callback(null, response);
  });
};
