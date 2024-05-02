const mongoose = require("mongoose");

const fileuploadSchema = new mongoose.Schema({
  __filename: {
    type: String,
    required: true,
  },
  originalname: String,
  mimetype: String,
  size: Number,
  uploadDate: { type: Date, default: Date.now },
});



const FileUpload = mongoose.model('FileUpload', fileuploadSchema);



module.exports = FileUpload; // export the model


