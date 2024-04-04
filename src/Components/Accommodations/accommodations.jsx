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
        <div className='font-bold'>Participants from distant locations will receive free accommodation and meals upon verification. This ensures their comfort and convenience during the event, removing any logistical barriers to their participation.</div>
            </div>
            <Footer />
        <ToastContainer />
        </div>
  )
}

export default Accommodations