const express = require('express')
const app = express()
const port = 5000

app.get("/", function (req,res){
	res.send("some str");
})

app.listen(process.env.PORT || 5000)
