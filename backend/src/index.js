const express = require('express')
const cors = require('cors')    
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json()) //capta o JSON do browser e trás como JS
app.use(routes)




app.listen(3333)
