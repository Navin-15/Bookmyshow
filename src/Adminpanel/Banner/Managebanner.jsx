
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

//         <div className=" banner ">
//             <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp; &nbsp;
//             <span className="mt-2">{menuName} </span>
//         </div>
    

//     <div className="manage-banner-container">
//       <h4 className='text-danger'>Manage Banners</h4>
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
//                     <button onClick={() => handleEdit(banner.id, banner.name)} className='px-4 bg-success'>Edit</button>
//                   )}
//                   <button onClick={() => handleDelete(banner.id)} className='px-3'>Delete</button>
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

//abcdefg

// import React, { useContext, useState } from "react";
// import { BannerContext } from "./BannerContext";
// import { useLocation } from "react-router-dom";
// import Adminsidebar from "../AdminSide/Adminsidebar";
// import Adminheader from "../AdminHead/Adminheader";
// import "./Managebanner.css";

// const Managebanner = () => {
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const { banners, setBanners } = useContext(BannerContext);
//   const [editingId, setEditingId] = useState(null);
//   const [editedName, setEditedName] = useState("");

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this banner?")) {
//       setBanners(banners.filter((banner) => banner.id !== id));
//     }
//   };

//   const handleEdit = (id, name) => {
//     setEditingId(id);
//     setEditedName(name);
//   };

//   const handleUpdate = (id) => {
//     const updated = banners.map((banner) =>
//       banner.id === id ? { ...banner, name: editedName } : banner
//     );
//     setBanners(updated);
//     setEditingId(null);
//     setEditedName("");
//   };

//   const handleToggle = (id) => {
//     const updatedBanners = banners.map((banner) =>
//       banner.id === id ? { ...banner, enabled: !banner.enabled } : banner
//     );
//     setBanners(updatedBanners);
//   };

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar
//           openSidebarToggle={openSidebarToggle}
//           OpenSidebar={OpenSidebar}
//         />
//       </div>

//       <div className="banner">
//         <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp; &nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <div className="manage-banner-container">
//         <h4 className="text-danger">Manage Banners</h4>
//         <table>
//           <thead>
//             <tr>
//               <th>Banner Name</th>
//               <th>Banner Image</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {banners.length === 0 ? (
//               <tr>
//                 <td colSpan="3">No banners available</td>
//               </tr>
//             ) : (
//               banners.map((banner) => (
//                 <tr key={banner.id} className={!banner.enabled ? "disabled-row" : ""}>
//                   <td>
//                     {editingId === banner.id ? (
//                       <input
//                         type="text"
//                         value={editedName}
//                         onChange={(e) => setEditedName(e.target.value)}
//                       />
//                     ) : (
//                       banner.name
//                     )}
//                   </td>
//                   <td>
//                     <img
//                       src={banner.image}
//                       alt={banner.name}
//                       className="banner-preview"
//                     />
//                   </td>
//                   <td>
//                     {editingId === banner.id ? (
//                       <button onClick={() => handleUpdate(banner.id)}>
//                         Update
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => handleEdit(banner.id, banner.name)}
//                         className="px-4 bg-success"
//                       >
//                         Edit
//                       </button>
//                     )}
//                     <button
//                       onClick={() => handleDelete(banner.id)}
//                       className="px-3"
//                     >
//                       Delete
//                     </button>
//                     <button
//                       onClick={() => handleToggle(banner.id)}
//                       className={`px-3 ms-2 ${
//                         banner.enabled ? "btn btn-warning" : "btn btn-primary"
//                       }`}
//                     >
//                       {banner.enabled ? "Disable" : "Enable"}
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Managebanner;

//correct backend 

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Managebanner = () => {
//   const [banners, setBanners] = useState([]);
//   const [editingBanner, setEditingBanner] = useState(null);
//   const [newName, setNewName] = useState("");
//   const [newImage, setNewImage] = useState(null);

//    // Convert image file to Base64
//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   useEffect(() => {
//     const fetchBanners = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/banners");
//         setBanners(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching banners:", err);
//       }
//     };
//     fetchBanners();
//   }, []);

//     // Delete banner
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this banner?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/banners/${id}`);
//         fetchBanners();
//       } catch (err) {
//         console.error("❌ Error deleting banner:", err);
//       }
//     }
//   };

//   // Start editing
//   const handleEdit = (banner) => {
//     setEditingBanner(banner._id);
//     setNewName(banner.name);
//     setNewImage(null);
//   };

//   // Save edit
//   const handleSaveEdit = async (id) => {
//     try {
//       let imageToUpload = banners.find((b) => b._id === id).image;
//       if (newImage) {
//         imageToUpload = await convertToBase64(newImage);
//       }

//       await axios.put(`http://localhost:5000/api/banners/${id}`, {
//         name: newName,
//         image: imageToUpload,
//       });

//       setEditingBanner(null);
//       setNewName("");
//       setNewImage(null);
//       fetchBanners();
//     } catch (err) {
//       console.error("❌ Error updating banner:", err);
//     }
//   };

//   return (
   

//      <div className="manage-banner">
//       <h3 className="text-danger">Manage Banners</h3>
//       <div className="banner-list">
//         {banners.map((banner) => (
//           <div key={banner._id} className="banner-item">
//             {editingBanner === banner._id ? (
//               <>
//                 {/* Editing Mode */}
//                 <input
//                   type="text"
//                   value={newName}
//                   onChange={(e) => setNewName(e.target.value)}
//                 />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setNewImage(e.target.files[0])}
//                 />
//                 <button
//                   className="save-btn"
//                   onClick={() => handleSaveEdit(banner._id)}
//                 >
//                   Save
//                 </button>
//                 <button
//                   className="cancel-btn"
//                   onClick={() => setEditingBanner(null)}
//                 >
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <>
//                 {/* Display Mode */}
//                 <h5>{banner.name}</h5>
//                 <img src={banner.image} alt={banner.name} width="300" />
//                 <div>
//                   <button
//                     className="edit-btn"
//                     onClick={() => handleEdit(banner)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="delete-btn"
//                     onClick={() => handleDelete(banner._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>

//   );
// };

// export default Managebanner;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Adminsidebar from "../AdminSide/Adminsidebar";
import Adminheader from "../AdminHead/Adminheader";
import "./Managebanner.css"; // You can use this to include external styles
import { useLocation } from "react-router-dom";

const Managebanner = () => {
  const [banners, setBanners] = useState([]);
  const [editingBanner, setEditingBanner] = useState(null);
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";

  // Convert image file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const fetchBanners = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/banners");
      setBanners(res.data);
    } catch (err) {
      console.error("❌ Error fetching banners:", err);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      try {
        await axios.delete(`http://localhost:5000/api/banners/${id}`);
        fetchBanners();
      } catch (err) {
        console.error("❌ Error deleting banner:", err);
      }
    }
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner._id);
    setNewName(banner.name);
    setNewImage(null);
  };

  const handleSaveEdit = async (id) => {
    try {
      let imageToUpload = banners.find((b) => b._id === id).image;
      if (newImage) {
        imageToUpload = await convertToBase64(newImage);
      }

      await axios.put(`http://localhost:5000/api/banners/${id}`, {
        name: newName,
        image: imageToUpload,
      });

      setEditingBanner(null);
      setNewName("");
      setNewImage(null);
      fetchBanners();
    } catch (err) {
      console.error("❌ Error updating banner:", err);
    }
  };

  const OpenSidebar = () => {
         setOpenSidebarToggle(!openSidebarToggle);
   };

   const handleToggleEnabled = async (id, currentStatus) => {
  try {
    await axios.put(`http://localhost:5000/api/banners/${id}`, {
      enabled: !currentStatus
    });
    fetchBanners(); // Refresh the list
  } catch (err) {
    console.error("❌ Error toggling enabled status:", err);
  }
};


  return (
  <>
    <Adminheader />
        <div className="sideside">
          <Adminsidebar
           openSidebarToggle={openSidebarToggle}
           OpenSidebar={OpenSidebar}
         />
        </div>

        <div className="banner">
         <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp; &nbsp;
         <span className="mt-2">{menuName}</span>
        </div>

    <div className="manage-banner">
      <h3 className="text-danger">Manage Banners</h3>
      <table className="banner-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {banners.map((banner) => (
            <tr key={banner._id}>
              {editingBanner === banner._id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setNewImage(e.target.files[0])}
                    />
                  </td>
                  <td>
                    <button
                      className="save-btn"
                      onClick={() => handleSaveEdit(banner._id)}
                    >
                      Save
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => setEditingBanner(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{banner.name}</td>
                  <td>
                    <img src={banner.image} alt={banner.name} width="120" />
                  </td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(banner)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(banner._id)}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody> */}
        <tbody>
  {banners.map((banner) => (
    <tr key={banner._id}>
      {editingBanner === banner._id ? (
        <>
          <td>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewImage(e.target.files[0])}
            />
          </td>
          <td colSpan={2}>
            <button
              className="save-btn"
              onClick={() => handleSaveEdit(banner._id)}
            >
              Save
            </button>
            <button
              className="cancel-btn"
              onClick={() => setEditingBanner(null)}
            >
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{banner.name}</td>
          <td>
            <img src={banner.image} alt={banner.name} width="120" />
          </td>
          <td>
            <button
              className="edit-btn"
              onClick={() => handleEdit(banner)}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(banner._id)}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              className={banner.enabled ? "disable-btn" : "enable-btn"}
              onClick={() => handleToggleEnabled(banner._id, banner.enabled)}
            >
              {banner.enabled ? "Disable" : "Enable"}
            </button>
          </td>
        </>
      )}
    </tr>
  ))}
</tbody>

      </table>
    </div>
  </>  
  );
};

export default Managebanner;
