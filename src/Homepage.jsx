import React, { useEffect, useState } from 'react';
import './stylesheets/Homepage.css'
import { BiSolidImage } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import NaturalImage from "./assets/images/test1.jpg";
import NaturalImage1 from "./assets/images/test2.jpg";
import NaturalImage2 from "./assets/images/test3.jpg";
import NaturalImage3 from "./assets/images/test4.jpg";
import NaturalImage4 from "./assets/images/test6.jpg";
import NaturalImage5 from "./assets/images/test7.jpg";
import NaturalImage6 from "./assets/images/test8.jpg";
import NaturalImage7 from "./assets/images/natural.jpg";
import { IoChevronBackCircle } from 'react-icons/io5';


const Homepage = () => {
    const pageRender = useNavigate();
    const [date, setDate] = useState(0);
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const CardDetails = [
        {
            imageSource: NaturalImage7,
            cardTitle: "First Title",
            cardText:
                "This is a wider card with supporting text below as a natural lead-in to additional content",
        },
        {
            imageSource: NaturalImage,
            cardTitle: "Second Title",
            cardText:
                "This is a wider card with supporting text below as a natural lead-in to additional content",
        },
        {
            imageSource: NaturalImage1,
            cardTitle: "Third Title",
            cardText:
                "This is a wider card with supporting text below as a natural lead-in to additional content",
        },
        {
            imageSource: NaturalImage2,
            cardTitle: "Fourth Title",
            cardText:
                "This is a wider card with supporting text below as a natural lead-in to additional content",
        },
        {
            imageSource: NaturalImage3,
            cardTitle: "Fifth Title",
            cardText:
                "This is a wider card with supporting text below as a natural lead-in to additional content",
        },
        {
            imageSource: NaturalImage4,
            cardTitle: "Sixth Title",
            cardText:
                "This is a wider card with supporting text below as a natural lead-in to additional content",
        },
        {
            imageSource: NaturalImage5,
            cardTitle: "Seventh Title",
            cardText:
                "This is a wider card with supporting text below as a natural lead-in to additional content",
        },
        {
            imageSource: NaturalImage6,
            cardTitle: "Eighth Title",
            cardText:
                "This is a wider card with supporting text below as a natural lead-in to additional content",
        },
    ];

    useEffect(() => {
        var monthArray = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var date = new Date();
        var dte = date.getDate();
        setDate(dte)

        var mth = date.getMonth();
        setMonth(monthArray[mth])

        var day = date.getDay();
        setDay(dayArray[day])
    }, []);



    return (
        <>
            <section className='homepage-page'>
                <div className="container">
                    <div className="homepage-container py-4">

                        <div className="py-3 container">
                            <button className="btn btn-outline-secondary d-flex align-items-center gap-2 ms-1" onClick={() => {
                                pageRender('/business-category')
                            }}>
                                <IoChevronBackCircle className="fs-5" /> Back
                            </button>
                        </div>

                        <h3 className=' text-center'>{month} {date}, {day}</h3>
                        <div class="container text-center">
                            <div class="row row-cols-2 row-cols-lg-3 ">
                                {
                                    CardDetails.map((card, index) => {

                                        return (
                                            <React.Fragment key={index}>
                                                <div className="col gy-3">
                                                    <Link to={`/customize?a=${card.imageSource}`} className='text-decoration-none' onClick={() => console.log(index)}>
                                                        <div class="card mb-4 border-0  h-100 " >
                                                            <img src={card.imageSource} alt="logo-image" class="card-img-top my-auto mx-auto rounded-2 " />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage
