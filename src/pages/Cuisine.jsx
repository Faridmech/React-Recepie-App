import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'



function Cuisine() {

    let [searchParams, setSearchParams] = useSearchParams();

   const [meals, setCuisine] = useState([])

    

    const getCuisine = async(name)=>{
      
     
        const data  = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParams().get(name)}`)
        const recipes = await data.json();
        setCuisine(recipes.meals);
        
        console.log(recipes.meals);
    }

    useEffect(()=>{
       //getCuisine("meat")
       console.log(searchParams)
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default Cuisine
