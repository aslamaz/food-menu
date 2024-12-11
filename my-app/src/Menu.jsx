import React, { useEffect, useState } from 'react'
import Head from './Head'
import axios from 'axios';
import {BACKEND_URL} from './config'

const Menu = () => {
    const [showCategory,setShowCategory]=useState([]);
    const [showsubCategory,setShowSubCategory]=useState([]);

    const fetchCategory = () => {
        axios.get(`${BACKEND_URL}/Category`).then((response) => {
            // console.log(response.data);
            const data = response.data;
            setShowCategory(data)
        })
    }

    const fetchcategorywithSubcategory = (id) =>{
        axios.get(`${BACKEND_URL}/subCategory/${id}`).then((response) => {
            console.log(response.data);
            const data = response.data;
            
            
            setShowSubCategory(data)
            
        })
    }
    
    
    useEffect(() => {
        fetchCategory();
      }, [])
    return (
        <div className='menuDiv'>
                <Head />
           
            <div className="imageContainer">
                <h1>MENU</h1>
                <span className='content'>Please take a look at our featuring food, drinks and brunch. If you'd like to</span>
                <span className='content'>place an order, use the "Order Online" button located below the menu</span>

                <div className='menubtn' style={{ marginTop: "50px" }}>
                {showCategory.map((Categories, key) => (
                
                    <button class="button-66" style={{ marginRight: "20px" }} 
                    onClick={()=>fetchcategorywithSubcategory(Categories._id)}>{Categories.categoryName}</button>
              ))}
                    {/* <button class="button-66" style={{ marginRight: "20px" }}>DRINKS</button>
                    <button class="button-66" >BRUNCH</button> */}
                </div>

                <div className='menumainListDiv'>
                    <div className='menulistDiv'>
                    {showsubCategory.map((subCategories, key) => (
                        <div className='menuHeadName'>{subCategories.subCategoryHead}</div>
                    ))}
                        {showsubCategory.map((subCategories, key) => (
                            
                        <div className='listWrap'>
                            <div className='menulistName'><span>{subCategories.subCategoryName}</span>.....................$<span>{subCategories.price}</span></div>
                            <div className='menuDescription'>{subCategories.subCategoryDes}</div>
                        </div>
                        
                         ))}

                    
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Menu