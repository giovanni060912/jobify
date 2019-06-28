const express = require('express')
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.get ('/', (Request, responce) => {
    responce.render('home')
})
app.get ('/', (Request, responce) => {
    responce.render('vaga')
})
app.listen(3000, (err)=> {
 if(err){
     console.log("Nao Foi Fossivel Iniciar o Servidor do Jobify")
 }else{
     console.log("Servidor do Jobify rodando...")
 }    
})