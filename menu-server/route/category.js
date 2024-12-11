const express = require('express')
const router = express.Router()
const Category = require('../model/category');
const { error } = require('console');





router.post('/', async (req, res) => {
    try {
        const {categoryName} = req.body
       
        
        let newCategory = new Category({
            categoryName
        })
        await newCategory.save();
        res.json(newCategory);
    } catch (err) {
        console.error(error.message);
        res.status(500).send("server Error not get values");
    }
});

router.get("/", async (req, res) => {
    try {
        const getCategory = await Category.find();
        res.json(getCategory);   
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

module.exports = router