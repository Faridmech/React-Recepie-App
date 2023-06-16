import {  Center, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Inputed: React.FC = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  return (
    <Center display="flex">
      <form onSubmit={submithandler}>
        <Input
          placeholder="Search for ..."
          focusBorderColor="grey"
          w="100%"
          marginTop="1rem"
          border="1px solid white"
          bgColor="blue.100"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

       
      </form>
    </Center>
  );
};
