import React from 'react'
import Navbar from '../Navbar/navbar'
import './accommodations.css'
import Footer from '../footer/footer'
import { ToastContainer } from 'react-toastify'

function Accommodations() {
  return (
    <div>
        <Navbar pg="acc"/>
        <div className='accommodations'>
            <p className="dashboard" style={{color:"#fac949"}} id="update">Accommodation</p>
            <div className='font-bold'>
    Hostel accommodation will be provided on a sharing basis to outstation participants at no cost, only if an overnight stay is required. Participants need to fill out the Google Form available below. For any queries, please communicate with the organizing team via email (<a className='underline hover:text-[#FAC949]' href="mailto:scrolls@akgec.ac.in">scrolls@akgec.ac.in</a>) or Instagram (<a className='hover:text-[#FAC949] underline' href="https://www.instagram.com/scrolls.akgec" target="_blank" rel="noopener noreferrer">@scrolls.akgec</a>) well in advance to receive timely confirmation of availability.
</div>
            <br/>
            <p>
                Welcome to SCROLLS’24 (The Annual National Level Technical Paper Presentation) at AKGEC. We understand that many of our participants will be traveling from far-off stations to join us. To ensure your comfort and convenience, we offer hostel accommodations on a sharing basis, completely free of charge, if an overnight stay is required.
            </p>
            <br/>
            <p className='mb-2'>
                To avail this accommodation, participants need to fill out the Google Form available below. Please make sure to provide accurate information to facilitate the arrangement process.
            </p>
            <p>
                <a className='underline font-semibold hover:text-[#FAC949]' href="https://forms.gle/NkvV739iUkkoiSLs8" target="_blank" rel="noopener noreferrer">Accommodation Google form</a>
            </p>
            <br/>
            <p>
                <b>Note:</b> Accommodation is subject to availability and will be allocated on a first-come, first-served basis. Therefore, we highly recommend filling out the form at the earliest opportunity.
            </p>
            <br/>
            <p>
                For any inquiries or assistance regarding accommodation, please feel free to reach out to our organizing team via email at scrolls@akgec.ac.in or message us on Instagram at scrolls.akgec. We advise contacting us well in advance to ensure timely confirmation of availability and to address any queries you may have.
            </p>
            <br/>
            <p>
                We look forward to welcoming you to our event and ensuring your stay is comfortable and enjoyable.
            </p>
            {/* <br/> */}
            {/* <br/> */}
            {/* <p>
                We look forward to welcoming you and ensuring your stay is as enjoyable and convenient as possible!
            </p> */}
        </div>
        <Footer />
        <ToastContainer />
    </div>
  )
}

export default Accommodations
