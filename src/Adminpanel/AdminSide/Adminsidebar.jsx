// import React, { useState } from "react";
// import './adminsidebar.css';
// import {
//   FaHome,
//   FaThList,
//   FaBoxOpen,
//   FaUser,
//   FaImage,
//   FaComment,
//   FaShoppingCart,
//   FaCog,
//   FaChevronDown,
//   FaChevronRight,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import adminlogo from '../../../images/BookMyShow.png';

// //new
// import { useAuth } from '../AuthContext';

// const AdminSidebar = () => {
//   const [expandedMenu, setExpandedMenu] = useState(null);
//   const navigate = useNavigate();

//   //new 
//   const { user } = useAuth();

//   const handleMenuToggle = (menu) => {
//     setExpandedMenu(expandedMenu === menu ? null : menu);
//   };
 

//   return (

//     <div className="Adminslider">
//       <div className="Adminlogodiv">
//         <img src={adminlogo} className="adminlogo" alt="Admin Logo" />
//       </div>

//       <ul className="adminUl">
//         <li style={menuItemStyle} onClick={() => navigate("/dashboard")}>
//           <FaHome style={iconStyle} />
//           <span>Dashboard</span>
//         </li>

//            {/* User */}
          
//         {user?.permissions?.user && (
//         <>
//           <li style={menuItemStyle} onClick={() => handleMenuToggle("user")}>
//               <FaUser style={iconStyle} />
//           <span>
//             User {" "}
//             {expandedMenu === "user" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
//           </span>
//           </li>
//           {/* Submenu for User*/}
//           {expandedMenu === "user" && (
//           <>
//             <li style={submenuItemStyle} onClick={() => navigate("/newuser", { state: { menu: "New User" } })}>
//               New User
//             </li>
//             <li style={submenuItemStyle} onClick={() => navigate("/manageuser", { state: { menu: "Manage User" } })}>
//               Manage User
//             </li>
//           </> 
//           )}
//         </>
//       )}  

//       {/* Theater Menu with Toggle */}
//       {user?.permissions?.theater && (
//           <>  
//         <li style={menuItemStyle} onClick={() => handleMenuToggle("theater")}>
//           <FaThList style={iconStyle} />
//           <span>
//             Theater {" "}
//             {expandedMenu === "theater" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
//           </span>
//         </li>
//         {/* Submenu for Theater*/}
//         {expandedMenu === "theater" && (
//           <>
//             <li style={submenuItemStyle} onClick={() => navigate("/newtheater", { state: { menu: "New Theater" } })}>
//               New Theater
//             </li>
//             <li style={submenuItemStyle} onClick={() => navigate("/managetheater", { state: { menu: "Manage Theater" } })}>
//               Manage Theater
//             </li>
//           </>
//         )}
//       </>
//       )}

//         {/* Movie */}

//       {user?.permissions?.movie && (
//       <> 
//         <li style={menuItemStyle}onClick={() => handleMenuToggle("movie")}>
//           <FaBoxOpen style={iconStyle} />
//           <span>
//             Movie {" "}
//             {expandedMenu === "movie" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
//           </span>
//         </li>
//         {/* Submenu for Movie*/}
//         {expandedMenu === "movie" && (
//           <>
//             <li style={submenuItemStyle} onClick={() => navigate("/newmovie", { state: { menu: "New Movie" } })}>
//               New Movie
//             </li>
//             <li style={submenuItemStyle} onClick={() => navigate("/managemovie", { state: { menu: "Manage Movie" } })}>
//               Manage Movie
//             </li>
//           </>
//         )}
//       </>
//       )}

//         {/* Banner */}

//       {user?.permissions?.banner && (
//       <> 
//         <li style={menuItemStyle} onClick={() => handleMenuToggle("banner")}>
//           <FaImage style={iconStyle} />
//           <span>
//             Banner {" "}
//             {expandedMenu === "banner" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
//           </span>
//         </li>
//         {/* Submenu for Banner*/}
//         {expandedMenu === "banner" && (
//           <>
//             <li style={submenuItemStyle} onClick={() => navigate("/newbanner", { state: { menu: "New Banner" } })}>
//               New Banner
//             </li>
//             <li style={submenuItemStyle} onClick={() => navigate("/managebanner", { state: { menu: "Manage Banner" } })}>
//               Manage Banner
//             </li>
//           </>
//         )}
//       </>
//       )}

//         {/* Customer */}

//       {user?.permissions?.customer && (
//       <>

//         <li style={menuItemStyle} onClick={() => handleMenuToggle("customer")}>
//           <FaUser style={iconStyle} />
//           <span>
//             Customer {" "}
//             {expandedMenu === "customer" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
//           </span>
//         </li>
//         {/* Submenu for Cutomer*/}
//         {expandedMenu === "customer" && (
//           <>
//            <li style={submenuItemStyle} onClick={() => navigate("/managecustomer")}>
//             Manage Customer
//           </li></>
//         )}
//       </>
//       )}

//       </ul>
//     </div>

//   );
// };

// const menuItemStyle = {
//   padding: "12px 20px",
//   color: "#fff",
//   cursor: "pointer",
//   display: "flex",
//   alignItems: "center",
//   marginLeft: "20px",
// };

// const submenuItemStyle = {
//   padding: "8px 40px",
//   cursor: "pointer",
//   color: "#fff",
//   fontSize: "14px",
//   marginLeft: "40px",
// };

// const iconStyle = {
//   marginRight: "10px",
// };

// export default AdminSidebar;

//working on corrections

import React, { useState } from "react";
import './adminsidebar.css';
import {
  FaHome,
  FaThList,
  FaBoxOpen,
  FaUser,
  FaImage,
  FaComment,
  FaShoppingCart,
  FaCog,
  FaChevronDown,
  FaChevronRight,
  FaChair
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import adminlogo from '../../../images/BookMyShow.png';
import { useAuth } from '../AuthContext';

const AdminSidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState(null);
  const navigate = useNavigate();

  const { user } = useAuth();

  const handleMenuToggle = (menu) => {
    setExpandedMenu(prev => (prev === menu ? null : menu));
    setExpandedSubMenu(null); // Collapse submenus when switching top-level menu
  };

  // const handleSubMenuToggle = (submenu) => {
  //   setExpandedSubMenu(prev => (prev === submenu ? null : submenu));
  // };
  
// Screens Submenu Renderer

// const renderScreens = (theater) => {
//   const screens = ['A', 'B', 'C', 'D', 'E'];
//   return screens.map((screen) => (
//     <li
//       key={`${theater}-screen-${screen}`}
//       style={nestedSubmenuStyle}
//       onClick={() => navigate(`/theater-seats/${theater}/screen-${screen}`)}
//     >
//       Screen-{screen}
//     </li>
//   ));
// };

  return (
    <div className="Adminslider">
      <div className="Adminlogodiv">
        <img src={adminlogo} className="adminlogo" alt="Admin Logo" />
      </div>

      <ul className="adminUl">
        {/* Dashboard */}
        <li style={menuItemStyle} onClick={() => navigate("/dashboard")}>
          <FaHome style={iconStyle} />
          <span>Dashboard</span>
        </li>

        {/* User */}
        {user?.permissions?.user && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("user")}>
              <FaUser style={iconStyle} />
              <span>User {expandedMenu === "user" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "user" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newuser")}>New User</li>
                <li style={submenuItemStyle} onClick={() => navigate("/manageuser")}>Manage User</li>
              </>
            )}
          </>
        )}

        {/* Theater */}
        {user?.permissions?.theater && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("theater")}>
              <FaThList style={iconStyle} />
              <span>Theater {expandedMenu === "theater" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "theater" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newtheater")}>New Theater</li>
                <li style={submenuItemStyle} onClick={() => navigate("/managetheater")}>Manage Theater</li>
              </>
            )}
          </>
        )}

        {/* Movie */}
        {user?.permissions?.movie && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("movie")}>
              <FaBoxOpen style={iconStyle} />
              <span>Movie {expandedMenu === "movie" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "movie" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newmovie")}>New Movie</li>
                <li style={submenuItemStyle} onClick={() => navigate("/managemovie")}>Manage Movie</li>
              </>
            )}
          </>
        )}

        {/* Banner */}
        {user?.permissions?.banner && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("banner")}>
              <FaImage style={iconStyle} />
              <span>Banner {expandedMenu === "banner" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "banner" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newbanner")}>New Banner</li>
                <li style={submenuItemStyle} onClick={() => navigate("/managebanner")}>Manage Banner</li>
              </>
            )}
          </>
        )}

        {/* Customer */}
        {user?.permissions?.customer && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("customer")}>
              <FaUser style={iconStyle} />
              <span>Customer {expandedMenu === "customer" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "customer" && (
              <li style={submenuItemStyle} onClick={() => navigate("/managecustomer")}>Manage Customer</li>
            )}
          </>
        )}

        {/* NEW: Theater Seats */}
        {user?.permissions?.theaterseats && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("theaterseats")}>
              <FaChair style={iconStyle} />
              <span>Theater Seats {expandedMenu === "theaterseats" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "theaterseats" && (
              <>
                {/* Cosmos Cinemas */}
                <li style={submenuItemStyle}onClick={() =>  navigate(`/theater-seats`)}>
                  Cosmos Cinemas {expandedSubMenu === "cosmos" ? <FaChevronDown /> : <FaChevronRight />}
                </li>
                {expandedSubMenu === "cosmos" && renderScreens("cosmos-cinemas")}

                {/* Karpagam Theaters */}
                {/* <li style={submenuItemStyle} onClick={() => handleSubMenuToggle("karpagam")}>
                  Karpagam Theaters {expandedSubMenu === "karpagam" ? <FaChevronDown /> : <FaChevronRight />}
                </li>
                {expandedSubMenu === "karpagam" && renderScreens("karpagam")} */}

                {/* Murugan Cinemas */}
                {/* <li style={submenuItemStyle} onClick={() => handleSubMenuToggle("murugan")}>
                  Murugan Cinemas {expandedSubMenu === "murugan" ? <FaChevronDown /> : <FaChevronRight />}
                </li>
                {expandedSubMenu === "murugan" && renderScreens("murugan")} */}

                {/* Sri Sakthi Kalpana Cinemas */}
                {/* <li style={submenuItemStyle} onClick={() => handleSubMenuToggle("srikalpana")}>
                  Sri Sakthi Kalpana Cinemas {expandedSubMenu === "srikalpana" ? <FaChevronDown /> : <FaChevronRight />}
                </li>
                {expandedSubMenu === "srikalpana" && renderScreens("srikalpana")} */}
                
              </>
            )}
          </>
        )}

      </ul>
    </div>
  );
};



// Styles
const menuItemStyle = {
  padding: "12px 20px",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  marginLeft: "20px",
};

const submenuItemStyle = {
  padding: "8px 40px",
  cursor: "pointer",
  color: "#fff",
  fontSize: "14px",
  marginLeft: "40px",
};

const nestedSubmenuStyle = {
  padding: "6px 60px",
  cursor: "pointer",
  color: "#ddd",
  fontSize: "13px",
};

const iconStyle = {
  marginRight: "10px",
};

export default AdminSidebar;
