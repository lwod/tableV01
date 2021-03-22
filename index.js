const express = require('express');
const app = express();
const port = 80;


app.get('/', async (req,res)=>{
	res.end('<h1>Home page</h1>');
})

app.get('/about', async (req,res)=>{
	res.end('<h1>About page</h1>');
})

app.listen(port, ()=>{
	console.log('Server started');
})
