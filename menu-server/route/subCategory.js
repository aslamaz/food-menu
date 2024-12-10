const express = require('express')
const router = express.Router()
const subCategory = require('../model/subcategory')




router.post('/', async (req, res) => {
    try {
        const {subCategoryName,categoryId,subCategoryDes,price,subCategoryHead} = req.body
        console.log(req.body);
        
        let newsubCategory = new subCategory({
            subCategoryName,categoryId,subCategoryDes,price,subCategoryHead
        })
        await newsubCategory.save();
        res.json(newsubCategory);
       
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error not get values");
    }
});

router.get("/:id", async (req, res) => {
    try {
        const Id = req.params.id
        const getsubCategory = await subCategory.find({categoryId : Id });
        res.json(getsubCategory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

module.exports = router