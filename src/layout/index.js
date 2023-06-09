import { Outlet } from "react-router-dom"
import { Categories } from "../component/Categories"

export const Layout = () =>{
  return (
    <div className="App">
     <h1>Ferid recepies blog</h1>
     <Categories />
     <Outlet />
    </div>
  )
}