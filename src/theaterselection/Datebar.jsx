// import React from "react";
// import { CiLineHeight } from "react-icons/ci";

// const DateBar = () => {
//   const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

//   const getDates = () => {
//     const today = new Date();
//     return Array.from({ length: 7 }, (_, i) => {
//       const d = new Date();
//       d.setDate(today.getDate() + i);
//       return {
//         day: days[d.getDay()],
//         date: String(d.getDate()).padStart(2, "0"),
//         month: months[d.getMonth()],
//         isToday: i === 0
//       };
//     });
//   };

//   const dateItems = getDates();

//   return (
//   <div className="py-1">  
//     <div style={styles.wrapper}>
//       <div style={styles.dateBar}>
//         {dateItems.map((item, idx) => (
//           <div
//             key={idx}
//             style={{
//               ...styles.day,
//               ...(item.isToday ? styles.today : {})
//             }}
//           >
//             <span style={styles.dow}>{item.day}</span>
//             <span style={styles.dateNum}>{item.date}</span>
//             <span style={styles.month}>{item.month}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>  
//   );
// };

// const styles = {
//   wrapper: {
//     fontFamily: "sans-serif",
//     display: "flex",
//     justifyContent: "center",
//     // marginTop: "50px",
//     // backgroundColor:"aqua"
//   },
//   dateBar: {
//     // border:"1px solid black",        
//     display: "flex",
//     gap: "15px",
    
// },
// day: {
//     display:"grid",
//     // border:"1px solid black",
//     textAlign: "center",
//     margin:'2px 0px 0px 0px',
//     padding: "5px 15px",
//     borderRadius: "10px",
//     width: "60px",
//     fontSize:"12px",
    
//   },
//   today: {
//     backgroundColor: "#e94e5a",
//     color: "white",
//     cursor:"pointer"

//   },
//   dow: {
//     // fontWeight: "bold"

//   },
//   dateNum: {
//     fontSize: "1.3em",
//     fontWeight: "bold"
//   },
//   month: {
//     fontSize: "0.8em",
//     opacity:"1.6",
//   }
// };



// export default DateBar;

//========================================

//responsive code

import React, { useState } from "react";
import "../theaterselection/Datebar.css"; // Import the CSS styles

const DateBar = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const [selectedDateOffset, setSelectedDateOffset] = useState(0);

  const getDates = () => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(today.getDate() + i);
      return {
        offset: i,
        day: days[d.getDay()],
        date: String(d.getDate()).padStart(2, "0"),
        month: months[d.getMonth()],
      };
    });
  };

  const dateItems = getDates();

  return (
    <div className="datebar-container py-1">
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {dateItems.map((item) => (
          <div
            key={item.offset}
            onClick={() => setSelectedDateOffset(item.offset)}
            className={`date-card text-center ${item.offset === selectedDateOffset ? "selected" : ""}`}
          >
            <span className="day">{item.day}</span>
            <span className="date-num">{item.date}</span>
            <span className="month">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateBar;

//dynamic date selection and pass the date to seatlayout component 

// DateBar.js
// import React, { useState } from "react";
// import "../theaterselection/Datebar.css";

// const DateBar = ({ onDateSelect }) => {
//   const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

//   const [selectedDateOffset, setSelectedDateOffset] = useState(0);

//   const getDates = () => {
//     const today = new Date();
//     return Array.from({ length: 7 }, (_, i) => {
//       const d = new Date();
//       d.setDate(today.getDate() + i);
//       return {
//         offset: i,
//         dateObj: d,
//         day: days[d.getDay()],
//         date: String(d.getDate()).padStart(2, "0"),
//         month: months[d.getMonth()],
//       };
//     });
//   };

//   const dateItems = getDates();

//   const handleClick = (item) => {
//     setSelectedDateOffset(item.offset);
//     onDateSelect(item.dateObj); // Send selected date to parent
//   };

//   return (
//     <div className="datebar-container py-1">
//       <div className="d-flex justify-content-center flex-wrap gap-3">
//         {dateItems.map((item) => (
//           <div
//             key={item.offset}
//             onClick={() => handleClick(item)}
//             className={`date-card text-center ${item.offset === selectedDateOffset ? "selected" : ""}`}
//           >
//             <span className="day">{item.day}</span>
//             <span className="date-num">{item.date}</span>
//             <span className="month">{item.month}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DateBar;


