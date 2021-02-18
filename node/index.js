const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: ' root',
    database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);


const sql = `INSERT INTO people(name) VALUES('Deco Oliveira')`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    res.send("<h2>Deco Oliveira!</h2>");
});

app.listen(port,()=>{
    console.log("running on port "+ port);
});

