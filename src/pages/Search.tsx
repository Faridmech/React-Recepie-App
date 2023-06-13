import {useParams} from "react-router-dom"
import React, { useEffect, useState } from "react";

export const Search: React.FC = () =>{
  const { searched } = useParams();
  const [meals, setSearch] = useState([]);


  const getSearch = async () => {

    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`
    );
    const recipes = await data.json();
    setSearch(recipes.meals);

    console.log(recipes.meals);
  };
  useEffect(()=>{
    getSearch();
  },[searched])



  return (
    <div>
      {meals}
    </div>
  )
}