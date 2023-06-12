import { GiChickenOven, GiMeat } from "react-icons/gi";
import { TNavs } from "./models";
import { LuBeef } from "react-icons/lu";
import {AiOutlineHome} from "react-icons/ai"
export const NAVS : TNavs = [
  {to:'/',icon:AiOutlineHome, name:'Home'},
  {to:'/cuisine/meat',icon:GiMeat, name:'Meat'},
  {to:'/cuisine/beef',icon:LuBeef, name:'Beef'},
  {to:'/cuisine/chicken',icon:GiChickenOven, name:'Chicken'},
]

