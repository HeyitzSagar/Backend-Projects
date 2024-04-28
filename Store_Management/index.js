const express = require('express')
const connectDb = require('./Dbcon/db');
const app = express();
const port = 3000;

connectDb();

app.get('/', (req, res) => res.send('Welcome to the store management web api!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


