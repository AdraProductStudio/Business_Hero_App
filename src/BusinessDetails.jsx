import React, { useContext } from 'react';
import './stylesheets/BusinessDetails.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackCircle } from 'react-icons/io5';
import CommonContext from './CommonContext';

const BusinessDetails = () => {
    const pageRender = useNavigate();
    const {
        companyData, setCompanyData,
        whatsappNumber, setwhatsappNumber,
        businessAddress, setBusinessAddress,
        website, setwebsite,
        saveData,setSaveData
    }=useContext(CommonContext)


    const handleEditing = (e) => {
        if (e.target.name === "CompanyName") {
            var name = { ...companyData }
            name.company_name = e.target.value
            setCompanyData(name)
        }


        else if (e.target.name === "whatsAppNumber") {
            var whatsappnum = { ...whatsappNumber }
            whatsappnum.whatsapp_number = e.target.value
            setwhatsappNumber(whatsappnum)
        }


        else if (e.target.name === "Business address") {
            var businessAddressval = { ...businessAddress }
            businessAddressval.business_address = e.target.value
            setBusinessAddress(businessAddressval)
        }


        else if (e.target.name === "Website") {
            var websiteDataval = { ...website }
            websiteDataval.website = e.target.value
            setwebsite(websiteDataval)
        }
    }

    return (
        <>
            <section className='business-details-page'>
                <div className="container h-100 py-5">
                    <div className='h-100 business-details-container d-flex justify-content-center flex-column px-2'>
                        
                        <div className=" container">
                            <button className="btn btn-outline-secondary d-flex align-items-center gap-2 ms-1" onClick={() => {
                                pageRender('/')
                            }}>
                                <IoChevronBackCircle className="fs-5" /> Back
                            </button>
                        </div>

                        <div className=' w-100'>
                            <div class="card border-0 mb-4 mx-auto" style={{ width: "12rem" }}>
                                <img src={require('../src/assets/images/Screenshot 2024-05-24 155351.png')} alt="logo-image" class="card-img-top  mx-auto" />
                            </div>
                            <div>
                                <form className=''>
                                    <div class="mb-3">
                                        <label for="businessName" class="form-label" >Enter business name*</label>
                                        <input type="text" class="form-control" id="businessName" aria-describedby="businessName" name="CompanyName" value={companyData.company_name} onChange={handleEditing}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="businessWhatsAppNumber" class="form-label" >Business whatsapp number*</label>
                                        <input type="number" class="form-control" id="businessWhatsAppNumber" aria-describedby="businessWhatsAppNumber" name="whatsAppNumber" value={whatsappNumber.whatsapp_number} onChange={handleEditing}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="businessAddress" class="form-label">Business address</label>
                                        <textarea rows={5} className='businessAddress form-control' id="businessAddress" value={businessAddress.business_address} name="Business address" onChange={handleEditing}></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="businessWebsite" class="form-label" >Business Website</label>
                                        <input type="text" class="form-control" id="businessWebsite" aria-describedby="businessWebsite" value={website.website} name="Website" onChange={handleEditing}/>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="button-container w-100 py-4">
                            <Link to="/business-category" className='text-decoration-none'>
                                <button type="button" class="btn brand-color w-100">Submit</button>
                            </Link>
                        </div>
                    </div>

                </div>


            </section>
        </>
    )
}

export default BusinessDetails
