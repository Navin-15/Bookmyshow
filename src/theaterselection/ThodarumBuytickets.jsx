// import React from 'react'
import DateBar from './Datebar'
import FilterBar from './Filterbar'
import './Buytickets.css'
import {Row, Col} from 'react-bootstrap'
import heartoff from '../theaterselection/theaterselectionimages/heart-off.png'
import infoicon from '../theaterselection/theaterselectionimages/info-icon.png'
import mticket from '../theaterselection/theaterselectionimages/mticket.webp'
import fnb from '../theaterselection/theaterselectionimages/fnb.webp'
import Navbar from  '../topend/Navbar';
import Categories from '../cat/Categories';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';



function ThodrumBuytickets() {
const navigate = useNavigate();

    // Modified handleSeatSelection functions to pass theater name and time and scereen
    const handleSeatSelection = (theaterName, showTime, screen, layoutPath) => {
    

        navigate(layoutPath, {
            state: {
                theater: theaterName,
                time: showTime,
                screen: screen,
                movieName: "Thodarum",  // Assuming "Thodarum" is static for this page
                 
            }
        });
    };

    return (
        <>
            <div className=" ">
                <Navbar/>
                <Categories/>

                <div className="w-75 ms-5 ps-4 ">
                    <div className=" py-1">
                        <div className="ms-2 mt-2">
                            <div className="name">Thodarum</div>
                        </div>
                        <div className="abtthismovie">
                            <a href="" className=" outline">Drama</a>
                            <a href="" className=" outline">Family</a>
                            <a href="" className=" outline">Thriller</a>
                        </div>
                    </div>
                </div>

                <div className=' two-component d-flex justify-content-around '>
                    <DateBar/> <FilterBar/>
                </div>

                <div className="">
                    <div className="d-flex justify-content-end " >
                        <div className="d-flex me-5 pe-5 mt-3">
                            <div className=" clr bg-success rounded mt-1"></div><p className=' ps-2 pe-2 ' style={{fontSize:"8px"}}>AVAILABLE</p>
                            <div className=" clr bg-warning rounded mt-1 "></div><p className=' ps-2 pe-2 ' style={{fontSize:"8px"}}>FAST FILLING</p>
                            <p className=' ps-3 ' style={{fontSize:"8px"}}>SUBTITLES LANGUAGES</p>
                        </div>
                    </div>
                </div>

                {/* Cosmo Cinemas */}
                <div className=" bg-secondary overflow-hidden">
                    <div className="cinema-div">
                        <div className=" theaters">
                            <Col className=' col-4 '>
                                <div className="theaterone-leftcol-child1">
                                    <div className="theat">
                                        <div className="cinemaname-div">
                                            <div className="heart-div">
                                                <img src={heartoff} alt="" style={{height:"20px", width:"20px", maxWidth:"100%"}} />
                                            </div>
                                            <div className="cinemaname-div" style={{maxWidth:"275px"}}>
                                                <div className="cinemaname">Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore</div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="d-flex">
                                                <span><img src={infoicon} alt="" style={{height:"16px", width:"16px", maxWidth:"100%"}} /></span>
                                                <span className='infotext'>INFO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theaterone-leftcol-child2">
                                    <div className="bewarages-div">
                                        <span className='m-ticketspan'><img src={mticket} alt="" style={{width:"80px", display:"block"}} /></span>
                                    </div>
                                    <div className="bewarages-div">
                                        <span className='m-ticketspan'><img src={fnb} alt="" style={{width:"110px", display:"block"}} /></span>
                                    </div>
                                </div>
                            </Col>

                            <Col className='show-timing-col '>
                                <div className="show-timing-div">
                                    <div className="time-div" style={{}}>
                                        <div onClick={() => handleSeatSelection("Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore", "09:00 AM", "Screen - A", '/hit/buytickets/cosmoscinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">9.00 AM</div>  <sub className='mt-4 '>Screen - A</sub>   
                                        </div>
                                    </div>   
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore", "12:30 PM", "Screen - B",  '/hit/buytickets/cosmoscinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">12.30 PM</div>  <sub className='mt-4 '>Screen - B</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore", "04:00 PM", "Screen - C",  '/hit/buytickets/cosmoscinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">4.00 PM</div>   <sub className='mt-4 '>Screen - C</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore", "07:00 PM", "Screen - D", '/hit/buytickets/cosmoscinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">07.00 PM</div>   <sub className='mt-4 '>Screen - D</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore", "11:00 PM","Screen - E", '/hit/buytickets/cosmoscinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">11.00 PM</div>   <sub className='mt-4 '>Screen - E</sub>
                                        </div>
                                    </div>
                                </div>
                                <div className="cancellation-div">
                                    <div className="cancel-div  mt-3">
                                        <div className="cancel-holding-div">
                                            <div className="cancel">Non-cancellable</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space"></div>
                            </Col>
                        </div>
                    </div>

                    {/* Karpagam Theatres */}
                    <div className="cinema-div">
                        <div className=" theaters">
                            <Col className=' col-4 '>
                                <div className="theaterone-leftcol-child1">
                                    <div className="theat">
                                        <div className="cinemaname-div">
                                            <div className="heart-div">
                                                <img src={heartoff} alt="" style={{height:"20px", width:"20px", maxWidth:"100%"}} />
                                            </div>
                                            <div className="cinemaname-div" style={{maxWidth:"275px"}}>
                                                <div className="cinemaname">Karpagam Theatres 4K Dolby Atmos: Coimbatore</div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="d-flex">
                                                <span><img src={infoicon} alt="" style={{height:"16px", width:"16px", maxWidth:"100%"}} /></span>
                                                <span className='infotext'>INFO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theaterone-leftcol-child2">
                                    <div className="bewarages-div">
                                        <span className='m-ticketspan'><img src={mticket} alt="" style={{width:"80px", display:"block"}} /></span>
                                    </div>
                                    <div className="bewarages-div">
                                        <span className='m-ticketspan'><img src={fnb} alt="" style={{width:"110px", display:"block"}} /></span>
                                    </div>
                                </div>
                            </Col>
                            <Col className='show-timing-col '>
                                <div className="show-timing-div">
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Karpagam Theatres 4K Dolby Atmos: Coimbatore", "09:00 AM", 'Screen - A','/hit/buytickets/karpagamcinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">9.00 AM</div>  <sub className='mt-4 '>Screen - A</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Karpagam Theatres 4K Dolby Atmos: Coimbatore", "12:30 PM", 'Screen - B', '/hit/buytickets/karpagamcinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">12.30 PM</div>  <sub className='mt-4 '>Screen - B</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Karpagam Theatres 4K Dolby Atmos: Coimbatore", "04:00 PM", 'Screen - C','/hit/buytickets/karpagamcinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">4.00 PM</div>   <sub className='mt-4 '>Screen - C</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Karpagam Theatres 4K Dolby Atmos: Coimbatore", "07:30 PM", 'Screen - D','/hit/buytickets/karpagamcinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">07.30 PM</div>   <sub className='mt-4 '>Screen - D</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Karpagam Theatres 4K Dolby Atmos: Coimbatore", "11:00 PM", 'Screen - E', '/hit/buytickets/karpagamcinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">11.00 PM</div>   <sub className='mt-4 '>Screen - E</sub>
                                        </div>
                                    </div>
                                </div>
                                <div className="cancellation-div">
                                    <div className="cancel-div mt-3">
                                        <div className="cancel-holding-div">
                                            <div className="cancel">Cancellation available</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space"></div>
                            </Col>
                        </div>
                    </div>

                    {/* Murugan Cinemas */}
                    <div className="cinema-div">
                        <div className=" theaters">
                            <Col className=' col-4 '>
                                <div className="theaterone-leftcol-child1">
                                    <div className="theat">
                                        <div className="cinemaname-div">
                                            <div className="heart-div">
                                                <img src={heartoff} alt="" style={{height:"20px", width:"20px", maxWidth:"100%"}} />
                                            </div>
                                            <div className="cinemaname-div" style={{maxWidth:"275px"}}>
                                                <div className="cinemaname">Murugan Cinemas A/C 4K Atmos: Thudiyalur</div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="d-flex">
                                                <span><img src={infoicon} alt="" style={{height:"16px", width:"16px", maxWidth:"100%"}} /></span>
                                                <span className='infotext'>INFO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theaterone-leftcol-child2">
                                    <div className="bewarages-div">
                                        <span className='m-ticketspan'><img src={mticket} alt="" style={{width:"80px", display:"block"}} /></span>
                                    </div>
                                    <div className="bewarages-div">
                                        <span className='m-ticketspan'><img src={fnb} alt="" style={{width:"110px", display:"block"}} /></span>
                                    </div>
                                </div>
                            </Col>
                            <Col className='show-timing-col '>
                                <div className="show-timing-div">
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Murugan Cinemas A/C 4K Atmos: Thudiyalur", "09:00 AM", 'Screen - A','/hit/buytickets/murugancinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">9.00 AM</div>   <sub className='mt-4 '>Screen - A</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Murugan Cinemas A/C 4K Atmos: Thudiyalur", "12:30 PM", 'Screen - B','/hit/buytickets/murugancinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">12.30 PM</div>   <sub className='mt-4 '>Screen - B</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Murugan Cinemas A/C 4K Atmos: Thudiyalur", "04:00 PM", 'Screen - C', '/hit/buytickets/murugancinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">4.00 PM</div>    <sub className='mt-4 '>Screen - C</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Murugan Cinemas A/C 4K Atmos: Thudiyalur", "07:30 PM", 'Screen - D', '/hit/buytickets/murugancinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">07.30 PM</div>   <sub className='mt-4 '>Screen - D</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Murugan Cinemas A/C 4K Atmos: Thudiyalur", "11:00 PM",'Screen - E',  '/hit/buytickets/murugancinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">11.00 PM</div>   <sub className='mt-4 '>Screen - E</sub>
                                        </div>
                                    </div>
                                </div>
                                <div className="cancellation-div">
                                    <div className="cancel-div mt-3">
                                        <div className="cancel-holding-div">
                                            <div className="cancel">Cancellation available</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space"></div>
                            </Col>
                        </div>
                    </div>

                    {/* Sri Sakthi Kalpana Cinemas */}
                    <div className="cinema-div">
                        <div className=" theaters">
                            <Col className=' col-4 '>
                                <div className="theaterone-leftcol-child1">
                                    <div className="theat">
                                        <div className="cinemaname-div">
                                            <div className="heart-div">
                                                <img src={heartoff} alt="" style={{height:"20px", width:"20px", maxWidth:"100%"}} />
                                            </div>
                                            <div className="cinemaname-div" style={{maxWidth:"275px"}}>
                                                <div className="cinemaname">Sri Sakthi Kalpana Cinemas: Kavundampalayam</div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="d-flex">
                                                <span><img src={infoicon} alt="" style={{height:"16px", width:"16px", maxWidth:"100%"}} /></span>
                                                <span className='infotext'>INFO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theaterone-leftcol-child2">
                                    <div className="bewarages-div">
                                        <span className='m-ticketspan'><img src={mticket} alt="" style={{width:"80px", display:"block"}} /></span>
                                    </div>
                                    <div className="bewarages-div">
                                        <span className='m-ticketspan'><img src={fnb} alt="" style={{width:"110px", display:"block"}} /></span>
                                    </div>
                                </div>
                            </Col>
                            <Col className='show-timing-col '>
                                <div className="show-timing-div">
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Sri Sakthi Kalpana Cinemas: Kavundampalayam", "09:00 AM",'Screen - A',  '/hit/buytickets/kalpanacinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">9.00 AM</div>   <sub className='mt-4 '>Screen - A</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Sri Sakthi Kalpana Cinemas: Kavundampalayam", "12:30 PM", 'Screen - B','/hit/buytickets/kalpanacinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">12.30 PM</div>   <sub className='mt-4 '>Screen - B</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Sri Sakthi Kalpana Cinemas: Kavundampalayam", "04:00 PM", 'Screen - C','/hit/buytickets/kalpanacinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">04.00 PM</div>   <sub className='mt-4 '>Screen - C</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Sri Sakthi Kalpana Cinemas: Kavundampalayam", "07:30 PM", 'Screen - D','/hit/buytickets/kalpanacinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">07.30 PM</div>   <sub className='mt-4 '>Screen - D</sub>
                                        </div>
                                    </div>
                                    <div className="time-div">
                                        <div onClick={() => handleSeatSelection("Sri Sakthi Kalpana Cinemas: Kavundampalayam", "11:00 PM", 'Screen - E','/hit/buytickets/kalpanacinemaseatlayout')} className="time-holding-div">
                                            <div className="movie-time mt-2">11.00 PM</div>   <sub className='mt-4 '>Screen - E</sub>
                                        </div>
                                    </div>
                                </div>
                                <div className="cancellation-div">
                                    <div className="cancel-div mt-3">
                                        <div className="cancel-holding-div">
                                            <div className="cancel">Cancellation available</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space"></div>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ThodrumBuytickets