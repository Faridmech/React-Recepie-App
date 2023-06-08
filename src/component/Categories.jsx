
import {LuBeef} from "react-icons/lu"
import {FaHamburger} from "react-icons/fa"
import {  GiChickenOven, GiChopsticks} from "react-icons/gi"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

function Categories() {
  return (
    <List>
      <NavLink to={"/cuisine"}>
        <LuBeef/>
        <h4>Beef</h4>
      </NavLink >
      <NavLink to={"/cuisine"}>
        <FaHamburger/>
        <h4>Hamburger</h4>
      </NavLink>
      <NavLink to={"/cuisine"}>
        <GiChickenOven/>
        <h4>Chicken</h4>
      </NavLink>
      <NavLink to={"/cuisine"}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </NavLink>
    </List>
  )
}


const List = styled.div`
    display: flex;
    justify-content: center;
    marign: 2rem 0rem;
`
export default Categories
