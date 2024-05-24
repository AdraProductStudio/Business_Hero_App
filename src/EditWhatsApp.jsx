import React from 'react'
import { BiSolidImage } from 'react-icons/bi';
import './stylesheets/EditWhatsApp.css';
import { Link } from 'react-router-dom';

const EditWhatsApp = () => {
    return (
        <>
            <section className="edit-whatsapp-page">
                <div className="container">
                    <div className="image-container">
                        <div class="card-container h-100 pt-3 pb-3 px-4">
                            <div class="card border mb-4 mx-auto h-100 " >
                                <BiSolidImage alt="logo-image" class="card-img-top mx-auto my-auto gallery-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="details-container">
                        <form className=''>
                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                <div className='w-100 me-3'>
                                    <input type="text" class="form-control" id="CompanyName" placeholder='Company name' aria-describedby="CompanyName" />
                                </div>
                                <div className='toggle-switch-container'>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                <div className='w-100 me-3'>
                                    <input type="number" class="form-control" id="whatsAppNumber" placeholder='Whatsapp number' aria-describedby="whatsAppNumber" />
                                </div>
                                <div className='toggle-switch-container'>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                <div className='w-100 me-3'>
                                    <textarea rows={3} className='form-control' id="businessAddress" placeholder='Business address'></textarea>
                                </div>
                                <div className='toggle-switch-container'>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                <div className='w-100 me-3'>
                                    <input type="text" class="form-control" id="website" placeholder='Website' aria-describedby="website" />
                                </div>
                                <div className='toggle-switch-container'>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="lower-container d-flex align-items-center">
                        <div className="button-container my-auto mx-auto w-100">
                            <Link to="/share-on-whatsapp" className='text-decoration-none'>
                                <button className="btn btn-teal-dark-green w-100 ">Save</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditWhatsApp
