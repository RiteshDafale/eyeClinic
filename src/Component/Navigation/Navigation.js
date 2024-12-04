import React from 'react'
import first from '../Images/first.jpg';
import './Navigation.css';
// import '..Navigation/Navigation.css';


function Navigation() {
  return (
    <div>
      <div className="main  container-fluid  d-flex justify-content-between ">
        {/*     height: 30px; */}
        <div className="  name d-flex  align-items-center justify-content-center ">
          <p className=' text-white fs-6'>EYE Clinic Hospital</p>
        </div>
        <div className="icons  d-flex justify-content-between align-items-center ">
          <i class="fa-brands fa-facebook text-white"></i>
          <i class="fa-brands fa-linkedin mx-2 text-white"></i>
          <i class="fa-brands fa-instagram text-white"></i>
        </div>
      </div>
      {/* first */}
      <div className="subMain container-fluid  d-flex justify-content-between align-items-center h-50">
        <div className="left ">
          LOGO
        </div>
        <div className="right d-flex ">
          <div className="login">
            <button className='text-white btn btn-custom btn-sm m-1 p-2'>Book Appoitment</button>
          </div>

        </div>
      </div>
{/* ========================================= */}
    
<nav class="navbar navbar-expand-lg bg-body-tertiary third">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
       
      
        
      </ul>
    </div>
  </div>
</nav>



{/* IMAGE ................ */}
      <div className="container  image">
        <div className="mid">
          <img src={first} class="img-fluid firstimg" alt="..." />
        </div>
      </div>
      <div className="booking container border border-dark mt-2 d-flex ">
        <div className="container d-flex ">
          <div className="content   w-100 d-flex ">
            <div className="text-white  d-flex flex-column justify-content-start w-100">
              <p className='text-dark'>for Appoitment , Call us on</p>
              <p className='text-color mt-0'>1234567891 / 765775776</p>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <button className='btn btn-color m-2'>Book Appoitment</button>
          <button className='btn btn-color'>Enquiry</button>
        </div>
      </div>


    </div>
  )
}

export default Navigation