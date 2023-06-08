import Pages from './pages/Pages';
import './App.css';
import Categories from './component/Categories';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Ferid recepies blog</h1>
      <BrowserRouter>
          <Categories/>
          <Pages/>
      </BrowserRouter>
    </div>
  );
}



export default App;
