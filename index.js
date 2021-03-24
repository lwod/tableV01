const express = require('express')
const app = express()
const port = 5000

app.use(express.json({extended:true));

app.get("/", function (req,res){
	res.send("some str");
})


app.get("/test", async (req,res)=>{
	res.sendFile(`${__dirname}/index.html`)
})

app.listen(process.env.PORT || 5000, ()=>{
	console.log(`\tstratet on port: ${port}`)
})
