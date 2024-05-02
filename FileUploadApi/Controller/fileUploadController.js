const FileUpload = require("../Model/FileUploadSchema");

const UploadFile = async(req, res) => {
    try {
       const {filename, originalname, mimetype, size}= req.file;

       const fileupload = new FileUpload({
        filename,
        originalname, 
        mimetype, 
        size
       });
       await fileupload.save();
       res.status(200).send(`File Uploaded and Saved Succesfully !`);
    } catch (error) {
        res.status(500).send(`error : ${error.message}`);
    }
}


module.exports = UploadFile;