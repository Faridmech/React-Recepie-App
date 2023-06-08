import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'



function Cuisine() {
   const [cuisine, setCuisine] = useState([])

    const getCuisine = async(name)=>{
        const data  = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        const recipes = await data.json();
        setCuisine(recipes.results)
    }

    useEffect(()=>{
        getCuisine()
    })

  return (
    <div>
      
    </div>
  )
}

export default Cuisine
