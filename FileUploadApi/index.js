const express = require('express')
const connectDB = require('./Dbcon/Db');
const multer = require('multer');
const fileUploadController = require('./Controller/fileUploadController');
const app = express()
const port = 3000;



// connectDB();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb)
    {
        cb(null, file.originalname)
    }
});

const upload = multer({storage : storage});

app.post('/upload', upload.single('file'), fileUploadController);
app.get('/', (req, res) => res.send('Welcome to fileupload api'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

