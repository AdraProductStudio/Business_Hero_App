import React from 'react'
import { BiSolidImage } from 'react-icons/bi';
import './stylesheets/ShareOnWhatsApp.css';

const ShareOnWhatsApp = () => {
  return (
     <>
            <section className="share-on-whatsapp-page">
                <div className="container">
                    <div className="upper-container ">
                        <div class="card-container h-100 pt-3">
                            <div class="card border mb-4 mx-auto h-100 " >
                                <BiSolidImage alt="logo-image" class="card-img-top mx-auto my-auto gallery-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="lower-container d-flex align-items-center justify-content-center flex-column gap-3">
                        <div className="button-container w-100">
                            <button className="btn brand-color w-100 ">Edit</button>
                        </div>
                        <div className="button-container w-100">
                            <button className="btn btn-outline-brand-color w-100 ">Share on whatsapp</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
      
  )
}

export default ShareOnWhatsApp
