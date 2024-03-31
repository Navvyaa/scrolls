import React from 'react'
import Navbar from '../Navbar/navbar'
import './accommodations.css'
import Footer from '../footer/footer'
import { ToastContainer } from 'react-toastify'
function Accommodations() {
  return (
    <div>
        <Navbar/>
        <div className='accommodations'>
        <p className="dashboard" id="update">Accommodation</p>
            </div>
            <Footer />
        <ToastContainer />
        </div>
  )
}

export default Accommodations