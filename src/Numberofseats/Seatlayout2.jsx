// import { useState } from "react";


// const SeatSelection = () => {
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
//       setSelectedSeats([...selectedSeats, { id: seatId, category: priceCategory }]);
//     }
//   };

//   const calculateTotal = (category) => {
//     const count = selectedSeats.filter(s => s.category === category).length;
//     const prices = { Platinum: 150, Gold: 130, Silver: 100 };
//     return count * prices[category];
//   };

//   const renderSection = (title, rows, priceCategory) => (
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
//   );

//   return (
//     <>
//       {renderSection('Platinum', rowsPlatinum, 'Platinum')}
//       {renderSection('Gold', rowsGold, 'Gold')}
//       {renderSection('Silver', rowsSilver, 'Silver')}
//       <div className="total-amount-div">
//             <div className="total-amount">
//                 Total Price: Rs.{calculateTotal('Platinum') + calculateTotal('Gold') + calculateTotal('Silver')}
//             </div>
//       </div>
//     </>
//   );
// };

// export default SeatSelection;