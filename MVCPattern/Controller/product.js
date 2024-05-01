//  suppose here i have imported the modelschema of the mongodb;


// this is for the post method for createproduct
const createProduct = (req, res) => {
    console.log(req.body);
    const {variables} = req.body;   // so here i am assuming that something will come from the body
    res.send(`Created the products that you have posted from the client side`);
};

//  get All products  // for get endpoints
const fetProduct = (req, res) => {
    res.send(`Sending the all products`);
}

// get a single product

 const fetchsingleProduct = (req, res) => {
    const req = req.params.id;
    res.send(req);
 }

//   update a product  // either we can use the put method or the patch method

const updateProduct = (req, res ) => {
    const product = Items.find(req.params.id);
    const updateProduct = [...product, req.body];
    res.send(updateProduct);
}

const updateProduct1 = (req, res) => {
    const productId = req.params.id;
    const updatedProductInfo = req.body;
    
    const index = Items.findIndex(product => product.id === productId);
    
    if (index === -1) {
        return res.status(404).send("Product not found");
    }
    Items[index] = { ...Items[index], ...updatedProductInfo };
    
    res.send(Items[index]);
}

module.exports = {
updateProduct
};
