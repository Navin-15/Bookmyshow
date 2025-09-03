//think is og code

// import React, { useContext, useState } from 'react';
// import { BannerContext } from './BannerContext';
// import { useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import './Managebanner.css';

// const Managebanner = () => {

//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false); 
//   const { banners, setBanners } = useContext(BannerContext);
//   const [editingId, setEditingId] = useState(null);
//   const [editedName, setEditedName] = useState('');

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this banner?')) {
//       setBanners(banners.filter(banner => banner.id !== id));
//     }
//   };

//   const handleEdit = (id, name) => {
//     setEditingId(id);
//     setEditedName(name);
//   };

//   const handleUpdate = (id) => {
//     const updated = banners.map(banner =>
//       banner.id === id ? { ...banner, name: editedName } : banner
//     );
//     setBanners(updated);
//     setEditingId(null);
//     setEditedName('');
//   };

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>

//     <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//         <div className=" text ">
//             <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp; &nbsp;
//             <span className="mt-2">{menuName} </span>
//         </div>
    

//     <div className="manage-banner-container">
//       <h5 className='text-danger'>Manage Banners</h5>
//       <table>
//         <thead>
//           <tr>
//             <th>Banner Name</th>
//             <th>Banner Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {banners.length === 0 ? (
//             <tr>
//               <td colSpan="3">No banners available</td>
//             </tr>
//           ) : (
//             banners.map(banner => (
//               <tr key={banner.id}>
//                 <td>
//                   {editingId === banner.id ? (
//                     <input
//                       type="text"
//                       value={editedName}
//                       onChange={(e) => setEditedName(e.target.value)}
//                     />
//                   ) : (
//                     banner.name
//                   )}
//                 </td>
//                 <td>
//                   <img src={banner.image} alt={banner.name} className="banner-preview" />
//                 </td>
//                 <td>
//                   {editingId === banner.id ? (
//                     <button onClick={() => handleUpdate(banner.id)}>Update</button>
//                   ) : (
//                     <button onClick={() => handleEdit(banner.id, banner.name)}>Edit</button>
//                   )}
//                   <button onClick={() => handleDelete(banner.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>

//     </>
//   );
// };

// export default Managebanner;


import React, { useContext, useState } from 'react';
import { BannerContext } from './BannerContext';
import { useLocation } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import './Managebanner.css';

const Managebanner = () => {

  const location = useLocation();
  const menuName = location.state?.menu || "No data received";
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false); 
  const { banners, setBanners } = useContext(BannerContext);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      setBanners(banners.filter(banner => banner.id !== id));
    }
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditedName(name);
  };

  const handleUpdate = (id) => {
    const updated = banners.map(banner =>
      banner.id === id ? { ...banner, name: editedName } : banner
    );
    setBanners(updated);
    setEditingId(null);
    setEditedName('');
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>

    <Adminheader />
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

        <div className=" banner ">
            <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp; &nbsp;
            <span className="mt-2">{menuName} </span>
        </div>
    

    <div className="manage-banner-container">
      <h4 className='text-danger'>Manage Banners</h4>
      <table>
        <thead>
          <tr>
            <th>Banner Name</th>
            <th>Banner Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {banners.length === 0 ? (
            <tr>
              <td colSpan="3">No banners available</td>
            </tr>
          ) : (
            banners.map(banner => (
              <tr key={banner.id}>
                <td>
                  {editingId === banner.id ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    banner.name
                  )}
                </td>
                <td>
                  <img src={banner.image} alt={banner.name} className="banner-preview" />
                </td>
                <td>
                  {editingId === banner.id ? (
                    <button onClick={() => handleUpdate(banner.id)}>Update</button>
                  ) : (
                    <button onClick={() => handleEdit(banner.id, banner.name)} className='px-4 bg-success'>Edit</button>
                  )}
                  <button onClick={() => handleDelete(banner.id)} className='px-3'>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>

    </>
  );
};

export default Managebanner;
