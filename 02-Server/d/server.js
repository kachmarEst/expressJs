import express from 'express';
var app=express();
app.get('/',function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.send('Accueil');
})
app.get('/about',function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.send('about me');
})
app.listen(3000);
