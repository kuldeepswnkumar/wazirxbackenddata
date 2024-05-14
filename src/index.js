import dotenv from 'dotenv'
import express from 'express'
import mongodbconnection from '../db.connection.js'
import cors from 'cors'
import { StoreData, WazirXRecord } from '../controllers/data.controllers.js'



dotenv.config('./.env')

const app = express()

mongodbconnection()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server running on  Post ${process.env.PORT}`);
        })
    }).catch((error) => {
        console.log(error);
    })

app.use(cors({
    origin: "*",
    credentials: true
}))


app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))



app.use('/wazirx', StoreData)
app.use('/WazirXRecord', WazirXRecord)

// app.use('/wazirx/get', CreateData)


export { app }