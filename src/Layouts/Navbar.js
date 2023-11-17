import React from 'react'
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
    <nav className='navigationbar'>
       <h2>  Welcome to Plant-O-Pedia </h2>
        <ul>
         <button onClick={()=> navigate('/')}>Home</button> 
         <button onClick={()=> navigate('/PLants')}>Plants</button> 
         <button onClick={()=> navigate('/Methods')}>Methods</button> 
         <button onClick={()=> navigate('/About')}>About</button>
         <button onClick={()=> navigate('/Admin')}>Admin</button>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
