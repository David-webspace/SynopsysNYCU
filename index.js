import express from 'express';
const PORT = 8080;

const app = express();

app.get('/tshirt', (req, res) => {
     res.status(200).send({
        tshirt: 'No shirt',
        size: 'large'
     })
})