import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Layouts/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Plants from './Components/Plants';
import Methods from './Components/Methods';
import Admin from './Components/Admin';
import DataEntry from './Components/DataEntry';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Plants' element={<Plants/>}/>
        <Route path='/Methods' element={<Methods/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Data' element={<DataEntry/>}/>
   
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
