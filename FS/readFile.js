const fs = require('fs')

fs.readFile('./text.txt','utf-8',(err,data)=>{
   console.log('err :>> ', err); //xs
   console.log('data :>> ', data); //xs
})

fs.writeFile('./text.txt','111abcdsadsa',(err,data)=>{
   console.log('err :>> ', err); //xs
})