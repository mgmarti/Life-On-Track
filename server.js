const express = require('express');
// const connectDB = require('./config/db');
// const path = require('path');

//Initialize express
const app = express();

//Test Route
app.get('/', (req, res) => res.send('Hello world!'));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));