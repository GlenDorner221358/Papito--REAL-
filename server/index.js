const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const multer = require('multer')
const { log } = require('console');
const { error } = require('console')
const path = require('path')
const productsRoute = require('./routes/products')
const userRoute = require('./routes/user')
const ordersRoute = require('./routes/orders')
require('dotenv/config')

const app = express();

//Used with React!
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
        cb(null, 'public/assets')
    },
    filename: (req, file, cb ) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload =multer({
    storage: storage
})

app.use(productsRoute)
app.use(userRoute)
app.use(ordersRoute)

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'DV200' //Collection Name
}).then(() => {
    console.log("Connected to the DB")
})
.catch((err) => {
    console.log("No Connection. Error: " + err);
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log('Server started on port', PORT)})
