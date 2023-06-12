
import { GiChickenOven, GiMeat } from "react-icons/gi"
import { LuBeef } from "react-icons/lu"
import { Link } from "react-router-dom"

import { HStack, Icon, Text, VStack } from "@chakra-ui/react"
import React from "react"

export const Categories : React.FC = () => {
  return (
    <HStack w='100%'  justify='center' spacing='20px' borderRadius='5px'  p='10px' bg='blackAlpha.100' mt='15px'>
      <Link to="/cuisine/meat" >
        <VStack spacing='0'>
          <Icon as={GiMeat}  />
        
        <Text>Meat</Text>
        </VStack>
      </Link>
      <Link to="/cuisine/beef">
      <VStack spacing='0'>
      <Icon as={LuBeef}  />
        <Text>Beef</Text>
        </VStack>
      </Link >
      <Link to={"/cuisine/chicken"}>
      <VStack spacing='0'>
        <Icon as={GiChickenOven}  />
        <Text>Chicken</Text>
        </VStack>
      </Link>
    </HStack>
  )
}


