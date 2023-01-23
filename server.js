const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require("./routes/api/items");

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// import mongoDB keys friom config.
const db = require('./config/keys').mongoURI;

// connect to MongoDB.
mongoose.connect(db).then(() => {
    console.log("MongoDB Connection Established.");
}).catch((err) => {
    console.log(err);
});

// Using Routes.
app.use('/api/items', items)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at -> `, PORT);
});

