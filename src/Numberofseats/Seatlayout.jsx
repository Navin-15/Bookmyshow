// import React from 'react'
// import './Seatlayout.css'
// import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { IoIosClose } from "react-icons/io";
// import { FaChevronLeft } from "react-icons/fa6";

// function Seatlayout() {
//     // Initialize with current date/time
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [now, setNow] = useState(new Date());       

//   // Update 'now' every second
//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);


//    const rowsPlatimnum = [
//     { row: 'A', seats: [null, 8, 7, 6, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4, 3, 2, 1, null] },
//     { row: 'B', seats: [10, 9, 8, 7, 6, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 4, 3, 2, 1] },
//     { row: 'C', seats: [12, 11, 10, 9, 8, 7, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'D', seats: [12, 11, 10, 9, 8, 7, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 5, 4, 3, 2, 1] },
    
//   ];

//    const rowsGold = [
//     { row: 'E', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'F', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'G', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'H', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'I', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'J', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'K', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'L', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'M', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'N', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'O', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//   ];
//    const rowsSilver = [
//     { row: 'P', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//   ];

  

//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const toggleSeat = (row, seat) => {
//     if (!seat) return;
//     const seatId = `${row}${seat}`;
//     setSelectedSeats((prev) =>
//       prev.includes(seatId)
//         ? prev.filter((s) => s !== seatId)
//         : [...prev, seatId]
//     );
//   };

//   return (
// <>
//     <div className=" toppy bg-white"> <FaChevronLeft  className='fs-5' style={{position:"absolute", top:"20px",left:"20px",cursor:"pointer"}}/> 
//             <div className=" mx-5 "> 
//                 <div className=" p-2  ">
//                     <div className="">
//                         <a href="" className='text-dark' style={{textDecoration:"none"}}>Sample Lyout</a>
//                         <span className="bg-danger">
//                             <IoIosClose className='fs-2' style={{position:"absolute", right:"3rem", cursor:'pointer'}} />
//                         </span>
//                     </div>
//                     <div className=" d-flex">
//                         <span style={{fontSize:"13px",fontWeight:"700",color:"rgb(88, 86, 86)"}}>Sri Sakthi Kalpana Cinemas: Kavundampalayam   </span>
                        
                    
//                             &nbsp;

//                             <span style={{fontSize:"13px",fontWeight:"700",color:"rgb(88, 86, 86)"}}>
                               
//                                 {selectedDate.toLocaleString("default", {
//                                   weekday: "long",
//                                   month: "long",
//                                   day: "numeric",
//                                   year: "numeric",
//                                 })}
//                             </span>
//                     </div>
//                 </div>
//             </div>
//     {/* box-shadow: rgba(0, 0, 0, 0.2)  0px 3px 4px 3px; */}
//     <div className="toppy" style={{backgroundColor:'#f5f5fa',padding:"8px 0px",height:"auto",maxHeight:"50px",overflow:"hidden",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 5px 1px"}}>
//             <div className="w-75 ms-5">

//               <ul className='d-flex'>
              
//               <li className='timelistitem m-0'>
//                   9:00 AM 
//               </li>
//               <li className='timelistitem'>
//                   12:30 PM
//               </li>
//               <li className='timelistitem'>
//                   04:00 PM
//               </li>
//               <li className='timelistitem'>
//                   07:30 PM
//               </li>
//               <li className='timelistitem'>
//                   11:00 PM
//               </li>

//             </ul>
            
//           </div>
//     </div>
//     </div>

//     <div className="seeat container">
//       <div className="block">
//         <div className="blocklayout platinumlayout">
//           <table>
//             <tbody>
//               <tr>
//                 <td><div className="tirename">Rs.150 Platinum</div></td>
//               </tr>
//               {rowsPlatimnum.map(({ row, seats }) => (
//                 <tr key={row} className="d-flex align-items-center">
//                   <div className="seatR">{row}</div>
//                   <td className="SRow-1 d-flex flex-wrap">
//                     {seats.map((seat, idx) => {
//                       const seatId = `${row}${seat}`;
//                       return (
//                         <div
//                           key={idx}
//                           className={`seatempty ${seat && selectedSeats.includes(seatId) ? 'active-seat' : ''}`}
//                           onClick={() => toggleSeat(row, seat)}
//                         >
//                           {seat ? (
//                             <div href="#" className="seatno available" onClick={(e) => e.preventDefault()}>
//                               {seat}
//                             </div>
//                           ) : '\u00A0'}
//                         </div>
//                       );
//                     })}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>

//     <div className="seeat container">
//       <div className="block">
//         <div className="blocklayout platinumlayout">
//           <table>
//             <tbody>
//               <tr>
//                 <td><div className="tirename">Rs.130 Gold</div></td>
//               </tr>
//               {rowsGold.map(({ row, seats }) => (
//                 <tr key={row} className="d-flex align-items-center">
//                   <div className="seatR">{row}</div>
//                   <td className="SRow-1 d-flex flex-wrap">
//                     {seats.map((seat, idx) => {
//                       const seatId = `${row}${seat}`;
//                       return (
//                         <div
//                           key={idx}
//                           className={`seatempty ${seat && selectedSeats.includes(seatId) ? 'active-seat' : ''}`}
//                           onClick={() => toggleSeat(row, seat)}
//                         >
//                           {seat ? (
//                             <div href="#" className="seatno available" onClick={(e) => e.preventDefault()}>
//                               {seat}
//                             </div>
//                           ) : '\u00A0'}
//                         </div>
//                       );
//                     })}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>

//     <div className="seeat container">
//       <div className="block">
//         <div className="blocklayout platinumlayout">
//           <table>
//             <tbody>
//               <tr>
//                 <td><div className="tirename">Rs.100 Silver</div></td>
//               </tr>
//               {rowsSilver.map(({ row, seats }) => (
//                 <tr key={row} className="d-flex align-items-center">
//                   <div className="seatR">{row}</div>
//                   <td className="SRow-1 d-flex flex-wrap">
//                     {seats.map((seat, idx) => {
//                       const seatId = `${row}${seat}`;
//                       return (
//                         <div
//                           key={idx}
//                           className={`seatempty ${seat && selectedSeats.includes(seatId) ? 'active-seat' : ''}`}
//                           onClick={() => toggleSeat(row, seat)}
//                         >
//                           {seat ? (
//                             <div href="#" className="seatno available" onClick={(e) => e.preventDefault()}>
//                               {seat}
//                             </div>
//                           ) : '\u00A0'}
//                         </div>
//                       );
//                     })}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>


{/* ------------------------------------------------------------------------------------------------------------- */}
{/* gold div */}
                    {/* <div className="blocklayout goldlayout ">

                        <table className=''>
                          <tbody className=''>
                            <tr>
                              <td> <div className="tirename">Rs.130 Gold</div> </td>
                            </tr>
              
                        <div className="emptyln"></div>
                            
                          <div className="">
                        <tr className='mt-2 d-flex'>
                          
                            <div className="seatR ">E</div> 
                          
                          <td className='SRow-1'>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">F</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">G</div> 
                          
                          <td className='SRow-1'>
                            
                          <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">H</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">I</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">J</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">K</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">L</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty">   <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">M</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>

                        <tr className=' d-flex mt-4'>
                          
                            <div className="seatR ">N</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                        <tr className=' d-flex'>
                          
                            <div className="seatR ">O</div> 
                          
                          <td className='SRow-1'>
                            
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>  
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                          </div>
                          </tbody>
                        </table>
                </div> */}
{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* silver div */}
                  {/* <div className="blocklayout goldlayout ">

                        <table className=''>
                          <tbody className=''>
                            <tr>
                              <td> <div className="tirename">Rs.100 Silver</div> </td>
                            </tr>
              
                        <div className="emptyln"></div>
                            
                          <div className="">
                        <tr className='mt-2 d-flex'>
                          
                            <div className="seatR ">P</div> 
                          
                          <td className='SRow-1'>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">23</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">22</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">21</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">20</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">19</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">18</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">17</a> </div>
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">16</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">15</a> </div> 
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">14</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">13</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">12</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">11</a> </div>  
                            <div className="seatempty"> <a className='seatno availabledouble px-1 text-center' href="">10</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">9</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">8</a> </div>  
                            <div className="seatempty"> <a className='seatno available' href="">7</a> </div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty">&nbsp;</div>
                            <div className="seatempty"> <a className='seatno available' href="">6</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">5</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">4</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">3</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">2</a> </div>
                            <div className="seatempty"> <a className='seatno available' href="">1</a> </div>

                          </td>
                        </tr>
                          </div>
                          </tbody>
                        </table>
                </div> */}
              {/* </div>
          </div> */}
{/* ----------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* screen div */}
//           <div className="parentscreendiv">
            
//              <div className="screendiv">Screen</div>

//           </div>
// {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
//           <div className=" profile w-100 d-flex justify-content-center bg-white" style={{boxShadow:"rgba(0, 0, 0, 0.1) 4px -5px 5px 1px"}}>
//                <div className="w-50 d-flex mt-2 justify-content-center">
                
//                 <div className=" w-25">
//                     <div className="seatempty"> <a className='seatno availabledouble' style={{padding:"9px"}} href=""></a></div>
//                      Available
//                </div>
//                <div className=" w-25">
//                     <div className="seatempty"> <a className='seatno availabledouble' style={{padding:"9px",backgroundColor:"green"}} href=""></a> </div>
//                     Selected
//                </div>
//                <div className=" w-25">
//                     <div className="seatempty"> <a className='seatno availabledouble' style={{padding:"9px",backgroundColor:"grey",border:"none"}} href=""></a> </div>
//                     Sold
//                 </div></div>                 
//           </div>                                
// </>
//   )
// }

// export default Seatlayout
//----------------------------------------------------------------------------------------------------

// final code 

// import React, { useState } from 'react';

//   const SeatSelection = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const rowsPlatinum = [
//     { row: 'A', seats: [null, 8, 7, 6, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4, 3, 2, 1, null] },
//     { row: 'B', seats: [10, 9, 8, 7, 6, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 5, 4, 3, 2, 1] },
//     { row: 'C', seats: [12, 11, 10, 9, 8, 7, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'D', seats: [12, 11, 10, 9, 8, 7, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 5, 4, 3, 2, 1] },
//   ];

//   const rowsGold = [
//     { row: 'E', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'F', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'G', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'H', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'I', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'J', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'K', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'L', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'M', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'N', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//     { row: 'O', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//   ];

//   const rowsSilver = [
//     { row: 'P', seats: [23, 22, 21, 20, 19, 18, null, null, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, null, null, 6, 5, 4, 3, 2, 1] },
//   ];

//   const toggleSeat = (row, seat, priceCategory) => {
//     const seatId = `${row}${seat}`;
//     const found = selectedSeats.find(s => s.id === seatId);
//     if (found) {
//       setSelectedSeats(selectedSeats.filter(s => s.id !== seatId));
//     } else {
//       if (selectedSeats.length >= 10) {
//       alert('You can only select a maximum of 10 seats.');
//       return;
//     }
//       setSelectedSeats([...selectedSeats, { id: seatId, category: priceCategory }]);
//     }
//   };

//   const calculateTotal = (category) => {
//     const count = selectedSeats.filter(s => s.category === category).length;
//     const prices = { Platinum: 150, Gold: 130, Silver: 100 };
//     return count * prices[category];
//   };

//   const renderSection = (title, rows, priceCategory) => (
//   <div className="seeat container">
//     <div className="block">
//       <div className="blocklayout platinumlayout">
//         <table>
//           <tbody>
//             <tr>
//               <td>
//                 <div className="tirename">
//                   {title} {/* static */}
//                 </div>
//               </td>
//             </tr>
//             {rows.map(({ row, seats }) => (
//               <tr key={row} className="d-flex align-items-center">
//                 <div className="seatR">{row}</div>
//                 <td className="SRow-1 d-flex flex-wrap">
//                   {seats.map((seat, idx) => {
//                     const seatId = `${row}${seat}`;
//                     const isActive = selectedSeats.find(s => s.id === seatId);
//                     return (
//                       <div
//                         key={idx}
//                         className={`seatempty ${isActive ? 'active-seat' : ''}`}
//                         onClick={() => {
//                           if (!seat) return;               // 🔒 Prevent null-clicks
//                           toggleSeat(row, seat, priceCategory);
//                         }}
//                         // onClick={() => toggleSeat(row, seat, priceCategory)}
//                       >
//                         {seat ? (
//                           <div className="seatno available">{seat}</div>
//                         ) : '\u00A0'}
//                       </div>
//                     );
//                   })}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// );




//   return (
//     <>
//       {renderSection('Platinum', rowsPlatinum, 'Platinum')}
//       {renderSection('Gold', rowsGold, 'Gold')}
//       {renderSection('Silver', rowsSilver, 'Silver')}
//       <div className="total-amount-div">
//             <div className="total-amount">
//                 Pay: Rs.{calculateTotal('Platinum') + calculateTotal('Gold') + calculateTotal('Silver')}
//             </div>
//       </div>
//     </>
//   );
// };

// export default SeatSelection;

//==========================================-------------------------------------------------------------------
//const renderSection = (title, rows, priceCategory) => (
//     <div className="seeat container">
//       <div className="block">
//         <div className="blocklayout platinumlayout">
//           <table>
//             <tbody>
//               <tr>
//                 <td><div className="tirename">Rs.{calculateTotal(priceCategory)} {priceCategory}</div></td>
//               </tr>
//               {rows.map(({ row, seats }) => (
//                 <tr key={row} className="d-flex align-items-center">
//                   <div className="seatR">{row}</div>
//                   <td className="SRow-1 d-flex flex-wrap">
//                     {seats.map((seat, idx) => {
//                       const seatId = `${row}${seat}`;
//                       const isActive = selectedSeats.find(s => s.id === seatId);
//                       return (
//                         <div
//                           key={idx}
//                           className={`seatempty ${isActive ? 'active-seat' : ''}`}
//                           onClick={() => toggleSeat(row, seat, priceCategory)}
                          
//                           // style={boxStyle} onClick={() => setIsClicked(!isClicked)}
//                         >
//                           {seat ? (
//                             <div className="seatno available">
//                               {seat}
//                             </div>
//                           ) : '\u00A0'}
//                         </div>
//                       );
//                     })}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>

//================-=-=-=-=-=-=-=-======================-=-==-==-===========================================

