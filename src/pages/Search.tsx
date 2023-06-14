import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Box,
  
  Grid,
  Image,
  
  Text
  
  
} from "@chakra-ui/react";
import { cutWords } from "layout/cutWord";
export const Search: React.FC = () => {
  const { searched } = useParams();
  const [search, setSearch] = useState<{ strMeal: string, strMealThumb: string }[]>([]);

  const getSearch = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`
    );
    const recipes = (await data.json()) as { meals: { strMeal: string, strMealThumb: string }[] };
    setSearch(recipes.meals);

    console.log(recipes.meals);
  };
  useEffect(() => {
    getSearch();
  }, [searched]);



  return (
    <>
    <Box
    
     m="0 auto"
     display="flex"
     alignItems="center"
     justifyContent="center"
     >

   <Grid gridTemplateColumns="25%  25% 25% 25%" gap="1rem">
    
      {search.map((meal) => {

        return(
           <Box marginTop="2rem">
          <Text pl="20px" color="brown" fontWeight="500">{cutWords(meal.strMeal)}{" "}</Text>
          <Image src={meal.strMealThumb} alt="" w="250px" h="200px" />
          </Box>
        )
       
          
       
        
      })}
      </Grid >
      </Box>
    </>
  );
};
