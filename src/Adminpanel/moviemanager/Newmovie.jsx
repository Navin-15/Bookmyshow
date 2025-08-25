// import React, { useState } from 'react';

// /**
//  * MovieManager component
//  *
//  * - Form fields: name, description, duration, 2D/3D, language, release date, image URL
//  * - "Create" (or "Update") & "Clear" buttons
//  * - Below: list of created movies
//  * - Each entry has Edit & Delete actions
//  */
// function Moviemanage() {
//   // Form state
//   const initialForm = {
//     name: "",
//     description: "",
//     duration: "",
//     is3D: false,
//     language: "",
//     releaseDate: "",
//     imageUrl: "",
//   };

//   const [movies, setMovies] = useState([]);
//   const [formData, setFormData] = useState(initialForm);
//   const [editIndex, setEditIndex] = useState(null);

//   // Handle input changes generically
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((f) => ({
//       ...f,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name.trim()) {
//       alert("Movie name is required");
//       return;
//     }

//     if (editIndex !== null) {
//       // Update existing
//       setMovies((ms) =>
//         ms.map((m, idx) => (idx === editIndex ? { ...formData } : m))
//       );
//       setEditIndex(null);
//     } else {
//       // Create new
//       setMovies((ms) => [...ms, { ...formData }]);
//     }

//     setFormData(initialForm);
//   };

//   // Clear form & cancel edit
//   const handleClear = () => {
//     setFormData(initialForm);
//     setEditIndex(null);
//   };

//   const handleEdit = (idx) => {
//     setFormData(movies[idx]);
//     setEditIndex(idx);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleDelete = (idx) => {
//     if (window.confirm("Delete this movie?")) {
//       setMovies((ms) => ms.filter((_, i) => i !== idx));
//     }
//   };

//   return (
//     <div style={{ padding: 20, fontFamily: "sans-serif", maxWidth: 600 }}>
//       <h2>{editIndex !== null ? "Edit Movie" : "Add Movie"}</h2>
//       <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
//         <div style={{ marginBottom: 8 }}>
//           <label>
//             Name*: <br />
//             <input
//               name="name"
//               type="text"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               style={{ width: "100%" }}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: 8 }}>
//           <label>
//             Description: <br />
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows={3}
//               style={{ width: "100%" }}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: 8 }}>
//           <label>
//             Duration: <br />
//             <input
//               name="duration"
//               type="text"
//               placeholder="e.g. 2h 15m"
//               value={formData.duration}
//               onChange={handleChange}
//               style={{ width: "100%" }}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: 8 }}>
//           Format:
//           <label style={{ marginLeft: 10 }}>
//             <input
//               name="is3D"
//               type="radio"
//               checked={!formData.is3D}
//               onChange={() => setFormData((f) => ({ ...f, is3D: false }))}
//             />
//             2D
//           </label>
//           <label style={{ marginLeft: 10 }}>
//             <input
//               name="is3D"
//               type="radio"
//               checked={formData.is3D}
//               onChange={() => setFormData((f) => ({ ...f, is3D: true }))}
//             />
//             3D
//           </label>
//         </div>
//         <div style={{ marginBottom: 8 }}>
//           <label>
//             Language: <br />
//             <input
//               name="language"
//               type="text"
//               value={formData.language}
//               onChange={handleChange}
//               placeholder="e.g. English, Tamil"
//               style={{ width: "100%" }}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: 8 }}>
//           <label>
//             Release Date: <br />
//             <input
//               name="releaseDate"
//               type="date"
//               value={formData.releaseDate}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: 8 }}>
//           <label>
//             Image URL: <br />
//             <input
//               name="imageUrl"
//               type="url"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               placeholder="http://..."
//               style={{ width: "100%" }}
//             />
//           </label>
//         </div>
//         <button type="submit" style={{ marginRight: 10 }}>
//           {editIndex !== null ? "Update Movie" : "Create Movie"}
//         </button>
//         <button type="button" onClick={handleClear}>
//           Clear
//         </button>
//       </form>

//       <h3>Movie List</h3>
//       {movies.length === 0 && <p>No movies added yet.</p>}
//       <div>
//         {movies.map((movie, idx) => (
//           <div
//             key={idx}
//             style={{
//               border: "1px solid #ccc",
//               padding: 10,
//               marginBottom: 10,
//             }}
//           >
//             <h4>
//               {movie.name} {movie.is3D ? "(3D)" : "(2D)"}
//             </h4>
//             {movie.imageUrl && (
//               <img
//                 src={movie.imageUrl}
//                 alt={movie.name + " poster"}
//                 style={{ maxWidth: 150, maxHeight: 200, marginBottom: 8 }}
//               />
//             )}
//             <div>
//               <strong>Duration:</strong> {movie.duration || "N/A"}
//             </div>
//             <div>
//               <strong>Language:</strong> {movie.language || "N/A"}
//             </div>
//             <div>
//               <strong>Release Date:</strong>{" "}
//               {movie.releaseDate || "N/A"}
//             </div>
//             <div style={{ margin: "8px 0" }}>
//               <em>{movie.description}</em>
//             </div>
//             <button onClick={() => handleEdit(idx)} style={{ marginRight: 8 }}>
//               Edit
//             </button>
//             <button onClick={() => handleDelete(idx)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Moviemanage;
//===========================================================

// import React, { useState } from 'react';
// import {
//   Container, Row, Col,
//   Form, Button, Card
// } from 'react-bootstrap';
// import '../moviemanager/Moviemanage.css'; // custom spacing/overflow rules
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';

// const MovieManager = () => {
//   const empty = {
//     name: '',
//     description: '',
//     duration: '',
//     format: '2D',
//     language: '',
//     releaseDate: '',
//     imageUrl: ''
//   };

//   const [form, setForm] = useState(empty);
//   const [movies, setMovies] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   const submit = e => {
//     e.preventDefault();
//     if (!form.name.trim()) {
//       alert('Movie name is required');
//       return;
//     }
//     if (editIndex !== null) {
//       setMovies(ms => ms.map((m, idx) => (idx === editIndex ? form : m)));
//     } else {
//       setMovies(ms => [...ms, form]);
//     }
//     clearForm();
//   };

//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//   };

//   const editMovie = idx => {
//     setForm(movies[idx]);
//     setEditIndex(idx);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const deleteMovie = idx => {
//     if (window.confirm(`Delete "${movies[idx].name}"?`)) {
//       setMovies(ms => ms.filter((_, i) => i !== idx));
//     }
//   };

//   const { name, description, duration, format, language, releaseDate, imageUrl } = form;
  
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
//          const OpenSidebar = () => {
//       setOpenSidebarToggle(!openSidebarToggle);
//     };
  
//   return (

//     <>
//     <Adminheader />
//     <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}  />
//       </div>

//     <Container className="py-4 bg-secondary" style={{ maxWidth: '980px', margin: '65px auto', fontFamily: 'Arial, sans-serif',position: 'relative', left: '145px'}}>
//       <h2 className="mb-3">{editIndex !== null ? 'Edit Movie' : 'Add Movie'}</h2>
//       <Form onSubmit={submit} noValidate>
//         <Row xs={1} md={2} className="g-3">
//           <Col>
//             <Form.Group controlId="movieName">
//               <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
//               <Form.Control
//                 name="name"
//                 type="text"
//                 value={name}
//                 onChange={handleChange}
//                 placeholder="Enter title"
//                 required
//               />
//             </Form.Group>
//           </Col>
//           <Col>
//             <Form.Group controlId="movieLanguage">
//               <Form.Label>Language</Form.Label>
//               <Form.Control
//                 name="language"
//                 type="text"
//                 value={language}
//                 onChange={handleChange}
//                 placeholder="e.g. English, Tamil"
//               />
//             </Form.Group>
//           </Col>

//           <Col>
//             <Form.Group controlId="movieDuration">
//               <Form.Label>Duration</Form.Label>
//               <Form.Control
//                 name="duration"
//                 type="text"
//                 value={duration}
//                 onChange={handleChange}
//                 placeholder="e.g. 2h 15m"
//               />
//             </Form.Group>
//           </Col>
//           <Col>
//             <Form.Group controlId="movieFormat">
//               <Form.Label>Format</Form.Label>
//               <Form.Select
//                 name="format"
//                 value={format}
//                 onChange={handleChange}
//               >
//                 <option>2D</option>
//                 <option>3D</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>

//           <Col>
//             <Form.Group controlId="movieRelease">
//               <Form.Label>Release Date</Form.Label>
//               <Form.Control
//                 name="releaseDate"
//                 type="date"
//                 value={releaseDate}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </Col>
//           <Col>
//             <Form.Group controlId="movieImage">
//               <Form.Label>Poster URL</Form.Label>
//               <Form.Control
//                 name="imageUrl"
//                 type="url"
//                 value={imageUrl}
//                 onChange={handleChange}
//                 placeholder="https://..."
//               />
//             </Form.Group>
//           </Col>

//           <Col xs={12}>
//             <Form.Group controlId="movieDesc">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 name="description"
//                 as="textarea"
//                 rows={3}
//                 value={description}
//                 onChange={handleChange}
//                 placeholder="Brief synopsis"
//               />
//             </Form.Group>
//           </Col>

//           <Col xs={12} className="d-flex gap-2 p-4">
//             <Button variant="primary" type="submit">
//               {editIndex !== null ? 'Update Movie' : 'Create Movie'}
//             </Button>
//             <Button variant="secondary" onClick={clearForm}>
//               Clear
//             </Button>
//           </Col>
//         </Row>
//       </Form>

//       <hr className="my-4" />

//       <h3>Movie List</h3>
//       {movies.length === 0 ? (
//         <p className="text-muted">No movies added yet.</p>
//       ) : (
//         <Row xs={1} md={2} lg={3} className="g-4">
//           {movies.map((m, idx) => (
//             <Col key={idx}>
//               <Card className="movie-card h-100 shadow-sm">
//                 {m.imageUrl ? (
//                   <Card.Img
//                     variant="top"
//                     src={m.imageUrl}
//                     alt={`${m.name} poster`}
//                     onError={e => (e.target.style.display = 'none')}
//                   />
//                 ) : null}
//                 <Card.Body className="d-flex flex-column">
//                   <Card.Title>
//                     {m.name}{' '}
//                     <small className="text-muted">({m.format})</small>
//                   </Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted small">
//                     {m.language || 'N/A'} · {m.duration || 'Unknown duration'}
//                   </Card.Subtitle>
//                   <Card.Text className="mb-3">{m.description}</Card.Text>
//                   <div className="mt-auto d-flex justify-content-between">
//                     <Button
//                       variant="outline-primary"
//                       size="sm"
//                       onClick={() => editMovie(idx)}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       variant="outline-danger"
//                       size="sm"
//                       onClick={() => deleteMovie(idx)}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </Card.Body>
//                 {m.releaseDate && (
//                   <Card.Footer className="text-muted text-end small">
//                     Released: {m.releaseDate}
//                   </Card.Footer>
//                 )}
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//     </>
//   );
// };

// export default MovieManager;


// import React, { useState } from 'react';
// import {
//   Container, Row, Col,
//   Form, Button, Card
// } from 'react-bootstrap';
// import '../moviemanager/Moviemanage.css'; // custom spacing/overflow rules
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';

// const MovieManager = () => {
//   const empty = {
//     name: '',
//     description: '',
//     duration: '',
//     format: '2D',
//     language: '',
//     releaseDate: '',
//     imageUrl: '',
//     screen: '' // ✅ added screen
//   };

//   const [form, setForm] = useState(empty);
//   const [movies, setMovies] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   const submit = e => {
//     e.preventDefault();
//     if (!form.name.trim()) {
//       alert('Movie name is required');
//       return;
//     }
//     if (editIndex !== null) {
//       setMovies(ms => ms.map((m, idx) => (idx === editIndex ? form : m)));
//     } else {
//       setMovies(ms => [...ms, form]);
//     }
//     clearForm();
//   };

//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//   };

//   const editMovie = idx => {
//     setForm(movies[idx]);
//     setEditIndex(idx);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const deleteMovie = idx => {
//     if (window.confirm(`Delete "${movies[idx].name}"?`)) {
//       setMovies(ms => ms.filter((_, i) => i !== idx));
//     }
//   };

//   const { name, description, duration, format, language, releaseDate, imageUrl, screen } = form;

//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <Container className="py-4 bg-secondary" style={{ maxWidth: '980px', margin: '65px auto', fontFamily: 'Arial, sans-serif', position: 'relative', left: '145px' }}>
//         <h2 className="mb-3">{editIndex !== null ? 'Edit Movie' : 'Add Movie'}</h2>
//         <Form onSubmit={submit} noValidate>
//           <Row xs={1} md={2} className="g-3">
//             <Col>
//               <Form.Group controlId="movieName">
//                 <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="name"
//                   type="text"
//                   value={name}
//                   onChange={handleChange}
//                   placeholder="Enter title"
//                   required
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieLanguage">
//                 <Form.Label>Language</Form.Label>
//                 <Form.Control
//                   name="language"
//                   type="text"
//                   value={language}
//                   onChange={handleChange}
//                   placeholder="e.g. English, Tamil"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieDuration">
//                 <Form.Label>Duration</Form.Label>
//                 <Form.Control
//                   name="duration"
//                   type="text"
//                   value={duration}
//                   onChange={handleChange}
//                   placeholder="e.g. 2h 15m"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieFormat">
//                 <Form.Label>Format</Form.Label>
//                 <Form.Select
//                   name="format"
//                   value={format}
//                   onChange={handleChange}
//                 >
//                   <option>2D</option>
//                   <option>3D</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieRelease">
//                 <Form.Label>Release Date</Form.Label>
//                 <Form.Control
//                   name="releaseDate"
//                   type="date"
//                   value={releaseDate}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieImage">
//                 <Form.Label>Poster URL</Form.Label>
//                 <Form.Control
//                   name="imageUrl"
//                   type="url"
//                   value={imageUrl}
//                   onChange={handleChange}
//                   placeholder="https://..."
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieScreen">
//                 <Form.Label>Screen</Form.Label>
//                 <Form.Control
//                   name="screen"
//                   type="text"
//                   value={screen}
//                   onChange={handleChange}
//                   placeholder="e.g. Screen 1, IMAX, VIP"
//                 />
//               </Form.Group>
//             </Col>

//             <Col xs={12}>
//               <Form.Group controlId="movieDesc">
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   name="description"
//                   as="textarea"
//                   rows={3}
//                   value={description}
//                   onChange={handleChange}
//                   placeholder="Brief synopsis"
//                 />
//               </Form.Group>
//             </Col>

//             <Col xs={12} className="d-flex gap-2 p-4">
//               <Button variant="primary" type="submit">
//                 {editIndex !== null ? 'Update Movie' : 'Create Movie'}
//               </Button>
//               <Button variant="secondary" onClick={clearForm}>
//                 Clear
//               </Button>
//             </Col>
//           </Row>
//         </Form>

//         <hr className="my-4" />

//         <h3>Movie List</h3>
//         {movies.length === 0 ? (
//           <p className="text-muted">No movies added yet.</p>
//         ) : (
//           <Row xs={1} md={2} lg={3} className="g-4">
//             {movies.map((m, idx) => (
//               <Col key={idx}>
//                 <Card className="movie-card h-100 shadow-sm">
//                   {m.imageUrl ? (
//                     <Card.Img
//                       variant="top"
//                       src={m.imageUrl}
//                       alt={`${m.name} poster`}
//                       onError={e => (e.target.style.display = 'none')}
//                     />
//                   ) : null}
//                   <Card.Body className="d-flex flex-column">
//                     <Card.Title>
//                       {m.name}{' '}
//                       <small className="text-muted">({m.format})</small>
//                     </Card.Title>
//                     <Card.Subtitle className="mb-2 text-muted small">
//                       {m.language || 'N/A'} · {m.duration || 'Unknown duration'}
//                     </Card.Subtitle>
//                     {m.screen && (
//                       <Card.Text className="text-muted small">
//                       {m.screen}
//                       </Card.Text>
//                     )}
//                     <Card.Text className="mb-3">{m.description}</Card.Text>
//                     <div className="mt-auto d-flex justify-content-between">
//                       <Button
//                         variant="outline-primary"
//                         size="sm"
//                         onClick={() => editMovie(idx)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="outline-danger"
//                         size="sm"
//                         onClick={() => deleteMovie(idx)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </Card.Body>
//                   {m.releaseDate && (
//                     <Card.Footer className="text-muted text-end small">
//                       Released: {m.releaseDate}
//                     </Card.Footer>
//                   )}
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         )}
//       </Container>
//     </>
//   );
// };

// export default MovieManager;

//=======================================

// import React, { useState } from 'react';
// import { Container, Row, Col,Form, Button, Card, InputGroup } from 'react-bootstrap';
// import '../moviemanager/Moviemanage.css'; // custom spacing/overflow rules
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';

// const MovieManager = () => {
//   const empty = {
//     name: '',
//     description: '',
//     duration: '',
//     format: '2D',
//     language: '',
//     releaseDate: '',
//     imageUrl: '',
//     screen: '',
//     rating: '',
//     genre: '',
//     certificate: '',
//     cast: [{ name: '', imageUrl: '' }],
//     crew: [{ name: '', role: '', imageUrl: '' }]
//   };
  
//   const [form, setForm] = useState(empty);
//   const [movies, setMovies] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   // For cast and crew nested arrays
//   const handleCastChange = (index, e) => {
//     const { name, value } = e.target;
//     const newCast = [...form.cast];
//     newCast[index][name] = value;
//     setForm(f => ({ ...f, cast: newCast }));
//   };

//   const handleCrewChange = (index, e) => {
//     const { name, value } = e.target;
//     const newCrew = [...form.crew];
//     newCrew[index][name] = value;
//     setForm(f => ({ ...f, crew: newCrew }));
//   };

//   const addCast = () => {
//     setForm(f => ({ ...f, cast: [...f.cast, { name: '', imageUrl: '' }] }));
//   };

//   const removeCast = (index) => {
//     if (form.cast.length === 1) return; // prevent removing last
//     const newCast = form.cast.filter((_, i) => i !== index);
//     setForm(f => ({ ...f, cast: newCast }));
//   };

//   const addCrew = () => {
//     setForm(f => ({ ...f, crew: [...f.crew, { name: '', role: '', imageUrl: '' }] }));
//   };

//   const removeCrew = (index) => {
//     if (form.crew.length === 1) return; // prevent removing last
//     const newCrew = form.crew.filter((_, i) => i !== index);
//     setForm(f => ({ ...f, crew: newCrew }));
//   };

//   const submit = e => {
//     e.preventDefault();
//     if (!form.name.trim()) {
//       alert('Movie name is required');
//       return;
//     }
//     if (editIndex !== null) {
//       setMovies(ms => ms.map((m, idx) => (idx === editIndex ? form : m)));
//     } else {
//       setMovies(ms => [...ms, form]);
//     }
//     clearForm();
//   };

//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//   };

//   const editMovie = idx => {
//     setForm(movies[idx]);
//     setEditIndex(idx);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const deleteMovie = idx => {
//     if (window.confirm(`Delete "${movies[idx].name}"?`)) {
//       setMovies(ms => ms.filter((_, i) => i !== idx));
//     }
//   };

//   const {
//     name, description, duration, format, language,
//     releaseDate, imageUrl, screen,
//     rating, genre, certificate, cast, crew
//   } = form;

//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <Container
//         className="py-4 bg-secondary"
//         style={{ maxWidth: '980px', margin: '65px auto', fontFamily: 'Arial, sans-serif', position: 'relative', left: '145px' }}
//       >
//         <h2 className="mb-3">{editIndex !== null ? 'Edit Movie' : 'Add Movie'}</h2>
//         <Form onSubmit={submit} noValidate>
//           <Row xs={1} md={2} className="g-3">

//             <Col>
//               <Form.Group controlId="movieName">
//                 <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="name"
//                   type="text"
//                   value={name}
//                   onChange={handleChange}
//                   placeholder="Enter title"
//                   required
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieGenre">
//                 <Form.Label>Genre</Form.Label>
//                 <Form.Control
//                   name="genre"
//                   type="text"
//                   value={genre}
//                   onChange={handleChange}
//                   placeholder="e.g. Action, Drama"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieLanguage">
//                 <Form.Label>Language</Form.Label>
//                 <Form.Control
//                   name="language"
//                   type="text"
//                   value={language}
//                   onChange={handleChange}
//                   placeholder="e.g. English, Tamil"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieCertificate">
//                 <Form.Label>Certificate</Form.Label>
//                 <Form.Control
//                   name="certificate"
//                   type="text"
//                   value={certificate}
//                   onChange={handleChange}
//                   placeholder="e.g. PG-13, R"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieDuration">
//                 <Form.Label>Duration</Form.Label>
//                 <Form.Control
//                   name="duration"
//                   type="text"
//                   value={duration}
//                   onChange={handleChange}
//                   placeholder="e.g. 2h 15m"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieRating">
//                 <Form.Label>Rating (0 to 5)</Form.Label>
//                 <Form.Control
//                   name="rating"
//                   type="number"
//                   min={0}
//                   max={5}
//                   step={0.1}
//                   value={rating}
//                   onChange={handleChange}
//                   placeholder="e.g. 4.5"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieFormat">
//                 <Form.Label>Format</Form.Label>
//                 <Form.Select
//                   name="format"
//                   value={format}
//                   onChange={handleChange}
//                 >
//                   <option>2D</option>
//                   <option>3D</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieRelease">
//                 <Form.Label>Release Date</Form.Label>
//                 <Form.Control
//                   name="releaseDate"
//                   type="date"
//                   value={releaseDate}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieImage">
//                 <Form.Label>Poster URL</Form.Label>
//                 <Form.Control
//                   name="imageUrl"
//                   type="url"
//                   value={imageUrl}
//                   onChange={handleChange}
//                   placeholder="https://..."
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieScreen">
//                 <Form.Label>Screen</Form.Label>
//                 <Form.Control
//                   name="screen"
//                   type="text"
//                   value={screen}
//                   onChange={handleChange}
//                   placeholder="e.g. Screen 1, IMAX, VIP"
//                 />
//               </Form.Group>
//             </Col>

//             <Col xs={12}>
//               <Form.Group controlId="movieDesc">
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   name="description"
//                   as="textarea"
//                   rows={3}
//                   value={description}
//                   onChange={handleChange}
//                   placeholder="Brief synopsis"
//                 />
//               </Form.Group>
//             </Col>

//             {/* Cast Section */}
//             <Col xs={12}>
//               <h5>Cast</h5>
//               {cast.map((c, i) => (
//                 <Row key={i} className="align-items-center mb-2">
//                   <Col md={5}>
//                     <Form.Group controlId={`castName${i}`}>
//                       <Form.Label>Name</Form.Label>
//                       <Form.Control
//                         name="name"
//                         type="text"
//                         value={c.name}
//                         onChange={e => handleCastChange(i, e)}
//                         placeholder="Cast member name"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={5}>
//                     <Form.Group controlId={`castImage${i}`}>
//                       <Form.Label>Image URL</Form.Label>
//                       <Form.Control
//                         name="imageUrl"
//                         type="url"
//                         value={c.imageUrl}
//                         onChange={e => handleCastChange(i, e)}
//                         placeholder="Image URL"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={2} className="d-flex align-items-center">
//                     <Button variant="danger" size="sm" onClick={() => removeCast(i)} disabled={cast.length === 1}>
//                       Remove
//                     </Button>
//                   </Col>
//                 </Row>
//               ))}
//               <Button variant="secondary" size="sm" onClick={addCast}>Add Cast</Button>
//             </Col>

//             {/* Crew Section */}
//             <Col xs={12} className="mt-4">
//               <h5>Crew</h5>
//               {crew.map((c, i) => (
//                 <Row key={i} className="align-items-center mb-2">
//                   <Col md={4}>
//                     <Form.Group controlId={`crewName${i}`}>
//                       <Form.Label>Name</Form.Label>
//                       <Form.Control
//                         name="name"
//                         type="text"
//                         value={c.name}
//                         onChange={e => handleCrewChange(i, e)}
//                         placeholder="Crew member name"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={4}>
//                     <Form.Group controlId={`crewRole${i}`}>
//                       <Form.Label>Role</Form.Label>
//                       <Form.Control
//                         name="role"
//                         type="text"
//                         value={c.role}
//                         onChange={e => handleCrewChange(i, e)}
//                         placeholder="Role (e.g. Director)"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={3}>
//                     <Form.Group controlId={`crewImage${i}`}>
//                       <Form.Label>Image URL</Form.Label>
//                       <Form.Control
//                         name="imageUrl"
//                         type="url"
//                         value={c.imageUrl}
//                         onChange={e => handleCrewChange(i, e)}
//                         placeholder="Image URL"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={1} className="d-flex align-items-center">
//                     <Button variant="danger" size="sm" onClick={() => removeCrew(i)} disabled={crew.length === 1}>
//                       Remove
//                     </Button>
//                   </Col>
//                 </Row>
//               ))}
//               <Button variant="secondary" size="sm" onClick={addCrew}>Add Crew</Button>
//             </Col>

//             <Col xs={12} className="d-flex gap-2 p-4">
//               <Button variant="primary" type="submit">
//                 {editIndex !== null ? 'Update Movie' : 'Create Movie'}
//               </Button>
//               <Button variant="secondary" onClick={clearForm}>
//                 Clear
//               </Button>
//             </Col>
//           </Row>
//         </Form>

//         <hr className="my-4" />

//         <h3>Movie List</h3>
//         {movies.length === 0 ? (
//           <p className="text-muted">No movies added yet.</p>
//         ) : (
//           <Row xs={1} md={2} lg={3} className="g-4">
//             {movies.map((m, idx) => (
//               <Col key={idx}>
//                 <Card className="movie-card h-100 shadow-sm">
//                   {m.imageUrl ? (
//                     <Card.Img
//                       variant="top"
//                       src={m.imageUrl}
//                       alt={`${m.name} poster`}
//                       onError={e => (e.target.style.display = 'none')}
//                     />
//                   ) : null}
//                   <Card.Body className="d-flex flex-column">
//                     <Card.Title>
//                       {m.name}{' '}
//                       <small className="text-muted">({m.format})</small>
//                     </Card.Title>
//                     <Card.Subtitle className="mb-2 text-muted small">
//                       {m.language || 'N/A'} · {m.duration || 'Unknown duration'} · {m.genre || 'Genre N/A'} · {m.certificate || 'Certificate N/A'}
//                     </Card.Subtitle>

//                     {m.rating !== '' && (
//                       <Card.Text>
//                         <strong>Rating:</strong> {m.rating} / 5
//                       </Card.Text>
//                     )}

//                     {m.screen && (
//                       <Card.Text className="text-muted small">
//                         Screen: {m.screen}
//                       </Card.Text>
//                     )}
//                     <Card.Text className="mb-3">{m.description}</Card.Text>

//                     {/* Cast display */}
//                     {m.cast && m.cast.length > 0 && (
//                       <>
//                         <h6>Cast:</h6>
//                         <Row xs={2} md={3} className="mb-3">
//                           {m.cast.map((c, i) => (
//                             <Col key={i} className="text-center mb-2">
//                               {c.imageUrl && (
//                                 <img
//                                   src={c.imageUrl}
//                                   alt={c.name}
//                                   style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
//                                   onError={e => (e.target.style.display = 'none')}
//                                 />
//                               )}
//                               <div>{c.name}</div>
//                             </Col>
//                           ))}
//                         </Row>
//                       </>
//                     )}

//                     {/* Crew display */}
//                     {m.crew && m.crew.length > 0 && (
//                       <>
//                         <h6>Crew:</h6>
//                         <Row xs={2} md={3} className="mb-3">
//                           {m.crew.map((c, i) => (
//                             <Col key={i} className="text-center mb-2">
//                               {c.imageUrl && (
//                                 <img
//                                   src={c.imageUrl}
//                                   alt={c.name}
//                                   style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
//                                   onError={e => (e.target.style.display = 'none')}
//                                 />
//                               )}
//                               <div><strong>{c.name}</strong></div>
//                               <div style={{ fontSize: 'small', color: '#555' }}>{c.role}</div>
//                             </Col>
//                           ))}
//                         </Row>
//                       </>
//                     )}

//                     <div className="mt-auto d-flex justify-content-between">
//                       <Button
//                         variant="outline-primary"
//                         size="sm"
//                         onClick={() => editMovie(idx)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="outline-danger"
//                         size="sm"
//                         onClick={() => deleteMovie(idx)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </Card.Body>
//                   {m.releaseDate && (
//                     <Card.Footer className="text-muted text-end small">
//                       Released: {m.releaseDate}
//                     </Card.Footer>
//                   )}
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         )}
//       </Container>
//     </>
//   );
// };

// export default MovieManager;

//=====================================================================================

//without validation

// import React, { useState } from 'react';
// import { Container, Row, Col,Form, Button, Card, InputGroup } from 'react-bootstrap';
// import '../moviemanager/Newmovie.css'; // custom spacing/overflow rules
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from "react-router-dom";
// import { MovieContext } from './MovieContext';

// const MovieManager = () => {
//   const empty = {
//     name: '',
//     description: '',
//     duration: '',
//     format: '2D',
//     language: '',
//     releaseDate: '',
//     imageUrl: '',
//     screen: '',
//     rating: '',
//     genre: '',
//     certificate: '',
//     cast: [{ name: '', imageUrl: '' }],
//     crew: [{ name: '', role: '', imageUrl: '' }]
//   };
  
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [form, setForm] = useState(empty);
//   const [localMovies, setLocalMovies] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const { movies: contextMovies, addMovie, updateMovie, deleteMovie } = useContext(MovieContext);
  
//   const navigate = useNavigate();

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   // For cast and crew nested arrays
//   const handleCastChange = (index, e) => {
//     const { name, value } = e.target;
//     const newCast = [...form.cast];
//     newCast[index][name] = value;
//     setForm(f => ({ ...f, cast: newCast }));
//   };

//   const handleCrewChange = (index, e) => {
//     const { name, value } = e.target;
//     const newCrew = [...form.crew];
//     newCrew[index][name] = value;
//     setForm(f => ({ ...f, crew: newCrew }));
//   };

//   const addCast = () => {
//     setForm(f => ({ ...f, cast: [...f.cast, { name: '', imageUrl: '' }] }));
//   };

//   const removeCast = (index) => {
//     if (form.cast.length === 1) return; // prevent removing last
//     const newCast = form.cast.filter((_, i) => i !== index);
//     setForm(f => ({ ...f, cast: newCast }));
//   };

//   const addCrew = () => {
//     setForm(f => ({ ...f, crew: [...f.crew, { name: '', role: '', imageUrl: '' }] }));
//   };

//   const removeCrew = (index) => {
//     if (form.crew.length === 1) return; // prevent removing last
//     const newCrew = form.crew.filter((_, i) => i !== index);
//     setForm(f => ({ ...f, crew: newCrew }));
//   };

//   // const submit = e => {
//   //   e.preventDefault();
//   //   if (!form.name.trim()) {
//   //     alert('Movie name is required');
//   //     return;
//   //   }
//   //   if (editIndex !== null) {
//   //     setMovies(ms => ms.map((m, idx) => (idx === editIndex ? form : m)));
//   //   } else {
//   //     setMovies(ms => [...ms, form]);
//   //   }
//   //   clearForm();
//   // };

//   const submit = e => {
//   e.preventDefault();
//   if (!form.name.trim()) return alert('Movie name is required');

//   if (editIndex !== null) {
//     updateMovie(editIndex, form);
//   } else {
//     addMovie(form);
//   }

//   clearForm();
//   navigate('/managemovie');
// };


//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//   };

//   const editMovie = idx => {
//     setForm(movies[idx]);
//     setEditIndex(idx);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleDeleteMovie = idx => {
//     if (window.confirm(`Delete "${localMovies[idx].name}"?`)) {
//       setMovies(ms => ms.filter((_, i) => i !== idx));
//     }
//   };

//   const {
//     name, description, duration, format, language,
//     releaseDate, imageUrl, screen,
//     rating, genre, certificate, cast, crew
//   } = form;

//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className=" text ">
//             <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//             <span className="mt-2">{menuName} </span>
//         </div>

//       <Container
//         className="py-4 bg-light"
//         style={{ maxWidth: '965px', margin: '150px auto', fontFamily: 'Arial, sans-serif', position: 'relative', left: '125px', borderRadius: '10px' }}
//       >
//         <h3 className="mb-3 text-danger">{editIndex !== null ? 'Edit Movie' : 'Add Movie'}</h3>
//         <Form onSubmit={submit} noValidate>
//           <Row xs={1} md={2} className="g-3">

//             <Col>
//               <Form.Group controlId="movieName">
//                 <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="name"
//                   type="text"
//                   value={name}
//                   onChange={handleChange}
//                   placeholder="Enter title"
//                   required
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieGenre">
//                 <Form.Label>Genre</Form.Label>
//                 <Form.Control
//                   name="genre"
//                   type="text"
//                   value={genre}
//                   onChange={handleChange}
//                   placeholder="e.g. Action, Drama"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieLanguage">
//                 <Form.Label>Language</Form.Label>
//                 <Form.Control
//                   name="language"
//                   type="text"
//                   value={language}
//                   onChange={handleChange}
//                   placeholder="e.g. English, Tamil"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieCertificate">
//                 <Form.Label>Certificate</Form.Label>
//                 <Form.Control
//                   name="certificate"
//                   type="text"
//                   value={certificate}
//                   onChange={handleChange}
//                   placeholder="e.g. PG-13, R"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieDuration">
//                 <Form.Label>Duration</Form.Label>
//                 <Form.Control
//                   name="duration"
//                   type="text"
//                   value={duration}
//                   onChange={handleChange}
//                   placeholder="e.g. 2h 15m"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieRating">
//                 <Form.Label>Rating (0 to 5)</Form.Label>
//                 <Form.Control
//                   name="rating"
//                   type="number"
//                   min={0}
//                   max={5}
//                   step={0.1}
//                   value={rating}
//                   onChange={handleChange}
//                   placeholder="e.g. 4.5"
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieFormat">
//                 <Form.Label>Format</Form.Label>
//                 <Form.Select
//                   name="format"
//                   value={format}
//                   onChange={handleChange}
//                 >
//                   <option>2D</option>
//                   <option>3D</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieRelease">
//                 <Form.Label>Release Date</Form.Label>
//                 <Form.Control
//                   name="releaseDate"
//                   type="date"
//                   value={releaseDate}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieImage">
//                 <Form.Label>Poster URL</Form.Label>
//                 <Form.Control
//                   name="imageUrl"
//                   type="url"
//                   value={imageUrl}
//                   onChange={handleChange}
//                   placeholder="https://..."
//                 />
//               </Form.Group>
//             </Col>

//             <Col>
//               <Form.Group controlId="movieScreen">
//                 <Form.Label>Screen</Form.Label>
//                 <Form.Control
//                   name="screen"
//                   type="text"
//                   value={screen}
//                   onChange={handleChange}
//                   placeholder="e.g. Screen 1, IMAX, VIP"
//                 />
//               </Form.Group>
//             </Col>

//             <Col xs={12}>
//               <Form.Group controlId="movieDesc">
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   name="description"
//                   as="textarea"
//                   rows={3}
//                   value={description}
//                   onChange={handleChange}
//                   placeholder="Brief synopsis"
//                 />
//               </Form.Group>
//             </Col>

//             {/* Cast Section */}
//            <div className="cast px-5 py-2">
//               <Col xs={12} className='cast'>
//               <h5>Cast</h5>
//               {cast.map((c, i) => (
//                 <Row key={i} className="align-items-center mb-2">
//                   <Col md={5}>
//                     <Form.Group controlId={`castName${i}`}>
//                       <Form.Label>Name</Form.Label>
//                       <Form.Control
//                         name="name"
//                         type="text"
//                         value={c.name}
//                         onChange={e => handleCastChange(i, e)}
//                         placeholder="Cast member name"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={5}>
//                     <Form.Group controlId={`castImage${i}`}>
//                       <Form.Label>Image URL</Form.Label>
//                       <Form.Control
//                         name="imageUrl"
//                         type="url"
//                         value={c.imageUrl}
//                         onChange={e => handleCastChange(i, e)}
//                         placeholder="Image URL"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={2} className="d-flex align-items-center">
//                     <Button variant="danger" size="sm" onClick={() => removeCast(i)} disabled={cast.length === 1}>
//                       Remove
//                     </Button>
//                   </Col>
//                 </Row>
//               ))}
//               <Button variant="secondary" size="sm" onClick={addCast}>Add Cast</Button>
//             </Col>
//           </div>

//             {/* Crew Section */}
//             <div className="px-1 py-2">
//               <Col xs={12} className="mt-4 crew">
//               <h5>Crew</h5>
//               {crew.map((c, i) => (
//                 <Row key={i} className="align-items-center mb-2">
//                   <Col md={4}>
//                     <Form.Group controlId={`crewName${i}`}>
//                       <Form.Label>Name</Form.Label>
//                       <Form.Control
//                         name="name"
//                         type="text"
//                         value={c.name}
//                         onChange={e => handleCrewChange(i, e)}
//                         placeholder="Crew member name"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={4}>
//                     <Form.Group controlId={`crewRole${i}`}>
//                       <Form.Label>Role</Form.Label>
//                       <Form.Control
//                         name="role"
//                         type="text"
//                         value={c.role}
//                         onChange={e => handleCrewChange(i, e)}
//                         placeholder="Role (e.g. Director)"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={3}>
//                     <Form.Group controlId={`crewImage${i}`}>
//                       <Form.Label>Image URL</Form.Label>
//                       <Form.Control
//                         name="imageUrl"
//                         type="url"
//                         value={c.imageUrl}
//                         onChange={e => handleCrewChange(i, e)}
//                         placeholder="Image URL"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={1} className="d-flex align-items-center">
//                     <Button variant="danger" size="sm" onClick={() => removeCrew(i)} disabled={crew.length === 1}>
//                       Remove
//                     </Button>
//                   </Col>
//                 </Row>
//               ))}
//               <Button variant="secondary" size="sm" onClick={addCrew}>Add Crew</Button>
//             </Col>
//             </div>

//             <Col xs={12} className="d-flex gap-2 p-2  createupdatediv">
//               <Button variant="primary" type="submit" className='createupdate'>
//                 {editIndex !== null ? 'Update Movie' : 'Create Movie'}
//               </Button>
//               <Button variant="secondary" onClick={clearForm} className='clear'>
//                 Clear
//               </Button>
//             </Col>
//           </Row>
//         </Form>

//         {/* <hr className="my-4" /> */}

//         {/* <h3>Movie List</h3>
//          {localMovies.length === 0 ? (
//           <p className="text-muted">No movies added yet.</p>
//         ) : (
//           <Row xs={1} md={2} lg={3} className="g-4">
//             {localMovies.map((m, idx) => (
//               <Col key={idx}>
//                 <Card className="movie-card h-100 shadow-sm">
//                   {m.imageUrl ? (
//                     <Card.Img
//                       variant="top"
//                       src={m.imageUrl}
//                       alt={`${m.name} poster`}
//                       onError={e => (e.target.style.display = 'none')}
//                     />
//                   ) : null}
//                   <Card.Body className="d-flex flex-column">
//                     <Card.Title>
//                       {m.name}{' '}
//                       <small className="text-muted">({m.format})</small>
//                     </Card.Title>
//                     <Card.Subtitle className="mb-2 text-muted small">
//                       {m.language || 'N/A'} · {m.duration || 'Unknown duration'} · {m.genre || 'Genre N/A'} · {m.certificate || 'Certificate N/A'}
//                     </Card.Subtitle>

//                     {m.rating !== '' && (
//                       <Card.Text>
//                         <strong>Rating:</strong> {m.rating} / 5
//                       </Card.Text>
//                     )}

//                     {m.screen && (
//                       <Card.Text className="text-muted small">
//                         Screen: {m.screen}
//                       </Card.Text>
//                     )}
//                     <Card.Text className="mb-3">{m.description}</Card.Text>

                    
//                     {m.cast && m.cast.length > 0 && (
//                       <>
//                         <h6>Cast:</h6>
//                         <Row xs={2} md={3} className="mb-3">
//                           {m.cast.map((c, i) => (
//                             <Col key={i} className="text-center mb-2">
//                               {c.imageUrl && (
//                                 <img
//                                   src={c.imageUrl}
//                                   alt={c.name}
//                                   style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
//                                   onError={e => (e.target.style.display = 'none')}
//                                 />
//                               )}
//                               <div>{c.name}</div>
//                             </Col>
//                           ))}
//                         </Row>
//                       </>
//                     )}

                    
//                     {m.crew && m.crew.length > 0 && (
//                       <>
//                         <h6>Crew:</h6>
//                         <Row xs={2} md={3} className="mb-3">
//                           {m.crew.map((c, i) => (
//                             <Col key={i} className="text-center mb-2">
//                               {c.imageUrl && (
//                                 <img
//                                   src={c.imageUrl}
//                                   alt={c.name}
//                                   style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
//                                   onError={e => (e.target.style.display = 'none')}
//                                 />
//                               )}
//                               <div><strong>{c.name}</strong></div>
//                               <div style={{ fontSize: 'small', color: '#555' }}>{c.role}</div>
//                             </Col>
//                           ))}
//                         </Row>
//                       </>
//                     )}

//                     <div className="mt-auto d-flex justify-content-between">
//                       <Button
//                         variant="outline-primary"
//                         size="sm"
//                         onClick={() => editMovie(idx)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="outline-danger"
//                         size="sm"
//                         onClick={() => handleDeleteMovie(idx)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </Card.Body>
//                   {m.releaseDate && (
//                     <Card.Footer className="text-muted text-end small">
//                       Released: {m.releaseDate}
//                     </Card.Footer>
//                   )}
//                 </Card>
//               </Col>
//             ))}  
//           </Row>
//         )} */}
//       </Container>
//     </>
//   );
// };

// export default MovieManager;

//=====================================================================================================

// with validation

import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../moviemanager/Newmovie.css';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import { useNavigate, useLocation } from 'react-router-dom';
import { MovieContext } from './MovieContext';

const MovieManager = () => {
  const empty = {
    name: '',
    description: '',
    duration: '',
    format: '2D',
    language: '',
    releaseDate: '',
    imageUrl: '',
    screen: '',
    rating: '',
    genre: '',
    certificate: '',
    cast: [{ name: '', imageUrl: '' }],
    crew: [{ name: '', role: '', imageUrl: '' }]
  };

  const location = useLocation();
  const menuName = location.state?.menu || "No data received";
  const [form, setForm] = useState(empty);
  const [editIndex, setEditIndex] = useState(null);
  const { movies, addMovie, updateMovie } = useContext(MovieContext);
  const navigate = useNavigate();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleCastChange = (index, e) => {
    const { name, value } = e.target;
    const newCast = [...form.cast];
    newCast[index][name] = value;
    setForm(f => ({ ...f, cast: newCast }));
  };

  const handleCrewChange = (index, e) => {
    const { name, value } = e.target;
    const newCrew = [...form.crew];
    newCrew[index][name] = value;
    setForm(f => ({ ...f, crew: newCrew }));
  };

  const addCast = () => {
    setForm(f => ({ ...f, cast: [...f.cast, { name: '', imageUrl: '' }] }));
  };

  const removeCast = (index) => {
    if (form.cast.length === 1) return;
    const newCast = form.cast.filter((_, i) => i !== index);
    setForm(f => ({ ...f, cast: newCast }));
  };

  const addCrew = () => {
    setForm(f => ({ ...f, crew: [...f.crew, { name: '', role: '', imageUrl: '' }] }));
  };

  const removeCrew = (index) => {
    if (form.crew.length === 1) return;
    const newCrew = form.crew.filter((_, i) => i !== index);
    setForm(f => ({ ...f, crew: newCrew }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Movie name is required';
    if (!form.duration.trim()) newErrors.duration = 'Duration is required';
    if (!form.language.trim()) newErrors.language = 'Language is required';
    if (!form.releaseDate.trim()) newErrors.releaseDate = 'Release date is required';

    form.cast.forEach((member, index) => {
      if (!member.name.trim()) {
        newErrors[`cast-name-${index}`] = 'Cast name is required';
      }
    });

    form.crew.forEach((member, index) => {
      if (!member.name.trim()) {
        newErrors[`crew-name-${index}`] = 'Crew name is required';
      }
      if (!member.role.trim()) {
        newErrors[`crew-role-${index}`] = 'Role is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = e => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editIndex !== null) {
      updateMovie(editIndex, form);
    } else {
      addMovie(form);
    }

    clearForm();
    navigate('/managemovie');
  };

  const clearForm = () => {
    setForm(empty);
    setEditIndex(null);
    setErrors({});
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

      <div className="text">
        <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
        <span className="mt-2">{menuName}</span>
      </div>

      <Container
        className="py-4 bg-light"
        style={{
          maxWidth: '965px',
          margin: '130px auto',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
          left: '125px',
          borderRadius: '10px'
        }}
      >
        <h3 className="mb-3 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
        <Form onSubmit={submit} noValidate>
          <Row xs={1} md={2} className="g-3">

            {/* Movie Name */}
            <Col>
              <Form.Group controlId="movieName">
                <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  placeholder="Movie Name"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Genre */}
            <Col>
              <Form.Group controlId="movieGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  name="genre"
                  type="text"
                  value={form.genre}
                  onChange={handleChange}
                  placeholder="Movie Gerner"
                />
              </Form.Group>
            </Col>

            {/* Language */}
            <Col>
              <Form.Group controlId="movieLanguage">
                <Form.Label>Language <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  name="language"
                  type="text"
                  value={form.language}
                  onChange={handleChange}
                  placeholder="Movie Language"
                  isInvalid={!!errors.language}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.language}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Certificate */}
            <Col>
              <Form.Group controlId="movieCertificate">
                <Form.Label>Certificate</Form.Label>
                <Form.Control
                  name="certificate"
                  type="text"
                  value={form.certificate}
                  onChange={handleChange}
                  placeholder="Movie Certificate"
                />
              </Form.Group>
            </Col>

            {/* Duration */}
            <Col>
              <Form.Group controlId="movieDuration">
                <Form.Label>Duration <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  name="duration"
                  type="text"
                  value={form.duration}
                  onChange={handleChange}
                  isInvalid={!!errors.duration}
                  placeholder="Movie Duration"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.duration}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Rating */}
            <Col>
              <Form.Group controlId="movieRating">
                <Form.Label>Rating (0 to 5)</Form.Label>
                <Form.Control
                  name="rating"
                  type="number"
                  min={0}
                  max={5}
                  step={0.1}
                  value={form.rating}
                  onChange={handleChange}
                  placeholder="Movie Rating"
                />
              </Form.Group>
            </Col>

            {/* Format */}
            <Col>
              <Form.Group controlId="movieFormat">
                <Form.Label>Format</Form.Label>
                <Form.Select
                  name="format"
                  value={form.format}
                  onChange={handleChange}
                >
                  <option>2D</option>
                  <option>3D</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Release Date */}
            <Col>
              <Form.Group controlId="movieRelease">
                <Form.Label>Release Date <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  name="releaseDate"
                  type="date"
                  value={form.releaseDate}
                  onChange={handleChange}
                  isInvalid={!!errors.releaseDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.releaseDate}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Image URL */}
            <Col>
              <Form.Group controlId="movieImage">
                <Form.Label>Poster URL</Form.Label>
                <Form.Control
                  name="imageUrl"
                  type="url"
                  value={form.imageUrl}
                  onChange={handleChange}
                  placeholder="Movie Image URL"
                />
              </Form.Group>
            </Col>

            {/* Screen */}
            <Col>
              <Form.Group controlId="movieScreen">
                <Form.Label>Screen</Form.Label>
                <Form.Control
                  name="screen"
                  type="text"
                  value={form.screen}
                  onChange={handleChange}
                  placeholder="Movie Screen"
                />
              </Form.Group>
            </Col>

            {/* Description */}
            <Col xs={12}>
              <Form.Group controlId="movieDesc">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  as="textarea"
                  rows={3}
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Movie Description"
                />
              </Form.Group>
            </Col>

            {/* Cast */}
            <Col xs={12}>
              <h5>Cast</h5>
              {form.cast.map((c, i) => (
                <Row key={i} className="align-items-center mb-2">
                  <Col md={5}>
                    <Form.Control
                      name="name"
                      type="text"
                      value={c.name}
                      onChange={e => handleCastChange(i, e)}
                      placeholder="Cast member name"
                      isInvalid={!!errors[`cast-name-${i}`]}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors[`cast-name-${i}`]}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={5}>
                    <Form.Control
                      name="imageUrl"
                      type="url"
                      value={c.imageUrl}
                      onChange={e => handleCastChange(i, e)}
                      placeholder="Image URL"
                    />
                  </Col>
                  <Col md={2}>
                    <Button variant="danger" size="sm" onClick={() => removeCast(i)} disabled={form.cast.length === 1}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
              <Button variant="secondary" size="sm" onClick={addCast}>Add Cast</Button>
            </Col>

            {/* Crew */}
            <Col xs={12}>
              <h5 className="mt-4">Crew</h5>
              {form.crew.map((c, i) => (
                <Row key={i} className="align-items-center mb-2">
                  <Col md={4}>
                    <Form.Control
                      name="name"
                      type="text"
                      value={c.name}
                      onChange={e => handleCrewChange(i, e)}
                      placeholder="Crew name"
                      isInvalid={!!errors[`crew-name-${i}`]}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors[`crew-name-${i}`]}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      name="role"
                      type="text"
                      value={c.role}
                      onChange={e => handleCrewChange(i, e)}
                      placeholder="Role"
                      isInvalid={!!errors[`crew-role-${i}`]}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors[`crew-role-${i}`]}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      name="imageUrl"
                      type="url"
                      value={c.imageUrl}
                      onChange={e => handleCrewChange(i, e)}
                      placeholder="Image URL"
                    />
                  </Col>
                  <Col md={1}>
                    <Button variant="danger" size="sm" onClick={() => removeCrew(i)} disabled={form.crew.length === 1}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
              <Button variant="secondary" size="sm" onClick={addCrew}>Add Crew</Button>
            </Col>

            {/* Buttons */}
            <Col xs={12} className="d-flex gap-2 p-2 createupdatediv">
              <Button variant="primary" type="submit" className='createupdate'>
                {editIndex !== null ? 'Update' : 'Create'}
              </Button>
              <Button variant="secondary" onClick={clearForm} className='clear'>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default MovieManager;


