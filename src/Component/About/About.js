import React from 'react'
import doctor from '../Images/doctor.jpg';
import maindoctor from '../Images/doctor2.jpg';
import '../About/About.css';

function About() {
  return (
    <div>
      <div className="row container  mt-3 ">
        <div className=" col-sm-12 col-lg-6  ">
          <div className=" container  second  w-100">
            <div className="contentdoct mt-4  ">
              <h4 className='fw-bold doctHead'> Our Eye Specialist Doctor</h4>
              <h4 className='mt-3'>Dr. Vilas Khode</h4>
              <h5 className='mt-3'>MBBS, MS, Ophthalmology, Phaco & Lasik Surgeon</h5>
              <h5 className='mt-3'>Best eye Hospital in Nagpur</h5>

              <p className='text-start'>Dr Vilas Khode Eye Clinic is conveniently located in Khaparkheda, Nagpur, near Opposite Chemri Gate, making it easily accessible by public transportation for patients from nearby cities and towns. The area is well-known for its excellent connectivity, ensuring a smooth commute for visitors from various locations. Public transport options like buses and trains are available at frequent intervals. </p>
            </div>
          </div>                
          
        </div>
        <div className=" col-sm-12 col-lg-6  ">
          <div className="container first border h-100 w-100 d-flex  justify-content-center align-items-center">
            <img src={maindoctor} class="img-fluid doctor" alt="..." />
            
          </div>
        </div>
      </div>
    </div>

  )
}
export default About
