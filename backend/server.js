// const express = require('express')//this is commonJS,first way of imporrting the file;this works synchronously

import express from 'express';//this is moduleJS,second way of importing the file;this works asynchronously
const app = express();

const port=process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('server is ready')
})

//get a list of 5 jokes, we are intrested in this thing here

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'this is another joke'
        },
        {
            id:3,
            title:'A third joke',
            content:'this is a third joke'
        },
        {
            id:4,
            title:'A fourth joke',
            content:'this is a fourth joke'
        },
        {
            id:5,
            title:'A fifth joke',
            content:'this is a fifth joke'
        }
    ];
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`Server is listening on port http://localhost:${port}`);
})