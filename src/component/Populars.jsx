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
        const api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        const data = await api.json()
        console.log(data.categories)
        setCategories(data.categories);
    }
    
  return (
    <div>
    
            <Wrapper> 
                 <h3>Category</h3>
                 <Splide options={ {
                        rewind: true,
                        perMove : 1,
                        perPage : 4,
                    } }>
                   {categories.map((category)=>{
                        return(
                            <SplideSlide>
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
 marign: 4rem 0rem
`

const Card = styled.div`
min-height: 20rem;
border-radius: 2rem;
overflow: hidden;

img{
    background: red;
    border-radius: 2rem;
}

`

export default Populars
