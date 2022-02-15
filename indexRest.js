'use strict';

const http = require('http');
const path = require('path');
const cors = require('cors');

const express = require('express');
//const { recomposeColor } = require('@material-ui/core');
const app = express();

// const {host,port} = require('./configRest.json');
const { host, port } = require(path.join(__dirname,'configRest.json'));

const Datastorage = require(path.join(__dirname,'storage','dataStorageLayer.js'));

const storage = new Datastorage();

const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get('/api/computers/', (req,res)=>
    storage.getAll()
        .then(result=>res.json(result))
        .catch(err=>res.json(err))
);

app.get('/api/computers/:id', (req,res)=>
    storage.get(req.params.id)
        .then(result=>res.json(result))
        .catch(err=>res.json(err))
);

app.delete('/api/computers/:id', (req, res) =>
    storage.remove(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
);

app.post('/api/computers',(req,res)=>{
    const computer = req.body;
    storage.insert(computer)
    .then(status=>tes.json(status))
    .catch(err=>recomposeColor.json(err));
});

app.put('/api/computers/:id',(req,res)=>{
    const computer = req.body;
    const id= req.params.id;
    storage.update(id,computer)
    .then(status=>res.json(status))
    .catch(err=>res.json(err));
});

app.all('*', (req,res)=>res.json('not supported'));

server.listen(port,host, ()=>console.log(`Server ${host}:${port} available`));