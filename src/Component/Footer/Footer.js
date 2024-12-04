import React from 'react'
import '../Footer/Footer.css';


function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-white">
        <div className="row">
          <div className="col-sm-12 col-lg-3 border text-start">
            <h5 className='mt-3 text-decoration-underline'>About us</h5>
            <h4 className='mt-4'>Dr. Vilas Khode</h4>
            <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptates nesciunt ipsam quae, laborum at sed quis quia repellendus quam, est tenetur? Enim non dolores modi odit aperiam cupiditate voluptatum, nobis vero nihil possimus eum delectus ea ratione fugiat cum cumque voluptatem et ex reiciendis adipisci error? Vero, numquam temporibus!</p>
          </div>
          <div className="col-sm-12 col-lg-3  d-flex justify-content-center align-items-center secondfooter ">
            <div className="link  d-flex flex-column">
            <h5 className=' text-decoration-underline'>Page Link</h5>
              <div className='my-1'>
                <i class="fa-solid fa-arrow-right"></i>
                <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-white " href="#"> Home </a>
              </div>
              <div>
                <i class="fa-solid fa-arrow-right"></i>
                <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-white" href="#"> About  </a>
              </div>
              <div className='my-1'>
                <i class="fa-solid fa-arrow-right"></i>
                <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-white" href="#"> Services </a>
              </div>
              <div>
                <i class="fa-solid fa-arrow-right"></i>
                <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-white" href="#"> Contact </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 d-flex flex-column justify-content-center   border thirdfooter   ">
            <h5 className='mt-3 text-decoration-underline'>Get in Touch</h5>
            <div className='mt-4 d-flex flex-column justify-content-center  '>
              <div className=' d-flex align-items-center'>
                <i class="fa-solid fa-location-dot "></i><p className='mt-2 ms-3'>Khaparkheda,Nagpur</p>
              </div>
              <div className=' d-flex align-items-center'>
              <i class="fa-solid fa-phone"></i><p className=' ms-3'>123456789</p>
              </div>
              <div className=' d-flex align-items-center'>
              <i class="fa-solid fa-envelope"></i><p className=' ms-3'>abe@gmail.com</p>
              </div>
              <div className=' d-flex align-items-center'>
              <i class="fa-solid fa-globe"></i><p className=' ms-3'>www.abc.com</p>
              </div>
             
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 d-flex justify-content-center align-items-center">
            <p className='text-danger bg-light'>Location map explore aftre some time</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
