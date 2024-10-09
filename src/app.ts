import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const port = process.env.PORT || 1415


app.use(express.json())

app.use('/user', ()=>{})
app.use('/todo', ()=>{})


app.listen(port, () => console.log(`server is running on port ${port}, come to visit at http://localhost:${port}`))