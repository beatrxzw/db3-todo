const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();  

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json());

//rotas gerais
app.use( routes)

require('./database/index')

app.listen(3333, () =>{
    console.log('Servidor rodando na porta 3333');
    
})