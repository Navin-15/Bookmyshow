// import React, { useState, useContext } from 'react';
// import { TheaterContext } from '../Theaterdetails/TheaterContext';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from "react-router-dom";
// import './Newtheater.css';

// export default function TheaterManager() {
//   const navigate = useNavigate();

//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const { entries, addEntry, updateEntry, deleteEntry } = useContext(TheaterContext);
//   const [cinema, setCinema] = useState('');
//   const [screen, setScreen] = useState('');
//   const [showTime, setShowTime] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const handleAddOrUpdate = () => {
//     if (!cinema || !screen || !showTime) {
//       alert('Please fill in all fields');
//       return;
//     }

//     const newEntry = { cinema, screen, showTime };

//     if (editingIndex !== null) {
//       updateEntry(editingIndex, newEntry);
//       setEditingIndex(null);
//     } else {
//       addEntry(newEntry);
//     }

//     setCinema('');
//     setScreen('');
//     setShowTime('');

//     navigate('/managetheater');
//   };

//   const handleEdit = (index) => {
//     const entry = entries[index];
//     setCinema(entry.cinema);
//     setScreen(entry.screen);
//     setShowTime(entry.showTime);
//     setEditingIndex(index);
//   };

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="text">
//       <h5 className="text-danger fw-bold mt-1">Theater</h5> &nbsp; &nbsp;
//       <span className="mt-1">{menuName} </span>
//     </div>

//       <div className="container user-form-container shadow">
//         {/* <h2 className="form-title">Theater Entry Form</h2> */}

//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleAddOrUpdate();
//           }}
//         >
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label htmlFor="cinema" className="form-label">Cinema Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cinema"
//                 value={cinema}
//                 onChange={(e) => setCinema(e.target.value)}
//                 placeholder="Enter Cinema Name"
//               />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="screen" className="form-label">Screen</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="screen"
//                 value={screen}
//                 onChange={(e) => setScreen(e.target.value)}
//                 placeholder="Enter Screen Name or Number"
//               />
//             </div>
//           </div>

//           <div className="row mb-4">
//             <div className="col-md-6">
//               <label htmlFor="showTime" className="form-label">Show Time</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="showTime"
//                 value={showTime}
//                 onChange={(e) => setShowTime(e.target.value)}
//                 placeholder="e.g. 6:00 PM"
//               />
//             </div>
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="btn btn-danger me-3">
//               {editingIndex !== null ? 'Update' : 'Submit'}
//             </button>
//             <button
//               type="button"
//               className="btn btn-outline-danger"
//               onClick={() => {
//                 setCinema('');
//                 setScreen('');
//                 setShowTime('');
//                 setEditingIndex(null);
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>

//         {/* Table */}
//         {/* {entries.length > 0 && (
//           <div className="table-responsive mt-4">
//             <table className="table table-bordered table-striped text-center align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th>Cinema</th>
//                   <th>Screen</th>
//                   <th>Show Time</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {entries.map((entry, index) => (
//                   <tr key={index}>
//                     <td>{entry.cinema}</td>
//                     <td>{entry.screen}</td>
//                     <td>{entry.showTime}</td>
//                     <td>
//                       <button
//                         className="btn btn-warning btn-sm me-2"
//                         onClick={() => handleEdit(index)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => handleDelete(index)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )} */}
//       </div>
//     </>
//   );
// }

//the og code

// import React, { useState, useContext } from 'react';
// import { TheaterContext } from '../Theaterdetails/TheaterContext';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './Newtheater.css';

// export default function TheaterManager() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuName = location.state?.menu || "No data received";
//   const { entries, addEntry, updateEntry, deleteEntry } = useContext(TheaterContext);

//   const [cinema, setCinema] = useState('');
//   const [screen, setScreen] = useState('');
//   const [showTime, setShowTime] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   // Validation errors
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!cinema.trim()) newErrors.cinema = "Cinema name is required";
//     if (!screen.trim()) newErrors.screen = "Screen is required";
//     if (!showTime.trim()) newErrors.showTime = "Show time is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleAddOrUpdate = () => {
//     if (!validateForm()) return;

//     const newEntry = { cinema, screen, showTime };

//     if (editingIndex !== null) {
//       updateEntry(editingIndex, newEntry);
//       setEditingIndex(null);
//     } else {
//       addEntry(newEntry);
//     }

//     // Clear form fields
//     setCinema('');
//     setScreen('');
//     setShowTime('');
//     setErrors({});

//     navigate('/managetheater');
//   };

//   const handleEdit = (index) => {
//     const entry = entries[index];
//     setCinema(entry.cinema);
//     setScreen(entry.screen);
//     setShowTime(entry.showTime);
//     setEditingIndex(index);
//   };

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="text">
//         <h5 className="text-danger fw-bold mt-1">Theater</h5> &nbsp; &nbsp;
//         <span className="mt-1">{menuName}</span>
//       </div>

//       <div className="container user-form-container shadow">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleAddOrUpdate();
//           }}
//         >
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label htmlFor="cinema" className="form-label">Cinema Name</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.cinema ? 'is-invalid' : ''}`}
//                 id="cinema"
//                 value={cinema}
//                 onChange={(e) => setCinema(e.target.value)}
//                 placeholder="Enter Cinema Name"
//               />
//               {errors.cinema && <div className="invalid-feedback">{errors.cinema}</div>}
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="screen" className="form-label">Screen</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.screen ? 'is-invalid' : ''}`}
//                 id="screen"
//                 value={screen}
//                 onChange={(e) => setScreen(e.target.value)}
//                 placeholder="Enter Screen Name or Number"
//               />
//               {errors.screen && <div className="invalid-feedback">{errors.screen}</div>}
//             </div>
//           </div>

//           <div className="row mb-4">
//             <div className="col-md-6">
//               <label htmlFor="showTime" className="form-label">Show Time</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.showTime ? 'is-invalid' : ''}`}
//                 id="showTime"
//                 value={showTime}
//                 onChange={(e) => setShowTime(e.target.value)}
//                 placeholder="e.g. 6:00 PM"
//               />
//               {errors.showTime && <div className="invalid-feedback">{errors.showTime}</div>}
//             </div>
//           </div>

//           <div className="form-actions">

//             <button
//               type="button"
//               className="btn btn-outline-danger cancel"
//               onClick={() => {
//                 setCinema('');
//                 setScreen('');
//                 setShowTime('');
//                 setEditingIndex(null);
//                 setErrors({});
//               }}
//             >
//               Cancel
//             </button>
//             <button type="submit" className="btn btn-danger submit-update me-3">
//               {editingIndex !== null ? 'Update' : 'Submit'}
//             </button>
            
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

//the working code

// import React, { useState, useContext } from 'react';
// import { TheaterContext } from '../Theaterdetails/TheaterContext';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './Newtheater.css';

// export default function TheaterManager() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuName = location.state?.menu || "No data received";
//   const { entries, addEntry, updateEntry, deleteEntry } = useContext(TheaterContext);

//   const [cinema, setCinema] = useState('');
//   const [screen, setScreen] = useState('');
//   const [showTime, setShowTime] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   // Validation errors
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!cinema.trim()) newErrors.cinema = "Cinema name is required";
//     if (!screen.trim()) newErrors.screen = "Screen is required";
//     if (!showTime.trim()) newErrors.showTime = "Show time is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleAddOrUpdate = () => {
//     if (!validateForm()) return;

//     const newEntry = { cinema, screen, showTime };

//     if (editingIndex !== null) {
//       updateEntry(editingIndex, newEntry);
//       setEditingIndex(null);
//     } else {
//       addEntry(newEntry);
//     }

//     // Clear form fields
//     setCinema('');
//     setScreen('');
//     setShowTime('');
//     setErrors({});

//     navigate('/managetheater');
//   };

//   const handleEdit = (index) => {
//     const entry = entries[index];
//     setCinema(entry.cinema);
//     setScreen(entry.screen);
//     setShowTime(entry.showTime);
//     setEditingIndex(index);
//   };

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="text">
//         <h5 className="text-danger fw-bold mt-1">Theater</h5> &nbsp; &nbsp;
//         <span className="mt-1">{menuName}</span>
//       </div>

//       <div className="container user-form-container shadow">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleAddOrUpdate();
//           }}
//         >
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <label htmlFor="cinema" className="form-label">Cinema Name</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.cinema ? 'is-invalid' : ''}`}
//                 id="cinema"
//                 value={cinema}
//                 onChange={(e) => setCinema(e.target.value)}
//                 placeholder="Enter Cinema Name"
//               />
//               {errors.cinema && <div className="invalid-feedback">{errors.cinema}</div>}
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="screen" className="form-label">Screen</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.screen ? 'is-invalid' : ''}`}
//                 id="screen"
//                 value={screen}
//                 onChange={(e) => setScreen(e.target.value)}
//                 placeholder="Enter Screen Name or Number"
//               />
//               {errors.screen && <div className="invalid-feedback">{errors.screen}</div>}
//             </div>
//           </div>

//           <div className="row mb-4">
//             <div className="col-md-6">
//               <label htmlFor="showTime" className="form-label">Show Time</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.showTime ? 'is-invalid' : ''}`}
//                 id="showTime"
//                 value={showTime}
//                 onChange={(e) => setShowTime(e.target.value)}
//                 placeholder="e.g. 6:00 PM"
//               />
//               {errors.showTime && <div className="invalid-feedback">{errors.showTime}</div>}
//             </div>
//           </div>

//           <div className="form-actions">

//             <button
//               type="button"
//               className="btn btn-outline-danger cancel"
//               onClick={() => {
//                 setCinema('');
//                 setScreen('');
//                 setShowTime('');
//                 setEditingIndex(null);
//                 setErrors({});
//               }}
//             >
//               Cancel
//             </button>
//             <button type="submit" className="btn btn-danger submit-update me-3">
//               {editingIndex !== null ? 'Update' : 'Submit'}
//             </button>
            
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }


// frontend/TheaterManager.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import './Newtheater.css';

export default function NewTheater() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuName = location.state?.menu || "No data received";  
  const [cinema, setCinema] = useState('');
  const [screen, setScreen] = useState('');
  const [showTime, setShowTime] = useState('');
  const [errors, setErrors] = useState({});
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // Extract if we're editing
  const isEdit = location.state?.isEdit || false;
  const editEntry = location.state?.entry || null;

  useEffect(() => {
    if (isEdit && editEntry) {
      setCinema(editEntry.cinema);
      setScreen(editEntry.screen);
      setShowTime(editEntry.showTime);
    }
  }, [isEdit, editEntry]);

  const validateForm = () => {
    const newErrors = {};
    if (!cinema.trim()) newErrors.cinema = "Cinema name is required";
    if (!screen.trim()) newErrors.screen = "Screen is required";
    if (!showTime.trim()) newErrors.showTime = "Show time is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (isEdit) {
        // Update existing entry
        await axios.put(`http://localhost:5000/api/theaters/${editEntry._id}`, {
          cinema, screen, showTime
        });
        alert('Theater entry updated!');
      } else {
        // Create new entry
        await axios.post('http://localhost:5000/api/theaters', {
          cinema, screen, showTime
        });
        alert('Theater entry added!');
      }

      // Redirect to ManageTheater
      navigate('/managetheater');

    } catch (err) {
      console.error("Error:", err);
      alert("Operation failed.");
    }
  };

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  return (
    <>
      <Adminheader />
       <div className="sideside">
         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
       </div>

       <div className="text">
         <h5 className="text-danger fw-bold mt-1">Theater</h5> &nbsp; &nbsp;
         <span className="mt-1">{menuName}</span>
       </div>


      <div className="container mt-5  newtheaterformparent">
        <h3 className='text-danger'>{isEdit ? "Edit Theater Entry" : "Create New Theater"}</h3>
        <form onSubmit={handleSubmit} className='for'>
          <div className="mb-3">
            <label>Cinema</label>
            <input
              type="text"
              value={cinema}
              placeholder="Enter Cinema"
              onChange={(e) => setCinema(e.target.value)}
              className={`form-control ${errors.cinema ? 'is-invalid' : ''}`}
            />
            {errors.cinema && <div className="invalid-feedback">{errors.cinema}</div>}
          </div>

          <div className="mb-3">
            <label>Screen</label>
            <input
              type="text"
              value={screen}
              placeholder="Enter Screen"
              onChange={(e) => setScreen(e.target.value)}
              className={`form-control ${errors.screen ? 'is-invalid' : ''}`}
            />
            {errors.screen && <div className="invalid-feedback">{errors.screen}</div>}
          </div>

          <div className="mb-3">
            <label>Show Time</label>
            <input
              type="text"
              value={showTime}
              placeholder="Enter Show Time"
              onChange={(e) => setShowTime(e.target.value)}
              className={`form-control ${errors.showTime ? 'is-invalid' : ''}`}
            />
            {errors.showTime && <div className="invalid-feedback">{errors.showTime}</div>}
          </div>

          <button type="submit" className="create-btn">
            {isEdit ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </>
  );
}
