import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



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
       //getCuisine("meat")
       console.log(getCuisine())
    }, [type])



  return (
    <div>
      salam
    </div>
  )
}

export default Cuisine
