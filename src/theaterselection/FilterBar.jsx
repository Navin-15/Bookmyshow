// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const FilterBar = () => {
//   const [active, setActive] = useState("Language");

//   const filters = [
//     { label: "Tamil - 2D", key: "Language" },
//     { label: "Price Range", key: "Price" },
//     { label: "Preferred Time", key: "Time" }
//   ];

//   return (
//     <div style={styles.container}>
//       {filters.map((filter) => (
//         <div
//           key={filter.key}
//           style={{
//             ...styles.filterItem,
//             borderBottom:
//               active === filter.key ? "2px solid #e94e5a" : "2px solid transparent"
//           }}
//           onClick={() => setActive(filter.key)}
//         >
//           <span style={styles.label}>{filter.label}</span>
//           <span style={styles.arrow}>▾</span>
         
//         </div>
//       ))}
//       <div style={styles.searchIcon}>
//         <FaSearch size={16} />
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//     border: "1px solid #ddd",
  
//     width: "fit-content",
    
//     height:"80px",
    
//   },
//   filterItem: {
//     fontSize:"14px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "30px 15px",
//     minWidth: "120px",
//     cursor: "pointer",
//     borderRight: "1px solid #ddd"
//   },
//   label: {
//     flex: 1,
//     color: "#333"
//   },
//   arrow: {
//     color: "#e94e5a",
//     marginLeft: "6px"
//   },
//   searchIcon: {
//     padding: "0 15px",
//     cursor: "pointer",
//     color: "#888"
//   }
// };

// export default FilterBar;
//=================================

//responsive code

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../theaterselection/Filterbar.css"; // Import the external stylesheet

const FilterBar = () => {
  const [active, setActive] = useState("Language");

  const filters = [
    { label: "Tamil - 2D", key: "Language" },
    { label: "Price Range", key: "Price" },
    { label: "Preferred Time", key: "Time" }
  ];

  return (
    <div className="filterbar-container d-flex align-items-center flex-wrap">
      {filters.map((filter) => (
        <div
          key={filter.key}
          className={`filter-item ${active === filter.key ? "active-filter" : ""}`}
          onClick={() => setActive(filter.key)}
        >
          <span className="label">{filter.label}</span>
          <span className="arrow">▾</span>
        </div>
      ))}
      <div className="search-icon">
        <FaSearch size={16} />
      </div>
    </div>
  );
};

export default FilterBar;

