import React from 'react';
import './stylesheets/GetStarted.css';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <>
            <section className='get-started-page'>
                <div className="container upper-container d-flex justify-content-center align-items-center">
                    <div class="card border-0 text-center" style={{width:"18rem"}}>
                        <img src={require('../src/assets/images/Screenshot 2024-05-24 155351.png')} alt="logo-image" class="card-img-top w-50 mx-auto"  />
                        <div class="card-body ">
                            <h5 class="card-title ">Business Hero</h5>
                            <p class="card-text">Create WhatsApp status and ads <br/>in 30 seconds</p>
                        </div>
                    </div>
                </div>
                <div className="container px-4 lower-container d-flex justify-content-center align-items-center">
                    <Link to="/business-details" className='text-decoration-none'>
                        <button className='btn brand-color d-block mx-auto w-100 '>Get Started</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default GetStarted
