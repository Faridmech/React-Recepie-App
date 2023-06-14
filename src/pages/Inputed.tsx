import { Button, Center, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Inputed: React.FC = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();


  const submithandler = (e) => {
    e.preventDefault();
    navigate("/search/" +input)
  
  };

  return (
    <Center >
      
      <Input
        
        placeholder="Search for ..."
        focusBorderColor="grey"
        w="50%"
        marginTop="1rem"
        border="1px solid white"
        bgColor="blue.100"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
     
      <Button 
      onClick={submithandler}
      marginTop="1rem"
      border="1px solid white"
      >Search </Button>
        
    </Center>
    
  );
};
