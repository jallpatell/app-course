const express = require("express")
const app = express()


app.get('/', function(req, res){
    res.send("app is listening")
})

app.post('/user/login', function(req, res){
    res.json({
        "message":"login endpoint"
    })
})
app.post('/user/signup', function(req, res){
    res.json({
        "message":"signup endpoint"
    })
})
app.get('/user/purchases', function(req, res){
    res.json({
        message:"purchases endpoint"
    })
})
app.get('/courses', function(req, res){
    res.json({
        "message":"view courses endpoint"
    })
})
app.post('/user/purchase', function(req, res){
    message:"login endpoint"
})


app.listen((3000), function(){
    console.log("server on")
})