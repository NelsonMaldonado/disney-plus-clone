const express = require('express')
const server = express()

server.get('/',(req,res)=>{
    res.send('hello maicky Im a server')
})

server.listen(9000,()=>{
console.log('****listening on port 9000***')
})
