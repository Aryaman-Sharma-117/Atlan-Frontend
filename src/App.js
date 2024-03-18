import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Explore from './components/Explore';
import PageNotFound from './components/PageNotFound';
import NavBar from './components/Navbar';
import Details from './components/Details';
import Favourites from './components/Favourites';
import { useState } from 'react';
import favContext from './components/FavContext';
import TryModel from './components/TryModel';

function App() {

  const [favs,setFav]=useState([])  
  
  // Measure Page Load Time 
  /*
  const navigationStart = performance.timing.navigationStart;
  const loadEventEnd = performance.timing.loadEventEnd;
  const pageLoadTime = loadEventEnd - navigationStart;
  console.log("Page load time:", pageLoadTime, "ms");
  */

  return (
    <div className='App'>
      <BrowserRouter>
      <favContext.Provider value={{
        fav:favs,
        setFav:setFav
      }}>
        <nav>
          <NavBar/>
        </nav>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/explore'>
            <Route index={true} element={<Explore />}/>
            <Route path='/explore/:name' element={<Details/>}/>
            <Route path='/explore/favourites' element={<Favourites />}/>
          </Route>
          <Route path='/try' element={<TryModel/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </favContext.Provider>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
