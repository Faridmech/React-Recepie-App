
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type TDetails = { strMeal: string, strMealThumb: string, strCategory: string,strInstructions:string,strIngredient1:string,strIngredient2:string,strIngredient3:string,strIngredient4:string,strIngredient5:string,strIngredient6:string }
export const Details : React.FC = () =>{

  const {id} = useParams();
  const [details, setDetails] = useState<TDetails | null>(null);

  const fetchDetails = async ()=>{
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const detailsData = (await data.json()) as { meals: TDetails[]}
      setDetails(detailsData.meals[0]);
      console.log("detail", detailsData)

  }
  
  useEffect(()=>{
    fetchDetails();
  }, [id])

  return (
    
      <h2>{details?.strMeal}</h2>
  )
}