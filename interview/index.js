const express =  require('express')
const app = express();
const routes = require('./routes')

port = 100
app.use(routes)

app.listen(port,()=>{
    console.log('server started at port number'+port)
})

module.exports = app
