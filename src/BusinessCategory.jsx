import React from 'react';
import './stylesheets/BusinessCategory.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackCircle } from 'react-icons/io5';

const BusinessCategory = () => {
    const pageRender = useNavigate();


    return (
        <>
            <section className='business-category-page'>
                <div class="container">
                    <div className="upper-container px-2 py-5">

                        <div className="pb-3 container">
                            <button className="btn btn-outline-secondary d-flex align-items-center gap-2 ms-1" onClick={() => {
                                pageRender('/business-details')
                            }}>
                                <IoChevronBackCircle className="fs-5" /> Back
                            </button>
                        </div>

                        <div class="row row-cols-1 row-cols-lg-3 h-100">
                            <div class="col-lg-12 py-5">
                                <div class="card border-0 mb-4 mx-auto " style={{ width: "11rem" }}>
                                    <img src={require('../src/assets/images/Screenshot 2024-05-24 155351.png')} alt="logo-image"  class="card-img-top mx-auto" />
                                </div>
                            </div>
                            <div class="col-lg-12 pb-3">
                                <h4 className='text-center'>Select business category</h4>
                            </div>

                            <div class="col-4 col-lg-4 text-center pb-3">
                                <Link to="/homepage" className='text-decoration-none'>
                                    <img src={require('../src/assets/images/dress.png')} alt="logo-image" class="card-img-top w-25 mx-auto" />
                                    <p className='category'>Apparel</p>
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 text-center">
                                <Link to="/homepage" className='text-decoration-none'>
                                    <img src={require('../src/assets/images/jewelery.png')} alt="logo-image" class="card-img-top w-25 mx-auto" />
                                    <p className='category'>Jewellery</p>
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 text-center">
                                <Link to="/homepage" className='text-decoration-none'>
                                    <img src={require('../src/assets/images/scissors.png')} alt="logo-image" class="card-img-top w-25 mx-auto" />
                                    <p className='category'>Salon</p>
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 text-center pb-3">
                                <Link to="/homepage" className='text-decoration-none'>
                                    <img src={require('../src/assets/images/gavel.png')} alt="logo-image" class="card-img-top w-25 mx-auto" />
                                    <p className='category'>Lawyer</p>
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 text-center">
                                <Link to="/homepage" className='text-decoration-none'>
                                    <img src={require('../src/assets/images/furnitures.png')} alt="logo-image" class="card-img-top w-25 mx-auto" />
                                    <p className='category'>Furniture</p>
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 text-center">
                                <Link to="/homepage" className='text-decoration-none'>
                                    <img src={require('../src/assets/images/insurance.png')} alt="logo-image" class="card-img-top w-25 mx-auto" />
                                    <p className='category'>Insurance</p>
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 text-center">
                                <Link to="/homepage" className='text-decoration-none'>
                                    <img src={require('../src/assets/images/hotel.png')} alt="logo-image" class="card-img-top w-25 mx-auto" />
                                    <p className='category'>Hotel</p>
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 text-center">
                                <Link to="/homepage" className='text-decoration-none'>
                                    <img src={require('../src/assets/images/taxi.png')} alt="logo-image" class="card-img-top w-25 mx-auto" />
                                    <p className='category'>Cab services</p>
                                </Link>
                            </div>
                            <div class="col-4 col-lg-4 text-center">
                                <Link to="/homepage" className='text-decoration-none'>
                                    <img src={require('../src/assets/images/bakery.png')} alt="logo-image" class="card-img-top w-25 mx-auto" />
                                    <p className='category'>Bakery</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container">
                    <div className="lower-container px-2 d-flex">
                        <div className="button-container my-auto mx-auto w-100">
                            <Link to="/homepage" className='text-decoration-none'>
                                <button className="btn brand-color w-100 ">Submit</button>
                            </Link>
                        </div>
                    </div>
                </div> */}



            </section>
        </>
    )
}

export default BusinessCategory

