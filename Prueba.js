const express = require('express');
const app = express()
const path= require('path')

app.listen(3000, ()=> console.log("exito"))

app.get("/home", function (req, res){
    
    let htmlPath = path.resolve(__dirname, "./")
    res.sendFile(htmlPath)
})
//esta es una opcion

app.get("/404", function (req, res){
    res.send("Error página no encontrada")
})
/*

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about-us.html"))
});

ESTA ES OTRA OPCION, MAS UTILIZADA, MAS SIMPLE
*/
//Stop code run es control option M


