const express = require('express');
const app = express();
const port = 3000;


app.use(express.json); // middleware to parse the all request into json format

app.get('/', (req, res) => {
    res.send(`Server is ready to go !`)
});

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})