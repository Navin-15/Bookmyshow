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

import React, { useEffect, useState } from "react"; 
import axios from "axios";
import "../../../Numberofseats/Seatlayout.css";

const SEAT_PRICE = {
  platinum: 150,
  gold: 130,
  silver: 100,
};

const ROWS = {
  platinum: ["A", "B", "C", "D", "E", "F", "G"],
  gold: ["H", "I", "J", "K", "L", "M", "N"],
  silver: ["O", "P"],
};

const AdminSeatlayout = () => {
  const [theater, setTheater] = useState("");
  const [movieName, setMovieName] = useState("");
  const [screen, setScreen] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [blockedSeats, setBlockedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]); // for blocking
  const [unblockSeats, setUnblockSeats] = useState([]);   // for unblocking

  // Fetch blocked seats
  const fetchBlockedSeats = async () => {
    if (!theater || !movieName || !screen || !time || !date) return;
    try {
      const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
        params: { theater, movieName, screen, time, date: date.toLocaleDateString() },
      });
      setBlockedSeats(res.data);
    } catch (err) {
      console.error("❌ Error fetching blocked seats:", err);
    }
  };

  // Block selected seats
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
        date: date.toLocaleDateString(),
        seats: selectedSeats,
      });
      alert("✅ Seats blocked successfully!");
      setSelectedSeats([]);
      fetchBlockedSeats();
    } catch (err) {
      console.error("❌ Error blocking seats:", err);
    }
  };

  // Unblock selected seats
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
        date: date.toLocaleDateString(),
        seats: unblockSeats,
      });
      alert("✅ Seats unblocked successfully!");
      setBlockedSeats(prev => prev.filter(seat => !unblockSeats.includes(seat)));
      setUnblockSeats([]);
    } catch (err) {
      console.error("❌ Error unblocking seats:", err);
    }
  };

  // Toggle seat selection
  const handleSeatClick = (row, seat) => {
    const seatId = `${row}${seat}`;

    if (blockedSeats.includes(seatId)) {
      // Blocked → select for unblocking
      if (unblockSeats.includes(seatId)) {
        setUnblockSeats(prev => prev.filter(s => s !== seatId));
      } else {
        setUnblockSeats(prev => [...prev, seatId]);
      }
    } else {
      // Free → select for blocking
      if (selectedSeats.includes(seatId)) {
        setSelectedSeats(prev => prev.filter(s => s !== seatId));
      } else {
        setSelectedSeats(prev => [...prev, seatId]);
      }
    }
  };

  // Seat CSS class
  const getSeatClass = (row, seat) => {
    const seatId = `${row}${seat}`;
    const isBlocked = blockedSeats.includes(seatId);
    const isSelected = selectedSeats.includes(seatId);
    const isUnblockSelected = unblockSeats.includes(seatId);

    if (isBlocked && isUnblockSelected) return "seatno yellow-selected"; // selected for unblocking
    if (isBlocked) return "seatno orange-disabled clickable"; // blocked but clickable
    if (isSelected) return "seatno selected-seat px-2 text-center"; // selected for blocking
    return "seatno availabledouble px-1 text-center"; // free
  };

  useEffect(() => {
    fetchBlockedSeats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theater, movieName, screen, time, date]);

  return (
    <div className="container">
      <h2 className="my-3">🎬 Admin Seat Layout</h2>

      {/* Inputs */}
      <div className="d-flex gap-2 flex-wrap mb-3">
        <input placeholder="Theater" value={theater} onChange={(e) => setTheater(e.target.value)} />
        <input placeholder="Movie" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
        <input placeholder="Screen" value={screen} onChange={(e) => setScreen(e.target.value)} />
        <input placeholder="Time (e.g. 10:00 AM)" value={time} onChange={(e) => setTime(e.target.value)} />
        <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
      </div>

      {/* Seat Layout */}
      <div className="seeat container">
        <div className="block">
          {Object.keys(ROWS).map(category => (
            <div key={category} className={`blocklayout ${category}layout`}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="tirename">
                        Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
                      </div>
                    </td>
                  </tr>
                  {ROWS[category].map(row => (
                    <tr key={row} className="d-flex">
                      <div className="seatR bg-dark">{row}</div>
                      <td className="SRow-1 ms-5 ps-5 pe-5 py-1">
                        {[...Array(23).keys()].map((i) => {
                          const seatNo = 23 - i;
                          if (seatNo === 17 || seatNo === 7) return <div className="seatempty" key={i}></div>;
                          return (
                            <div className="seatempty" key={i}>
                              <a
                                href="#"
                                className={getSeatClass(row, seatNo)}
                                onClick={(e) => { e.preventDefault(); handleSeatClick(row, seatNo); }}
                                style={{ cursor: "pointer" }} // ensure clickable
                              >
                                {seatNo}
                              </a>
                            </div>
                          );
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-center gap-3 my-3">
        <button className="btn btn-primary" onClick={handleBlockSeats}>
          Block Selected Seats
        </button>
        <button className="btn btn-warning" onClick={handleUnblockSeats}>
          Unblock Selected Seats
        </button>
      </div>

      {/* Legend */}
      <div className="d-flex justify-content-center gap-3 my-2">
        <div className="d-flex align-items-center gap-1">
          <span className="seatno availabledouble px-2"></span> Available
        </div>
        <div className="d-flex align-items-center gap-1">
          <span className="seatno selected-seat px-2"></span> Selected for Block
        </div>
        <div className="d-flex align-items-center gap-1">
          <span className="seatno orange-disabled px-2"></span> Blocked
        </div>
        <div className="d-flex align-items-center gap-1">
          <span className="seatno yellow-selected px-2"></span> Selected for Unblock
        </div>
      </div>
    </div>
  );
};

export default AdminSeatlayout;


