const express = require('express')
const connection = require('../connection')
const router = express.Router()

router.post('/create', (req, res, next)=>{
 let words = req.body
 query = "insert into words (word) values(?)"
 connection.query(query, [words.word], (err,results)=>{
  if(!err){
   return res.status(200).json({message:"Word Added Successfully"})
  }else{
   return res.status(500).json(err)
  }
 })
})

// get random word
// query = "SELECT word FROM words ORDER BY rand() limit 1;"
router.get('/read', (req, res, next)=>{
 query = "SELECT word FROM words ORDER BY rand() limit 1;"
 connection.query(query, (err, results)=>{
  if(!err){
   console.log(results)
   return res.status(200).json(results)
   // res.send(results)
   // console.log(results)
  }else{
   return res.status(500).json(err)
  }
 })
})

module.exports = router
