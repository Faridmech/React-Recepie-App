import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';


function Populars() {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getCategories()
    }, [])

    const getCategories = async ()=>{

        const check = localStorage.getItem("category");

        if(check){
            setCategories(JSON.parse(check))
        }
        else{
            const api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            const data = await api.json()
            localStorage.setItem('category', JSON.stringify(data.categories))
           
            setCategories(data.categories);

        }
        // console.log(data.categories)
    }
    



  return (
    <div>
    
            <Wrapper> 
                 <h3>Category</h3>
                 <Splide options={ {
                    
                        perMove : 1,
                        perPage : 4,
                        drag: "free",
                        pagination: false,
                        gap : "2rem",
                        arrrow: false,
                    } }>
                   {categories.map((category)=>{
                        return(
                            <SplideSlide key={category.idCategory}>
                                <Card>
                                
                                    <p>{category.strCategory}</p>
                                    <img src={category.strCategoryThumb}></img>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
    
    </div>
  )
}

const Wrapper = styled.div`
 marign: 4rem 0rem;
 padding-top: 30px;
 padding-left: 20px
 
 `

const Card = styled.div`
min-height: 15rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
    background: red;
    border-radius: 2rem;
    porsition: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: aqua;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-item: center;
}


`

export default Populars
