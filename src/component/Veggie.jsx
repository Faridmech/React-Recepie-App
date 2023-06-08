import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';


function Veggie() {

  function cutWord(a){
    if(a.length > 30){
     return  a.slice(0, 24) + "..."
    }
    else{
     return  a 
    }
    
  }


const [meals, setChicken] = useState([]);

    useEffect(()=>{
        getChicken()
    }, [])

    const getChicken = async ()=>{

                
            const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
            const data = await api.json()
            console.log(data)
            setChicken(data.meals);
           
    }
    




  return (
    <div>
    
            {<Wrapper> 

                 <h3>Chicken Meals</h3>
                <Splide options={ {
                    
                        perMove : 1,
                        perPage : 4,
                        drag: "free",
                        pagination: false,
                        gap : "2rem",
                        arrrows: false,
                    } }>
                   {meals.map((meal)=>{
                        return(
                            <SplideSlide >
                                <Card>
                                <p>{cutWord(meal.strMeal)}</p>
                                <img src={meal.strMealThumb}></img>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper> }
    
    </div>
  )
}

const Wrapper = styled.div`
 padding-top: 30px;
 padding-left: 20px
 
`

const Card = styled.div`
min-height: 10rem;

overflow: hidden;


img{
    
    border-radius: 2rem;
    
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

p{
   padding-left: 2rem;
   font-weight: 400;
    font-size: 1rem;
    overflow: hidden;
}


`
export default Veggie
