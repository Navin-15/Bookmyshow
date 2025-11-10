// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const ROWS = {
//   platinum: ['A','B','C','D','E','F','G'],
//   gold: ['H','I','J','K','L', 'M', 'N'],
//   silver: ['O','P']
// };

// const AdminSeatlayout = () => {
//   const location = useLocation();


//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [theater, setTheater] = useState('');
//   const [movieName, setMovieName] = useState('');
//   const [screen, setScreen] = useState('');
//   const [time, setTime] = useState('');
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     if (location.state) {
//       setTheater(location.state.theater || '');
//       setMovieName(location.state.movieName || '');
//       setScreen(location.state.screen || '');
//       setTime(location.state.time || '');
//     }
//   }, [location.state]);

//   useEffect(() => {
//     const fetchBlocked = async () => {
//       if (!theater || !movieName || !screen || !time) return;
//       const params = {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString()
//       };
//       const res = await axios.get('http://localhost:5000/api/admin/blocked-seats', { params });
//       setBlockedSeats(res.data || []);
//     };

//     fetchBlocked();
//   }, [theater, movieName, screen, time, date]);

//   const toggleBlockSeat = (row, seat, type) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);

//     if (isBlocked) {
//       setBlockedSeats(prev => prev.filter(id => id !== seatId));
//     } else {
//       setBlockedSeats(prev => [...prev, seatId]);
//     }

//     setSelectedSeats(prev => {
//       const exists = prev.find(s => s.id === seatId);
//       return exists ? prev.filter(s => s.id !== seatId) : [...prev, { id: seatId, type }];
//     });
//   };

//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.find(s => s.id === seatId);
//     if (isBlocked) return 'seatno blocked-seat'; // custom gray class
//     if (isSelected) return 'seatno selected-seat';
//     return 'seatno availabledouble';
//   };

//   const saveBlockedSeats = async () => {
//     const payload = {
//       theater,
//       movieName,
//       screen,
//       time,
//       date: date.toLocaleDateString(),
//       seats: blockedSeats
//     };
//     try {
//       await axios.post('http://localhost:5000/api/admin/block-seats', payload);
//       alert('Blocked seats saved.');
//     } catch (err) {
//       console.error(err);
//       alert('Failed to save.');
//     }
//   };

//   return (
//     <div className="admin-seatlayout container my-4">
//       <h3>Admin Seat Layout - Block/Unblock Seats</h3>
//       <p><strong>Movie:</strong> {movieName} | <strong>Theater:</strong> {theater} | <strong>Screen:</strong> {screen} | <strong>Time:</strong> {time} | <strong>Date:</strong> {date.toLocaleDateString()}</p>

//       <div className="screen my-3 text-center bg-dark text-white py-2">Screen</div>

//       <div className="seat-blocks">
//         {Object.keys(ROWS).map(category => (
//           <div key={category} className="mb-3">
//             <h5 className="text-capitalize">{category} - Rs.{SEAT_PRICE[category]}</h5>
//             {ROWS[category].map(row => (
//               <div key={row} className="d-flex align-items-center mb-2">
//                 <strong className="me-3">{row}</strong>
//                 {[...Array(23).keys()].map(i => {
//                   const seatNo = 23 - i;
//                   if (seatNo === 17 || seatNo === 7) return <div key={i} className="seatempty" style={{ width: "30px" }}></div>;
//                   return (
//                     <div key={i} className="seatempty">
//                       <a
//                         href="#"
//                         className={getSeatClass(row, seatNo)}
//                         onClick={e => {
//                           e.preventDefault();
//                           toggleBlockSeat(row, seatNo, category);
//                         }}
//                       >
//                         {seatNo}
//                       </a>
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 text-center">
//         <button className="btn btn-primary" onClick={saveBlockedSeats}>
//           Save Blocked Seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminSeatlayout = () => {
//   const [theater, setTheater] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   // Example seat rows (A–E with 10 seats each)
//   const seatRows = ["A", "B", "C", "D", "E"];
//   const seatNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

//   // Toggle seat selection
//   const toggleSeat = (seat) => {
//     if (blockedSeats.includes(seat)) return; // already blocked

//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter((s) => s !== seat));
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };

//   // Fetch blocked seats from backend
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;

//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: {
//           theater,
//           movieName,
//           screen,
//           time,
//           date: date.toLocaleDateString(),
//         },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   // Block selected seats
//   const handleBlockSeats = async () => {
//     if (!theater || !movieName || !screen || !time) {
//       alert("⚠️ Please fill all fields (Theater, Movie, Screen, Time, Date)");
//       return;
//     }

//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats first!");
//       return;
//     }

//     const payload = {
//       theater,
//       movieName,
//       screen,
//       time,
//       date: date.toLocaleDateString(),
//       seats: selectedSeats,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", payload);
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]); // clear current selection
//       fetchBlockedSeats(); // refresh blocked seats
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//       alert("Failed to block seats. Check console.");
//     }
//   };

//   // Auto-fetch blocked seats when filters change
//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🎬 Admin Seat Layout</h2>

//       {/* Filters */}
//       <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         <input
//           placeholder="Theater"
//           value={theater}
//           onChange={(e) => setTheater(e.target.value)}
//         />
//         <input
//           placeholder="Movie"
//           value={movieName}
//           onChange={(e) => setMovieName(e.target.value)}
//         />
//         <input
//           placeholder="Screen"
//           value={screen}
//           onChange={(e) => setScreen(e.target.value)}
//         />
//         <input
//           placeholder="Time (e.g. 10:00 AM)"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//         <input
//           type="date"
//           onChange={(e) => setDate(new Date(e.target.value))}
//         />
//       </div>

//       {/* Seat Layout */}
//       <div style={{ display: "grid", gap: "10px" }}>
//         {seatRows.map((row) => (
//           <div key={row} style={{ display: "flex", gap: "10px" }}>
//             {seatNumbers.map((num) => {
//               const seat = `${row}${num}`;
//               const isBlocked = blockedSeats.includes(seat);
//               const isSelected = selectedSeats.includes(seat);

//               return (
//                 <div
//                   key={seat}
//                   onClick={() => toggleSeat(seat)}
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     lineHeight: "40px",
//                     textAlign: "center",
//                     borderRadius: "5px",
//                     cursor: isBlocked ? "not-allowed" : "pointer",
//                     backgroundColor: isBlocked
//                       ? "red"
//                       : isSelected
//                       ? "green"
//                       : "lightgray",
//                     color: "white",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       {/* Block Button */}
//       <button
//         onClick={handleBlockSeats}
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           backgroundColor: "blue",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Block Selected Seats
//       </button>
//     </div>
//   );
// };

// export default AdminSeatlayout;




// only do blocking the seats 

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css"; // reuse same CSS as frontend

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const ROWS = {
//   platinum: ["A", "B", "C", "D", "E", "F", "G"],
//   gold: ["H", "I", "J", "K", "L", "M", "N"],
//   silver: ["O", "P"],
// };

// const AdminSeatlayout = () => {
//   const [theater, setTheater] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   // Fetch blocked seats from backend
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;

//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: {
//           theater,
//           movieName,
//           screen,
//           time,
//           date: date.toLocaleDateString(),
//         },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   // Block selected seats
//   const handleBlockSeats = async () => {
//     if (!theater || !movieName || !screen || !time) {
//       alert("⚠️ Please fill all fields (Theater, Movie, Screen, Time, Date)");
//       return;
//     }

//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats first!");
//       return;
//     }

//     const payload = {
//       theater,
//       movieName,
//       screen,
//       time,
//       date: date.toLocaleDateString(),
//       seats: selectedSeats,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", payload);
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   // Seat click handler
//   const handleSeatClick = (row, seat, type) => {
//     const seatId = `${row}${seat}`;
//     if (blockedSeats.includes(seatId)) return;

//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats((prev) => prev.filter((s) => s !== seatId));
//     } else {
//       setSelectedSeats((prev) => [...prev, seatId]);
//     }
//   };

//   // Seat class
//   const getSeatClass = (row, seat, type) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);

//     if (isBlocked) return "seatno orange-disabled";
//     if (isSelected) return "seatno selected-seat px-2 text-center";
//     return "seatno availabledouble px-1 text-center";
//   };

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div className="container">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Filters */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <input placeholder="Theater" value={theater} onChange={(e) => setTheater(e.target.value)} />
//         <input placeholder="Movie" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
//         <input placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
//         <input placeholder="Time (e.g. 10:00 AM)" value={time} onChange={(e) => setTime(e.target.value)} />
//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {Object.keys(ROWS).map((category) => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <div className="tirename">
//                         Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
//                       </div>
//                     </td>
//                   </tr>
//                   {ROWS[category].map((row) => (
//                     <tr key={row} className="d-flex">
//                       <div className="seatR bg-dark">{row}</div>
//                       <td className="SRow-1 ms-5 ps-5 pe-5 py-1">
//                         {[...Array(23).keys()].map((i) => {
//                           const seatNo = 23 - i;
//                           if (seatNo === 17 || seatNo === 7) return <div className="seatempty" key={i}>&nbsp;</div>;
//                           return (
//                             <div className="seatempty" key={i}>
//                               <a
//                                 href="#"
//                                 className={getSeatClass(row, seatNo, category)}
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   handleSeatClick(row, seatNo, category);
//                                 }}
//                                 style={blockedSeats.includes(`${row}${seatNo}`) ? { cursor: "not-allowed" } : {}}
//                               >
//                                 {seatNo}
//                               </a>
//                             </div>
//                           );
//                         })}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Block Button */}
//       <div className="d-flex justify-content-center my-3">
//         <button className="btn btn-primary w-25" onClick={handleBlockSeats}>
//           Block Selected Seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;


// enable un-blocking the blocked seats

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css";

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const ROWS = {
//   platinum: ["A", "B", "C", "D", "E", "F", "G"],
//   gold: ["H", "I", "J", "K", "L", "M", "N"],
//   silver: ["O", "P"],
// };

// const AdminSeatlayout = () => {
//   const [theater, setTheater] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unblockSeats, setUnblockSeats] = useState([]);

//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   const handleBlockSeats = async () => {
//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats to block!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: selectedSeats,
//       });
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   const handleUnblockSeats = async () => {
//     if (unblockSeats.length === 0) {
//       alert("⚠️ Please select seats to unblock!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/unblock-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: unblockSeats,
//       });
//       alert("✅ Seats unblocked successfully!");
//       setUnblockSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error unblocking seats:", err);
//     }
//   };

//   const handleSeatClick = (row, seat) => {
//     const seatId = `${row}${seat}`;

//     if (blockedSeats.includes(seatId)) {
//       // If seat is blocked → toggle for unblocking
//       if (unblockSeats.includes(seatId)) {
//         setUnblockSeats((prev) => prev.filter((s) => s !== seatId));
//       } else {
//         setUnblockSeats((prev) => [...prev, seatId]);
//       }
//     } else {
//       // If seat is free → toggle for blocking
//       if (selectedSeats.includes(seatId)) {
//         setSelectedSeats((prev) => prev.filter((s) => s !== seatId));
//       } else {
//         setSelectedSeats((prev) => [...prev, seatId]);
//       }
//     }
//   };

//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);
//     const isUnblockSelected = unblockSeats.includes(seatId);

//     if (isBlocked && isUnblockSelected) return "seatno yellow-selected"; // Marked for unblocking
//     if (isBlocked) return "seatno orange-disabled"; // Blocked
//     if (isSelected) return "seatno selected-seat px-2 text-center"; // Selected for blocking
//     return "seatno availabledouble px-1 text-center"; // Free
//   };

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div className="container">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Inputs */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <input placeholder="Theater" value={theater} onChange={(e) => setTheater(e.target.value)} />
//         <input placeholder="Movie" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
//         <input placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
//         <input placeholder="Time (e.g. 10:00 AM)" value={time} onChange={(e) => setTime(e.target.value)} />
//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {Object.keys(ROWS).map((category) => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <div className="tirename">
//                         Rs.{SEAT_PRICE[category]} {category}
//                       </div>
//                     </td>
//                   </tr>
//                   {ROWS[category].map((row) => (
//                     <tr key={row} className="d-flex">
//                       <div className="seatR bg-dark">{row}</div>
//                       <td className="SRow-1 ms-5 ps-5 pe-5 py-1">
//                         {[...Array(23).keys()].map((i) => {
//                           const seatNo = 23 - i;
//                           if (seatNo === 17 || seatNo === 7) return <div className="seatempty" key={i}></div>;
//                           return (
//                             <div className="seatempty" key={i}>
//                               <a
//                                 href="#"
//                                 className={getSeatClass(row, seatNo)}
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   handleSeatClick(row, seatNo);
//                                 }}
//                               >
//                                 {seatNo}
//                               </a>
//                             </div>
//                           );
//                         })}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-center gap-3 my-3">
//         <button className="btn btn-primary" onClick={handleBlockSeats}>
//           Block Selected Seats
//         </button>
//         <button className="btn btn-warning" onClick={handleUnblockSeats}>
//           Unblock Selected Seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;

// only blocking the seats

// import React, { useEffect, useState } from "react"; 
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css";

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const ROWS = {
//   platinum: ["A", "B", "C", "D", "E", "F", "G"],
//   gold: ["H", "I", "J", "K", "L", "M", "N"],
//   silver: ["O", "P"],
// };

// const AdminSeatlayout = () => {
//   const [theater, setTheater] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]); // seats selected for blocking
//   const [unblockSeats, setUnblockSeats] = useState([]);   // seats selected for unblocking

//   // Fetch blocked seats from server
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   // Block selected seats
//   const handleBlockSeats = async () => {
//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats to block!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: selectedSeats,
//       });
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats(); // refresh blocked seats
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   // Unblock selected seats
//   const handleUnblockSeats = async () => {
//     if (unblockSeats.length === 0) {
//       alert("⚠️ Please select seats to unblock!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/unblock-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: unblockSeats,
//       });
//       alert("✅ Seats unblocked successfully!");
//       setUnblockSeats([]);
//       fetchBlockedSeats(); // refresh blocked seats
//     } catch (err) {
//       console.error("❌ Error unblocking seats:", err);
//     }
//   };

//   // Toggle seat selection for blocking/unblocking
//   const handleSeatClick = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     if (blockedSeats.includes(seatId)) {
//       // Seat is blocked → toggle selection for unblocking
//       if (unblockSeats.includes(seatId)) {
//         setUnblockSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setUnblockSeats(prev => [...prev, seatId]);
//       }
//     } else {
//       // Seat is free → toggle selection for blocking
//       if (selectedSeats.includes(seatId)) {
//         setSelectedSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setSelectedSeats(prev => [...prev, seatId]);
//       }
//     }
//   };

//   // Return seat CSS class based on status
//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);
//     const isUnblockSelected = unblockSeats.includes(seatId);

//     if (isBlocked && isUnblockSelected) return "seatno yellow-selected"; // marked for unblocking
//     if (isBlocked) return "seatno orange-disabled"; // blocked
//     if (isSelected) return "seatno selected-seat px-2 text-center"; // selected for blocking
//     return "seatno availabledouble px-1 text-center"; // free
//   };

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div className="container">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Inputs */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <input placeholder="Theater" value={theater} onChange={(e) => setTheater(e.target.value)} />
//         <input placeholder="Movie" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
//         <input placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
//         <input placeholder="Time (e.g. 10:00 AM)" value={time} onChange={(e) => setTime(e.target.value)} />
//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {Object.keys(ROWS).map((category) => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <div className="tirename">
//                         Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
//                       </div>
//                     </td>
//                   </tr>
//                   {ROWS[category].map((row) => (
//                     <tr key={row} className="d-flex">
//                       <div className="seatR bg-dark">{row}</div>
//                       <td className="SRow-1 ms-5 ps-5 pe-5 py-1">
//                         {[...Array(23).keys()].map((i) => {
//                           const seatNo = 23 - i;
//                           if (seatNo === 17 || seatNo === 7) return <div className="seatempty" key={i}></div>;
//                           return (
//                             <div className="seatempty" key={i}>
//                               <a
//                                 href="#"
//                                 className={getSeatClass(row, seatNo)}
//                                 onClick={(e) => { e.preventDefault(); handleSeatClick(row, seatNo); }}
//                               >
//                                 {seatNo}
//                               </a>
//                             </div>
//                           );
//                         })}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-center gap-3 my-3">
//         <button className="btn btn-primary" onClick={handleBlockSeats}>
//           Block Selected Seats
//         </button>
//         <button className="btn btn-warning" onClick={handleUnblockSeats}>
//           Unblock Selected Seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;

//unblocking the blocked seats

// import React, { useEffect, useState } from "react"; 
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css";

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const ROWS = {
//   platinum: ["A", "B", "C", "D", "E", "F", "G"],
//   gold: ["H", "I", "J", "K", "L", "M", "N"],
//   silver: ["O", "P"],
// };

// const AdminSeatlayout = () => {
//   const [theater, setTheater] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]); // for blocking
//   const [unblockSeats, setUnblockSeats] = useState([]);   // for unblocking

//   // Fetch blocked seats
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   // Block selected seats
//   const handleBlockSeats = async () => {
//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats to block!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: selectedSeats,
//       });
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   // Unblock selected seats
//   const handleUnblockSeats = async () => {
//     if (unblockSeats.length === 0) {
//       alert("⚠️ Please select seats to unblock!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/unblock-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: unblockSeats,
//       });
//       alert("✅ Seats unblocked successfully!");
//       setUnblockSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error unblocking seats:", err);
//     }
//   };

//   // Toggle seat selection
//   const handleSeatClick = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     if (blockedSeats.includes(seatId)) {
//       // Toggle for unblocking
//       if (unblockSeats.includes(seatId)) {
//         setUnblockSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setUnblockSeats(prev => [...prev, seatId]);
//       }
//     } else {
//       // Toggle for blocking
//       if (selectedSeats.includes(seatId)) {
//         setSelectedSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setSelectedSeats(prev => [...prev, seatId]);
//       }
//     }
//   };

//   // Seat CSS class
//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);
//     const isUnblockSelected = unblockSeats.includes(seatId);

//     if (isBlocked && isUnblockSelected) return "seatno yellow-selected"; // marked for unblocking
//     if (isBlocked) return "seatno orange-disabled"; // blocked
//     if (isSelected) return "seatno selected-seat px-2 text-center"; // selected for blocking
//     return "seatno availabledouble px-1 text-center"; // free
//   };

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div className="container">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Inputs */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <input placeholder="Theater" value={theater} onChange={(e) => setTheater(e.target.value)} />
//         <input placeholder="Movie" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
//         <input placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
//         <input placeholder="Time (e.g. 10:00 AM)" value={time} onChange={(e) => setTime(e.target.value)} />
//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {Object.keys(ROWS).map(category => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <div className="tirename">
//                         Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
//                       </div>
//                     </td>
//                   </tr>
//                   {ROWS[category].map(row => (
//                     <tr key={row} className="d-flex">
//                       <div className="seatR bg-dark">{row}</div>
//                       <td className="SRow-1 ms-5 ps-5 pe-5 py-1">
//                         {[...Array(23).keys()].map(i => {
//                           const seatNo = 23 - i;
//                           if (seatNo === 17 || seatNo === 7) return <div className="seatempty" key={i}></div>;
//                           return (
//                             <div className="seatempty" key={i}>
//                               <a
//                                 href="#"
//                                 className={getSeatClass(row, seatNo)}
//                                 onClick={(e) => { e.preventDefault(); handleSeatClick(row, seatNo); }}
//                                 style={{ cursor: "pointer" }} // now blocked seats are clickable
//                               >
//                                 {seatNo}
//                               </a>
//                             </div>
//                           );
//                         })}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-center gap-3 my-3">
//         <button className="btn btn-primary" onClick={handleBlockSeats}>
//           Block Selected Seats
//         </button>
//         <button className="btn btn-warning" onClick={handleUnblockSeats}>
//           Unblock Selected Seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;

// final code with blocking and unblocking seats apply this functions and code to all other seatlayout components wisely  

// import React, { useEffect, useState } from "react"; 
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css";
// // import Adminsidebar from '../../AdminSide/Adminsidebar';
// // import Adminheader from '../../AdminHead/Adminheader';
// // import './Managetheater.css';

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const ROWS = {
//   platinum: ["A", "B", "C", "D", "E", "F", "G"],
//   gold: ["H", "I", "J", "K", "L", "M", "N"],
//   silver: ["O", "P"],
// };

// const AdminSeatlayout = () => {
//   const [theater, setTheater] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]); // for blocking
//   const [unblockSeats, setUnblockSeats] = useState([]);   // for unblocking

//   // Fetch blocked seats
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   // Block selected seats
//   const handleBlockSeats = async () => {
//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats to block!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: selectedSeats,
//       });
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   // Unblock selected seats
//   const handleUnblockSeats = async () => {
//     if (unblockSeats.length === 0) {
//       alert("⚠️ Please select seats to unblock!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/unblock-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: unblockSeats,
//       });
//       alert("✅ Seats unblocked successfully!");
//       setBlockedSeats(prev => prev.filter(seat => !unblockSeats.includes(seat)));
//       setUnblockSeats([]);
//     } catch (err) {
//       console.error("❌ Error unblocking seats:", err);
//     }
//   };

//   // Toggle seat selection
//   const handleSeatClick = (row, seat) => {
//     const seatId = `${row}${seat}`;

//     if (blockedSeats.includes(seatId)) {
//       // Blocked → select for unblocking
//       if (unblockSeats.includes(seatId)) {
//         setUnblockSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setUnblockSeats(prev => [...prev, seatId]);
//       }
//     } else {
//       // Free → select for blocking
//       if (selectedSeats.includes(seatId)) {
//         setSelectedSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setSelectedSeats(prev => [...prev, seatId]);
//       }
//     }
//   };

//   // Seat CSS class
//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);
//     const isUnblockSelected = unblockSeats.includes(seatId);

//     if (isBlocked && isUnblockSelected) return "seatno yellow-selected"; // selected for unblocking
//     if (isBlocked) return "seatno orange-disabled clickable"; // blocked but clickable
//     if (isSelected) return "seatno selected-seat px-2 text-center"; // selected for blocking
//     return "seatno availabledouble px-1 text-center"; // free
//   };

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//   <>

//     {/* <div className="adminside"><Adminsidebar /></div>
//       <Adminheader /> */}

//     <div className="container Parentseatlayout">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Inputs */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <input placeholder="Theater" value={theater} onChange={(e) => setTheater(e.target.value)} />
//         <input placeholder="Movie" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
//         <input placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
//         <input placeholder="Time (e.g. 10:00 AM)" value={time} onChange={(e) => setTime(e.target.value)} />
//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {Object.keys(ROWS).map(category => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <div className="tirename">
//                         Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
//                       </div>
//                     </td>
//                   </tr>
//                   {ROWS[category].map(row => (
//                     <tr key={row} className="d-flex">
//                       <div className="seatR bg-dark">{row}</div>
//                       <td className="SRow-1 ms-5 ps-5 pe-5 py-1">
//                         {[...Array(23).keys()].map((i) => {
//                           const seatNo = 23 - i;
//                           if (seatNo === 17 || seatNo === 7) return <div className="seatempty" key={i}></div>;
//                           return (
//                             <div className="seatempty" key={i}>
//                               <a
//                                 href="#"
//                                 className={getSeatClass(row, seatNo)}
//                                 onClick={(e) => { e.preventDefault(); handleSeatClick(row, seatNo); }}
//                                 style={{ cursor: "pointer" }} // ensure clickable
//                               >
//                                 {seatNo}
//                               </a>
//                             </div>
//                           );
//                         })}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-center gap-3 my-3">
//         <button className="btn btn-primary" onClick={handleBlockSeats}>
//           Block Selected Seats
//         </button>
//         <button className="btn btn-warning" onClick={handleUnblockSeats}>
//           Unblock Selected Seats
//         </button>
//       </div>

//       {/* Legend */}
//       <div className="d-flex justify-content-center gap-3 my-2">
//         <div className="d-flex align-items-center gap-1">
//           <span className="seatno availabledouble px-2"></span> Available
//         </div>
//         <div className="d-flex align-items-center gap-1">
//           <span className="seatno selected-seat px-2"></span> Selected for Block
//         </div>
//         <div className="d-flex align-items-center gap-1">
//           <span className="seatno orange-disabled px-2"></span> Blocked
//         </div>
//         <div className="d-flex align-items-center gap-1">
//           <span className="seatno yellow-selected px-2"></span> Selected for Unblock
//         </div>
//       </div>
//     </div>
//   </>
//   );
// };

// export default AdminSeatlayout;

// dynamically add seats with inputs

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css";

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const AdminSeatlayout = () => {
//   const [theater, setTheater] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());

//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]); 
//   const [unblockSeats, setUnblockSeats] = useState([]);  

//   // 🔥 Dynamic rows state
//   const [rows, setRows] = useState([
//     { category: "platinum", rowName: "A", seats: 23 },
//     { category: "gold", rowName: "H", seats: 23 },
//     { category: "silver", rowName: "O", seats: 23 },
//   ]);

//   // Form state for adding rows
//   const [newCategory, setNewCategory] = useState("platinum");
//   const [newRowName, setNewRowName] = useState("");
//   const [newSeatCount, setNewSeatCount] = useState(20);

//   // Fetch blocked seats
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   const handleBlockSeats = async () => {
//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats to block!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: selectedSeats,
//       });
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   const handleUnblockSeats = async () => {
//     if (unblockSeats.length === 0) {
//       alert("⚠️ Please select seats to unblock!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/unblock-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: unblockSeats,
//       });
//       alert("✅ Seats unblocked successfully!");
//       setBlockedSeats(prev => prev.filter(seat => !unblockSeats.includes(seat)));
//       setUnblockSeats([]);
//     } catch (err) {
//       console.error("❌ Error unblocking seats:", err);
//     }
//   };

//   const handleSeatClick = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     if (blockedSeats.includes(seatId)) {
//       if (unblockSeats.includes(seatId)) {
//         setUnblockSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setUnblockSeats(prev => [...prev, seatId]);
//       }
//     } else {
//       if (selectedSeats.includes(seatId)) {
//         setSelectedSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setSelectedSeats(prev => [...prev, seatId]);
//       }
//     }
//   };

//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);
//     const isUnblockSelected = unblockSeats.includes(seatId);

//     if (isBlocked && isUnblockSelected) return "seatno yellow-selected"; 
//     if (isBlocked) return "seatno orange-disabled clickable"; 
//     if (isSelected) return "seatno selected-seat px-2 text-center"; 
//     return "seatno availabledouble px-1 text-center"; 
//   };

//   // ✅ Add new row dynamically
//   const handleAddRow = () => {
//     if (!newRowName || newSeatCount <= 0) {
//       alert("Enter valid row name and seat count!");
//       return;
//     }
//     setRows(prev => [...prev, { category: newCategory, rowName: newRowName, seats: newSeatCount }]);
//     setNewRowName("");
//     setNewSeatCount(20);
//   };

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div className="container Parentseatlayout">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Inputs */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <input placeholder="Theater" value={theater} onChange={(e) => setTheater(e.target.value)} />
//         <input placeholder="Movie" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
//         <input placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
//         <input placeholder="Time (e.g. 10:00 AM)" value={time} onChange={(e) => setTime(e.target.value)} />
//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* 🔥 Add row dynamically */}
//       <div className="d-flex gap-2 mb-3">
//         <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
//           <option value="platinum">Platinum</option>
//           <option value="gold">Gold</option>
//           <option value="silver">Silver</option>
//         </select>
//         <input placeholder="Row Name (e.g. A)" value={newRowName} onChange={(e) => setNewRowName(e.target.value)} />
//         <input type="number" placeholder="Seats" value={newSeatCount} onChange={(e) => setNewSeatCount(Number(e.target.value))} />
//         <button className="btn btn-success" onClick={handleAddRow}>➕ Add Row</button>
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {["platinum", "gold", "silver"].map(category => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <h5>Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}</h5>
//               <table>
//                 <tbody>
//                   {rows.filter(r => r.category === category).map(row => (
//                     <tr key={row.rowName} className="d-flex">
//                       <div className="seatR bg-dark">{row.rowName}</div>
//                       <td className="SRow-1 ms-5 ps-5 pe-5 py-1">
//                         {[...Array(row.seats).keys()].map((i) => {
//                           const seatNo = row.seats - i;
//                           return (
//                             <div className="seatempty" key={i}>
//                               <a
//                                 href="#"
//                                 className={getSeatClass(row.rowName, seatNo)}
//                                 onClick={(e) => { e.preventDefault(); handleSeatClick(row.rowName, seatNo); }}
//                                 style={{ cursor: "pointer" }}
//                               >
//                                 {seatNo}
//                               </a>
//                             </div>
//                           );
//                         })}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-center gap-3 my-3">
//         <button className="btn btn-primary" onClick={handleBlockSeats}>Block Selected Seats</button>
//         <button className="btn btn-warning" onClick={handleUnblockSeats}>Unblock Selected Seats</button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;

// dynamic input to add seats along with seat gaps

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css";

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const AdminSeatlayout = () => {
//   const [theater, setTheater] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());

//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unblockSeats, setUnblockSeats] = useState([]);

//   // 🔥 Dynamic rows with seatPattern
//   const [rows, setRows] = useState([
//     { category: "platinum", rowName: "A", seatPattern: [4, 4] }, // 8 seats with gap
//     { category: "platinum", rowName: "B", seatPattern: [4, 4] },
//     { category: "gold", rowName: "H", seatPattern: [5, 5] },     // 10 seats with gap
//     { category: "silver", rowName: "O", seatPattern: [3, 2, 3] } // 8 seats, two gaps
//   ]);

//   // Form state for adding rows dynamically
//   const [newCategory, setNewCategory] = useState("platinum");
//   const [newRowName, setNewRowName] = useState("");
//   const [newSeatPattern, setNewSeatPattern] = useState("4,4");

//   // Fetch blocked seats
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   const handleBlockSeats = async () => {
//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats to block!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: selectedSeats,
//       });
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   const handleUnblockSeats = async () => {
//     if (unblockSeats.length === 0) {
//       alert("⚠️ Please select seats to unblock!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/unblock-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: unblockSeats,
//       });
//       alert("✅ Seats unblocked successfully!");
//       setBlockedSeats(prev => prev.filter(seat => !unblockSeats.includes(seat)));
//       setUnblockSeats([]);
//     } catch (err) {
//       console.error("❌ Error unblocking seats:", err);
//     }
//   };

//   const handleSeatClick = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     if (blockedSeats.includes(seatId)) {
//       if (unblockSeats.includes(seatId)) {
//         setUnblockSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setUnblockSeats(prev => [...prev, seatId]);
//       }
//     } else {
//       if (selectedSeats.includes(seatId)) {
//         setSelectedSeats(prev => prev.filter(s => s !== seatId));
//       } else {
//         setSelectedSeats(prev => [...prev, seatId]);
//       }
//     }
//   };

//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);
//     const isUnblockSelected = unblockSeats.includes(seatId);

//     if (isBlocked && isUnblockSelected) return "seatno yellow-selected";
//     if (isBlocked) return "seatno orange-disabled clickable";
//     if (isSelected) return "seatno selected-seat px-2 text-center";
//     return "seatno availabledouble px-1 text-center";
//   };

//   // ✅ Add new row dynamically
//   const handleAddRow = () => {
//     if (!newRowName || !newSeatPattern) {
//       alert("Enter valid row name and seat pattern!");
//       return;
//     }
//     const pattern = newSeatPattern.split(",").map(n => parseInt(n.trim(), 10));
//     setRows(prev => [...prev, { category: newCategory, rowName: newRowName, seatPattern: pattern }]);
//     setNewRowName("");
//     setNewSeatPattern("4,4");
//   };

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div className="container Parentseatlayout">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Inputs */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <input placeholder="Theater" value={theater} onChange={(e) => setTheater(e.target.value)} />
//         <input placeholder="Movie" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
//         <input placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
//         <input placeholder="Time (e.g. 10:00 AM)" value={time} onChange={(e) => setTime(e.target.value)} />
//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* 🔥 Add row dynamically */}
//       <div className="d-flex gap-2 mb-3">
//         <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
//           <option value="platinum">Platinum</option>
//           <option value="gold">Gold</option>
//           <option value="silver">Silver</option>
//         </select>
//         <input placeholder="Row Name (e.g. A)" value={newRowName} onChange={(e) => setNewRowName(e.target.value)} />
//         <input placeholder="Pattern (e.g. 4,4)" value={newSeatPattern} onChange={(e) => setNewSeatPattern(e.target.value)} />
//         <button className="btn btn-success" onClick={handleAddRow}>➕ Add Row</button>
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {["platinum", "gold", "silver"].map(category => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <h5>Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}</h5>
//               <table>
//                 <tbody>
//                   {rows.filter(r => r.category === category).map(row => (
//                     <tr key={row.rowName} className="d-flex align-items-center">
//                       <div className="seatR bg-dark">{row.rowName}</div>
//                       <td className="SRow-1 ms-4 d-flex">
//                         {row.seatPattern.map((blockSize, blockIndex) => (
//                           <div key={blockIndex} className="d-flex me-4">
//                             {[...Array(blockSize).keys()].map(i => {
//                               const seatNo =
//                                 i + 1 +
//                                 row.seatPattern.slice(0, blockIndex).reduce((a, b) => a + b, 0);
//                               return (
//                                 <div className="seatempty" key={seatNo}>
//                                   <a
//                                     href="#"
//                                     className={getSeatClass(row.rowName, seatNo)}
//                                     onClick={(e) => {
//                                       e.preventDefault();
//                                       handleSeatClick(row.rowName, seatNo);
//                                     }}
//                                     style={{ cursor: "pointer" }}
//                                   >
//                                     {seatNo}
//                                   </a>
//                                 </div>
//                               );
//                             })}
//                           </div>
//                         ))}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-center gap-3 my-3">
//         <button className="btn btn-primary" onClick={handleBlockSeats}>Block Selected Seats</button>
//         <button className="btn btn-warning" onClick={handleUnblockSeats}>Unblock Selected Seats</button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;

//center-aligned rows (so each row’s seats + gaps are centered, like BookMyShow does)?  
// [with blocking and un-blocking feature]

// expected correct code for blocking and un-blocking the seats in front end without dynamic seat creation  

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css";

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const AdminSeatlayout = () => {
//   const [theater, setTheater] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());

//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unblockSeats, setUnblockSeats] = useState([]);

//   // ✅ Now each row has a seatPattern
//   const [rows, setRows] = useState([
//     { category: "platinum", rowName: "A", seatPattern: [4, 4, 4] },
//     { category: "platinum", rowName: "B", seatPattern: [4, 4, 4] },
//     { category: "gold", rowName: "H", seatPattern: [5, 5] },
//     { category: "silver", rowName: "O", seatPattern: [3, 2, 3] },
//   ]);

//   // Form state for adding rows
//   const [newCategory, setNewCategory] = useState("platinum");
//   const [newRowName, setNewRowName] = useState("");
//   const [newSeatPattern, setNewSeatPattern] = useState("4,4");

//   // Fetch blocked seats
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   const handleBlockSeats = async () => {
//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats to block!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: selectedSeats,
//       });
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   const handleUnblockSeats = async () => {
//     if (unblockSeats.length === 0) {
//       alert("⚠️ Please select seats to unblock!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/unblock-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: unblockSeats,
//       });
//       alert("✅ Seats unblocked successfully!");
//       setBlockedSeats((prev) => prev.filter((seat) => !unblockSeats.includes(seat)));
//       setUnblockSeats([]);
//     } catch (err) {
//       console.error("❌ Error unblocking seats:", err);
//     }
//   };

//   const handleSeatClick = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     if (blockedSeats.includes(seatId)) {
//       if (unblockSeats.includes(seatId)) {
//         setUnblockSeats((prev) => prev.filter((s) => s !== seatId));
//       } else {
//         setUnblockSeats((prev) => [...prev, seatId]);
//       }
//     } else {
//       if (selectedSeats.includes(seatId)) {
//         setSelectedSeats((prev) => prev.filter((s) => s !== seatId));
//       } else {
//         setSelectedSeats((prev) => [...prev, seatId]);
//       }
//     }
//   };

//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);
//     const isUnblockSelected = unblockSeats.includes(seatId);

//     if (isBlocked && isUnblockSelected) return "seatno yellow-selected";
//     if (isBlocked) return "seatno orange-disabled clickable";
//     if (isSelected) return "seatno selected-seat px-2 text-center";
//     return "seatno availabledouble px-1 text-center";
//   };

//   // ✅ Add new row dynamically with seatPattern
//   const handleAddRow = () => {
//     if (!newRowName || !newSeatPattern) {
//       alert("Enter valid row name and seat pattern!");
//       return;
//     }
//     const pattern = newSeatPattern.split(",").map((n) => parseInt(n.trim(), 10));
//     setRows((prev) => [...prev, { category: newCategory, rowName: newRowName, seatPattern: pattern }]);
//     setNewRowName("");
//     setNewSeatPattern("4,4");
//   };

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div className="container Parentseatlayout">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Inputs */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <input placeholder="Theater" value={theater} onChange={(e) => setTheater(e.target.value)} />
//         <input placeholder="Movie" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
//         <input placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
//         <input placeholder="Time (e.g. 10:00 AM)" value={time} onChange={(e) => setTime(e.target.value)} />
//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* 🔥 Add row dynamically */}
//       <div className="d-flex gap-2 mb-3">
//         <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
//           <option value="platinum">Platinum</option>
//           <option value="gold">Gold</option>
//           <option value="silver">Silver</option>
//         </select>
//         <input placeholder="Row Name (e.g. A)" value={newRowName} onChange={(e) => setNewRowName(e.target.value)} />
//         <input placeholder="Pattern (e.g. 4,4)" value={newSeatPattern} onChange={(e) => setNewSeatPattern(e.target.value)} />
//         <button className="btn btn-success" onClick={handleAddRow}>➕ Add Row</button>
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {["platinum", "gold", "silver"].map((category) => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <h5>
//                 Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
//               </h5>
//               <table>
//                 <tbody>
//                   {rows
//                     .filter((r) => r.category === category)
//                     .map((row) => (
//                       <tr key={row.rowName} className="d-flex">
//                         <div className="seatR bg-dark">{row.rowName}</div>
//                         <td className="SRow-1 ms-5 ps-5 pe-5 py-1 d-flex">
//                           {row.seatPattern.map((blockSize, blockIndex) => (
//                             <div key={blockIndex} className="d-flex me-4">
//                               {[...Array(blockSize).keys()].map((i) => {
//                                 const seatNo =
//                                   i + 1 +
//                                   row.seatPattern.slice(0, blockIndex).reduce((a, b) => a + b, 0);
//                                 return (
//                                   <div className="seatempty" key={seatNo}>
//                                     <a
//                                       href="#"
//                                       className={getSeatClass(row.rowName, seatNo)}
//                                       onClick={(e) => {
//                                         e.preventDefault();
//                                         handleSeatClick(row.rowName, seatNo);
//                                       }}
//                                       style={{ cursor: "pointer" }}
//                                     >
//                                       {seatNo}
//                                     </a>
//                                   </div>
//                                 );
//                               })}
//                             </div>
//                           ))}
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-center gap-3 my-3">
//         <button className="btn btn-primary" onClick={handleBlockSeats}>
//           Block Selected Seats
//         </button>
//         <button className="btn btn-warning" onClick={handleUnblockSeats}>
//           Unblock Selected Seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;

// final code 

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css";

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const AdminSeatlayout = () => {
//   const [movies, setMovies] = useState([]);
//   const [theaters, setTheaters] = useState([]);
//   const [screens, setScreens] = useState([]);
//   const [showTimes, setShowTimes] = useState([]);

//   const [movieName, setMovieName] = useState("");
//   const [theater, setTheater] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());

//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unblockSeats, setUnblockSeats] = useState([]);

//   const [rows, setRows] = useState([
//     { category: "platinum", rowName: "A", seatPattern: [4, 4, 4] },
//     { category: "platinum", rowName: "B", seatPattern: [4, 4, 4] },
//     { category: "gold", rowName: "H", seatPattern: [5, 5] },
//     { category: "silver", rowName: "O", seatPattern: [3, 2, 3] },
//   ]);

//   const [newCategory, setNewCategory] = useState("platinum");
//   const [newRowName, setNewRowName] = useState("");
//   const [newSeatPattern, setNewSeatPattern] = useState("4,4");

//   // ✅ Fetch all movies for dropdowns
//   const fetchMovies = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/movies");
//       setMovies(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching movies:", err);
//     }
//   };

//   // ✅ Fetch blocked seats
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   // ✅ Block selected seats
//   const handleBlockSeats = async () => {
//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats to block!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: selectedSeats,
//       });
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   // ✅ Unblock selected seats
//   const handleUnblockSeats = async () => {
//     if (unblockSeats.length === 0) {
//       alert("⚠️ Please select seats to unblock!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/unblock-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: unblockSeats,
//       });
//       alert("✅ Seats unblocked successfully!");
//       setBlockedSeats((prev) => prev.filter((seat) => !unblockSeats.includes(seat)));
//       setUnblockSeats([]);
//     } catch (err) {
//       console.error("❌ Error unblocking seats:", err);
//     }
//   };

//   // ✅ Handle seat click logic
//   const handleSeatClick = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     if (blockedSeats.includes(seatId)) {
//       if (unblockSeats.includes(seatId)) {
//         setUnblockSeats((prev) => prev.filter((s) => s !== seatId));
//       } else {
//         setUnblockSeats((prev) => [...prev, seatId]);
//       }
//     } else {
//       if (selectedSeats.includes(seatId)) {
//         setSelectedSeats((prev) => prev.filter((s) => s !== seatId));
//       } else {
//         setSelectedSeats((prev) => [...prev, seatId]);
//       }
//     }
//   };

//   // ✅ Seat CSS class handler
//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);
//     const isUnblockSelected = unblockSeats.includes(seatId);

//     if (isBlocked && isUnblockSelected) return "seatno yellow-selected";
//     if (isBlocked) return "seatno orange-disabled clickable";
//     if (isSelected) return "seatno selected-seat px-2 text-center";
//     return "seatno availabledouble px-1 text-center";
//   };

//   // ✅ Add new row dynamically
//   const handleAddRow = () => {
//     if (!newRowName || !newSeatPattern) {
//       alert("Enter valid row name and seat pattern!");
//       return;
//     }
//     const pattern = newSeatPattern.split(",").map((n) => parseInt(n.trim(), 10));
//     setRows((prev) => [...prev, { category: newCategory, rowName: newRowName, seatPattern: pattern }]);
//     setNewRowName("");
//     setNewSeatPattern("4,4");
//   };

//   // ✅ Remove individual seat block in a row
//   const handleRemoveSeatBlock = (rowIndex, blockIndex) => {
//     setRows((prev) =>
//       prev.map((row, i) =>
//         i === rowIndex
//           ? { ...row, seatPattern: row.seatPattern.filter((_, idx) => idx !== blockIndex) }
//           : row
//       )
//     );
//   };

//   // ✅ Remove entire row
//   const handleRemoveRow = (rowIndex) => {
//     setRows((prev) => prev.filter((_, i) => i !== rowIndex));
//   };

//   // ✅ Movie → Theater → Screen → Time dependent dropdowns
//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   useEffect(() => {
//     if (movieName) {
//       const selectedMovie = movies.find((m) => m.name === movieName);
//       setTheaters(selectedMovie ? selectedMovie.theaters : []);
//       setTheater("");
//       setScreens([]);
//       setShowTimes([]);
//     }
//   }, [movieName]);

//   useEffect(() => {
//     if (theater) {
//       const selectedTheater = theaters.find((t) => t.name === theater);
//       setScreens(selectedTheater ? selectedTheater.screens : []);
//       setScreen("");
//       setShowTimes([]);
//     }
//   }, [theater]);

//   useEffect(() => {
//     if (screen) {
//       const selectedScreen = screens.find((s) => s.screenName === screen);
//       setShowTimes(selectedScreen ? selectedScreen.showTimes : []);
//       setTime("");
//     }
//   }, [screen]);

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div className="container Parentseatlayout">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Dropdown inputs */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <select value={movieName} onChange={(e) => setMovieName(e.target.value)}>
//           <option value="">🎞 Select Movie</option>
//           {movies.map((m) => (
//             <option key={m._id} value={m.name}>{m.name}</option>
//           ))}
//         </select>

//         <select value={theater} onChange={(e) => setTheater(e.target.value)} disabled={!movieName}>
//           <option value="">🏛 Select Theater</option>
//           {theaters.map((t, idx) => (
//             <option key={idx} value={t.name}>{t.name}</option>
//           ))}
//         </select>

//         <select value={screen} onChange={(e) => setScreen(e.target.value)} disabled={!theater}>
//           <option value="">🖥 Select Screen</option>
//           {screens.map((s, idx) => (
//             <option key={idx} value={s.screenName}>{s.screenName}</option>
//           ))}
//         </select>

//         <select value={time} onChange={(e) => setTime(e.target.value)} disabled={!screen}>
//           <option value="">⏰ Select Time</option>
//           {showTimes.map((t, idx) => (
//             <option key={idx} value={t}>{t}</option>
//           ))}
//         </select>

//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* Add Row Section */}
//       <div className="d-flex gap-2 mb-3">
//         <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
//           <option value="platinum">Platinum</option>
//           <option value="gold">Gold</option>
//           <option value="silver">Silver</option>
//         </select>
//         <input placeholder="Row Name (e.g. A)" value={newRowName} onChange={(e) => setNewRowName(e.target.value)} />
//         <input placeholder="Pattern (e.g. 4,4)" value={newSeatPattern} onChange={(e) => setNewSeatPattern(e.target.value)} />
//         <button className="btn btn-success" onClick={handleAddRow}>➕ Add Row</button>
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {["platinum", "gold", "silver"].map((category) => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <h5>
//                 Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
//               </h5>
//               <table>
//                 <tbody>
//                   {rows
//                     .filter((r) => r.category === category)
//                     .map((row, rowIndex) => (
//                       <tr key={row.rowName} className="d-flex align-items-center">
//                         <div className="seatR bg-dark">{row.rowName}</div>
//                         <td className="SRow-1 ms-5 ps-5 pe-5 py-1 d-flex">
//                           {row.seatPattern.map((blockSize, blockIndex) => (
//                             <div key={blockIndex} className="d-flex me-4 align-items-center">
//                               {[...Array(blockSize).keys()].map((i) => {
//                                 const seatNo =
//                                   i + 1 +
//                                   row.seatPattern.slice(0, blockIndex).reduce((a, b) => a + b, 0);
//                                 return (
//                                   <div className="seatempty" key={seatNo}>
//                                     <a
//                                       href="#"
//                                       className={getSeatClass(row.rowName, seatNo)}
//                                       onClick={(e) => {
//                                         e.preventDefault();
//                                         handleSeatClick(row.rowName, seatNo);
//                                       }}
//                                       style={{ cursor: "pointer" }}
//                                     >
//                                       {seatNo}
//                                     </a>
//                                   </div>
//                                 );
//                               })}
//                               {/* Remove Block [X] */}
//                               <button
//                                 className="btn btn-sm btn-danger ms-2"
//                                 onClick={() => handleRemoveSeatBlock(rowIndex, blockIndex)}
//                               >
//                                 ✖
//                               </button>
//                             </div>
//                           ))}
//                           {/* Remove Row [X] */}
//                           <button
//                             className="btn btn-sm btn-outline-danger ms-3"
//                             onClick={() => handleRemoveRow(rowIndex)}
//                           >
//                             ✖ Row
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Block / Unblock Buttons */}
//       <div className="d-flex justify-content-center gap-3 my-3">
//         <button className="btn btn-primary" onClick={handleBlockSeats}>
//           Block Selected Seats
//         </button>
//         <button className="btn btn-warning" onClick={handleUnblockSeats}>
//           Unblock Selected Seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../../Numberofseats/Seatlayout.css";

// const SEAT_PRICE = {
//   platinum: 150,
//   gold: 130,
//   silver: 100,
// };

// const AdminSeatlayout = () => {
//   const [movies, setMovies] = useState([]);
//   const [theaters, setTheaters] = useState([]);
//   const [screens, setScreens] = useState([]);
//   const [showTimes, setShowTimes] = useState([]);

//   const [movieName, setMovieName] = useState("");
//   const [theater, setTheater] = useState("");
//   const [screen, setScreen] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState(new Date());

//   const [blockedSeats, setBlockedSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unblockSeats, setUnblockSeats] = useState([]);

//   const [rows, setRows] = useState([
//     { category: "platinum", rowName: "A", seatPattern: [4, 4, 4] },
//     { category: "platinum", rowName: "B", seatPattern: [4, 4, 4] },
//     { category: "gold", rowName: "H", seatPattern: [5, 5] },
//     { category: "silver", rowName: "O", seatPattern: [3, 2, 3] },
//   ]);

//   const [newCategory, setNewCategory] = useState("platinum");
//   const [newRowName, setNewRowName] = useState("");
//   const [newSeatPattern, setNewSeatPattern] = useState("4,4");

//   // ✅ Fetch all movies for dropdowns
//   const fetchMovies = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/movies");
//       setMovies(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching movies:", err);
//     }
//   };

//   // ✅ Fetch blocked seats
//   const fetchBlockedSeats = async () => {
//     if (!theater || !movieName || !screen || !time || !date) return;
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
//         params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
//       });
//       setBlockedSeats(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching blocked seats:", err);
//     }
//   };

//   // ✅ Block selected seats
//   const handleBlockSeats = async () => {
//     if (selectedSeats.length === 0) {
//       alert("⚠️ Please select seats to block!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/block-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: selectedSeats,
//       });
//       alert("✅ Seats blocked successfully!");
//       setSelectedSeats([]);
//       fetchBlockedSeats();
//     } catch (err) {
//       console.error("❌ Error blocking seats:", err);
//     }
//   };

//   // ✅ Unblock selected seats
//   const handleUnblockSeats = async () => {
//     if (unblockSeats.length === 0) {
//       alert("⚠️ Please select seats to unblock!");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/api/admin/unblock-seats", {
//         theater,
//         movieName,
//         screen,
//         time,
//         date: date.toLocaleDateString(),
//         seats: unblockSeats,
//       });
//       alert("✅ Seats unblocked successfully!");
//       setBlockedSeats((prev) => prev.filter((seat) => !unblockSeats.includes(seat)));
//       setUnblockSeats([]);
//     } catch (err) {
//       console.error("❌ Error unblocking seats:", err);
//     }
//   };

//   // ✅ Handle seat click logic
//   const handleSeatClick = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     if (blockedSeats.includes(seatId)) {
//       if (unblockSeats.includes(seatId)) {
//         setUnblockSeats((prev) => prev.filter((s) => s !== seatId));
//       } else {
//         setUnblockSeats((prev) => [...prev, seatId]);
//       }
//     } else {
//       if (selectedSeats.includes(seatId)) {
//         setSelectedSeats((prev) => prev.filter((s) => s !== seatId));
//       } else {
//         setSelectedSeats((prev) => [...prev, seatId]);
//       }
//     }
//   };

//   // ✅ Remove individual seat (X button on seat)
//   const handleRemoveSeat = (rowName, seatNo) => {
//     setRows((prev) =>
//       prev.map((row) => {
//         if (row.rowName !== rowName) return row;
//         let count = 0;
//         const newPattern = [];
//         row.seatPattern.forEach((blockSize) => {
//           if (seatNo > count && seatNo <= count + blockSize) {
//             // Seat is inside this block
//             if (blockSize > 1) newPattern.push(blockSize - 1);
//           } else {
//             newPattern.push(blockSize);
//           }
//           count += blockSize;
//         });
//         return { ...row, seatPattern: newPattern };
//       })
//     );
//   };

//   // ✅ Seat CSS class handler
//   const getSeatClass = (row, seat) => {
//     const seatId = `${row}${seat}`;
//     const isBlocked = blockedSeats.includes(seatId);
//     const isSelected = selectedSeats.includes(seatId);
//     const isUnblockSelected = unblockSeats.includes(seatId);

//     if (isBlocked && isUnblockSelected) return "seatno yellow-selected";
//     if (isBlocked) return "seatno orange-disabled clickable";
//     if (isSelected) return "seatno selected-seat px-2 text-center";
//     return "seatno availabledouble px-1 text-center";
//   };

//   // ✅ Add new row dynamically
//   const handleAddRow = () => {
//     if (!newRowName || !newSeatPattern) {
//       alert("Enter valid row name and seat pattern!");
//       return;
//     }
//     const pattern = newSeatPattern.split(",").map((n) => parseInt(n.trim(), 10));
//     setRows((prev) => [...prev, { category: newCategory, rowName: newRowName, seatPattern: pattern }]);
//     setNewRowName("");
//     setNewSeatPattern("4,4");
//   };

//   // ✅ Remove entire row
//   const handleRemoveRow = (rowIndex) => {
//     setRows((prev) => prev.filter((_, i) => i !== rowIndex));
//   };

//   // ✅ Movie → Theater → Screen → Time dependent dropdowns
//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   useEffect(() => {
//     if (movieName) {
//       const selectedMovie = movies.find((m) => m.name === movieName);
//       setTheaters(selectedMovie ? selectedMovie.theaters : []);
//       setTheater("");
//       setScreens([]);
//       setShowTimes([]);
//     }
//   }, [movieName]);

//   useEffect(() => {
//     if (theater) {
//       const selectedTheater = theaters.find((t) => t.name === theater);
//       setScreens(selectedTheater ? selectedTheater.screens : []);
//       setScreen("");
//       setShowTimes([]);
//     }
//   }, [theater]);

//   useEffect(() => {
//     if (screen) {
//       const selectedScreen = screens.find((s) => s.screenName === screen);
//       setShowTimes(selectedScreen ? selectedScreen.showTimes : []);
//       setTime("");
//     }
//   }, [screen]);

//   useEffect(() => {
//     fetchBlockedSeats();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theater, movieName, screen, time, date]);

//   return (
//     <div className="container Parentseatlayout">
//       <h2 className="my-3">🎬 Admin Seat Layout</h2>

//       {/* Dropdown inputs */}
//       <div className="d-flex gap-2 flex-wrap mb-3">
//         <select value={movieName} onChange={(e) => setMovieName(e.target.value)}>
//           <option value="">🎞 Select Movie</option>
//           {movies.map((m) => (
//             <option key={m._id} value={m.name}>{m.name}</option>
//           ))}
//         </select>

//         <select value={theater} onChange={(e) => setTheater(e.target.value)} disabled={!movieName}>
//           <option value="">🏛 Select Theater</option>
//           {theaters.map((t, idx) => (
//             <option key={idx} value={t.name}>{t.name}</option>
//           ))}
//         </select>

//         <select value={screen} onChange={(e) => setScreen(e.target.value)} disabled={!theater}>
//           <option value="">🖥 Select Screen</option>
//           {screens.map((s, idx) => (
//             <option key={idx} value={s.screenName}>{s.screenName}</option>
//           ))}
//         </select>

//         <select value={time} onChange={(e) => setTime(e.target.value)} disabled={!screen}>
//           <option value="">⏰ Select Time</option>
//           {showTimes.map((t, idx) => (
//             <option key={idx} value={t}>{t}</option>
//           ))}
//         </select>

//         <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
//       </div>

//       {/* Add Row Section */}
//       <div className="d-flex gap-2 mb-3">
//         <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
//           <option value="platinum">Platinum</option>
//           <option value="gold">Gold</option>
//           <option value="silver">Silver</option>
//         </select>
//         <input placeholder="Row Name (e.g. A)" value={newRowName} onChange={(e) => setNewRowName(e.target.value)} />
//         <input placeholder="Pattern (e.g. 4,4)" value={newSeatPattern} onChange={(e) => setNewSeatPattern(e.target.value)} />
//         <button className="btn btn-success" onClick={handleAddRow}>➕ Add Row</button>
//       </div>

//       {/* Seat Layout */}
//       <div className="seeat container">
//         <div className="block">
//           {["platinum", "gold", "silver"].map((category) => (
//             <div key={category} className={`blocklayout ${category}layout`}>
//               <h5>
//                 Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
//               </h5>
//               <table>
//                 <tbody>
//                   {rows
//                     .filter((r) => r.category === category)
//                     .map((row, rowIndex) => (
//                       <tr key={row.rowName} className="d-flex align-items-center">
//                         <div className="seatR bg-dark">{row.rowName}</div>
//                         <td className="SRow-1 ms-5 ps-5 pe-5 py-1 d-flex">
//                           {row.seatPattern.map((blockSize, blockIndex) => (
//                             <div key={blockIndex} className="d-flex me-4 align-items-center">
//                               {[...Array(blockSize).keys()].map((i) => {
//                                 const seatNo =
//                                   i + 1 +
//                                   row.seatPattern.slice(0, blockIndex).reduce((a, b) => a + b, 0);
//                                 return (
//                                   <div className="seatempty position-relative" key={seatNo}>
//                                     <a
//                                       href="#"
//                                       className={getSeatClass(row.rowName, seatNo)}
//                                       onClick={(e) => {
//                                         e.preventDefault();
//                                         handleSeatClick(row.rowName, seatNo);
//                                       }}
//                                       style={{ cursor: "pointer" }}
//                                     >
//                                       {seatNo}
//                                     </a>
//                                     {/* Individual seat X button */}
//                                     <button
//                                       // className="btn btn-sm btn-danger position-absolute top-0 end-5 p-0"
//                                       style={{ fontSize: "10px", lineHeight: "10px", position: "absolute", top: "2px", left: "17px", padding: "1px", color: "white", backgroundColor: "red" }}
//                                       onClick={() => handleRemoveSeat(row.rowName, seatNo)}
//                                     >
//                                       ✖
//                                     </button>
//                                   </div>
//                                 );
//                               })}
//                             </div>
//                           ))}
//                           {/* Remove Row [X] */}
//                           <button
//                             className="btn btn-sm btn-outline-danger ms-0"
//                             onClick={() => handleRemoveRow(rowIndex)}
//                           >
//                             ✖
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Block / Unblock Buttons */}
//       <div className="d-flex justify-content-center gap-3 my-3">
//         <button className="btn btn-primary" onClick={handleBlockSeats}>
//           Block Selected Seats
//         </button>
//         <button className="btn btn-warning" onClick={handleUnblockSeats}>
//           Unblock Selected Seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSeatlayout;

//  Using the row name (rowName) as a unique identifier instead of index when deleting.
//  Adjusting the handleRemoveRow function to remove the row by its name.
//  It deleting the row in-correctly 




// expecting code but still not achieved working on it




//===============================================================================================
// Final code block and un-block functions are working in this updated code. 
// last updated code [changed the (date format) and (movieName) params] for proper blockand un-blocking seats with the correct moviename's

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../Numberofseats/Seatlayout.css";

const SEAT_PRICE = {
  platinum: 150,
  gold: 130,
  silver: 100,
};

const AdminSeatlayout = () => {
  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [screens, setScreens] = useState([]);
  const [showTimes, setShowTimes] = useState([]);

  const [movieName, setMovieName] = useState("");
  const [theater, setTheater] = useState("");
  const [screen, setScreen] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());

  const [blockedSeats, setBlockedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [unblockSeats, setUnblockSeats] = useState([]);

  // ✅ Each row also stores which seats are removed
  const [rows, setRows] = useState([
    { category: "platinum", rowName: "A", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "B", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "C", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "D", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "E", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "F", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "G", seatPattern: [6, 9, 6], removedSeats: [] },
    
    { category: "gold", rowName: "H", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "I", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "J", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "K", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "L", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "M", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "N", seatPattern: [6,9,6], removedSeats: [] },

    { category: "silver", rowName: "O", seatPattern: [6,9,6], removedSeats: [] },
    { category: "silver", rowName: "P", seatPattern: [6,9,6], removedSeats: [] },
  ]);

  const [newCategory, setNewCategory] = useState("platinum");
  const [newRowName, setNewRowName] = useState("");
  const [newSeatPattern, setNewSeatPattern] = useState("4,4");

  // ✅ Fetch all movies
  const fetchMovies = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/movies");
      setMovies(res.data);
    } catch (err) {
      console.error("❌ Error fetching movies:", err);
    }
  };

  // ✅ Fetch blocked seats
  const fetchBlockedSeats = async () => {
    if (!theater || !movieName || !screen || !time || !date) return;
    try {
      const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
        params: { theater, movieName, screen, time, date: date.toISOString().split('T')[0] },
      });
      setBlockedSeats(res.data);
    } catch (err) {
      console.error("❌ Error fetching blocked seats:", err);
    }
  };

  // ✅ Block seats
  const handleBlockSeats = async () => {
    if (selectedSeats.length === 0) {
      alert("⚠️ Please select seats to block!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/admin/block-seats", {
        theater,
        movieName,
        screen,
        time,
        // date: date.toLocaleDateString(),
        date: date.toISOString().split('T')[0], // ✅ YYYY-MM-DD
        seats: selectedSeats,
      });
      alert("✅ Seats blocked successfully!");
      setSelectedSeats([]);
      fetchBlockedSeats();
    } catch (err) {
      console.error("❌ Error blocking seats:", err);
    }
  };

  // ✅ Unblock seats
  const handleUnblockSeats = async () => {
    if (unblockSeats.length === 0) {
      alert("⚠️ Please select seats to unblock!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/admin/unblock-seats", {
        theater,
        movieName,
        screen,
        time,
        // date: date.toLocaleDateString(),
        date: date.toISOString().split('T')[0], // ✅ YYYY-MM-DD
        seats: unblockSeats,
      });
      alert("✅ Seats unblocked successfully!");
      setBlockedSeats((prev) => prev.filter((seat) => !unblockSeats.includes(seat)));
      setUnblockSeats([]);
    } catch (err) {
      console.error("❌ Error unblocking seats:", err);
    }
  };

  // ✅ Handle seat click
  const handleSeatClick = (row, seat) => {
    const seatId = `${row}${seat}`;
    if (blockedSeats.includes(seatId)) {
      if (unblockSeats.includes(seatId)) {
        setUnblockSeats((prev) => prev.filter((s) => s !== seatId));
      } else {
        setUnblockSeats((prev) => [...prev, seatId]);
      }
    } else {
      if (selectedSeats.includes(seatId)) {
        setSelectedSeats((prev) => prev.filter((s) => s !== seatId));
      } else {
        setSelectedSeats((prev) => [...prev, seatId]);
      }
    }
  };

  // ✅ Remove single seat (now leaves a gap)
  const handleRemoveSeat = (rowName, seatNo) => {
    setRows((prev) =>
      prev.map((row) => {
        if (row.rowName !== rowName) return row;
        return {
          ...row,
          removedSeats: [...row.removedSeats, seatNo], // store the seat number as removed
        };
      })
    );
  };

  // ✅ Seat CSS class logic
  const getSeatClass = (row, seat) => {
    const seatId = `${row}${seat}`;
    const isBlocked = blockedSeats.includes(seatId);
    const isSelected = selectedSeats.includes(seatId);
    const isUnblockSelected = unblockSeats.includes(seatId);

    if (isBlocked && isUnblockSelected) return "seatno yellow-selected";
    if (isBlocked) return "seatno orange-disabled clickable";
    if (isSelected) return "seatno selected-seat px-2 text-center";
    return "seatno availabledouble px-1 text-center";
  };

  // ✅ Add new row
  const handleAddRow = () => {
    if (!newRowName || !newSeatPattern) {
      alert("Enter valid row name and seat pattern!");
      return;
    }
    const pattern = newSeatPattern.split(",").map((n) => parseInt(n.trim(), 10));
    setRows((prev) => [
      ...prev,
      { category: newCategory, rowName: newRowName, seatPattern: pattern, removedSeats: [] },
    ]);
    setNewRowName("");
    setNewSeatPattern("4,4");
  };

  // ✅ Remove row
  const handleRemoveRow = (rowName) => {
    setRows((prev) => prev.filter((r) => r.rowName !== rowName));
  };

  // ✅ Dropdown dependencies
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movieName) {
      const selectedMovie = movies.find((m) => m.name === movieName);
      setTheaters(selectedMovie ? selectedMovie.theaters : []);
      setTheater("");
      setScreens([]);
      setShowTimes([]);
    }
  }, [movieName]);

  useEffect(() => {
    if (theater) {
      const selectedTheater = theaters.find((t) => t.name === theater);
      setScreens(selectedTheater ? selectedTheater.screens : []);
      setScreen("");
      setShowTimes([]);
    }
  }, [theater]);

  useEffect(() => {
    if (screen) {
      const selectedScreen = screens.find((s) => s.screenName === screen);
      setShowTimes(selectedScreen ? selectedScreen.showTimes : []);
      setTime("");
    }
  }, [screen]);

  useEffect(() => {
    fetchBlockedSeats();
  }, [theater, movieName, screen, time, date]);

  return (
    <div className="container Parentseatlayout">
      <h2 className="my-3">🎬 Admin Seat Layout</h2>

      {/* Dropdown Inputs */}
      <div className="d-flex gap-2 flex-wrap mb-3">
        <select value={movieName} onChange={(e) => setMovieName(e.target.value)}>
          <option value="">🎞 Select Movie</option>
          {movies.map((m) => (
            <option key={m._id} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>

        <select value={theater} onChange={(e) => setTheater(e.target.value)} disabled={!movieName}>
          <option value="">🏛 Select Theater</option>
          {theaters.map((t, idx) => (
            <option key={idx} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>

        <select value={screen} onChange={(e) => setScreen(e.target.value)} disabled={!theater}>
          <option value="">🖥 Select Screen</option>
          {screens.map((s, idx) => (
            <option key={idx} value={s.screenName}>
              {s.screenName}
            </option>
          ))}
        </select>

        <select value={time} onChange={(e) => setTime(e.target.value)} disabled={!screen}>
          <option value="">⏰ Select Time</option>
          {showTimes.map((t, idx) => (
            <option key={idx} value={t}>
              {t}
            </option>
          ))}
        </select>

        <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
      </div>

      {/* Add Row Section */}
      <div className="d-flex gap-2 mb-3">
        <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
          <option value="platinum">Platinum</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
        </select>
        <input
          placeholder="Row Name (e.g. A)"
          value={newRowName}
          onChange={(e) => setNewRowName(e.target.value)}
        />
        <input
          placeholder="Pattern (e.g. 4,4,4)"
          value={newSeatPattern}
          onChange={(e) => setNewSeatPattern(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleAddRow}>
          ➕ Add Row
        </button>
      </div>

      {/* Seat Layout */}
      <div className="seeat container">
        <div className="block">
          {["platinum", "gold", "silver"].map((category) => (
            <div key={category} className={`blocklayout ${category}layout`}>
              <h5>
                Rs.{SEAT_PRICE[category]}{" "}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h5>
              <table>
                <tbody>
                  {rows
                    .filter((r) => r.category === category)
                    .map((row) => (
                      <tr key={row.rowName} className="d-flex align-items-center">
                        <div className="seatR bg-dark">{row.rowName}</div>
                        <td className="SRow-1 ms-5 ps-5 pe-5 py-1 d-flex align-items-center">
                          {row.seatPattern.map((blockSize, blockIndex) => (
                            <div key={blockIndex} className="d-flex me-4 align-items-center">
                              {[...Array(blockSize).keys()].map((i) => {
                                const seatNo =
                                  i + 1 +
                                  row.seatPattern
                                    .slice(0, blockIndex)
                                    .reduce((a, b) => a + b, 0);

                                // ✅ Check if this seat was removed
                                if (row.removedSeats.includes(seatNo)) {
                                  return (
                                    <div
                                      key={seatNo}
                                      className="seatgap"
                                      style={{ width: "30px", height: "25px" }}
                                    ></div>
                                  );
                                }

                                return (
                                  <div className="seatempty position-relative" key={seatNo}>
                                    <a
                                      href="#"
                                      className={getSeatClass(row.rowName, seatNo)}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleSeatClick(row.rowName, seatNo);
                                      }}
                                    >
                                      {seatNo}
                                    </a>
                                    <button
                                      style={{
                                        fontSize: "10px",
                                        lineHeight: "10px",
                                        position: "absolute",
                                        top: "2px",
                                        left: "17px",
                                        padding: "1px",
                                        color: "white",
                                        backgroundColor: "red",
                                      }}
                                      onClick={() => handleRemoveSeat(row.rowName, seatNo)}
                                    >
                                      ✖
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          ))}
                          <button
                            className="btn btn-sm btn-outline-danger ms-1"
                            onClick={() => handleRemoveRow(row.rowName)}
                          >
                            ✖
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      {/* Block / Unblock Buttons */}
      <div className="d-flex justify-content-center gap-3 my-3">
        <button className="btn btn-primary" onClick={handleBlockSeats}>
          Block Selected Seats
        </button>
        <button className="btn btn-warning" onClick={handleUnblockSeats}>
          Unblock Selected Seats
        </button>
      </div>
    </div>
  );
};

export default AdminSeatlayout;
