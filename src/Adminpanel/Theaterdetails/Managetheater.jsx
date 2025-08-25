// the og code
// src/components/ManageTheater.jsx
// import React, { useContext, useState } from 'react';
// import { TheaterContext } from '../Theaterdetails/TheaterContext';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useLocation } from "react-router-dom";
// import './Managetheater.css'

// export default function ManageTheater() {

//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const { entries, updateEntry, deleteEntry } = useContext(TheaterContext);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedEntry, setEditedEntry] = useState({ cinema: '', screen: '', showTime: '' });
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditedEntry(entries[index]);
//   };

//   const handleSave = () => {
//     updateEntry(editIndex, editedEntry);
//     setEditIndex(null);
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

//         <div className=" text ">
//             <h5 className="text-danger fw-bold mt-2">Theater</h5> &nbsp; &nbsp;
//             <span className="mt-2">{menuName} </span>
//         </div>

//       <div className="container managediv mt-5 ">
//         {/* <h2 className="text-danger fw-bold">Manage Theater Entries</h2> */}

//         {entries.length === 0 ? (
//           <p className="text-muted">No entries available.</p>
//         ) : (
//           <table className="table table-bordered border border-black text-center mt-4 pb-4">
//             <thead className="table-light border border-black">
//               <tr>
//                 <th>Cinema</th>
//                 <th>Screen</th>
//                 <th>Show Time</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {entries.map((entry, index) => (
//                 <tr key={index}>
//                   <td>
//                     {editIndex === index ? (
//                       <input
//                         value={editedEntry.cinema}
//                         onChange={(e) => setEditedEntry({ ...editedEntry, cinema: e.target.value })}
//                         className="form-control"
//                       />
//                     ) : (
//                       entry.cinema
//                     )}
//                   </td>
//                   <td>
//                     {editIndex === index ? (
//                       <input
//                         value={editedEntry.screen}
//                         onChange={(e) => setEditedEntry({ ...editedEntry, screen: e.target.value })}
//                         className="form-control"
//                       />
//                     ) : (
//                       entry.screen
//                     )}
//                   </td>
//                   <td>
//                     {editIndex === index ? (
//                       <input
//                         value={editedEntry.showTime}
//                         onChange={(e) => setEditedEntry({ ...editedEntry, showTime: e.target.value })}
//                         className="form-control"
//                       />
//                     ) : (
//                       entry.showTime
//                     )}
//                   </td>
//                   <td>
//                     {editIndex === index ? (
//                       <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
//                         Save
//                       </button>
//                     ) : (
//                       <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>
//                         Edit
//                       </button>
//                     )}
//                     <button className="btn btn-danger btn-sm" onClick={() => deleteEntry(index)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// }

// the working code

// import React, { useContext, useState } from 'react';
// import { TheaterContext } from '../Theaterdetails/TheaterContext';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useLocation } from "react-router-dom";
// import './Managetheater.css'

// export default function ManageTheater() {

//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const { entries, updateEntry, deleteEntry } = useContext(TheaterContext);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedEntry, setEditedEntry] = useState({ cinema: '', screen: '', showTime: '' });
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditedEntry(entries[index]);
//   };

//   const handleSave = () => {
//     updateEntry(editIndex, editedEntry);
//     setEditIndex(null);
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

//         <div className=" text ">
//             <h5 className="text-danger fw-bold mt-2">Theater</h5> &nbsp; &nbsp;
//             <span className="mt-2">{menuName} </span>
//         </div>

//       <div className="container managediv mt-5 ">
//         {/* <h2 className="text-danger fw-bold">Manage Theater Entries</h2> */}

//         {entries.length === 0 ? (
//           <p className="text-muted">No entries available.</p>
//         ) : (
//           <table className="table table-bordered border border-black text-center mt-4 pb-4">
//             <thead className="table-light border border-black">
//               <tr>
//                 <th>Cinema</th>
//                 <th>Screen</th>
//                 <th>Show Time</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {entries.map((entry, index) => (
//                 <tr key={index}>
//                   <td>
//                     {editIndex === index ? (
//                       <input
//                         value={editedEntry.cinema}
//                         onChange={(e) => setEditedEntry({ ...editedEntry, cinema: e.target.value })}
//                         className="form-control"
//                       />
//                     ) : (
//                       entry.cinema
//                     )}
//                   </td>
//                   <td>
//                     {editIndex === index ? (
//                       <input
//                         value={editedEntry.screen}
//                         onChange={(e) => setEditedEntry({ ...editedEntry, screen: e.target.value })}
//                         className="form-control"
//                       />
//                     ) : (
//                       entry.screen
//                     )}
//                   </td>
//                   <td>
//                     {editIndex === index ? (
//                       <input
//                         value={editedEntry.showTime}
//                         onChange={(e) => setEditedEntry({ ...editedEntry, showTime: e.target.value })}
//                         className="form-control"
//                       />
//                     ) : (
//                       entry.showTime
//                     )}
//                   </td>
//                   <td>
//                     {editIndex === index ? (
//                       <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
//                         Save
//                       </button>
//                     ) : (
//                       <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>
//                         Edit
//                       </button>
//                     )}
//                     <button className="btn btn-danger btn-sm" onClick={() => deleteEntry(index)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// }

// ManageTheater.jsx

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import './Managetheater.css';
// import { useNavigate } from 'react-router-dom';

// export default function ManageTheater() {
//   const [entries, setEntries] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editedEntry, setEditedEntry] = useState({ cinema: '', screen: '', showTime: '' });
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//    const navigate = useNavigate();

//   const fetchEntries = async () => {
//     const res = await axios.get('http://localhost:5000/api/theaters');
//     setEntries(res.data);
//   };

//   useEffect(() => {
//     fetchEntries();
//   }, []);

//   // const handleEdit = (entry) => {
//   //   setEditId(entry._id);
//   //   setEditedEntry(entry);
//   // };

//   const handleEdit = (entry) => {
//     navigate('/newtheater', { state: { isEdit: true, entry } });
//   };

//   const handleSave = async () => {
//     await axios.put(`http://localhost:5000/api/theaters/${editId}`, editedEntry);
//     setEditId(null);
//     fetchEntries();
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:5000/api/theaters/${id}`);
//     fetchEntries();
//   };

//   const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

//   return (
//     <>
//       <Adminheader />
//       <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

//       <div className="container mt-5">
//         <h3>Manage Theater Entries</h3>
//         <table className="table table-bordered text-center mt-4">
//           <thead className="table-light">
//             <tr>
//               <th>Cinema</th>
//               <th>Screen</th>
//               <th>Show Time</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {entries.map((entry) => (
//               <tr key={entry._id}>
//                 <td>
//                   {editId === entry._id ? (
//                     <input
//                       value={editedEntry.cinema}
//                       onChange={(e) => setEditedEntry({ ...editedEntry, cinema: e.target.value })}
//                       className="form-control"
//                     />
//                   ) : (
//                     entry.cinema
//                   )}
//                 </td>
//                 <td>
//                   {editId === entry._id ? (
//                     <input
//                       value={editedEntry.screen}
//                       onChange={(e) => setEditedEntry({ ...editedEntry, screen: e.target.value })}
//                       className="form-control"
//                     />
//                   ) : (
//                     entry.screen
//                   )}
//                 </td>
//                 <td>
//                   {editId === entry._id ? (
//                     <input
//                       value={editedEntry.showTime}
//                       onChange={(e) => setEditedEntry({ ...editedEntry, showTime: e.target.value })}
//                       className="form-control"
//                     />
//                   ) : (
//                     entry.showTime
//                   )}
//                 </td>
//                 <td>
//                   {editId === entry._id ? (
//                     <button className="btn btn-success btn-sm me-2" onClick={handleSave}>Save</button>
//                   ) : (
//                     <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(entry)}>Edit</button>
//                   )}
//                   <button className="btn btn-danger btn-sm" onClick={() => handleDelete(entry._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }


//FINAL CORRECT CODE 

// ManageTheater.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import './Managetheater.css';
// import { BsSearch } from "react-icons/bs";
// import { CSVLink } from 'react-csv';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';
// import * as XLSX from 'xlsx';

// const ManageTheater = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [theaters, setTheaters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedTheaters, setSelectedTheaters] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const menuName = location.state?.menu || "No data received";
//   const theatersPerPage = 10;

//   useEffect(() => {
//     const fetchTheaters = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/theaters');
//         setTheaters(res.data);
//       } catch (error) {
//         console.error("Failed to fetch theaters", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTheaters();
//   }, []);

//   const filteredTheaters = theaters.filter(theater =>
//     theater.cinema?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     theater.screen?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     theater.showTime?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLast = currentPage * theatersPerPage;
//   const indexOfFirst = indexOfLast - theatersPerPage;
//   const currentTheaters = filteredTheaters.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredTheaters.length / theatersPerPage);

//   const handleCheckboxChange = (id) => {
//     const updated = selectedTheaters.includes(id)
//       ? selectedTheaters.filter(i => i !== id)
//       : [...selectedTheaters, id];
//     setSelectedTheaters(updated);
//     setSelectAll(currentTheaters.every(t => updated.includes(t._id)));
//   };

//   const handleSelectAll = () => {
//     if (selectAll) {
//       const updated = selectedTheaters.filter(id => !currentTheaters.some(t => t._id === id));
//       setSelectedTheaters(updated);
//       setSelectAll(false);
//     } else {
//       const currentIds = currentTheaters.map(t => t._id);
//       const updated = [...new Set([...selectedTheaters, ...currentIds])];
//       setSelectedTheaters(updated);
//       setSelectAll(true);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this theater?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/theaters/${id}`);
//       setTheaters(prev => prev.filter(t => t._id !== id));
//     } catch (error) {
//       alert("Delete failed");
//     }
//   };

//   const handleDeleteSelected = async () => {
//     if (selectedTheaters.length === 0) return;
//     if (!window.confirm(`Delete ${selectedTheaters.length} selected theaters?`)) return;

//     try {
//       await Promise.all(
//         selectedTheaters.map(id => axios.delete(`http://localhost:5000/api/theaters/${id}`))
//       );
//       setTheaters(prev => prev.filter(t => !selectedTheaters.includes(t._id)));
//       setSelectedTheaters([]);
//     } catch (err) {
//       alert("Bulk delete failed.");
//     }
//   };

//   const handleExportPDF = () => {
//     const doc = new jsPDF();
//     doc.text("Theater List", 14, 10);
//     autoTable(doc, {
//       startY: 20,
//       head: [["Cinema", "Screen", "Show Time"]],
//       body: filteredTheaters.map(t => [t.cinema, t.screen, t.showTime])
//     });
//     doc.save("theaters.pdf");
//   };

//   const handleExportExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(
//       filteredTheaters.map(t => ({
//         Cinema: t.cinema,
//         Screen: t.screen,
//         ShowTime: t.showTime
//       }))
//     );
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Theaters");
//     XLSX.writeFile(wb, "theaters.xlsx");
//   };

//   return (
//     <>
//       <div className="adminside"><Adminsidebar /></div>
//       <Adminheader />

//       <div className="parent">

//       <div className="text">
//         <h5 className="text-danger fw-bold mt-1">Theater</h5>
//         <span className="mt-1 ms-3">{menuName}</span>
//       </div>

//         <div className="manage-user-container">
//           <h3 className="newform">Manage Theater</h3>

//           <div className="search-bar">
//             <span className='search-icon'><BsSearch /></span>
//             <input
//               type="text"
//               placeholder="Search by cinema, screen, or show time"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div className="export-buttons">
//             <button className="export-btn" onClick={handleDeleteSelected} disabled={selectedTheaters.length === 0}>
//               <img src="https://assets-v2.lottiefiles.com/a/e09820ea-116b-11ee-8e93-4f2a1602d144/HdbA8EJlUN.gif" alt="Delete" className="export-icon delete" />
//             </button>
//             <button className="export-btn" onClick={handleExportExcel}>
//               <img src="https://cdn.iconscout.com/icon/free/png-256/free-microsoft-excel-icon-svg-png-download-1756310.png" alt="Excel" className="export-icon" />
//             </button>
//             <CSVLink
//               data={filteredTheaters.map(t => ({
//                 Cinema: t.cinema,
//                 Screen: t.screen,
//                 ShowTime: t.showTime
//               }))}
//               filename="theaters.csv"
//             >
//               <button className="export-btn">
//                 <img src="https://cdn-icons-png.flaticon.com/512/8242/8242984.png" alt="CSV" className="export-icon" />
//               </button>
//             </CSVLink>
//             <button className="export-btn" onClick={handleExportPDF}>
//               <img src='https://cdn-icons-png.freepik.com/512/14180/14180779.png' alt="PDF" className="export-icon" />
//             </button>
//           </div>

//           <div className="table-responsive">
//             <table className="user-table">
//               <thead>
//                 <tr>
//                   <th><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
//                   <th>S.No</th>
//                   <th>Cinema</th>
//                   <th>Screen</th>
//                   <th>Show Time</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr><td colSpan="6">Loading theaters...</td></tr>
//                 ) : currentTheaters.length === 0 ? (
//                   <tr><td colSpan="6">No theaters found.</td></tr>
//                 ) : (
//                   currentTheaters.map((theater, idx) => {
//                     const globalIndex = indexOfFirst + idx;
//                     const descendingSNo = filteredTheaters.length - globalIndex;

//                     return (
//                       <tr key={theater._id}>
//                         <td>
//                           <input
//                             type="checkbox"
//                             checked={selectedTheaters.includes(theater._id)}
//                             onChange={() => handleCheckboxChange(theater._id)}
//                           />
//                         </td>
//                         <td>{descendingSNo}</td>
//                         <td>{theater.cinema}</td>
//                         <td>{theater.screen}</td>
//                         <td>{theater.showTime}</td>
//                         <td>
//                           <button className="edit-btn" onClick={() => navigate("/newtheater", {
//                             state: {
//                               isEdit: true,
//                               entry: theater
//                             }
//                           })}>✏️</button>
//                           <button className="delete-btn" onClick={() => handleDelete(theater._id)}>🗑️</button>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="pagination">
//             <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>⬅️</button>
//             <span className='mt-2 mx-1'>Page {currentPage} of {totalPages}</span>
//             <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>➡️</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ManageTheater;

//CLONE CODE FOR WORKING

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import './Managetheater.css';
import { BsSearch } from "react-icons/bs";
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

const ManageTheater = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theaters, setTheaters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTheaters, setSelectedTheaters] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const menuName = location.state?.menu || "No data received";
  const theatersPerPage = 10;

  useEffect(() => {
    const fetchTheaters = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/theaters');
        setTheaters(res.data);
      } catch (error) {
        console.error("Failed to fetch theaters", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTheaters();
  }, []);

  const filteredTheaters = theaters.filter(theater =>
    theater.cinema?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    theater.screen?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    theater.showTime?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * theatersPerPage;
  const indexOfFirst = indexOfLast - theatersPerPage;
  const currentTheaters = filteredTheaters.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredTheaters.length / theatersPerPage);

  const handleCheckboxChange = (id) => {
    const updated = selectedTheaters.includes(id)
      ? selectedTheaters.filter(i => i !== id)
      : [...selectedTheaters, id];
    setSelectedTheaters(updated);
    setSelectAll(currentTheaters.every(t => updated.includes(t._id)));
  };

  const handleSelectAll = () => {
    if (selectAll) {
      const updated = selectedTheaters.filter(id => !currentTheaters.some(t => t._id === id));
      setSelectedTheaters(updated);
      setSelectAll(false);
    } else {
      const currentIds = currentTheaters.map(t => t._id);
      const updated = [...new Set([...selectedTheaters, ...currentIds])];
      setSelectedTheaters(updated);
      setSelectAll(true);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this theater?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/theaters/${id}`);
      setTheaters(prev => prev.filter(t => t._id !== id));
    } catch (error) {
      alert("Delete failed");
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedTheaters.length === 0) return;
    if (!window.confirm(`Delete ${selectedTheaters.length} selected theaters?`)) return;

    try {
      await Promise.all(
        selectedTheaters.map(id => axios.delete(`http://localhost:5000/api/theaters/${id}`))
      );
      setTheaters(prev => prev.filter(t => !selectedTheaters.includes(t._id)));
      setSelectedTheaters([]);
    } catch (err) {
      alert("Bulk delete failed.");
    }
  };

  const toggleStatus = (id, enable) => {
    setTheaters(prev =>
      prev.map(t =>
        t._id === id ? { ...t, isEnabled: enable } : t
      )
    );
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Theater List", 14, 10);
    autoTable(doc, {
      startY: 20,
      head: [["Cinema", "Screen", "Show Time"]],
      body: filteredTheaters.map(t => [t.cinema, t.screen, t.showTime])
    });
    doc.save("theaters.pdf");
  };

  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      filteredTheaters.map(t => ({
        Cinema: t.cinema,
        Screen: t.screen,
        ShowTime: t.showTime
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Theaters");
    XLSX.writeFile(wb, "theaters.xlsx");
  };

  return (
    <>
      <div className="adminside"><Adminsidebar /></div>
      <Adminheader />

      <div className="parent">

        <div className="text">
          <h5 className="text-danger fw-bold mt-1">Theater</h5>
          <span className="mt-1 ms-3">{menuName}</span>
        </div>

        <div className="manage-user-container">
          <h3 className="newform">Manage Theater</h3>

          <div className="search-bar">
            <span className='search-icon'><BsSearch /></span>
            <input
              type="text"
              placeholder="Search by cinema, screen, or show time"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="export-buttons">
            <button className="export-btn" onClick={handleDeleteSelected} disabled={selectedTheaters.length === 0}>
              <img src="https://assets-v2.lottiefiles.com/a/e09820ea-116b-11ee-8e93-4f2a1602d144/HdbA8EJlUN.gif" alt="Delete" className="export-icon delete" />
            </button>
            <button className="export-btn" onClick={handleExportExcel}>
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-microsoft-excel-icon-svg-png-download-1756310.png" alt="Excel" className="export-icon" />
            </button>
            <CSVLink
              data={filteredTheaters.map(t => ({
                Cinema: t.cinema,
                Screen: t.screen,
                ShowTime: t.showTime
              }))}
              filename="theaters.csv"
            >
              <button className="export-btn">
                <img src="https://cdn-icons-png.flaticon.com/512/8242/8242984.png" alt="CSV" className="export-icon" />
              </button>
            </CSVLink>
            <button className="export-btn" onClick={handleExportPDF}>
              <img src='https://cdn-icons-png.freepik.com/512/14180/14180779.png' alt="PDF" className="export-icon" />
            </button>
          </div>

          <div className="table-responsive">
            <table className="user-table">
              <thead>
                <tr>
                  <th><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
                  <th>S.No</th>
                  <th>Cinema</th>
                  <th>Screen</th>
                  <th>Show Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="6">Loading theaters...</td></tr>
                ) : currentTheaters.length === 0 ? (
                  <tr><td colSpan="6">No theaters found.</td></tr>
                ) : (
                  currentTheaters.map((theater, idx) => {
                    const globalIndex = indexOfFirst + idx;
                    const descendingSNo = filteredTheaters.length - globalIndex;

                    return (
                      <tr key={theater._id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedTheaters.includes(theater._id)}
                            onChange={() => handleCheckboxChange(theater._id)}
                          />
                        </td>
                        <td>{descendingSNo}</td>
                        <td>{theater.cinema}</td>
                        <td>{theater.screen}</td>
                        <td>{theater.showTime}</td>
                        <td className='d-flex flex-wrap'>
                          <button className="edit-btn" onClick={() => navigate("/newtheater", {
                            state: { isEdit: true, entry: theater }
                          })}>✏️</button>

                          <button className="delete-btn" onClick={() => handleDelete(theater._id)}>🗑️</button>

                          <button
                            className="enable-btn"
                            onClick={() => toggleStatus(theater._id, true)}
                            disabled={theater.isEnabled}
                          >
                            Enable
                          </button>

                          <button
                            className="disable-btn"
                            onClick={() => toggleStatus(theater._id, false)}
                            disabled={!theater.isEnabled}
                          >
                            Disable
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>⬅️</button>
            <span className='mt-2 mx-1'>Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>➡️</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageTheater;




