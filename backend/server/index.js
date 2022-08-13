// const express = require('express')

// const app = express()

// const PORT = process.env.PORT || 5000

// app.get('/api',(req, res)=>{
//  res.json({message:"Hello from the server"})
// })

// app.listen(PORT, ()=>{
//  console.log(`Server listening on ${PORT}`
//  )
// })

const express = require('express')
const connection = require('./connection')
const wordRoute = require('./routes/words')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/words', wordRoute)

module.exports = app