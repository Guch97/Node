
const app = require('./src/app')
const { APP_PORT } = require('./src/config/default')



app.listen(APP_PORT, () => {
   console.log(' 服务启动:>>', APP_PORT); //xs
})