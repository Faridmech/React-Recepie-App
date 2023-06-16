import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { HomePage } from './pages/Homep';
import Cuisine from './pages/Cuisine';
import { Search } from 'pages/Search';
import { Details } from 'pages/Details';

export const AppRouter = () =>{
  return (
    <Routes>
          <Route  path='/' element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path='cuisine/:type'  element={<Cuisine />}/>
            <Route path='search/:searched'  element={<Search />}/>
            <Route path='details/:id'  element={<Details />}/>
          </Route>
    </Routes>
  )
}