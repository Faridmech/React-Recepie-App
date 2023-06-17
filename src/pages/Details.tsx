import { Box, Center, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image } from "@chakra-ui/react";
type TDetails = {
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
};
export const Details: React.FC = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<TDetails | null>(null);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const detailsData = (await data.json()) as { meals: TDetails[] };
    setDetails(detailsData.meals[0]);
    console.log("detail", detailsData);
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  return (
    <Center>
      <Box marginTop="1rem">
        <Center>
          <Box
            paddingBottom="1rem"
            bg="brown"
            width="550px"
            alignItems="center"
            borderRadius="0.5rem"
            marginBottom="1rem"
          >
            <Center paddingTop="1rem">
              <h2>{details?.strMeal}</h2>
            </Center>
          </Box>
        </Center>
        <Box display="grid" gridTemplateColumns="50% 50%" width="1000PX">
          <Box>
            <Image src={details?.strMealThumb} alt="" w="500px" h="450px" />
          </Box>
          <Box >
            <Box display="flex" flexDirection="row" gap="2rem" marginLeft='3rem'>
              <Box>
                <Text fontSize='2rem' border='2px solid black' width='11rem' textAlign='center'>Instruction</Text>
              </Box>
              <Box>
                <Text fontSize='2rem' border='2px solid black' width='11rem' textAlign='center'>Ingridient</Text>
              </Box>
            </Box>
            <Box paddingLeft="0.5rem">
              <p>{details?.strInstructions}</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};
