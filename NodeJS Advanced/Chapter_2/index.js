const express = require('express');
const crypto = require('crypto');
const { Worker } = require('worker_threads');
const app = express();

app.get('/', (req, res) => {
    const worker = new Worker('./worker.js');
    worker.on('message', data => {
        console.log('Data: ' + data);
        res.send('Data: ' + data);
    })
})

app.get('/fast', (req, res) => {
    res.send('This was fast!');
})

app.listen(3000, () => 'Nice bro');

