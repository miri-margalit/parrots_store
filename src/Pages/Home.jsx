import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>welcome to out store</h1>
    <img src="/Images/parrot1.avif" alt="parrot" />
    <Link to="/products">To see the parrots <br/> press here</Link>
    <br/>

    <Link to="/contact">Contact us</Link>

    </>
  )
};

export default Home