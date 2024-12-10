const mongoose = require('mongoose');


const colletionCategoryShema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    
    
})


//Export the model
const modelCategory = mongoose.model("tblCategory", colletionCategoryShema);
module.exports = modelCategory;