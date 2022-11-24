import axios from 'axios'
import { config } from 'dotenv'
import express from 'express'

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.post('/start', async (req, res) => {
    res('HELLO MY FRIEND!')
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})