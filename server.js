const express = require('express')
const app = express()
const cors = require('cors')

app.listen("3000", (req,res) => {
    console.log("LISTENING ON PORT 3000")
})