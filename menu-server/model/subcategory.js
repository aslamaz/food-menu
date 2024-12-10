const mongoose = require('mongoose');


const collectionSubCategory = new mongoose.Schema({
    subCategoryName: {
        type: String,
        required: true, 
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "tblCategory",
        required: true, 
    },
    subCategoryDes:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    subCategoryHead:{
        type: String,
        required: false,
    },
});

// Export the model
const modelSubCategory = mongoose.model("tblSubCategory", collectionSubCategory);
module.exports = modelSubCategory;