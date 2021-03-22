const express = require('express')
const app = express()
const port = 5000

app.get("/", function (res,req){
	res.send("some str");
})

app.listen(port)