const fs = require('fs')

fs.readFile('./score.txt', 'utf-8', (err, data) => {
   if (err) {
      return console.log('失败')
   }
   const score = data.split(' ')
   const arr = []
   score.forEach(item => {
      arr.push(item.replace('==', ':'))
   })
   const newArr = arr.join('\r\n')
   fs.writeFile('./newScore.txt', newArr, (err, data) => {
      console.log('err :>> ', err); //xs
   })
})


fs.readFile(__dirname + '/score.txt', 'utf-8', (err, data) => {
   console.log('__dirName :>> ', __dirname); //xs
   console.log('data :>> ', data); //xs
})