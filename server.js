const express = require('express');
const routes = require('./routes');
const cors = require('cors');


require('./database/index')
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json());
app.use(routes);

app.listen(3333, () =>{
    console.log('Servidor rodando na porta 3333');
    
})