import express from 'express';
import { MongoClient } from 'mongodb';
var app=express();

app.use(express.json());
app.get('/api/articles/:name/up',async function(req,res){
    const art=req.params.name;
    res.setHeader('Content-Type','text/plain');
    res.status(200).send(articles[art].vote);
})
app.get('/api/articles',function(req,res){
    res.setHeader('Content-Type','text/json');
    res.status(200).json(articles);
})
app.listen(5600,()=> console.log("j'écoute bien monsieur x)"));


 /*
 npm init
 npm install express nodemon
 npm install @babel/node @babel/core @babel/preset-env
"start": "npx nodemon --exec npx  babel-node ./server"
 */