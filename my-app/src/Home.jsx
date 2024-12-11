import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BACKEND_URL} from './config'

const Home = () => {
    const [category, setCategory] = useState("");
    const [subHead, setSubHead] = useState("")
    const [showCategory, setShowCategory] = useState([])
    const [subCategory, setSubCategory] = useState("");
    const [subCategoryDesc, setSubCategoryDesc] = useState("");
    const [price, setprice] = useState("");

    const insertCategoryData = () => {
        const data = {
            categoryName: category,
           
        }



        axios.post(`${BACKEND_URL}/Category`, data).then((response) => {
            console.log(response.data);
            setCategory("");
            fetchCategory();
        })
    }

    const fetchCategory = () => {
        axios.get(`${BACKEND_URL}/Category`).then((response) => {
            // console.log(response.data);
            const data = response.data;
            setShowCategory(data)
        })
    }

    const insertSubCategoryData = () => {
        const data = {
            subCategoryName: subCategory,
            categoryId: category,
            subCategoryDes:subCategoryDesc,
            price:price,
            subCategoryHead:subHead
        }



        axios.post(`${BACKEND_URL}/subCategory`, data).then((response) => {
            console.log(response.data);
            setSubCategory("");
            setSubCategoryDesc("");
            setprice("");
           

        })
        console.log(data);
    }
    useEffect(() => {
        fetchCategory();
      }, [])
    return (
        <div className='mainContainer'>
            <div class="container">
                <h1 className='homeh1'>ADD FOOD PRODUCTS</h1>

                <label for="userInput">Enter category:</label>
                <input type="text" id="userInput" placeholder="Type here..." onChange={(event) => setCategory(event.target.value)} />
                <button type="submit" className='homebutton' onClick={insertCategoryData}>Submit</button>


                <div className='divdrpdwn'>
                    <label >Choose category:</label>
                    <select name="SubCategory" id="selectCategory" onChange={(event) => setCategory(event.target.value)} >
                        <option value="">Select...</option>
                        {showCategory.map((Categories, key) => (
                            <option value={Categories._id}>{Categories.categoryName}</option>
                        ))}
                    </select>
                    <div >

                    </div>

                </div>
                <label for="userInput">Enter Subcategory head:</label>
                <input type="text" id="userInput" placeholder="Type here..." onChange={(event) => setSubHead(event.target.value)} />
                <label for="userInput">Enter Subcategory:</label>
                <input type="text"  placeholder="Type here..." onChange={(event) => setSubCategory(event.target.value)} />
                <label for="userInput">Enter SubcategoryDescription:</label>
                <input type="text"  placeholder="Type here..." onChange={(event) => setSubCategoryDesc(event.target.value)} />
                <label for="userInput">Enter price:</label>
                <input type="text"  placeholder="Type here..." onChange={(event) => setprice(event.target.value)} />
                <button type="submit" className='homebutton' onClick={insertSubCategoryData}>Submit</button>

            </div>
        </div>
    )
}

export default Home