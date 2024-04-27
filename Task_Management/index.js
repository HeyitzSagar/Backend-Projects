const express = require("express");
const app = express();
const port = 3000;
const task = require('./Routes/Tasks')
const connectDB = require('./DbCon/Db')


// middleware

app.use(express.json())

connectDB();
//routes
app.get("/hello", (req, res) => res.send("Hello World!"));

app.use('/api/v1/tasks', task );
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
