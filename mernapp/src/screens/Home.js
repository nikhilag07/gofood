import React from 'react'
import Cards from '../components/cards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousels from '../components/carousels';
function Home() {
  return (
    <div>
    <div><Navbar/></div>
    <div><Carousels/></div>
    <div className='m-4'>

    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
     <div><Footer/></div>
    
    </div>
  )
}

export default Home
