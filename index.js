const express = require('express')
const app = express()
const port = 5000

app.use(express.json({extended:true}));

app.get("/", function (req,res){
	res.send("some str");
})


app.get("/test", async (req,res)=>{
	res.sendFile(`${__dirname}/index.html`)
})

app.post("\test", async (req,res)=>{

	let var1 = req.body.var1;
	let var2 = req.body.var2;
	
	console.log(`var1: ${var1} and var2: ${var2}`);
});

app.listen(process.env.PORT || 5000, ()=>{
	console.log(`\tstratet on port: ${port}`)
})
