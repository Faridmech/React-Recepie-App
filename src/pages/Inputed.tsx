import { Center, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Inputed: React.FC = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate()


  const submithandler = (e) => {
    e.preventDefault();
    navigate("/search/" +input)
    console.log(e.target.value)
  };

  return (
    <Center>
      <Input
        onSubmit={submithandler}
        placeholder="Search for ..."
        focusBorderColor="grey"
        w="50%"
        marginTop="1rem"
        border="1px solid white"
        bgColor="blue.100"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </Center>
    
  );
};
