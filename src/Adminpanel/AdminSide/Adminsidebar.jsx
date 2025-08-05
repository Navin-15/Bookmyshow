import React from 'react'
import '../AdminSide/Adminsidebar.css'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { SiBookmyshow } from "react-icons/si";
 import { useNavigate } from 'react-router-dom';
 

function Adminsidebar({openSidebarToggle, OpenSidebar}) {
    const navigate = useNavigate();
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                   
                    <SiBookmyshow className='icon_header'/> BookMyShow
                    
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
    
            <ul className='sidebar-list'>
                <li className='sidebar-list-item text-light'onClick={() => navigate('/admindashboard')} >
                    <p>
                      <BsGrid1X2Fill className='icon'/> Dashboard
                    </p>
                </li>
                <li className='sidebar-list-item text-light' onClick={() => navigate('/register')}>
                    <p>
                      <BsFillArchiveFill className='icon'/> Usermodule
                    </p>
                </li>
                <li className='sidebar-list-item theaterdetails text-light' onClick={() => navigate('/theatermanage')}>
                    <p>
                      <BsFillGrid3X3GapFill className='icon'/> Theater Details
                    </p>
                        {/* <li className=' theaterdetailssublist' onClick={() => navigate('/categories')}>
                          <a href="" className='anc'>
                            <BsFillGrid3X3GapFill className='icon'/> Categories
                          </a>
                        </li> */}
                        {/* <li className=' theaterdetailssublist' onClick={() => navigate('/theatermanage')}>
                          <a href="" className='anc' >
                            <BsFillGrid3X3GapFill className='icon'/> Theater manage
                          </a>
                        </li> */}
                        {/* <li className=' theaterdetailssublist'>
                          <a href="" className='anc'>
                              <BsFillGrid3X3GapFill className='icon'/> Manage Panel
                          </a>
                        </li> */}
                </li>
                <li className='sidebar-list-item text-light' onClick={() => navigate('/moviemanage')}>
                    <p>
                      <BsPeopleFill className='icon'/> Movie Management
                    </p>
                        
                </li>
                
            </ul>
        </aside>
  )
}

export default Adminsidebar