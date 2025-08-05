// import React, { useState } from 'react';
// import '../Theaterdetails/Theatermanage.css';
// import { FaMobileAlt, FaUtensils, FaInfoCircle, FaHeart } from 'react-icons/fa';

// export default function Theatermanage() {
//   const [cinema, setCinema] = useState('Cosmo Cinemas');
//   const [hall, setHall] = useState('PEELAMEDU AC 4K RGB');
//   const [location, setLocation] = useState('Coimbatore');
//   const [showtimes, setShowtimes] = useState([
//     { time: '11:00 AM', label: 'DOLBY ATMOS' },
//     { time: '02:30 PM', label: 'DOLBY ATMOS' },
//     { time: '06:30 PM', label: 'DOLBY ATMOS' },
//     { time: '10:00 PM', label: 'DOLBY ATMOS' },
//   ]);
//   const [newTime, setNewTime] = useState('');
//   const [newLabel, setNewLabel] = useState('');

//   const addShowtime = () => {
//     if (!newTime) return;
//     setShowtimes([...showtimes, { time: newTime, label: newLabel || 'DOLBY ATMOS' }]);
//     setNewTime('');
//     setNewLabel('');
//   };

//   return (
//     <div className="editor-container">
//       <div className="inputs-section">
//         <div>
//           <label>Cinema Name</label>
//           <input value={cinema} onChange={e => setCinema(e.target.value)} />
//         </div>
//         <div>
//           <label>Hall Info</label>
//           <input value={hall} onChange={e => setHall(e.target.value)} />
//         </div>
//         <div>
//           <label>Location</label>
//           <input value={location} onChange={e => setLocation(e.target.value)} />
//         </div>
//         <div>
//           <label>New Showtime</label>
//           <div className="new-showtime">
//             <input
//               placeholder="e.g. 03:00 PM"
//               value={newTime}
//               onChange={e => setNewTime(e.target.value)}
//             />
//             <input
//               placeholder="e.g. DOLBY ATMOS"
//               value={newLabel}
//               onChange={e => setNewLabel(e.target.value)}
//             />
//             <button onClick={addShowtime}>Add</button>
//           </div>
//         </div>
//       </div>

//       <hr />

//       <div className="preview-card">
//         <div className="preview-header">
//           <div className="logo-placeholder">LOGO</div>
//           <div className="header-info">
//             <div className="title">{cinema}</div>
//             <div className="subtitle">{hall}</div>
//             <div className="location">Lase: {location} <FaInfoCircle className="info-icon" /></div>
//           </div>
//           <div className="favorite"><FaHeart /></div>
//         </div>

//         <div className="times-preview">
//           {showtimes.map((st, i) => (
//             <button key={i} className="time-btn">
//               <span className="ttime">{st.time}</span>
//               <span className="tlabel">{st.label}</span>
//             </button>
//           ))}
//         </div>
//         <div className="tags-preview">
//           <FaMobileAlt /> <span className="tag-text">M‑Ticket</span>
//           <FaUtensils /> <span className="tag-text">Food &amp; Beverage</span>
//           <span className="non-cancel">Non‑cancellable</span>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { FaMobileAlt, FaUtensils, FaInfoCircle, FaHeart } from 'react-icons/fa';
// import '../Theaterdetails/Theatermanage.css';

// export default function Theatermanage() {
//   const [cinema, setCinema] = useState('Cosmo Cinemas');
//   const [hall, setHall] = useState('PEELAMEDU AC 4K RGB');
//   const [location, setLocation] = useState('Coimbatore');
//   const [showtimes, setShowtimes] = useState([
//     { time: '11:00 AM', label: 'DOLBY ATMOS' },
//     { time: '02:30 PM', label: 'DOLBY ATMOS' },
//     { time: '06:30 PM', label: 'DOLBY ATMOS' },
//     { time: '10:00 PM', label: 'DOLBY ATMOS' },
//   ]);
//   const [newTime, setNewTime] = useState('');
//   const [newLabel, setNewLabel] = useState('');

//   const addShowtime = () => {
//     if (!newTime) return;
//     setShowtimes([...showtimes, { time: newTime, label: newLabel || 'DOLBY ATMOS' }]);
//     setNewTime('');
//     setNewLabel('');
//   };

//   return (
//     <div className="editor-container bg-warning ">
//       <div className="inputs-section">
//         <div>
//           <label>Cinema Name</label>
//           <input value={cinema} onChange={e => setCinema(e.target.value)} />
//         </div>
//         <div>
//           <label>Hall Info</label>
//           <input value={hall} onChange={e => setHall(e.target.value)} />
//         </div>
//         <div>
//           <label>Location</label>
//           <input value={location} onChange={e => setLocation(e.target.value)} />
//         </div>
//         <div>
//           <label>New Showtime</label>
//           <div className="new-showtime">
//             <input
//               placeholder="e.g. 03:00 PM"
//               value={newTime}
//               onChange={e => setNewTime(e.target.value)}
//             />
//             <input
//               placeholder="e.g. DOLBY ATMOS"
//               value={newLabel}
//               onChange={e => setNewLabel(e.target.value)}
//             />
//             <button onClick={addShowtime}>Add</button>
//           </div>
//         </div>
//       </div>

//       <hr />

//       <div className="preview-card">
//         <div className="preview-header">
//           <div className="logo-placeholder">LOGO</div>
//           <div className="header-info">
//             <div className="title">{cinema}</div>
//             <div className="subtitle">{hall}</div>
//             <div className="location">
//               Location: {location} <FaInfoCircle className="info-icon" />
//             </div>
//           </div>
//           <div className="favorite">
//             <FaHeart />
//           </div>
//         </div>

//         <div className="times-preview">
//           {showtimes.map((st, i) => (
//             <button key={i} className="time-btn">
//               <span className="ttime">{st.time}</span>
//               <span className="tlabel">{st.label}</span>
//             </button>
//           ))}
//         </div>
//         <div className="tags-preview">
//           <FaMobileAlt /> <span className="tag-text">M‑Ticket</span>
//           <FaUtensils /> <span className="tag-text">Food &amp; Beverage</span>
//           <span className="non-cancel">Non‑cancellable</span>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from 'react';
// import '../Theaterdetails/Theatermanage.css';
// import { FaMobileAlt, FaUtensils, FaInfoCircle, FaHeart } from 'react-icons/fa';

// export default function Theatermanage() {
//   const [cinema, setCinema] = useState('');
//   const [hall, setHall] = useState('');
//   const [location, setLocation] = useState('');
//   const [showtimes, setShowtimes] = useState([
//     { time: '11:00 AM', label: 'DOLBY ATMOS' },
//     { time: '02:30 PM', label: 'DOLBY ATMOS' },
//     { time: '06:30 PM', label: 'DOLBY ATMOS' },
//     { time: '10:00 PM', label: 'DOLBY ATMOS' },
//   ]);
//   const [newTime, setNewTime] = useState('');
//   const [newLabel, setNewLabel] = useState('');

//   const addShowtime = () => {
//     if (!newTime) return;
//     setShowtimes(prevShowtimes => [
//       ...prevShowtimes,
//       { time: newTime, label: newLabel || 'DOLBY ATMOS' }
//     ]);
//     setNewTime('');
//     setNewLabel('');
//   };

//   return (
//     <div className="editor-container">
//       <div className="inputs-section">
//         <div>
//           <label>Cinema Name</label>
//           <input value={cinema} onChange={e => setCinema(e.target.value)} />
//         </div>
//         <div>
//           <label>Hall Info</label>
//           <input value={hall} onChange={e => setHall(e.target.value)} />
//         </div>
//         <div>
//           <label>Location</label>
//           <input value={location} onChange={e => setLocation(e.target.value)} />
//         </div>
//         <div>
//           <label>New Showtime</label>
//           <div className="new-showtime">
//             <input
//               placeholder="e.g. 03:00 PM"
//               value={newTime}
//               onChange={e => setNewTime(e.target.value)}
//             />
//             <input
//               placeholder="e.g. DOLBY ATMOS"
//               value={newLabel}
//               onChange={e => setNewLabel(e.target.value)}
//             />
//             <button onClick={addShowtime}>Add</button>
//           </div>
//         </div>
//       </div>

//       <div className="added-showtimes">
//         <h3>Added Showtimes</h3>
//         <ul>
//           {showtimes.map((st, index) => (
//             <li key={index}>
//               {st.time} - {st.label}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <hr />

//       <div className="preview-card">
//         <div className="preview-header">
//           <div className="logo-placeholder">LOGO</div>
//           <div className="header-info">
//             <div className="title">{cinema}</div>
//             <div className="subtitle">{hall}</div>
//             <div className="location">
//               Lase: {location} <FaInfoCircle className="info-icon" />
//             </div>
//           </div>
//           <div className="favorite"><FaHeart /></div>
//         </div>

//         <div className="times-preview">
//           {showtimes.map((st, i) => (
//             <button key={i} className="time-btn">
//               <span className="ttime">{st.time}</span>
//               <span className="tlabel">{st.label}</span>
//             </button>
//           ))}
//         </div>
//         <div className="tags-preview">
//           <FaMobileAlt /> <span className="tag-text">M‑Ticket</span>
//           <FaUtensils /> <span className="tag-text">Food &amp; Beverage</span>
//           <span className="non-cancel">Non‑cancellable</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Adminsidebar from '../AdminSide/Adminsidebar';

export default function TheaterManager() {
  const [cinema, setCinema] = useState('');
  const [location, setLocation] = useState('');
  const [hall, setHall] = useState('');
  const [showtime, setShowtime] = useState('');
  const [atmos, setAtmos] = useState('');
  const [entries, setEntries] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const handleAddOrUpdate = () => {
    if (!cinema || !location || !hall || !showtime || !atmos) {
      alert('Please fill in all fields');
      return;
    }

    const newEntry = { cinema, location, hall, showtime, atmos };

    if (editingIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[editingIndex] = newEntry;
      setEntries(updatedEntries);
      setEditingIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setCinema('');
    setLocation('');
    setHall('');
    setShowtime('');
    setAtmos('');
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setCinema(entry.cinema);
    setLocation(entry.location);
    setHall(entry.hall);
    setShowtime(entry.showtime);
    setAtmos(entry.atmos);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (

      <>
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}  />
      </div>

    <div className='bg-secondary py-1' style={{ maxWidth: '980px', margin: '5px auto', fontFamily: 'Arial, sans-serif',position: 'relative', left: '145px'}}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
        {editingIndex !== null ? 'Edit' : 'Add'} Theater Entry
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddOrUpdate();
        }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          marginBottom: '30px',
        }}
      >
        {[
          { id: 'cinema', label: 'Cinema Name', value: cinema, setter: setCinema, placeholder: 'Enter Cinema Name' },
          { id: 'location', label: 'Location', value: location, setter: setLocation, placeholder: 'Enter Location' },
          { id: 'hall', label: 'Hall', value: hall, setter: setHall, placeholder: 'Enter Hall Info' },
          { id: 'showtime', label: 'Showtime', value: showtime, setter: setShowtime, placeholder: 'Enter Showtime' },
          { id: 'atmos', label: 'Atmos', value: atmos, setter: setAtmos, placeholder: 'Enter Atmos Info' },
        ].map(({ id, label, value, setter, placeholder }) => (
          <div key={id} style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor={id} style={{ marginBottom: '5px', fontWeight: '600' }}>
              {label}
            </label>
            <input
              id={id}
              type="text"
              value={value}
              onChange={(e) => setter(e.target.value)}
              placeholder={placeholder}
              style={{
                padding: '8px 12px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                outline: 'none',
              }}
            />
          </div>
        ))}

        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            {editingIndex !== null ? 'Update' : 'Add'} Entry
          </button>
        </div>
      </form>

      {entries.length > 0 && (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={thStyle}>Cinema</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>Hall</th>
              <th style={thStyle}>Showtime</th>
              <th style={thStyle}>Atmos</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody >
            {entries.map((entry, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={tdStyle}>{entry.cinema}</td>
                <td style={tdStyle}>{entry.location}</td>
                <td style={tdStyle}>{entry.hall}</td>
                <td style={tdStyle}>{entry.showtime}</td>
                <td style={tdStyle}>{entry.atmos}</td>
                <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>
                  <button
                    onClick={() => handleEdit(index)}
                    style={{ ...actionButtonStyle, backgroundColor: '#f0ad4e' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{ ...actionButtonStyle, backgroundColor: '#d9534f' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
      </>
  );
}

const thStyle = {
  textAlign: 'left',
  padding: '10px 15px',
  borderBottom: '2px solid #ddd',
};

const tdStyle = {
  padding: '10px 15px',
  verticalAlign: 'middle',
  borderBottom: '1px solid #ddd',
};

const actionButtonStyle = {
  padding: '6px 12px',
  marginRight: '8px',
  border: 'none',
  borderRadius: '3px',
  color: '#fff',
  cursor: 'pointer',
};
