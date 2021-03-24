const express = require('express')
const app = express()
const port = 5000

const cors = require('cors')
app.use(cors())


const coordArr = [
	{lat:0,lng:0},
]

app.use(express.json({extended:true}));

app.get("/", function (req,res){
	res.send("some str");
})


app.get("/test", async (req,res)=>{
	res.sendFile(`${__dirname}/index.html`)
})

app.post("/test", async (req,res)=>{

	let lat = req.body.lat;
	let lng = req.body.lng;
	
// 	console.log(`var1: ${var1} and var2: ${var2}`);
	coordArr[0].lat = lat;
	coordArr[0].lng = lng;
	
	console.log(coordArr[0]);

		        let status = {lat : lat, lng : lng}

        status.lat = lat;
        status.lng = lng;
        status.response = 'update';

        res.json(status);

});

app.post("/testcor", async (req,res)=>{
	res.json(coordArr[0]);	
})

app.listen(process.env.PORT || 5000, ()=>{
	console.log(`\tstratet on port: ${port}`)
})
