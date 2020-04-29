const express = require('express');
const sub = require('./SubtractionOnTheGo/sub.controller');
const app = express()
app.listen(3000, ()=>{
    console.log('server started')
});
app.get('/getSub', sub)
module.exports = app;