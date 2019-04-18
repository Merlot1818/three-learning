const express = require('express');
const app = express();
app.use(express.static('./'), (req, res) => {
    res.send('connected server!');
});
app.listen('8083', (req,res) => {
    console.log('connect to http://127.0.0.1:8083');
});