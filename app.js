//Cargamos el módulo de Express a node.js
const express=require('express')
//creamos una instancia de Express
const app=express()
//Hacemos que todo lo que esté en nuestra carpeta 
//public esté disponible para nuestro server
app.use(express.static('public'))

//Creamos una ruta para manejarla con Express
app.get('/h',(req,res,next)=>{
    res.sendFile(`${__dirname}/views/home.html`)
})
app.get('/b',(req,res,next)=>{
    res.sendFile(`${__dirname}/views/bio.html`)
})
app.get('/f',(req,res,next)=>{
    res.sendFile(`${__dirname}/views/fun.html`)
})
app.get('/d',(req,res,next)=>{
    res.sendFile(`${__dirname}/views/dates.html`)
})
//Configuramos el server en el puerto 3000
app.listen(3000,()=>{
    console.log('server up and running')
})