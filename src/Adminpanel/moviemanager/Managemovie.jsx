//sample component for manage movie 

// src/components/moviemanager/MovieDisplay.jsx
// import React, { useContext, useState } from 'react';
// import { MovieContext } from './MovieContext';
// import '../moviemanager/Managemovie.css'
// import { Card, Button, Row, Col, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';

// export default function MovieDisplay() {
  
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const { movies, deleteMovie } = useContext(MovieContext);
//   const navigate = useNavigate();

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (

//     <>
    
//     <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//         <div className="managemovie">
//             <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//             <span className="mt-2">{menuName} </span>
//         </div>

//     <Container className="py-4 moviecontainer">
//       <h3 className='text-danger'>Manage Movie List</h3>
//       {movies.length === 0 ? (
//         <p>No movies added.</p>
//       ) : (
//         <Row xs={1} md={2} lg={3} className="g-4">
//           {movies.map((m, idx) => (
//             <Col key={idx}>
//               <Card className="h-100 shadow-sm">
//                 {m.imageUrl && <Card.Img variant="top" src={m.imageUrl} onError={e => (e.target.style.display = 'none')} />}
//                 <Card.Body className="d-flex flex-column">
//                   <Card.Title>{m.name} <small className="text-muted">({m.format})</small></Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted small">
//                     {m.language} • {m.genre} • {m.duration}
//                   </Card.Subtitle>
//                   <Card.Text className="mb-3">{m.description}</Card.Text>
//                   <div className="mt-auto d-flex justify-content-between">
//                     <Button size="sm" variant="outline-primary" onClick={() => navigate('/newmovie', { state: { editIndex: idx, movie: m } })}>
//                       Edit
//                     </Button>
//                     <Button size="sm" variant="outline-danger" onClick={() => deleteMovie(idx)}>
//                       Delete
//                     </Button>
//                   </div>
//                 </Card.Body>
//                 {m.releaseDate && <Card.Footer className="text-muted small text-end">Released: {m.releaseDate}</Card.Footer>}
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
    
//     </>

//   );
// }

//not displaying all fields like cast and crew in the manage movie component 

// import React, { useState, useEffect } from 'react';
// import '../moviemanager/Managemovie.css';
// import { Card, Button, Row, Col, Container, Spinner } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';

// export default function MovieDisplay() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const navigate = useNavigate();

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   // ✅ Fetch movies from backend
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/movies');
//         const data = await res.json();
//         setMovies(data);
//       } catch (err) {
//         console.error('Error fetching movies:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   // ✅ Delete a movie
//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this movie?')) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/movies/${id}`, {
//         method: 'DELETE'
//       });

//       if (res.ok) {
//         setMovies(movies.filter(movie => movie._id !== id));
//       } else {
//         console.error('Failed to delete movie');
//       }
//     } catch (err) {
//       console.error('Error deleting movie:', err);
//     }
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="managemovie">
//         <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <Container className="py-4 moviecontainer">
//         <h3 className='text-danger'>Manage Movie List</h3>
//         {loading ? (
//           <div className="text-center"><Spinner animation="border" /></div>
//         ) : movies.length === 0 ? (
//           <p>No movies found.</p>
//         ) : (
//           <Row xs={1} md={2} lg={3} className="g-4">
//             {movies.map((m) => (
//               <Col key={m._id}>
//                 <Card className="h-100 shadow-sm">
//                   {m.imageUrl && <Card.Img variant="top" src={m.imageUrl} onError={e => (e.target.style.display = 'none')} />}
//                   <Card.Body className="d-flex flex-column">
//                     <Card.Title>{m.name} <small className="text-muted">({m.format})</small></Card.Title>
//                     <Card.Subtitle className="mb-2 text-muted small">
//                       {m.language} • {m.genre} • {m.duration}
//                     </Card.Subtitle>
//                     <Card.Text className="mb-3">{m.description}</Card.Text>
//                     <div className="mt-auto d-flex justify-content-between">
//                       <Button
//                         size="sm"
//                         variant="outline-primary"
//                         onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="outline-danger"
//                         onClick={() => handleDelete(m._id)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </Card.Body>
//                   {m.releaseDate && (
//                     <Card.Footer className="text-muted small text-end">
//                       Released: {new Date(m.releaseDate).toLocaleDateString()}
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
// }

//incomplete work of displaying all fields in the manage movie component 

// import React, { useState, useEffect } from 'react';
// import '../moviemanager/Managemovie.css';
// import { Card, Button, Row, Col, Container, Spinner, ListGroup } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';

// export default function MovieDisplay() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const navigate = useNavigate();

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/movies');
//         const data = await res.json();
//         setMovies(data);
//       } catch (err) {
//         console.error('Error fetching movies:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   // const handleDelete = async (id) => {
//   //   if (!window.confirm('Are you sure you want to delete this movie?')) return;

//   //   try {
//   //     const res = await fetch(`http://localhost:5000/api/movies/${id}`, {
//   //       method: 'DELETE'
//   //     });

//   //     if (res.ok) {
//   //       setMovies(movies.filter(movie => movie._id !== id));
//   //     } else {
//   //       console.error('Failed to delete movie');
//   //     }
//   //   } catch (err) {
//   //     console.error('Error deleting movie:', err);
//   //   }
//   // };

// const handleDelete = async (id) => {
//   if (!window.confirm('Are you sure you want to delete this movie?')) return;

//   try {
//     const res = await fetch(`http://localhost:5000/api/movies/${id}`, {
//       method: 'DELETE',
//     });

//     if (!res.ok) {
//       const error = await res.json();
//       throw new Error(error.message || 'Failed to delete movie');
//     }

//     // ✅ Remove the deleted movie from state
//     setMovies(prev => prev.filter(movie => movie._id !== id));
//   } catch (err) {
//     console.error('Error deleting movie:', err);
//     alert('Error deleting movie. Please try again.');
//   }
// };


//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="managemovie">
//         <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <Container className="py-4 moviecontainer">
//         <h3 className='text-danger'>Manage Movie List</h3>
//         {loading ? (
//           <div className="text-center"><Spinner animation="border" /></div>
//         ) : movies.length === 0 ? (
//           <p>No movies found.</p>
//         ) : (
//           <Row xs={1} md={2} lg={3} className="g-4">
//             {movies.map((m) => (
//               <Col key={m._id}>
//                 <Card className="h-100 shadow-sm">
//                   {m.imageUrl && (
//                     <Card.Img
//                       variant="top"
//                       src={m.imageUrl}
//                       onError={e => (e.target.style.display = 'none')}
//                     />
//                   )}
//                   <Card.Body className="d-flex flex-column">
//                     <Card.Title>{m.name} <small className="text-muted">({m.format})</small></Card.Title>
//                     <Card.Subtitle className="mb-2 text-muted small">
//                       {m.language} • {m.genre} • {m.duration}
//                     </Card.Subtitle>
//                     <Card.Text><strong>Certificate:</strong> {m.certificate}</Card.Text>
//                     <Card.Text><strong>Rating:</strong> {m.rating}/10</Card.Text>
//                     <Card.Text><strong>Screen:</strong> {m.screen}</Card.Text>
//                     <Card.Text className="mb-3">{m.description}</Card.Text>

//                     {/* Cast */}
//                     <Card.Text className="mb-2"><strong>Cast:</strong></Card.Text>
//                     <ListGroup variant="" className="mb-2">
//                       {m.cast?.map((actor, i) => (
//                         <ListGroup.Item key={i} className='mb-1'>
//                           {actor.imageUrl && (
//                             <img src={actor.imageUrl} alt={actor.name} style={{ width: '30px', height: '30px', objectFit: 'cover', marginRight: '10px', borderRadius: '50%' }} />
//                           )}
//                           {actor.name}
//                         </ListGroup.Item>
//                       ))}
//                     </ListGroup>

//                     {/* Crew */}
//                     <Card.Text className="mb-2"><strong>Crew:</strong></Card.Text>
//                     <ListGroup variant="">
//                       {m.crew?.map((member, i) => (
//                         <ListGroup.Item key={i} className='mb-1'>
//                           {member.imageUrl && (
//                             <img src={member.imageUrl} alt={member.name} style={{ width: '30px', height: '30px', objectFit: 'cover', marginRight: '10px', borderRadius: '50%' }} />
//                           )}
//                           {member.name} - <em>{member.role}</em>
//                         </ListGroup.Item>
//                       ))}
//                     </ListGroup>

//                     <div className="mt-2 p-1 d-flex justify-content-end">
//                       <Button
//                         className='bg-success px-3'
//                         size="sm"
//                         variant="outline-primary"
//                         onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="outline-danger"
//                         onClick={() => handleDelete(m._id)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </Card.Body>

//                   {m.releaseDate && (
//                     <Card.Footer className="text-muted small text-end">
//                       Released: {new Date(m.releaseDate).toLocaleDateString()}
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
// }

// un confromed component working

// import React, { useState, useEffect } from 'react';
// import '../moviemanager/Managemovie.css';
// import { Card, Button, Row, Col, Container, Spinner, ListGroup, Badge } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';

// export default function MovieDisplay() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const navigate = useNavigate();

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/movies');
//         const data = await res.json();
//         setMovies(data);
//       } catch (err) {
//         console.error('Error fetching movies:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this movie?')) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/movies/${id}`, {
//         method: 'DELETE',
//       });

//       if (!res.ok) {
//         const error = await res.json();
//         throw new Error(error.message || 'Failed to delete movie');
//       }

//       setMovies(prev => prev.filter(movie => movie._id !== id));
//     } catch (err) {
//       console.error('Error deleting movie:', err);
//       alert('Error deleting movie. Please try again.');
//     }
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="managemovie">
//         <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <Container className="py-4 moviecontainer">
//         <h3 className='text-danger'>Manage Movie List</h3>
//         {loading ? (
//           <div className="text-center"><Spinner animation="border" /></div>
//         ) : movies.length === 0 ? (
//           <p>No movies found.</p>
//         ) : (
//           <Row xs={1} md={2} lg={3} className="g-4">
//             {movies.map((m) => (
//               <Col key={m._id}>
//                 <Card className="h-100 shadow-sm">
//                   {m.imageUrl && (
//                     <Card.Img
//                       variant="top"
//                       src={m.imageUrl}
//                       onError={e => (e.target.style.display = 'none')}
//                     />
//                   )}
//                   <Card.Body className="d-flex flex-column">
//                     <Card.Title>{m.name} <small className="text-muted">({m.format})</small></Card.Title>
//                     <Card.Subtitle className="mb-2 text-muted small">
//                       {m.language} • {m.genre} • {m.duration}
//                     </Card.Subtitle>
//                     <Card.Text><strong>Certificate:</strong> {m.certificate}</Card.Text>
//                     <Card.Text><strong>Rating:</strong> {m.rating}/10</Card.Text>
//                     <Card.Text><strong>Screen:</strong> {m.screen}</Card.Text>
//                     <Card.Text className="mb-3">{m.description}</Card.Text>

//                     {/* Cast */}
//                     <Card.Text className="mb-2"><strong>Cast:</strong></Card.Text>
//                     <ListGroup variant="" className="mb-2">
//                       {m.cast?.map((actor, i) => (
//                         <ListGroup.Item key={i} className='mb-1'>
//                           {actor.imageUrl && (
//                             <img src={actor.imageUrl} alt={actor.name} style={{ width: '30px', height: '30px', objectFit: 'cover', marginRight: '10px', borderRadius: '50%' }} />
//                           )}
//                           {actor.name}
//                         </ListGroup.Item>
//                       ))}
//                     </ListGroup>

//                     {/* Crew */}
//                     <Card.Text className="mb-2"><strong>Crew:</strong></Card.Text>
//                     <ListGroup variant="" className="mb-3">
//                       {m.crew?.map((member, i) => (
//                         <ListGroup.Item key={i} className='mb-1'>
//                           {member.imageUrl && (
//                             <img src={member.imageUrl} alt={member.name} style={{ width: '30px', height: '30px', objectFit: 'cover', marginRight: '10px', borderRadius: '50%' }} />
//                           )}
//                           {member.name} - <em>{member.role}</em>
//                         </ListGroup.Item>
//                       ))}
//                     </ListGroup>

//                     {/* 🎭 Theater and Show Timings */}
//                     <Card.Text className="mb-2"><strong>Theaters & Show Timings:</strong></Card.Text>
//                     {m.theaters && m.theaters.length > 0 ? (
//                       <ListGroup variant="">
//                         {m.theaters.map((theater, tIndex) => (
//                           <ListGroup.Item key={tIndex} className="mb-2">
//                             <strong>{theater.name}</strong>
//                             {theater.screens && theater.screens.length > 0 && (
//                               <ul className="mt-2">
//                                 {theater.screens.map((screen, sIndex) => (
//                                   <li key={sIndex}>
//                                     <span className="fw-bold">{screen.screenName}:</span>
//                                     {screen.showTimes?.map((time, timeIndex) => (
//                                       <Badge key={timeIndex} bg="secondary" className="ms-2">
//                                         {time}
//                                       </Badge>
//                                     ))}
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </ListGroup.Item>
//                         ))}
//                       </ListGroup>
//                     ) : (
//                       <p className="text-muted">No theater data available.</p>
//                     )}

//                     {/* Buttons */}
//                     <div className="mt-3 p-1 d-flex justify-content-end">
//                       <Button
//                         className='bg-success px-3'
//                         size="sm"
//                         variant="outline-primary"
//                         onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="outline-danger"
//                         onClick={() => handleDelete(m._id)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </Card.Body>

//                   {m.releaseDate && (
//                     <Card.Footer className="text-muted small text-end">
//                       Released: {new Date(m.releaseDate).toLocaleDateString()}
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
// }


// import React, { useState, useEffect } from 'react';
// import '../moviemanager/Managemovie.css';
// import { Table, Button, Container, Spinner, Form } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// export default function MovieDisplay() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedMovies, setSelectedMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";

//   const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/movies');
//         const data = await res.json();
//         setMovies(data);
//       } catch (err) {
//         console.error('Error fetching movies:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovies();
//   }, []);

//   const handleSelect = (id) => {
//     setSelectedMovies(prev =>
//       prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
//     );
//   };

//   const filteredMovies = movies.filter(movie =>
//     movie.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleDeleteSelected = async () => {
//     if (selectedMovies.length === 0) {
//       alert('Please select at least one movie to delete.');
//       return;
//     }

//     if (!window.confirm('Are you sure you want to delete selected movies?')) return;

//     try {
//       for (const id of selectedMovies) {
//         await fetch(`http://localhost:5000/api/movies/${id}`, {
//           method: 'DELETE',
//         });
//       }

//       setMovies(prev => prev.filter(movie => !selectedMovies.includes(movie._id)));
//       setSelectedMovies([]);
//     } catch (err) {
//       console.error('Error deleting selected movies:', err);
//     }
//   };

//   const exportToExcel = () => {
//     if (selectedMovies.length === 0) {
//       alert('Please select at least one movie to export.');
//       return;
//     }

//     const selectedData = movies.filter(m => selectedMovies.includes(m._id));
//     const worksheet = XLSX.utils.json_to_sheet(selectedData.map(m => ({
//       Name: m.name,
//       Genre: m.genre,
//       Language: m.language,
//       Format: m.format,
//       Certificate: m.certificate,
//       Rating: m.rating,
//       ReleaseDate: new Date(m.releaseDate).toLocaleDateString()
//     })));
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Movies');
//     XLSX.writeFile(workbook, 'movies.xlsx');
//   };

//   const exportToCSV = () => {
//     if (selectedMovies.length === 0) {
//       alert('Please select at least one movie to export.');
//       return;
//     }

//     const selectedData = movies.filter(m => selectedMovies.includes(m._id));
//     const worksheet = XLSX.utils.json_to_sheet(selectedData.map(m => ({
//       Name: m.name,
//       Genre: m.genre,
//       Language: m.language,
//       Format: m.format,
//       Certificate: m.certificate,
//       Rating: m.rating,
//       ReleaseDate: new Date(m.releaseDate).toLocaleDateString()
//     })));
//     const csv = XLSX.utils.sheet_to_csv(worksheet);
//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'movies.csv');
//   };

//   const exportToPDF = () => {
//     if (selectedMovies.length === 0) {
//       alert('Please select at least one movie to export.');
//       return;
//     }

//     const selectedData = movies.filter(m => selectedMovies.includes(m._id));
//     const doc = new jsPDF();
//     autoTable(doc, {
//       head: [['Name', 'Genre', 'Language', 'Format', 'Certificate', 'Rating', 'Release Date']],
//       body: selectedData.map(m => [
//         m.name,
//         m.genre,
//         m.language,
//         m.format,
//         m.certificate,
//         m.rating,
//         new Date(m.releaseDate).toLocaleDateString()
//       ]),
//     });
//     doc.save('movies.pdf');
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="managemovie">
//         <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <Container className="py-4 moviecontainer">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h3 className="text-danger">Manage Movie List</h3>
//           <div>
//             <Button variant="outline-danger" size="sm" onClick={handleDeleteSelected} className="me-2">Delete</Button>
//             <Button variant="outline-success" size="sm" onClick={exportToExcel} className="me-2">Excel</Button>
//             <Button variant="outline-primary" size="sm" onClick={exportToCSV} className="me-2">CSV</Button>
//             <Button variant="outline-dark" size="sm" onClick={exportToPDF}>PDF</Button>
//           </div>
//         </div>

//         {/* Search Box */}
//         <Form.Group className="mb-3" controlId="searchInput">
//           <Form.Control
//             type="text"
//             placeholder="Search movie by name..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </Form.Group>

//         {loading ? (
//           <div className="text-center"><Spinner animation="border" /></div>
//         ) : (
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>
//                   <Form.Check
//                     type="checkbox"
//                     onChange={(e) => {
//                       if (e.target.checked) {
//                         setSelectedMovies(filteredMovies.map((m) => m._id));
//                       } else {
//                         setSelectedMovies([]);
//                       }
//                     }}
//                     checked={selectedMovies.length === filteredMovies.length && filteredMovies.length !== 0}
//                   />
//                 </th>
//                 <th>Name</th>
//                 <th>Genre</th>
//                 <th>Language</th>
//                 <th>Format</th>
//                 <th>Certificate</th>
//                 <th>Rating</th>
//                 <th>Release Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredMovies.map((m) => (
//                 <tr key={m._id}>
//                   <td>
//                     <Form.Check
//                       type="checkbox"
//                       checked={selectedMovies.includes(m._id)}
//                       onChange={() => handleSelect(m._id)}
//                     />
//                   </td>
//                   <td>{m.name}</td>
//                   <td>{m.genre}</td>
//                   <td>{m.language}</td>
//                   <td>{m.format}</td>
//                   <td>{m.certificate}</td>
//                   <td>{m.rating}</td>
//                   <td>{new Date(m.releaseDate).toLocaleDateString()}</td>
//                   <td>
//                     <Button
//                       variant="outline-success"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       variant="outline-danger"
//                       size="sm"
//                       onClick={() => handleDeleteSelected([m._id])}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//               {filteredMovies.length === 0 && (
//                 <tr>
//                   <td colSpan="9" className="text-center">No movies found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         )}
//       </Container>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import '../moviemanager/Managemovie.css';
import { Table, Button, Container, Spinner, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function MovieDisplay() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/movies');
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSelect = (id) => {
    setSelectedMovies(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handleDeleteSelected = async (customIds = null) => {
    const idsToDelete = customIds || selectedMovies;

    if (idsToDelete.length === 0) {
      alert('Please select at least one movie to delete.');
      return;
    }

    if (!window.confirm('Are you sure you want to delete selected movies?')) return;

    try {
      for (const id of idsToDelete) {
        await fetch(`http://localhost:5000/api/movies/${id}`, {
          method: 'DELETE',
        });
      }

      setMovies(prev => prev.filter(movie => !idsToDelete.includes(movie._id)));
      setSelectedMovies([]);
    } catch (err) {
      console.error('Error deleting selected movies:', err);
    }
  };

  const exportToExcel = () => {
    if (selectedMovies.length === 0) {
      alert('Please select at least one movie to export.');
      return;
    }

    const selectedData = movies.filter(m => selectedMovies.includes(m._id));
    const worksheet = XLSX.utils.json_to_sheet(selectedData.map(m => ({
      Name: m.name,
      Genre: m.genre,
      Language: m.language,
      Format: m.format,
      Certificate: m.certificate,
      Rating: m.rating,
      ReleaseDate: new Date(m.releaseDate).toLocaleDateString()
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Movies');
    XLSX.writeFile(workbook, 'movies.xlsx');
  };

  const exportToCSV = () => {
    if (selectedMovies.length === 0) {
      alert('Please select at least one movie to export.');
      return;
    }

    const selectedData = movies.filter(m => selectedMovies.includes(m._id));
    const worksheet = XLSX.utils.json_to_sheet(selectedData.map(m => ({
      Name: m.name,
      Genre: m.genre,
      Language: m.language,
      Format: m.format,
      Certificate: m.certificate,
      Rating: m.rating,
      ReleaseDate: new Date(m.releaseDate).toLocaleDateString()
    })));
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'movies.csv');
  };

  const exportToPDF = () => {
    if (selectedMovies.length === 0) {
      alert('Please select at least one movie to export.');
      return;
    }

    const selectedData = movies.filter(m => selectedMovies.includes(m._id));
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['Name', 'Genre', 'Language', 'Format', 'Certificate', 'Rating', 'Release Date']],
      body: selectedData.map(m => [
        m.name,
        m.genre,
        m.language,
        m.format,
        m.certificate,
        m.rating,
        new Date(m.releaseDate).toLocaleDateString()
      ]),
    });
    doc.save('movies.pdf');
  };

  return (
    <>
      <Adminheader />
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      <div className="managemovie">
        <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
        <span className="mt-2">{menuName}</span>
      </div>

      <Container className="py-4 moviecontainer">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-danger">Manage Movie List</h3>
          <div>
            <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
            <Button variant="outline-success" size="sm" onClick={exportToExcel} className="me-2">Excel</Button>
            <Button variant="outline-primary" size="sm" onClick={exportToCSV} className="me-2">CSV</Button>
            <Button variant="outline-dark" size="sm" onClick={exportToPDF}>PDF</Button>
          </div>
        </div>

        {/* Search Box */}
        <Form.Group className="mb-3" controlId="searchInput">
          <Form.Control
            type="text"
            placeholder="Search movie by name..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </Form.Group>

        {/* Page Size Selector */}
        <div className="d-flex justify-content-end mb-2">
          <Form.Select
            style={{ width: '150px' }}
            value={moviesPerPage}
            onChange={(e) => {
              setMoviesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
          </Form.Select>
        </div>

        {loading ? (
          <div className="text-center"><Spinner animation="border" /></div>
        ) : (
          <>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>
                    <Form.Check
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedMovies(currentMovies.map((m) => m._id));
                        } else {
                          setSelectedMovies([]);
                        }
                      }}
                      checked={selectedMovies.length === currentMovies.length && currentMovies.length !== 0}
                    />
                  </th>
                  <th>Name</th>
                  <th>Genre</th>
                  <th>Language</th>
                  <th>Format</th>
                  <th>Certificate</th>
                  <th>Rating</th>
                  <th>Release Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentMovies.map((m) => (
                  <tr key={m._id} className='bg-danger'>
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={selectedMovies.includes(m._id)}
                        onChange={() => handleSelect(m._id)}
                      />
                    </td>
                    <td>{m.name}</td>
                    <td>{m.genre}</td>
                    <td>{m.language}</td>
                    <td>{m.format}</td>
                    <td>{m.certificate}</td>
                    <td>{m.rating}</td>
                    <td>{new Date(m.releaseDate).toLocaleDateString()}</td>
                    <td>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="me-2"
                        onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteSelected([m._id])}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                {currentMovies.length === 0 && (
                  <tr>
                    <td colSpan="9" className="text-center">No movies found.</td>
                  </tr>
                )}
              </tbody>
            </Table>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-3">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="me-2"
                >
                  Previous
                </Button>

                {[...Array(totalPages)].map((_, idx) => (
                  <Button
                    key={idx + 1}
                    variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
                    size="sm"
                    onClick={() => handlePageChange(idx + 1)}
                    className="me-1"
                  >
                    {idx + 1}
                  </Button>
                ))}

                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
}
