const path = require('path')
const fs = require('fs')
const paths = path.join('/a','/b/c','../','./d','e')
console.log('paths :>> ', paths); //xs

const file = 'sb.html'

fs.readFile(path.join(__dirname,'/score.txt'), 'utf-8',(err,data)=>{
   console.log('__dirName :>> ', __dirname); //xs
   console.log('data :>> ', data); //xs
})


 const name = path.basename(file,'.html')
 const str = path.extname(file)
 console.log('name :>> ', name); //xs
 console.log('str :>> ', str); //xs

 fs.readFile('./path.js','utf-8',(err,data)=>{
   console.log('data :>> ', data); //xs
   resolveCSS(data)
 })

 
 function resolveCSS(htmlStr) {
    const r1  = [xxx正则].exec(htmlStr)
    fs.writeFile('./path.js',r1)
 }