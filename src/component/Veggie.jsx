import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { cutWords } from "layout/cutWord";
import "@splidejs/react-splide/css";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";



function Veggie() {
  const [meals, setChicken] = useState([]);

  useEffect(() => {
    getChicken();
  }, []);

  const getChicken = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    );
    const data = await api.json();
    
    setChicken(data.meals);
  };

  return (
    <Box width="90%" margin="0 auto">
      {
        <Wrapper>
          <h3>Chicken Meals</h3>
          <Splide
            options={{
              perMove: 1,
              perPage: 4,
              drag: "free",
              pagination: false,
              gap: "2rem",
              arrrows: false,
            }}
          >
            {meals.map((meal) => {
              return (
                <SplideSlide key={meal.idMeal}>
                  <Card >
                    <Link to={"/details/"+ meal.idMeal}>
                    <p>{cutWords(meal.strMeal)}</p>
                    <img src={meal.strMealThumb}></img>
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      }
    </Box>
  );
}

const Wrapper = styled.div`
  padding-top: 30px;
`;

const Card = styled.div`
  min-height: 10rem;

  overflow: hidden;

  img {
    border-radius: 2rem;

    left: 0;
    width: 80%;
    height: 100%;
    object-fit: cover;
  }

  p {
    padding-left: 2rem;
    font-weight: 400;
    font-size: 1rem;
    overflow: hidden;
  }
`;
export default Veggie;
