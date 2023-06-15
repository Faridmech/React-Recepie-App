import React from "react"
import { useParams } from "react-router-dom"

export const Details : React.FC = () =>{

  const {detailed} = useParams();


  return (
      <h2>Ferid {detailed}</h2>
  )
}