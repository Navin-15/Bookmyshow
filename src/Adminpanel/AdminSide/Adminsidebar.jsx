// import React from 'react'
// import '../AdminSide/Adminsidebar.css'
// import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
//  from 'react-icons/bs'
//  import { SiBookmyshow } from "react-icons/si";
//  import { useNavigate } from 'react-router-dom';
 

// function Adminsidebar({openSidebarToggle, OpenSidebar}) {
//     const navigate = useNavigate();
//   return (
//     <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
//             <div className="sidebar-title">
//                 <div className="sidebar-brand">
                   
//                     <SiBookmyshow className='icon_header'/> BookMyShow
                    
//                 </div>
//                 <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//             </div>
    
//             <ul className='sidebar-list'>
//                 <li className='sidebar-list-item text-light'onClick={() => navigate('/dashboard')} >
//                     <p>
//                       <BsGrid1X2Fill className='icon'/> Dashboard
//                     </p>
//                 </li>
//                 <li className='sidebar-list-item theaterdetails text-light' onClick={() => navigate('')}>
//                     <p>
//                       <BsFillArchiveFill className='icon'/> User
//                     </p>
//                         <li className=' theaterdetailssublist' >
//                           <p className='anc'>
//                              New User  
//                           </p>
//                         </li> 
//                         <li className=' theaterdetailssublist' >
//                           <p className='anc'>
//                              Manage User
//                           </p>
//                         </li> 

//                 </li>
//                 <li className='sidebar-list-item theaterdetails text-light' onClick={() => navigate('')}>
//                     <p>
//                       <BsFillGrid3X3GapFill className='icon'/> Theater
//                     </p>
//                         <li className=' theaterdetailssublist' >
//                           <p className='anc'>
//                              New Theater
//                           </p>
//                         </li>
//                         <li className=' theaterdetailssublist' onClick={() => navigate('')}>
//                           <p className='anc' >
//                              Manage Theater
//                           </p>
//                         </li>
                        
//                 </li>
//                 <li className='sidebar-list-item theaterdetails  text-light' onClick={() => navigate('')}>
//                     <p>
//                       <BsPeopleFill className='icon'/> Movie
//                     </p>
//                       <li className=' theaterdetailssublist' >
//                           <p className='anc'>
//                              New Movie
//                           </p>
//                       </li>
//                       <li className=' theaterdetailssublist' onClick={() => navigate('')}>
//                           <p className='anc' >
//                              Manage Movie
//                           </p>
//                       </li>
//                 </li>
                
//             </ul>
//         </aside>
//   )
// }

// export default Adminsidebar

//==========================================================

// import React from 'react';
// import '../AdminSide/Adminsidebar.css';
// import { BsGrid1X2Fill, BsFillArchiveFill, BsFillBookFill, BsPersonPlusFill, BsClipboardData, BsCheck2Square, BsCurrencyRupee, BsTrophyFill, BsPeopleFill, BsBarChartFill } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';

// function Adminsidebar({ openSidebarToggle, OpenSidebar }) {
//   const navigate = useNavigate();

//   return (
//     <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive' : ''}>

    

//       <div className='sidebar-title' onClick={() => navigate('/dashboard')} >
//         <div className='sidebar-brand'>
//           <BsGrid1X2Fill className='icon_header' /> Dashboard
//         </div>
//         <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//       </div>

//       <ul className='sidebar-list'>

//         {/* User */}
//         <li className='sidebar-list-item'>
//           <div className='menu-group'>
//             <p><BsFillArchiveFill className='icon' /> User</p>
//               <ul className='submenu'>
//                 <li className='sidebar-sub-item' onClick={() => navigate('/newuser')}>New User</li>
//                 <li className='sidebar-sub-item' onClick={() => navigate('/manageuser')}>Manage User</li>
//               </ul>
//           </div>
//         </li>

//         {/* Course */}
//         <li className='sidebar-list-item'>
//           <div className='menu-group'>
//             <p><BsFillArchiveFill className='icon' /> Theater</p>
//               <ul className='submenu'>
//                 <li className='sidebar-sub-item'>New Theater</li>
//                 <li className='sidebar-sub-item'>Manage Theater</li>
//               </ul>
//           </div>
//         </li>

//         {/* Enquiry */}
//         <li className='sidebar-list-item'>
//           <div className='menu-group'>
//             <p><BsFillArchiveFill className='icon' /> Movie</p>
//               <ul className='submenu'>
//                 <li className='sidebar-sub-item'>New Movie</li>
//                 <li className='sidebar-sub-item'>Manage Movie</li>
//               </ul>
//           </div>
//         </li>

//         {/* Enrollment */}
//         <li className='sidebar-list-item'>
//           <div className='menu-group'>
//             <p><BsFillArchiveFill className='icon' /> Seats</p>
//               <ul className='submenu'>
//                 <li className='sidebar-sub-item'>New Seats</li>
//                 <li className='sidebar-sub-item'>Manage Seats</li>
//               </ul>
//           </div>
//         </li>

//         {/* Attendance */}
//         <li className='sidebar-list-item'>
//           <div className='menu-group'>
//             <p><BsFillArchiveFill className='icon' /> Banner</p>
//               <ul className='submenu'>
//                 <li className='sidebar-sub-item'>New Banner</li>
//                 <li className='sidebar-sub-item'>Manage Banner</li>
//               </ul>
//           </div>
//         </li>

//         {/* Payment */}
//         <li className='sidebar-list-item'>
//           <div className='menu-group'>
//             <p><BsFillArchiveFill className='icon' /> Bookings</p>
//               <ul className='submenu'>
//                 <li className='sidebar-sub-item'>New Bookings</li>
//                 <li className='sidebar-sub-item'>Manage Bookings</li>
//               </ul>
//           </div>
//         </li>

//         {/* Placement */}
//         {/* <li className='sidebar-list-item'>
//           <p><BsTrophyFill className='icon' /> Placement</p>
//           <ul>
//             <li className='sidebar-sub-item'>Add Placement</li>
//             <li className='sidebar-sub-item'>Manage Placement</li>
//           </ul>
//         </li> */}

//         {/* Staff */}
//         {/* <li className='sidebar-list-item'>
//           <p><BsPeopleFill className='icon' /> Staff</p>
//           <ul>
//             <li className='sidebar-sub-item'>New Staff</li>
//             <li className='sidebar-sub-item'>Manage Staff</li>
//           </ul>
//         </li> */}

//         {/* Report */}
//         {/* <li className='sidebar-list-item'>
//           <p><BsBarChartFill className='icon' /> Report</p>
//           <ul>
//             <li className='sidebar-sub-item'>Manage Report</li>
//           </ul>
//         </li> */}

//       </ul>
//     </aside>
//   );
// }

// export default Adminsidebar;

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
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import adminlogo from '../../../images/BookMyShow.png';

//new
import { useAuth } from '../AuthContext';

const AdminSidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const navigate = useNavigate();

  //new 
  const { user } = useAuth();

  const handleMenuToggle = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };
 

  return (

    <div className="Adminslider">
      <div className="Adminlogodiv">
        <img src={adminlogo} className="adminlogo" alt="Admin Logo" />
      </div>

      <ul className="adminUl">
        <li style={menuItemStyle} onClick={() => navigate("/dashboard")}>
          <FaHome style={iconStyle} />
          <span>Dashboard</span>
        </li>

           {/* User */}
          
        {user?.permissions?.user && (
        <>
          <li style={menuItemStyle} onClick={() => handleMenuToggle("user")}>
              <FaUser style={iconStyle} />
          <span>
            User {" "}
            {expandedMenu === "user" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
          </span>
          </li>
          {/* Submenu for User*/}
          {expandedMenu === "user" && (
          <>
            <li style={submenuItemStyle} onClick={() => navigate("/newuser", { state: { menu: "New User" } })}>
              New User
            </li>
            <li style={submenuItemStyle} onClick={() => navigate("/manageuser", { state: { menu: "Manage User" } })}>
              Manage User
            </li>
          </> 
          )}
        </>
      )}  

      {/* Theater Menu with Toggle */}
      {user?.permissions?.theater && (
          <>  
        <li style={menuItemStyle} onClick={() => handleMenuToggle("theater")}>
          <FaThList style={iconStyle} />
          <span>
            Theater {" "}
            {expandedMenu === "theater" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
          </span>
        </li>
        {/* Submenu for Theater*/}
        {expandedMenu === "theater" && (
          <>
            <li style={submenuItemStyle} onClick={() => navigate("/newtheater", { state: { menu: "New Theater" } })}>
              New Theater
            </li>
            <li style={submenuItemStyle} onClick={() => navigate("/managetheater", { state: { menu: "Manage Theater" } })}>
              Manage Theater
            </li>
          </>
        )}
      </>
      )}

        {/* Movie */}

      {user?.permissions?.movie && (
      <> 
        <li style={menuItemStyle}onClick={() => handleMenuToggle("movie")}>
          <FaBoxOpen style={iconStyle} />
          <span>
            Movie {" "}
            {expandedMenu === "movie" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
          </span>
        </li>
        {/* Submenu for Movie*/}
        {expandedMenu === "movie" && (
          <>
            <li style={submenuItemStyle} onClick={() => navigate("/newmovie", { state: { menu: "New Movie" } })}>
              New Movie
            </li>
            <li style={submenuItemStyle} onClick={() => navigate("/managemovie", { state: { menu: "Manage Movie" } })}>
              Manage Movie
            </li>
          </>
        )}
      </>
      )}

        {/* Banner */}

      {user?.permissions?.banner && (
      <> 
        <li style={menuItemStyle} onClick={() => handleMenuToggle("banner")}>
          <FaImage style={iconStyle} />
          <span>
            Banner {" "}
            {expandedMenu === "banner" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
          </span>
        </li>
        {/* Submenu for Banner*/}
        {expandedMenu === "banner" && (
          <>
            <li style={submenuItemStyle} onClick={() => navigate("/newbanner", { state: { menu: "New Banner" } })}>
              New Banner
            </li>
            <li style={submenuItemStyle} onClick={() => navigate("/managebanner", { state: { menu: "Manage Banner" } })}>
              Manage Banner
            </li>
          </>
        )}
      </>
      )}

        {/* Customer */}

      {user?.permissions?.customer && (
      <>

        <li style={menuItemStyle} onClick={() => handleMenuToggle("customer")}>
          <FaUser style={iconStyle} />
          <span>
            Customer {" "}
            {expandedMenu === "customer" ? (<FaChevronDown className="chevrondown" />) : (<FaChevronRight className="chevronright" />)}
          </span>
        </li>
        {/* Submenu for Cutomer*/}
        {expandedMenu === "customer" && (
          <>
           <li style={submenuItemStyle} onClick={() => navigate("/managecustomer")}>
            Manage Customer
          </li></>
        )}
      </>
      )}

      </ul>
    </div>

  );
};

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

const iconStyle = {
  marginRight: "10px",
};

export default AdminSidebar;
