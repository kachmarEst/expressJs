import express from 'express';
import { fs } from 'fs';
var app=express();
const articles ={
    "react":{
        vote : 5
    },
"Sherlock":{
         vote : 6
     },
     "binbo":{
         vote : 0
     }
    }
app.use(express.json());
app.get('/api/articles/:name',function(req,res){
    const art=req.params.name;
    res.setHeader('Content-Type','text/plain');
    console.log(art)
    console.log(articles[art].vote)
    console.log(articles[art])

    res.status(200).json(articles[art].vote);
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