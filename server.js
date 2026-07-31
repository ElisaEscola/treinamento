const express = require('express');
const app = express();
const porta = 8080;

app.use(express.json());

app.get('/temperatura/:celsius', (req, res) => {
    const temperatura = req.params.celsius();
    if(!isNaN === temperatura) {
        return res.status(400).json({
            erro: "Deve ser digitado algum número"
        })
    }
})







