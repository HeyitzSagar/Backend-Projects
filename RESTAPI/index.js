const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));


app.use(express.json());


//  API ROOT, base URL, 

// GET  // Products // read
app.get('/products', (req, res) => {
    res.send(`Here is the products endpoints`);
});


//  get a single element 

app.get('/products/:id', (req, res) => {
    // console.log(req.params)
    const id = req.params.id;
    res.send(`Element found with id : ${id}`);
});

// create a api i.e add a product

app.post('/products', (req, res) => {
    console.log(req.body);
   const {name } = req.body;
   res.send(name);
})

app.put('/products/update/:id', (req, res) => {
    const id  = req.params.id;
    res.send(id + 2);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))