import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Wrap, WrapItem } from '@chakra-ui/react'


function Cuisine() {

  const  {type} = useParams()

   const [meals, setCuisine] = useState([])

    

    const getCuisine = async ()=>{
      
     
        const data  = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`)
        const recipes = await data.json();
        setCuisine(recipes.meals);
        
        console.log(recipes.meals);
    }

    useEffect(()=>{
       
      getCuisine()
       
    }, [type])



  return (
    <>
    
                 <Text 
                      bgGradient="linear(to-l, #7928CA, #FF0080)"
                      bgClip="text"
                      fontSize="1.5rem"
                      fontWeight="extrabold"
                      textAlign={[ 'left', 'center' ]}>
                   Category: {type.toLocaleUpperCase()}
                  </Text>
                 
                   {meals.map((meal)=>{
                        return(
                            
                                <>
                                
                                    <p>{meal.strMeal}</p>
                                    <img src={meal.strMealThumb} alt="" />
                                    
                                </>
                            
                        )
                    })}
                
           
    
      
    </>
  )
}

export default Cuisine
