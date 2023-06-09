
import {LuBeef} from "react-icons/lu"
import {  GiChickenOven, GiMeat} from "react-icons/gi"
import {BsCloudLightningRainFill} from "react-icons/bs"
import styled from "styled-components"
import { NavLink } from "react-router-dom"


export const Categories = () => {
  return (
    <List>

      <NavLink to={"/cuisine/meat"}>
        <GiMeat/>
        <h4>Meat</h4>
      </NavLink>

      <NavLink to="/cuisine/beef">
        <LuBeef/>
        <h4>Beef</h4>
      </NavLink >
      
      <NavLink to={"/cuisine/chicken"}>
        <GiChickenOven/>
        <h4>Chicken</h4>
      </NavLink>
      
      <NavLink to={"/cuisine/ingridinet"}>
        <BsCloudLightningRainFill/>
        <h4>Ingridinet</h4>
      </NavLink>

      
    </List>
  )
}


const List = styled.div`
    display: flex;
    justify-content: center;
    marign: 2rem 0rem;
`
