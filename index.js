const express = require('express');
const app = express();
const port = 5522;

app.get('/test', async (req,res)=>{
	
	res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, ()=>{
	console.log('port')
})