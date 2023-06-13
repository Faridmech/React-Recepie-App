import {
  Box,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  VStack,
  grid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { cutWords } from "layout/cutWord";

function Cuisine() {
  const { type } = useParams();

  const [meals, setCuisine] = useState([]);

  const getCuisine = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`
    );
    const recipes = await data.json();
    setCuisine(recipes.meals);

    
  };

  useEffect(() => {
    getCuisine();
  }, [type]);

  return (
    <>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="1.5rem"
        fontWeight="extrabold"
        textAlign={["left", "center"]}
      >
        Category: {type.toLocaleUpperCase()}
      </Text>

      <Box
        m="0 auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid gridTemplateColumns="25%  25% 25% 25%" gap="1rem">
          {meals.map((meal) => {
            return (
              <>
                <Box>
                  <Text pl="20px" color="brown" fontWeight="500">
                    {cutWords(meal.strMeal)}{" "}
                  </Text>
                  <Image src={meal.strMealThumb} alt="" w="250px" h="200px" />
                </Box>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Cuisine;
