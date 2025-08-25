
//original code

// RetroBuytickets.jsx
// import React, { useEffect, useState} from 'react';
// import DateBar from './Datebar'
// import FilterBar from './Filterbar'
// import './Buytickets.css'
// import {Row, Col} from 'react-bootstrap'
// import heartoff from '../theaterselection/theaterselectionimages/heart-off.png'
// import infoicon from '../theaterselection/theaterselectionimages/info-icon.png'
// import mticket from '../theaterselection/theaterselectionimages/mticket.webp'
// import fnb from '../theaterselection/theaterselectionimages/fnb.webp'
// import Navbar from '../topend/Navbar';
// import Categories from '../cat/Categories';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../footer/Footer';

// function RetroBuytickets() {
//     const navigate = useNavigate();
//     const [showPopup, setShowPopup] = useState(false);


//     // Utility function to check if the showtime is in the future
// const isShowtimeInFuture = (showTimeString) => {
//     const now = new Date();

//     const [time, meridian] = showTimeString.split(" ");
//     let [hours, minutes] = time.split(":").map(Number);

//     if (meridian === "PM" && hours !== 12) hours += 12;
//     if (meridian === "AM" && hours === 12) hours = 0;

//     const showTime = new Date();
//     showTime.setHours(hours, minutes, 0, 0);

//     return showTime > now;
// };

//     // Modified handleSeatSelection functions to pass theater name and time and scereen
//     const handleSeatSelection = (theaterName, showTime, screen, layoutPath) => {
//     if (!isShowtimeInFuture(showTime)) {
//         setShowPopup(true);
//         return;
//     }

//         navigate(layoutPath, {
//             state: {
//                 theater: theaterName,
//                 time: showTime,
//                 screen: screen,
//                 movieName: "Retro",  
                 
//             }
//         });
//     };

//     return (
//         <>
//             <div className=" ">
//                 <Navbar/>
//                 <Categories/>

//                 <div className="w-75 ms-5 ps-4 ">
//                     <div className=" py-1 ">
//                         <div className="ms-2 mt-2 w-25">
//                             <div className="name">Retro - (Tamil)</div>
//                         </div>
//                         <div className="abtthismovie mt-3 ms-2  w-25">
//                             <a href="" className=" outline">Action</a>
//                             <a href="" className=" outline">Thriller</a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className=' two-component d-flex justify-content-around '>
//                     <DateBar/> <FilterBar/>
//                 </div>

//                 <div className="">
//                     <div className="d-flex justify-content-end " >
//                         <div className="d-flex me-5 pe-5 mt-3">
//                             <div className=" clr bg-success rounded mt-1"></div><p className=' ps-2 pe-2 ' style={{fontSize:"8px"}}>AVAILABLE</p>
//                             <div className=" clr bg-warning rounded mt-1 "></div><p className=' ps-2 pe-2 ' style={{fontSize:"8px"}}>FAST FILLING</p>
//                             <p className=' ps-3 ' style={{fontSize:"8px"}}>SUBTITLES LANGUAGES</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Cosmo Cinemas */}
// <div className=" bg-secondary overflow-hidden">


//     {/* Dynamic Cosmos Theater Show Timing  */}

//                     <div className="cinema-div">
//         <div className=" theaters">
//             <Col className=' col-4 '>
//                 <div className="theaterone-leftcol-child1">
//                     <div className="theat">
//                         <div className="cinemaname-div">
//                             <div className="heart-div w-25">
//                                 <img src={heartoff} alt="" style={{ height: "20px", width: "20px", maxWidth: "100%" }} />
//                             </div>
//                             <div className="cinemaname-div" style={{ maxWidth: "275px" }}>
//                                 <div className="cinemaname">Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore</div>
//                             </div>
//                         </div>
//                         <div className="info w-25">
//                             <div className="d-flex">
//                                 <span><img src={infoicon} alt="" style={{ height: "16px", width: "18px", maxWidth: "100%" }} /></span>
//                                 <span className='infotext'>INFO</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="theaterone-leftcol-child2">
//                     <div className="bewarages-div">
//                         <span className='m-ticketspan'><img src={mticket} alt="" style={{ width: "80px", display: "block" }} /></span>
//                     </div>
//                     <div className="bewarages-div">
//                         <span className='m-ticketspan'><img src={fnb} alt="" style={{ width: "110px", display: "block" }} /></span>
//                     </div>
//                 </div>
//             </Col>

//             <Col className='show-timing-col '>
//                 <div className="show-timing-div">
//                     {[
//                         { time: "09:00 AM", screen: "Screen - A" },
//                         { time: "12:30 PM", screen: "Screen - B" },
//                         { time: "04:00 PM", screen: "Screen - C" },
//                         { time: "07:00 PM", screen: "Screen - D" },
//                         { time: "11:00 PM", screen: "Screen - E" },
//                     ].map((show, index) => (
//                         <div key={index} className="time-div">
//                             <div
//                                 onClick={() =>
//                                     handleSeatSelection(
//                                         "Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore",
//                                         show.time,
//                                         show.screen,
//                                         '/retro/buytickets/cosmoscinemaseatlayout'
//                                     )
//                                 }
//                                 className="time-holding-div"
//                                 style={{ cursor: "pointer" }}
//                             >
//                                 <div className="movie-time mt-2">{show.time}</div>
//                                 <sub className='mt-4 '>{show.screen}</sub>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="cancellation-div">
//                     <div className="cancel-div  mt-3">
//                         <div className="cancel-holding-div">
//                             <div className="cancel">Non-cancellable</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="empty-space"></div>
//             </Col>
//         </div>
//     </div>


 

// {/* Dynamic Karpagam Theatres Show Timings */}

//                     <div className="cinema-div">
//   <div className="theaters">
//     <Col className="col-4">
//       <div className="theaterone-leftcol-child1">
//         <div className="theat">
//           <div className="cinemaname-div">
//             <div className="heart-div">
//               <img src={heartoff} alt="" style={{ height: "20px", width: "20px" }} />
//             </div>
//             <div className="cinemaname-div" style={{ maxWidth: "275px" }}>
//               <div className="cinemaname">Karpagam Theatres 4K Dolby Atmos: Coimbatore</div>
//             </div>
//           </div>
//           <div className="info">
//             <div className="d-flex">
//               <span><img src={infoicon} alt="" style={{ height: "16px", width: "16px" }} /></span>
//               <span className="infotext">INFO</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="theaterone-leftcol-child2">
//         <div className="bewarages-div">
//           <span className="m-ticketspan"><img src={mticket} alt="" style={{ width: "80px" }} /></span>
//         </div>
//         <div className="bewarages-div">
//           <span className="m-ticketspan"><img src={fnb} alt="" style={{ width: "110px" }} /></span>
//         </div>
//       </div>
//     </Col>

//     <Col className="show-timing-col">
//       <div className="show-timing-div">
//         {[
//           { time: "09:00 AM", screen: "Screen - A" },
//           { time: "12:30 PM", screen: "Screen - B" },
//           { time: "04:00 PM", screen: "Screen - C" },
//           { time: "07:30 PM", screen: "Screen - D" },
//           { time: "11:00 PM", screen: "Screen - E" },
//         ].map((show, index) => (
//           <div key={index} className="time-div">
//             <div
//               onClick={() =>
//                 handleSeatSelection(
//                   "Karpagam Theatres 4K Dolby Atmos: Coimbatore",
//                   show.time,
//                   show.screen,
//                   "/retro/buytickets/karpagamcinemaseatlayout"
//                 )
//               }
//               className="time-holding-div"
//             >
//               <div className="movie-time mt-2">{show.time}</div>
//               <sub className="mt-4">{show.screen}</sub>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="cancellation-div mt-3">
//         <div className="cancel-holding-div">
//           <div className="cancel">Cancellation available</div>
//         </div>
//       </div>
//       <div className="empty-space"></div>
//     </Col>
//   </div>
// </div>


                    


//     {/*Dynamic Murugan Cinemas Show Timings*/}

// <div className="cinema-div">
//   <div className="theaters">
//     <Col className="col-4">
//       <div className="theaterone-leftcol-child1">
//         <div className="theat">
//           <div className="cinemaname-div">
//             <div className="heart-div">
//               <img src={heartoff} alt="" style={{ height: "20px", width: "20px" }} />
//             </div>
//             <div className="cinemaname-div" style={{ maxWidth: "275px" }}>
//               <div className="cinemaname">Murugan Cinemas A/C 4K Atmos: Thudiyalur</div>
//             </div>
//           </div>
//           <div className="info">
//             <div className="d-flex">
//               <span><img src={infoicon} alt="" style={{ height: "16px", width: "16px" }} /></span>
//               <span className="infotext">INFO</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="theaterone-leftcol-child2">
//         <div className="bewarages-div">
//           <span className="m-ticketspan"><img src={mticket} alt="" style={{ width: "80px" }} /></span>
//         </div>
//         <div className="bewarages-div">
//           <span className="m-ticketspan"><img src={fnb} alt="" style={{ width: "110px" }} /></span>
//         </div>
//       </div>
//     </Col>

//     <Col className="show-timing-col">
//       <div className="show-timing-div">
//         {[
//           { time: "09:00 AM", screen: "Screen - A" },
//           { time: "12:30 PM", screen: "Screen - B" },
//           { time: "04:00 PM", screen: "Screen - C" },
//           { time: "07:30 PM", screen: "Screen - D" },
//           { time: "11:00 PM", screen: "Screen - E" },
//         ].map((show, index) => (
//           <div key={index} className="time-div">
//             <div
//               onClick={() =>
//                 handleSeatSelection(
//                   "Murugan Cinemas A/C 4K Atmos: Thudiyalur",
//                   show.time,
//                   show.screen,
//                   "/retro/buytickets/murugancinemaseatlayout"
//                 )
//               }
//               className="time-holding-div"
//             >
//               <div className="movie-time mt-2">{show.time}</div>
//               <sub className="mt-4">{show.screen}</sub>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="cancellation-div mt-3">
//         <div className="cancel-holding-div">
//           <div className="cancel">Cancellation available</div>
//         </div>
//       </div>
//       <div className="empty-space"></div>
//     </Col>
//   </div>
// </div>


// {/* Dynamic Sri Sakthi Kalpana Cinemas Show Timings */}


// <div className="cinema-div">
//   <div className="theaters">
//     <Col className="col-4">
//       <div className="theaterone-leftcol-child1">
//         <div className="theat">
//           <div className="cinemaname-div">
//             <div className="heart-div">
//               <img src={heartoff} alt="" style={{ height: "20px", width: "20px" }} />
//             </div>
//             <div className="cinemaname-div" style={{ maxWidth: "275px" }}>
//               <div className="cinemaname">Sri Sakthi Kalpana Cinemas: Kavundampalayam</div>
//             </div>
//           </div>
//           <div className="info">
//             <div className="d-flex">
//               <span><img src={infoicon} alt="" style={{ height: "16px", width: "16px" }} /></span>
//               <span className="infotext">INFO</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="theaterone-leftcol-child2">
//         <div className="bewarages-div">
//           <span className="m-ticketspan"><img src={mticket} alt="" style={{ width: "80px" }} /></span>
//         </div>
//         <div className="bewarages-div">
//           <span className="m-ticketspan"><img src={fnb} alt="" style={{ width: "110px" }} /></span>
//         </div>
//       </div>
//     </Col>

//     <Col className="show-timing-col">
//       <div className="show-timing-div">
//         {[
//           { time: "09:00 AM", screen: "Screen - A" },
//           { time: "12:30 PM", screen: "Screen - B" },
//           { time: "04:00 PM", screen: "Screen - C" },
//           { time: "07:30 PM", screen: "Screen - D" },
//           { time: "11:00 PM", screen: "Screen - E" },
//         ].map((show, index) => (
//           <div key={index} className="time-div">
//             <div
//               onClick={() =>
//                 handleSeatSelection(
//                   "Sri Sakthi Kalpana Cinemas: Kavundampalayam",
//                   show.time,
//                   show.screen,
//                   "/retro/buytickets/kalpanacinemaseatlayout"
//                 )
//               }
//               className="time-holding-div"
//             >
//               <div className="movie-time mt-2">{show.time}</div>
//               <sub className="mt-4">{show.screen}</sub>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="cancellation-div mt-3">
//         <div className="cancel-holding-div">
//           <div className="cancel">Non-cancellable</div>
//         </div>
//       </div>
//       <div className="empty-space"></div>
//     </Col>
//   </div>
// </div>


//         </div>

//             </div>
// {/* popup for show alert  */}
//             {showPopup && (
//                 <div className="popup-overlay">
//                     <div className="popup-content">
//                         <img
//                             src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
//                             alt="Show started"
//                             style={{ width: "80px" }}
//                         />
//                         <h5>Show already started!</h5>
//                         <button onClick={() => setShowPopup(false)} className="btn btn-secondary mt-2">
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}

//             <Footer/>
//         </>
//     )
// }

// export default RetroBuytickets;

// clone code

// RetroBuytickets.jsx
import React, { useEffect, useState} from 'react';
import DateBar from './Datebar'
import FilterBar from './Filterbar'
import './Buytickets.css'
import {Row, Col} from 'react-bootstrap'
import heartoff from '../theaterselection/theaterselectionimages/heart-off.png'
import infoicon from '../theaterselection/theaterselectionimages/info-icon.png'
import mticket from '../theaterselection/theaterselectionimages/mticket.webp'
import fnb from '../theaterselection/theaterselectionimages/fnb.webp'
import Navbar from '../topend/Navbar';
import Categories from '../cat/Categories';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';

function RetroBuytickets() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);


    // Utility function to check if the showtime is in the future
const isShowtimeInFuture = (showTimeString) => {
    const now = new Date();

    const [time, meridian] = showTimeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (meridian === "PM" && hours !== 12) hours += 12;
    if (meridian === "AM" && hours === 12) hours = 0;

    const showTime = new Date();
    showTime.setHours(hours, minutes, 0, 0);

    return showTime > now;
};

    // Modified handleSeatSelection functions to pass theater name and time and scereen
    const handleSeatSelection = (theaterName, showTime, screen, layoutPath) => {
    if (!isShowtimeInFuture(showTime)) {
        setShowPopup(true);
        return;
    }

        navigate(layoutPath, {
            state: {
                theater: theaterName,
                time: showTime,
                screen: screen,
                movieName: "Retro",  
                 
            }
        });
    };

    return (
        <>
            <div className=" ">
                <Navbar/>
                <Categories/>

                <div className="w-75 ms-5 ps-4 ">
                    <div className=" py-1 ">
                        <div className="ms-2 mt-2 w-25">
                            <div className="name">Retro - (Tamil)</div>
                        </div>
                        <div className="abtthismovie mt-3 ms-2  w-25">
                            <a href="" className=" outline">Action</a>
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


    {/* Dynamic Cosmos Theater Show Timing  */}

                    <div className="cinema-div">
        <div className=" theaters">
            <Col className=' col-4 '>
                <div className="theaterone-leftcol-child1">
                    <div className="theat">
                        <div className="cinemaname-div">
                            <div className="heart-div w-25">
                                <img src={heartoff} alt="" style={{ height: "20px", width: "20px", maxWidth: "100%" }} />
                            </div>
                            <div className="cinemaname-div" style={{ maxWidth: "275px" }}>
                                <div className="cinemaname">Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore</div>
                            </div>
                        </div>
                        <div className="info w-25">
                            <div className="d-flex">
                                <span><img src={infoicon} alt="" style={{ height: "16px", width: "18px", maxWidth: "100%" }} /></span>
                                <span className='infotext'>INFO</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="theaterone-leftcol-child2">
                    <div className="bewarages-div">
                        <span className='m-ticketspan'><img src={mticket} alt="" style={{ width: "80px", display: "block" }} /></span>
                    </div>
                    <div className="bewarages-div">
                        <span className='m-ticketspan'><img src={fnb} alt="" style={{ width: "110px", display: "block" }} /></span>
                    </div>
                </div>
            </Col>

            <Col className='show-timing-col '>
                <div className="show-timing-div">
                    {[
                        { time: "09:00 AM", screen: "Screen - A" },
                        { time: "12:30 PM", screen: "Screen - B" },
                        { time: "04:00 PM", screen: "Screen - C" },
                        { time: "07:00 PM", screen: "Screen - D" },
                        { time: "11:00 PM", screen: "Screen - E" },
                    ].map((show, index) => (
                        <div key={index} className="time-div">
                            <div
                                onClick={() =>
                                    handleSeatSelection(
                                        "Cosmo Cinemas PEELAMEDU AC 4K RGB Lase:Coimbatore",
                                        show.time,
                                        show.screen,
                                        '/retro/buytickets/cosmoscinemaseatlayout'
                                    )
                                }
                                className="time-holding-div"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="movie-time mt-2">{show.time}</div>
                                <sub className='mt-4 '>{show.screen}</sub>
                            </div>
                        </div>
                    ))}
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


 

{/* Dynamic Karpagam Theatres Show Timings */}

                    <div className="cinema-div">
  <div className="theaters">
    <Col className="col-4">
      <div className="theaterone-leftcol-child1">
        <div className="theat">
          <div className="cinemaname-div">
            <div className="heart-div">
              <img src={heartoff} alt="" style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="cinemaname-div" style={{ maxWidth: "275px" }}>
              <div className="cinemaname">Karpagam Theatres 4K Dolby Atmos: Coimbatore</div>
            </div>
          </div>
          <div className="info">
            <div className="d-flex">
              <span><img src={infoicon} alt="" style={{ height: "16px", width: "16px" }} /></span>
              <span className="infotext">INFO</span>
            </div>
          </div>
        </div>
      </div>
      <div className="theaterone-leftcol-child2">
        <div className="bewarages-div">
          <span className="m-ticketspan"><img src={mticket} alt="" style={{ width: "80px" }} /></span>
        </div>
        <div className="bewarages-div">
          <span className="m-ticketspan"><img src={fnb} alt="" style={{ width: "110px" }} /></span>
        </div>
      </div>
    </Col>

    <Col className="show-timing-col">
      <div className="show-timing-div">
        {[
          { time: "09:00 AM", screen: "Screen - A" },
          { time: "12:30 PM", screen: "Screen - B" },
          { time: "04:00 PM", screen: "Screen - C" },
          { time: "07:30 PM", screen: "Screen - D" },
          { time: "11:00 PM", screen: "Screen - E" },
        ].map((show, index) => (
          <div key={index} className="time-div">
            <div
              onClick={() =>
                handleSeatSelection(
                  "Karpagam Theatres 4K Dolby Atmos: Coimbatore",
                  show.time,
                  show.screen,
                  "/retro/buytickets/karpagamcinemaseatlayout"
                )
              }
              className="time-holding-div"
            >
              <div className="movie-time mt-2">{show.time}</div>
              <sub className="mt-4">{show.screen}</sub>
            </div>
          </div>
        ))}
      </div>
      <div className="cancellation-div mt-3">
        <div className="cancel-holding-div">
          <div className="cancel">Cancellation available</div>
        </div>
      </div>
      <div className="empty-space"></div>
    </Col>
  </div>
</div>


                    


    {/*Dynamic Murugan Cinemas Show Timings*/}

<div className="cinema-div">
  <div className="theaters">
    <Col className="col-4">
      <div className="theaterone-leftcol-child1">
        <div className="theat">
          <div className="cinemaname-div">
            <div className="heart-div">
              <img src={heartoff} alt="" style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="cinemaname-div" style={{ maxWidth: "275px" }}>
              <div className="cinemaname">Murugan Cinemas A/C 4K Atmos: Thudiyalur</div>
            </div>
          </div>
          <div className="info">
            <div className="d-flex">
              <span><img src={infoicon} alt="" style={{ height: "16px", width: "16px" }} /></span>
              <span className="infotext">INFO</span>
            </div>
          </div>
        </div>
      </div>
      <div className="theaterone-leftcol-child2">
        <div className="bewarages-div">
          <span className="m-ticketspan"><img src={mticket} alt="" style={{ width: "80px" }} /></span>
        </div>
        <div className="bewarages-div">
          <span className="m-ticketspan"><img src={fnb} alt="" style={{ width: "110px" }} /></span>
        </div>
      </div>
    </Col>

    <Col className="show-timing-col">
      <div className="show-timing-div">
        {[
          { time: "09:00 AM", screen: "Screen - A" },
          { time: "12:30 PM", screen: "Screen - B" },
          { time: "04:00 PM", screen: "Screen - C" },
          { time: "07:30 PM", screen: "Screen - D" },
          { time: "11:00 PM", screen: "Screen - E" },
        ].map((show, index) => (
          <div key={index} className="time-div">
            <div
              onClick={() =>
                handleSeatSelection(
                  "Murugan Cinemas A/C 4K Atmos: Thudiyalur",
                  show.time,
                  show.screen,
                  "/retro/buytickets/murugancinemaseatlayout"
                )
              }
              className="time-holding-div"
            >
              <div className="movie-time mt-2">{show.time}</div>
              <sub className="mt-4">{show.screen}</sub>
            </div>
          </div>
        ))}
      </div>
      <div className="cancellation-div mt-3">
        <div className="cancel-holding-div">
          <div className="cancel">Cancellation available</div>
        </div>
      </div>
      <div className="empty-space"></div>
    </Col>
  </div>
</div>


{/* Dynamic Sri Sakthi Kalpana Cinemas Show Timings */}


<div className="cinema-div">
  <div className="theaters">
    <Col className="col-4">
      <div className="theaterone-leftcol-child1">
        <div className="theat">
          <div className="cinemaname-div">
            <div className="heart-div">
              <img src={heartoff} alt="" style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="cinemaname-div" style={{ maxWidth: "275px" }}>
              <div className="cinemaname">Sri Sakthi Kalpana Cinemas: Kavundampalayam</div>
            </div>
          </div>
          <div className="info">
            <div className="d-flex">
              <span><img src={infoicon} alt="" style={{ height: "16px", width: "16px" }} /></span>
              <span className="infotext">INFO</span>
            </div>
          </div>
        </div>
      </div>
      <div className="theaterone-leftcol-child2">
        <div className="bewarages-div">
          <span className="m-ticketspan"><img src={mticket} alt="" style={{ width: "80px" }} /></span>
        </div>
        <div className="bewarages-div">
          <span className="m-ticketspan"><img src={fnb} alt="" style={{ width: "110px" }} /></span>
        </div>
      </div>
    </Col>

    <Col className="show-timing-col">
      <div className="show-timing-div">
        {[
          { time: "09:00 AM", screen: "Screen - A" },
          { time: "12:30 PM", screen: "Screen - B" },
          { time: "04:00 PM", screen: "Screen - C" },
          { time: "07:30 PM", screen: "Screen - D" },
          { time: "11:00 PM", screen: "Screen - E" },
        ].map((show, index) => (
          <div key={index} className="time-div">
            <div
              onClick={() =>
                handleSeatSelection(
                  "Sri Sakthi Kalpana Cinemas: Kavundampalayam",
                  show.time,
                  show.screen,
                  "/retro/buytickets/kalpanacinemaseatlayout"
                )
              }
              className="time-holding-div"
            >
              <div className="movie-time mt-2">{show.time}</div>
              <sub className="mt-4">{show.screen}</sub>
            </div>
          </div>
        ))}
      </div>
      <div className="cancellation-div mt-3">
        <div className="cancel-holding-div">
          <div className="cancel">Non-cancellable</div>
        </div>
      </div>
      <div className="empty-space"></div>
    </Col>
  </div>
</div>


        </div>

            </div>
{/* popup for show alert  */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
                            alt="Show started"
                            style={{ width: "80px" }}
                        />
                        <h5>Show already started!</h5>
                        <button onClick={() => setShowPopup(false)} className="btn btn-secondary mt-2">
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer/>
        </>
    )
}

export default RetroBuytickets;
//============================================                ==============================================

// responsive code



