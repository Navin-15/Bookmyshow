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

//og code

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

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [moviesPerPage, setMoviesPerPage] = useState(5);

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

//   // Pagination logic
//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
//   const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(prev => prev - 1);
//   };
//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
//   };

//   const handleDeleteSelected = async (customIds = null) => {
//     const idsToDelete = customIds || selectedMovies;

//     if (idsToDelete.length === 0) {
//       alert('Please select at least one movie to delete.');
//       return;
//     }

//     if (!window.confirm('Are you sure you want to delete selected movies?')) return;

//     try {
//       for (const id of idsToDelete) {
//         await fetch(`http://localhost:5000/api/movies/${id}`, {
//           method: 'DELETE',
//         });
//       }

//       setMovies(prev => prev.filter(movie => !idsToDelete.includes(movie._id)));
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
//             <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
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
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//           />
//         </Form.Group>

//         {/* Page Size Selector */}
//         <div className="d-flex justify-content-end mb-2">
//           <Form.Select
//             style={{ width: '150px' }}
//             value={moviesPerPage}
//             onChange={(e) => {
//               setMoviesPerPage(Number(e.target.value));
//               setCurrentPage(1);
//             }}
//           >
//             <option value={5}>5 per page</option>
//             <option value={10}>10 per page</option>
//             <option value={20}>20 per page</option>
//           </Form.Select>
//         </div>

//         {loading ? (
//           <div className="text-center"><Spinner animation="border" /></div>
//         ) : (
//           <>
//             <Table striped bordered hover responsive>
//               <thead>
//                 <tr>
//                   <th>
//                     <Form.Check
//                       type="checkbox"
//                       onChange={(e) => {
//                         if (e.target.checked) {
//                           setSelectedMovies(currentMovies.map((m) => m._id));
//                         } else {
//                           setSelectedMovies([]);
//                         }
//                       }}
//                       checked={selectedMovies.length === currentMovies.length && currentMovies.length !== 0}
//                     />
//                   </th>
//                   <th>Name</th>
//                   <th>Genre</th>
//                   <th>Language</th>
//                   <th>Format</th>
//                   <th>Certificate</th>
//                   <th>Rating</th>
//                   <th>Release Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentMovies.map((m) => (
//                   <tr key={m._id} className='bg-danger'>
//                     <td>
//                       <Form.Check
//                         type="checkbox"
//                         checked={selectedMovies.includes(m._id)}
//                         onChange={() => handleSelect(m._id)}
//                       />
//                     </td>
//                     <td>{m.name}</td>
//                     <td>{m.genre}</td>
//                     <td>{m.language}</td>
//                     <td>{m.format}</td>
//                     <td>{m.certificate}</td>
//                     <td>{m.rating}</td>
//                     <td>{m.rating}</td>
//                     <td>{new Date(m.releaseDate).toLocaleDateString()}</td>
//                     <td>
//                       <Button
//                         variant="outline-success"
//                         size="sm"
//                         className="me-2"
//                         onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="outline-danger"
//                         size="sm"
//                         onClick={() => handleDeleteSelected([m._id])}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//                 {currentMovies.length === 0 && (
//                   <tr>
//                     <td colSpan="9" className="text-center">No movies found.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </Table>

//             {/* Pagination Controls */}
//             {totalPages > 1 && (
//               <div className="d-flex justify-content-center mt-3">
//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={handlePrevious}
//                   disabled={currentPage === 1}
//                   className="me-2"
//                 >
//                   Previous
//                 </Button>

//                 {[...Array(totalPages)].map((_, idx) => (
//                   <Button
//                     key={idx + 1}
//                     variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
//                     size="sm"
//                     onClick={() => handlePageChange(idx + 1)}
//                     className="me-1"
//                   >
//                     {idx + 1}
//                   </Button>
//                 ))}

//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={handleNext}
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                 </Button>
//               </div>
//             )}
//           </>
//         )}
//       </Container>
//     </>
//   );
// }

//working

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

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [moviesPerPage, setMoviesPerPage] = useState(5);

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

//   // Pagination logic
//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
//   const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
//   const handlePrevious = () => { if (currentPage > 1) setCurrentPage(prev => prev - 1); };
//   const handleNext = () => { if (currentPage < totalPages) setCurrentPage(prev => prev + 1); };

//   const handleDeleteSelected = async (customIds = null) => {
//     const idsToDelete = customIds || selectedMovies;
//     if (idsToDelete.length === 0) {
//       alert('Please select at least one movie to delete.');
//       return;
//     }
//     if (!window.confirm('Are you sure you want to delete selected movies?')) return;

//     try {
//       for (const id of idsToDelete) {
//         await fetch(`http://localhost:5000/api/movies/${id}`, { method: 'DELETE' });
//       }
//       setMovies(prev => prev.filter(movie => !idsToDelete.includes(movie._id)));
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
//       ReleaseDate: new Date(m.releaseDate).toLocaleDateString(),
//       Types: m.types.map(t => `${t.type}: ₹${t.price}`).join(', ')
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
//       ReleaseDate: new Date(m.releaseDate).toLocaleDateString(),
//       Types: m.types.map(t => `${t.type}: ₹${t.price}`).join(', ')
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
//       head: [['Name', 'Genre', 'Language', 'Format', 'Certificate', 'Rating', 'Release Date', 'Types']],
//       body: selectedData.map(m => [
//         m.name,
//         m.genre.join(', '),
//         m.language.join(', '),
//         m.format,
//         m.certificate,
//         m.rating,
//         new Date(m.releaseDate).toLocaleDateString(),
//         m.types.map(t => `${t.type}: ₹${t.price}`).join(', ')
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
//             <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
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
//             onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
//           />
//         </Form.Group>

//         {/* Page Size Selector */}
//         <div className="d-flex justify-content-end mb-2">
//           <Form.Select
//             style={{ width: '150px' }}
//             value={moviesPerPage}
//             onChange={(e) => { setMoviesPerPage(Number(e.target.value)); setCurrentPage(1); }}
//           >
//             <option value={5}>5 per page</option>
//             <option value={10}>10 per page</option>
//             <option value={20}>20 per page</option>
//           </Form.Select>
//         </div>

//         {loading ? (
//           <div className="text-center"><Spinner animation="border" /></div>
//         ) : (
//           <>
//             <Table striped bordered hover responsive>
//               <thead>
//                 <tr>
//                   <th>
//                     <Form.Check
//                       type="checkbox"
//                       onChange={(e) => {
//                         if (e.target.checked) {
//                           setSelectedMovies(currentMovies.map((m) => m._id));
//                         } else {
//                           setSelectedMovies([]);
//                         }
//                       }}
//                       checked={selectedMovies.length === currentMovies.length && currentMovies.length !== 0}
//                     />
//                   </th>
//                   <th>Name</th>
//                   <th>Genre</th>
//                   <th>Language</th>
//                   <th>Format</th>
//                   <th>Certificate</th>
//                   <th>Rating</th>
//                   <th>Release Date</th>
//                   <th>Types & Prices</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               {/* <tbody>
//                 {currentMovies.map((m) => (
//                   <tr key={m._id}>
//                     <td>
//                       <Form.Check
//                         type="checkbox"
//                         checked={selectedMovies.includes(m._id)}
//                         onChange={() => handleSelect(m._id)}
//                       />
//                     </td>
//                     <td>{m.name}</td>
//                     <td>{m.genre.join(', ')}</td>
//                     <td>{m.language.join(', ')}</td>
//                     <td>{m.format}</td>
//                     <td>{m.certificate}</td>
//                     <td>{m.rating}</td>
//                     <td>{new Date(m.releaseDate).toLocaleDateString()}</td>
//                     <td>{m.types.map(t => `${t.type}: ₹${t.price}`).join(', ')}</td>
//                     <td>
//                       <Button
//                         variant="outline-success"
//                         size="sm"
//                         className="me-2"
//                         onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="outline-danger"
//                         size="sm"
//                         onClick={() => handleDeleteSelected([m._id])}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//                 {currentMovies.length === 0 && (
//                   <tr>
//                     <td colSpan="10" className="text-center">No movies found.</td>
//                   </tr>
//                 )}
//               </tbody> */}

//               <tbody>
//   {currentMovies.map((m) => (
//     <tr key={m._id}>
//       <td>
//         <Form.Check
//           type="checkbox"
//           checked={selectedMovies.includes(m._id)}
//           onChange={() => handleSelect(m._id)}
//         />
//       </td>
//       <td>{m.name}</td>
//       <td>{(m.genre || []).join(', ')}</td>
//       <td>{(m.language || []).join(', ')}</td>
//       <td>{m.format}</td>
//       <td>{m.certificate}</td>
//       <td>{m.rating}</td>
//       <td>{new Date(m.releaseDate).toLocaleDateString()}</td>
//       <td>{(m.types || []).map(t => `${t.type}: ₹${t.price}`).join(', ')}</td>
//       <td>
//         <Button
//           variant="outline-success"
//           size="sm"
//           className="me-2"
//           onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
//         >
//           Edit
//         </Button>
//         <Button
//           variant="outline-danger"
//           size="sm"
//           onClick={() => handleDeleteSelected([m._id])}
//         >
//           Delete
//         </Button>
//       </td>
//     </tr>
//   ))}
// </tbody>

//             </Table>

//             {/* Pagination Controls */}
//             {totalPages > 1 && (
//               <div className="d-flex justify-content-center mt-3">
//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={handlePrevious}
//                   disabled={currentPage === 1}
//                   className="me-2"
//                 >
//                   Previous
//                 </Button>

//                 {[...Array(totalPages)].map((_, idx) => (
//                   <Button
//                     key={idx + 1}
//                     variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
//                     size="sm"
//                     onClick={() => handlePageChange(idx + 1)}
//                     className="me-1"
//                   >
//                     {idx + 1}
//                   </Button>
//                 ))}

//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={handleNext}
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                 </Button>
//               </div>
//             )}
//           </>
//         )}
//       </Container>
//     </>
//   );
// }

// sample design code changing the th content to show 

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

//   const [currentPage, setCurrentPage] = useState(1);
//   const [moviesPerPage, setMoviesPerPage] = useState(5);

//   const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/movies');
//         const data = await res.json();
//         console.log('Fetched movies:', data); // Check the structure
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
//     movie.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination logic
//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
//   const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
//   const handlePrevious = () => { if (currentPage > 1) setCurrentPage(prev => prev - 1); };
//   const handleNext = () => { if (currentPage < totalPages) setCurrentPage(prev => prev + 1); };

//   const handleDeleteSelected = async (customIds = null) => {
//     const idsToDelete = customIds || selectedMovies;
//     if (idsToDelete.length === 0) {
//       alert('Please select at least one movie to delete.');
//       return;
//     }
//     if (!window.confirm('Are you sure you want to delete selected movies?')) return;

//     try {
//       for (const id of idsToDelete) {
//         await fetch(`http://localhost:5000/api/movies/${id}`, { method: 'DELETE' });
//       }
//       setMovies(prev => prev.filter(movie => !idsToDelete.includes(movie._id)));
//       setSelectedMovies([]);
//     } catch (err) {
//       console.error('Error deleting selected movies:', err);
//     }
//   };

//   const formatTypes = (typesArray) => {
//     if (!Array.isArray(typesArray) || typesArray.length === 0) return 'N/A';
//     return typesArray.map(t => `${t.type || t.name || 'Unknown'}: ₹${t.price ?? t.amount ?? 0}`).join(', ');
//   };

//   const exportToExcel = () => {
//     if (selectedMovies.length === 0) {
//       alert('Please select at least one movie to export.');
//       return;
//     }

//     const selectedData = movies.filter(m => selectedMovies.includes(m._id));
//     const worksheet = XLSX.utils.json_to_sheet(selectedData.map(m => ({
//       Name: m.name || 'N/A',
//       Genre: (m.genre || []).join(', '),
//       Language: (m.language || []).join(', '),
//       Format: m.format || 'N/A',
//       Certificate: m.certificate || 'N/A',
//       Rating: m.rating ?? 'N/A',
//       ReleaseDate: m.releaseDate ? new Date(m.releaseDate).toLocaleDateString() : 'N/A',
//       Types: formatTypes(m.types)
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
//       Name: m.name || 'N/A',
//       Genre: (m.genre || []).join(', '),
//       Language: (m.language || []).join(', '),
//       Format: m.format || 'N/A',
//       Certificate: m.certificate || 'N/A',
//       Rating: m.rating ?? 'N/A',
//       ReleaseDate: m.releaseDate ? new Date(m.releaseDate).toLocaleDateString() : 'N/A',
//       Types: formatTypes(m.types)
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
//       head: [['Name', 'Genre', 'Language', 'Format', 'Certificate', 'Rating', 'Release Date', 'Types']],
//       body: selectedData.map(m => [
//         m.name || 'N/A',
//         (m.genre || []).join(', '),
//         (m.language || []).join(', '),
//         m.format || 'N/A',
//         m.certificate || 'N/A',
//         m.rating ?? 'N/A',
//         m.releaseDate ? new Date(m.releaseDate).toLocaleDateString() : 'N/A',
//         formatTypes(m.types)
//       ]),
//     });
//     doc.save('movies.pdf');
//   };

//   // return (
//   //   <>
//   //     <Adminheader />
//   //     <div className="sideside">
//   //       <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//   //     </div>

//   //     <div className="managemovie">
//   //       <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//   //       <span className="mt-2">{menuName}</span>
//   //     </div>

//   //     <Container className="py-4 moviecontainer">
//   //       <div className="d-flex justify-content-between align-items-center mb-3">
//   //         <h3 className="text-danger">Manage Movie List</h3>
//   //         <div>
//   //           <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
//   //           <Button variant="outline-success" size="sm" onClick={exportToExcel} className="me-2">Excel</Button>
//   //           <Button variant="outline-primary" size="sm" onClick={exportToCSV} className="me-2">CSV</Button>
//   //           <Button variant="outline-dark" size="sm" onClick={exportToPDF}>PDF</Button>
//   //         </div>
//   //       </div>

//   //       <Form.Group className="mb-3" controlId="searchInput">
//   //         <Form.Control
//   //           type="text"
//   //           placeholder="Search movie by name..."
//   //           value={searchTerm}
//   //           onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
//   //         />
//   //       </Form.Group>

//   //       <div className="d-flex justify-content-end mb-2">
//   //         <Form.Select
//   //           style={{ width: '150px' }}
//   //           value={moviesPerPage}
//   //           onChange={(e) => { setMoviesPerPage(Number(e.target.value)); setCurrentPage(1); }}
//   //         >
//   //           <option value={5}>5 per page</option>
//   //           <option value={10}>10 per page</option>
//   //           <option value={20}>20 per page</option>
//   //         </Form.Select>
//   //       </div>

//   //       {loading ? (
//   //         <div className="text-center"><Spinner animation="border" /></div>
//   //       ) : (
//   //         <>
//   //           <Table striped bordered hover responsive>
//   //             <thead>
//   //               <tr>
//   //                 <th>
//   //                   <Form.Check
//   //                     type="checkbox"
//   //                     onChange={(e) => {
//   //                       if (e.target.checked) {
//   //                         setSelectedMovies(currentMovies.map((m) => m._id));
//   //                       } else {
//   //                         setSelectedMovies([]);
//   //                       }
//   //                     }}
//   //                     checked={selectedMovies.length === currentMovies.length && currentMovies.length !== 0}
//   //                   />
//   //                 </th>
//   //                 <th>Name</th>
//   //                 <th>Genre</th>
//   //                 <th>Language</th>
//   //                 <th>Format</th>
//   //                 <th>Certificate</th>
//   //                 <th>Rating</th>
//   //                 <th>Release Date</th>
//   //                 <th>Types & Prices</th>
//   //                 <th>Actions</th>
//   //               </tr>
//   //             </thead>
//   //             <tbody>
//   //               {currentMovies.length === 0 ? (
//   //                 <tr>
//   //                   <td colSpan="10" className="text-center">No movies found.</td>
//   //                 </tr>
//   //               ) : currentMovies.map((m) => (
//   //                 <tr key={m._id}>
//   //                   <td>
//   //                     <Form.Check
//   //                       type="checkbox"
//   //                       checked={selectedMovies.includes(m._id)}
//   //                       onChange={() => handleSelect(m._id)}
//   //                     />
//   //                   </td>
//   //                   <td>{m.name || 'N/A'}</td>
//   //                   <td>{(m.genre || []).join(', ')}</td>
//   //                   <td>{(m.language || []).join(', ')}</td>
//   //                   <td>{m.format || 'N/A'}</td>
//   //                   <td>{m.certificate || 'N/A'}</td>
//   //                   <td>{m.rating ?? 'N/A'}</td>
//   //                   <td>{m.releaseDate ? new Date(m.releaseDate).toLocaleDateString() : 'N/A'}</td>
//   //                   <td>{formatTypes(m.types)}</td>
//   //                   <td>
//   //                     <Button
//   //                       variant="outline-success"
//   //                       size="sm"
//   //                       className="me-2"
//   //                       onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
//   //                     >
//   //                       Edit
//   //                     </Button>
//   //                     <Button
//   //                       variant="outline-danger"
//   //                       size="sm"
//   //                       onClick={() => handleDeleteSelected([m._id])}
//   //                     >
//   //                       Delete
//   //                     </Button>
//   //                   </td>
//   //                 </tr>
//   //               ))}
//   //             </tbody>
//   //           </Table>

//   //           {totalPages > 1 && (
//   //             <div className="d-flex justify-content-center mt-3">
//   //               <Button
//   //                 variant="outline-secondary"
//   //                 size="sm"
//   //                 onClick={handlePrevious}
//   //                 disabled={currentPage === 1}
//   //                 className="me-2"
//   //               >
//   //                 Previous
//   //               </Button>

//   //               {[...Array(totalPages)].map((_, idx) => (
//   //                 <Button
//   //                   key={idx + 1}
//   //                   variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
//   //                   size="sm"
//   //                   onClick={() => handlePageChange(idx + 1)}
//   //                   className="me-1"
//   //                 >
//   //                   {idx + 1}
//   //                 </Button>
//   //               ))}

//   //               <Button
//   //                 variant="outline-secondary"
//   //                 size="sm"
//   //                 onClick={handleNext}
//   //                 disabled={currentPage === totalPages}
//   //               >
//   //                 Next
//   //               </Button>
//   //             </div>
//   //           )}
//   //         </>
//   //       )}
//   //     </Container>
//   //   </>
//   // );

// return (
//   <>
//     <Adminheader />
//     <div className="sideside">
//       <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//     </div>

//     <div className="managemovie">
//       <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//       <span className="mt-2">{menuName}</span>
//     </div>

//     <Container className="py-4 moviecontainer">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3 className="text-danger">Manage Movie List</h3>
//         <div>
//           <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
//           <Button variant="outline-success" size="sm" onClick={exportToExcel} className="me-2">Excel</Button>
//           <Button variant="outline-primary" size="sm" onClick={exportToCSV} className="me-2">CSV</Button>
//           <Button variant="outline-dark" size="sm" onClick={exportToPDF}>PDF</Button>
//         </div>
//       </div>

//       <Form.Group className="mb-3" controlId="searchInput">
//         <Form.Control
//           type="text"
//           placeholder="Search movie by name..."
//           value={searchTerm}
//           onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
//         />
//       </Form.Group>

//       <div className="d-flex justify-content-end mb-2">
//         <Form.Select
//           style={{ width: '150px' }}
//           value={moviesPerPage}
//           onChange={(e) => { setMoviesPerPage(Number(e.target.value)); setCurrentPage(1); }}
//         >
//           <option value={5}>5 per page</option>
//           <option value={10}>10 per page</option>
//           <option value={20}>20 per page</option>
//         </Form.Select>
//       </div>

//       {loading ? (
//         <div className="text-center"><Spinner animation="border" /></div>
//       ) : (
//         <>
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>
//                   <Form.Check
//                     type="checkbox"
//                     onChange={(e) => {
//                       if (e.target.checked) {
//                         setSelectedMovies(currentMovies.map((m) => m._id));
//                       } else {
//                         setSelectedMovies([]);
//                       }
//                     }}
//                     checked={selectedMovies.length === currentMovies.length && currentMovies.length !== 0}
//                   />
//                 </th>
//                 <th>Theater Name</th>
//                 <th>Movie Name</th>
//                 <th>Screen Type</th>
//                 <th>Class & Price</th>
//                 <th>Actions</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentMovies.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="text-center">No movies found.</td>
//                 </tr>
//               ) : currentMovies.map((m) => (
//                 <tr key={m._id}>
//                   <td>
//                     <Form.Check
//                       type="checkbox"
//                       checked={selectedMovies.includes(m._id)}
//                       onChange={() => handleSelect(m._id)}
//                     />
//                   </td>
//                   <td>{m.theaterName || 'N/A'}</td>
//                   <td>{m.name || 'N/A'}</td>
//                   <td>{m.screenType || 'N/A'}</td>
//                   <td>{formatTypes(m.types)}</td>
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
//                   <td>
//                     <Form.Check
//                       type="switch"
//                       id={`enable-switch-${m._id}`}
//                       checked={m.enabled}
//                       onChange={async () => {
//                         try {
//                           const updated = { ...m, enabled: !m.enabled };
//                           await fetch(`http://localhost:5000/api/movies/${m._id}`, {
//                             method: 'PUT',
//                             headers: { 'Content-Type': 'application/json' },
//                             body: JSON.stringify({ enabled: !m.enabled }),
//                           });
//                           setMovies(prev => prev.map(movie => movie._id === m._id ? updated : movie));
//                         } catch (err) {
//                           console.error('Toggle status failed', err);
//                         }
//                       }}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>

//           {totalPages > 1 && (
//             <div className="d-flex justify-content-center mt-3">
//               <Button
//                 variant="outline-secondary"
//                 size="sm"
//                 onClick={handlePrevious}
//                 disabled={currentPage === 1}
//                 className="me-2"
//               >
//                 Previous
//               </Button>

//               {[...Array(totalPages)].map((_, idx) => (
//                 <Button
//                   key={idx + 1}
//                   variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
//                   size="sm"
//                   onClick={() => handlePageChange(idx + 1)}
//                   className="me-1"
//                 >
//                   {idx + 1}
//                 </Button>
//               ))}

//               <Button
//                 variant="outline-secondary"
//                 size="sm"
//                 onClick={handleNext}
//                 disabled={currentPage === totalPages}
//               >
//                 Next
//               </Button>
//             </div>
//           )}
//         </>
//       )}
//     </Container>
//   </>
// );
// }

//displaying each screen type in a seperate row 

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
//   const [selectedRows, setSelectedRows] = useState([]);  // here row-level selections
//   const [searchTerm, setSearchTerm] = useState('');
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";

//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/movies');
//         const data = await res.json();
//         console.log('Fetched movies with theaters:', data);
//         setMovies(data);
//       } catch (err) {
//         console.error('Error fetching movies:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovies();
//   }, []);

//   // A helper to flatten the movie → theater → screens into a list of rows
//   const getRows = () => {
//     const rows = [];
//     movies.forEach(movie => {
//       const { _id: movieId, name, types, theaters = [] } = movie;

//       if (theaters.length === 0) {
//         // fallback: no theater, still show movie row with blanks
//         rows.push({
//           rowId: `${movieId}__noTheater`,
//           movieId,
//           theaterName: 'N/A',
//           screenName: 'N/A',
//           types,
//         });
//       } else {
//         theaters.forEach((th, ti) => {
//           const tName = th.name || 'N/A';
//           const screens = th.screens || [];
//           if (screens.length === 0) {
//             // no screens: push a placeholder
//             rows.push({
//               rowId: `${movieId}__${ti}__noScreen`,
//               movieId,
//               theaterName: tName,
//               screenName: 'N/A',
//               types,
//             });
//           } else {
//             screens.forEach((sc, si) => {
//               // sc.screenName is an array, e.g. ['Screen-A', 'Screen-B']
//               const screenNamesArr = sc.screenName || [];
//               if (screenNamesArr.length === 0) {
//                 rows.push({
//                   rowId: `${movieId}__${ti}__${si}__noName`,
//                   movieId,
//                   theaterName: tName,
//                   screenName: 'N/A',
//                   types,
//                 });
//               } else {
//                 screenNamesArr.forEach((sn, sni) => {
//                   rows.push({
//                     rowId: `${movieId}__${ti}__${si}__${sni}`,
//                     movieId,
//                     theaterName: tName,
//                     screenName: sn,
//                     types,
//                   });
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//     return rows;
//   };

//   const rows = getRows();

//   // Filter rows by movie name search
//   const filteredRows = rows.filter(r =>
//     r.movieId && movies.find(m => m._id === r.movieId)?.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination on flattened rows
//   const indexLast = currentPage * rowsPerPage;
//   const indexFirst = indexLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexFirst, indexLast);
//   const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

//   const handleRowSelect = (rowId) => {
//     setSelectedRows(prev =>
//       prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]
//     );
//   };

//   const handleDeleteSelected = async (customRowIds = null) => {
//     const rowIdsToDelete = customRowIds || selectedRows;
//     if (rowIdsToDelete.length === 0) {
//       alert('Please select at least one row to delete.');
//       return;
//     }
//     if (!window.confirm('Are you sure you want to delete these?')) return;

//     try {
//       // Because deletion is by movie, we must dedupe the movieIds to delete
//       const movieIdsToDelete = Array.from(new Set(
//         rowIdsToDelete.map(rid => {
//           const parts = rid.split('__');
//           return parts[0];  // movieId part
//         })
//       ));
//       for (const mid of movieIdsToDelete) {
//         await fetch(`http://localhost:5000/api/movies/${mid}`, { method: 'DELETE' });
//       }
//       setMovies(prev => prev.filter(m => !movieIdsToDelete.includes(m._id)));
//       setSelectedRows([]);
//     } catch (err) {
//       console.error('Error deleting selected movies:', err);
//     }
//   };

//   // Reusing your formatTypes
//   const formatTypes = (typesArray) => {
//     if (!Array.isArray(typesArray) || typesArray.length === 0) return 'N/A';
//     return typesArray.map(t => `${t.type || t.name || 'Unknown'}: ₹${t.price ?? t.amount ?? 0}`).join(', ');
//   };

//   const exportToExcel = () => {
//     if (selectedRows.length === 0) {
//       alert('Please select at least one row to export.');
//       return;
//     }
//     // get the unique movie objects for selected rows
//     const movieIds = Array.from(new Set(selectedRows.map(rid => rid.split('__')[0])));
//     const selectedMovies = movies.filter(m => movieIds.includes(m._id));
//     const worksheet = XLSX.utils.json_to_sheet(selectedMovies.map(m => ({
//       Name: m.name || 'N/A',
//       // You may want to export theaters/screens too
//       Theaters: (m.theaters || []).map(th => th.name).join(', '),
//       Screens: (m.theaters || []).map(th =>
//         (th.screens || []).map(sc => (sc.screenName || []).join(', ')).join('|')
//       ).join(' ; '),
//       Types: formatTypes(m.types),
//     })));
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Movies');
//     XLSX.writeFile(workbook, 'movies.xlsx');
//   };

//   const exportToCSV = () => {
//     if (selectedRows.length === 0) {
//       alert('Please select at least one row to export.');
//       return;
//     }
//     const movieIds = Array.from(new Set(selectedRows.map(rid => rid.split('__')[0])));
//     const selectedMovies = movies.filter(m => movieIds.includes(m._id));
//     const worksheet = XLSX.utils.json_to_sheet(selectedMovies.map(m => ({
//       Name: m.name || 'N/A',
//       Theaters: (m.theaters || []).map(th => th.name).join(', '),
//       Screens: (m.theaters || []).map(th =>
//         (th.screens || []).map(sc => (sc.screenName || []).join(', ')).join('|')
//       ).join(' ; '),
//       Types: formatTypes(m.types),
//     })));
//     const csv = XLSX.utils.sheet_to_csv(worksheet);
//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'movies.csv');
//   };

//   const exportToPDF = () => {
//     if (selectedRows.length === 0) {
//       alert('Please select at least one row to export.');
//       return;
//     }
//     const movieIds = Array.from(new Set(selectedRows.map(rid => rid.split('__')[0])));
//     const selectedMovies = movies.filter(m => movieIds.includes(m._id));
//     const doc = new jsPDF();
//     autoTable(doc, {
//       head: [['Name', 'Theaters', 'Screens', 'Types']],
//       body: selectedMovies.map(m => [
//         m.name || 'N/A',
//         (m.theaters || []).map(th => th.name).join(', '),
//         (m.theaters || [])
//           .map(th => (th.screens || []).map(sc => (sc.screenName || []).join(', ')).join('|'))
//           .join(' ; '),
//         formatTypes(m.types),
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
//             <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
//             <Button variant="outline-success" size="sm" onClick={exportToExcel} className="me-2">Excel</Button>
//             <Button variant="outline-primary" size="sm" onClick={exportToCSV} className="me-2">CSV</Button>
//             <Button variant="outline-dark" size="sm" onClick={exportToPDF}>PDF</Button>
//           </div>
//         </div>

//         <Form.Group className="mb-3" controlId="searchInput">
//           <Form.Control
//             type="text"
//             placeholder="Search movie by name..."
//             value={searchTerm}
//             onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
//           />
//         </Form.Group>

//         <div className="d-flex justify-content-end mb-2">
//           <Form.Select
//             style={{ width: '150px' }}
//             value={rowsPerPage}
//             onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
//           >
//             <option value={5}>5 per page</option>
//             <option value={10}>10 per page</option>
//             <option value={20}>20 per page</option>
//           </Form.Select>
//         </div>

//         {loading ? (
//           <div className="text-center"><Spinner animation="border" /></div>
//         ) : (
//           <>
//             <Table striped bordered hover responsive>
//               <thead>
//                 <tr>
//                   <th>
//                     <Form.Check
//                       type="checkbox"
//                       onChange={(e) => {
//                         if (e.target.checked) {
//                           setSelectedRows(currentRows.map(r => r.rowId));
//                         } else {
//                           setSelectedRows([]);
//                         }
//                       }}
//                       checked={
//                         currentRows.length > 0 &&
//                         selectedRows.length === currentRows.length &&
//                         currentRows.every(r => selectedRows.includes(r.rowId))
//                       }
//                     />
//                   </th>
//                   <th>Theater Name</th>
//                   <th>Movie Name</th>
//                   <th>Screen Type</th>
//                   <th>Class & Price</th>
//                   <th>Actions</th>
//                   {/* You can also add a toggle or status column here if needed */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentRows.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">No data found.</td>
//                   </tr>
//                 ) : currentRows.map(r => {
//                   const movie = movies.find(m => m._id === r.movieId);
//                   return (
//                     <tr key={r.rowId}>
//                       <td>
//                         <Form.Check
//                           type="checkbox"
//                           checked={selectedRows.includes(r.rowId)}
//                           onChange={() => handleRowSelect(r.rowId)}
//                         />
//                       </td>
//                       <td>{r.theaterName}</td>
//                       <td>{movie?.name ?? 'N/A'}</td>
//                       <td>{r.screenName}</td>
//                       <td>{formatTypes(r.types)}</td>
//                       <td>
//                         <Button
//                           variant="outline-success"
//                           size="sm"
//                           className="me-2"
//                           onClick={() => navigate('/newmovie', { state: { movie, edit: true } })}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outline-danger"
//                           size="sm"
//                           onClick={() => handleDeleteSelected([r.rowId])}
//                         >
//                           Delete
//                         </Button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </Table>

//             {totalPages > 1 && (
//               <div className="d-flex justify-content-center mt-3">
//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={() => currentPage > 1 && setCurrentPage(prev => prev - 1)}
//                   disabled={currentPage === 1}
//                   className="me-2"
//                 >Previous</Button>

//                 {[...Array(totalPages)].map((_, idx) => (
//                   <Button
//                     key={idx + 1}
//                     variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
//                     size="sm"
//                     onClick={() => setCurrentPage(idx + 1)}
//                     className="me-1"
//                   >{idx + 1}</Button>
//                 ))}

//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={() => currentPage < totalPages && setCurrentPage(prev => prev + 1)}
//                   disabled={currentPage === totalPages}
//                 >Next</Button>
//               </div>
//             )}
//           </>
//         )}
//       </Container>
//     </>
//   );
// }

// displaying screen type in a single row 
// 15/10/2025 working

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
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [toggleStates, setToggleStates] = useState({});
//   const navigate = useNavigate();
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";

//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/movies');
//         const data = await res.json();
//         console.log('Fetched movies with theaters:', data);
//         setMovies(data);
//       } catch (err) {
//         console.error('Error fetching movies:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovies();
//   }, []);

//   // ✅ Updated: One row per theater with all screen names combined
//   const getRows = () => {
//     const rows = [];
//     movies.forEach(movie => {
//       const { _id: movieId, name, types, theaters = [] } = movie;

//       if (theaters.length === 0) {
//         rows.push({
//           rowId: `${movieId}__noTheater`,
//           movieId,
//           theaterName: 'N/A',
//           screenNames: 'N/A',
//           types,
//         });
//       } else {
//         theaters.forEach((th, ti) => {
//           const tName = th.name || 'N/A';
//           const screens = th.screens || [];

//           const allScreenNames = screens.flatMap(sc => sc.screenName || []);
//           const screenNamesString = allScreenNames.length > 0 ? allScreenNames.join(', ') : 'N/A';

//           rows.push({
//             rowId: `${movieId}__${ti}`,
//             movieId,
//             theaterName: tName,
//             screenNames: screenNamesString,
//             types,
//           });
//         });
//       }
//     });
//     return rows;
//   };

//   const rows = getRows();

//   const filteredRows = rows.filter(r =>
//     r.movieId && movies.find(m => m._id === r.movieId)?.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexLast = currentPage * rowsPerPage;
//   const indexFirst = indexLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexFirst, indexLast);
//   const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

//   const handleRowSelect = (rowId) => {
//     setSelectedRows(prev =>
//       prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]
//     );
//   };

//   const handleDeleteSelected = async (customRowIds = null) => {
//     const rowIdsToDelete = customRowIds || selectedRows;
//     if (rowIdsToDelete.length === 0) {
//       alert('Please select at least one row to delete.');
//       return;
//     }
//     if (!window.confirm('Are you sure you want to delete these?')) return;

//     try {
//       const movieIdsToDelete = Array.from(new Set(
//         rowIdsToDelete.map(rid => rid.split('__')[0])
//       ));
//       for (const mid of movieIdsToDelete) {
//         await fetch(`http://localhost:5000/api/movies/${mid}`, { method: 'DELETE' });
//       }
//       setMovies(prev => prev.filter(m => !movieIdsToDelete.includes(m._id)));
//       setSelectedRows([]);
//     } catch (err) {
//       console.error('Error deleting selected movies:', err);
//     }
//   };

//   const formatTypes = (typesArray) => {
//     if (!Array.isArray(typesArray) || typesArray.length === 0) return 'N/A';
//     return typesArray.map(t => `${t.type || t.name || 'Unknown'}: ₹${t.price ?? t.amount ?? 0}`).join(', ');
//   };

//   const exportToExcel = () => {
//     if (selectedRows.length === 0) {
//       alert('Please select at least one row to export.');
//       return;
//     }

//     const exportRows = rows.filter(r => selectedRows.includes(r.rowId));
//     const data = exportRows.map(r => ({
//       Theater: r.theaterName,
//       Movie: movies.find(m => m._id === r.movieId)?.name || 'N/A',
//       Screens: r.screenNames,
//       Types: formatTypes(r.types),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Movies');
//     XLSX.writeFile(workbook, 'movies.xlsx');
//   };

//   const exportToCSV = () => {
//     if (selectedRows.length === 0) {
//       alert('Please select at least one row to export.');
//       return;
//     }

//     const exportRows = rows.filter(r => selectedRows.includes(r.rowId));
//     const data = exportRows.map(r => ({
//       Theater: r.theaterName,
//       Movie: movies.find(m => m._id === r.movieId)?.name || 'N/A',
//       Screens: r.screenNames,
//       Types: formatTypes(r.types),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const csv = XLSX.utils.sheet_to_csv(worksheet);
//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'movies.csv');
//   };

//   const exportToPDF = () => {
//     if (selectedRows.length === 0) {
//       alert('Please select at least one row to export.');
//       return;
//     }

//     const exportRows = rows.filter(r => selectedRows.includes(r.rowId));
//     const doc = new jsPDF();
//     autoTable(doc, {
//       head: [['Theater', 'Movie', 'Screens', 'Types']],
//       body: exportRows.map(r => [
//         r.theaterName,
//         movies.find(m => m._id === r.movieId)?.name || 'N/A',
//         r.screenNames,
//         formatTypes(r.types),
//       ]),
//     });
//     doc.save('movies.pdf');
//   };

//   const handleToggle = (rowId) => {
//   setToggleStates(prev => ({
//     ...prev,
//     [rowId]: !prev[rowId],
//   }));
// };


//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="managemovie">
//         <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp;&nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <Container className="py-4 moviecontainer">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h3 className="text-danger">Manage Movie List</h3>
//           <div>
//             <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
//             <Button variant="outline-success" size="sm" onClick={exportToExcel} className="me-2">Excel</Button>
//             <Button variant="outline-primary" size="sm" onClick={exportToCSV} className="me-2">CSV</Button>
//             <Button variant="outline-dark" size="sm" onClick={exportToPDF}>PDF</Button>
//           </div>
//         </div>

//         <Form.Group className="mb-3" controlId="searchInput">
//           <Form.Control
//             type="text"
//             placeholder="Search movie by name..."
//             value={searchTerm}
//             onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
//           />
//         </Form.Group>

//         <div className="d-flex justify-content-end mb-2">
//           <Form.Select
//             style={{ width: '150px' }}
//             value={rowsPerPage}
//             onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
//           >
//             <option value={5}>5 per page</option>
//             <option value={10}>10 per page</option>
//             <option value={20}>20 per page</option>
//           </Form.Select>
//         </div>

//         {loading ? (
//           <div className="text-center"><Spinner animation="border" /></div>
//         ) : (
//           <>
//             <Table striped bordered hover responsive>
//               <thead>
//                     <tr>
//                       <th>
//                         <Form.Check
//                           type="checkbox"
//                           onChange={(e) => {
//                             if (e.target.checked) {
//                               setSelectedRows(currentRows.map(r => r.rowId));
//                             } else {
//                               setSelectedRows([]);
//                             }
//                           }}
//                           checked={
//                             currentRows.length > 0 &&
//                             selectedRows.length === currentRows.length &&
//                             currentRows.every(r => selectedRows.includes(r.rowId))
//                           }
//                         />
//                       </th>
//                       <th>Theater Name</th>
//                       <th>Movie Name</th>
//                       <th>Screens</th>
//                       <th>Class & Price</th>
//                       <th>Actions</th>
//                       <th>Toggle</th> {/* ✅ New column */}
//                     </tr>
//               </thead>

//                   <tbody>
//                     {currentRows.length === 0 ? (
//                       <tr>
//                         <td colSpan="7" className="text-center">No data found.</td>
//                       </tr>
//                     ) : currentRows.map(r => {
//                       const movie = movies.find(m => m._id === r.movieId);
//                       return (
//                         <tr key={r.rowId}>
//                           <td>
//                             <Form.Check
//                               type="checkbox"
//                               checked={selectedRows.includes(r.rowId)}
//                               onChange={() => handleRowSelect(r.rowId)}
//                             />
//                           </td>
//                           <td>{r.theaterName}</td>
//                           <td>{movie?.name ?? 'N/A'}</td>
//                           <td>{r.screenNames}</td>
//                           <td>{formatTypes(r.types)}</td>
//                           <td>
//                             <Button
//                               variant="outline-success"
//                               size="sm"
//                               className="me-2"
//                               onClick={() => navigate('/newmovie', { state: { movie, edit: true } })}
//                             >
//                               Edit
//                             </Button>
//                             <Button
//                               variant="outline-danger"
//                               size="sm"
//                               onClick={() => handleDeleteSelected([r.rowId])}
//                             >
//                               Delete
//                             </Button>
//                           </td>
//                           <td>
//                             <Form.Check
//                               type="switch"
//                               id={`custom-switch-${r.rowId}`}
//                               checked={toggleStates[r.rowId] || false}
//                               onChange={() => handleToggle(r.rowId)}
//                               // label={toggleStates[r.rowId] ? 'On' : 'Off'}
//                             />
//                           </td>
//                         </tr>
//                       );
//                     })}
//               </tbody>




//             </Table>

//             {totalPages > 1 && (
//               <div className="d-flex justify-content-center mt-3">
//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={() => currentPage > 1 && setCurrentPage(prev => prev - 1)}
//                   disabled={currentPage === 1}
//                   className="me-2"
//                 >Previous</Button>

//                 {[...Array(totalPages)].map((_, idx) => (
//                   <Button
//                     key={idx + 1}
//                     variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
//                     size="sm"
//                     onClick={() => setCurrentPage(idx + 1)}
//                     className="me-1"
//                   >{idx + 1}</Button>
//                 ))}

//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={() => currentPage < totalPages && setCurrentPage(prev => prev + 1)}
//                   disabled={currentPage === totalPages}
//                 >Next</Button>
//               </div>
//             )}
//           </>
//         )}
//       </Container>
//     </>
//   );
// }

// ✅ MovieDisplay.jsx 30/10/2025 working in this code

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
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [toggleStates, setToggleStates] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

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

//   // ✅ Extract movie + theater + screen + typePrice per row
//   const getRows = () => {
//     const rows = [];
//     movies.forEach(movie => {
//       const { _id: movieId, name, typePrice = [], theaters = [] } = movie;

//       if (theaters.length === 0) {
//         rows.push({
//           rowId: `${movieId}__noTheater`,
//           movieId,
//           theaterName: 'N/A',
//           screenNames: 'N/A',
//           typePrice,
//         });
//       } else {
//         theaters.forEach((th, ti) => {
//           const tName = th.name || 'N/A';
//           const screens = th.screens || [];

//           const allScreenNames = screens.map(sc => sc.screenName).filter(Boolean);
//           const screenNamesString = allScreenNames.length > 0 ? allScreenNames.join(', ') : 'N/A';

//           rows.push({
//             rowId: `${movieId}__${ti}`,
//             movieId,
//             theaterName: tName,
//             screenNames: screenNamesString,
//             typePrice,
//           });
//         });
//       }
//     });
//     return rows;
//   };

//   const formatTypes = (typePriceArray) => {
//     if (!Array.isArray(typePriceArray) || typePriceArray.length === 0) return 'N/A';

//     return typePriceArray.map(tp => {
//       const types = tp.type || [];
//       const prices = tp.price || [];
//       return types.map((t, i) => `${t}: ₹${prices[i] ?? '0'}`).join(', ');
//     }).join(' | ');
//   };

//   const rows = getRows();

//   const filteredRows = rows.filter(r =>
//     r.movieId && movies.find(m => m._id === r.movieId)?.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexLast = currentPage * rowsPerPage;
//   const indexFirst = indexLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexFirst, indexLast);
//   const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

//   const handleRowSelect = (rowId) => {
//     setSelectedRows(prev =>
//       prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]
//     );
//   };

//   const handleDeleteSelected = async (customRowIds = null) => {
//     const rowIdsToDelete = customRowIds || selectedRows;
//     if (rowIdsToDelete.length === 0) {
//       alert('Please select at least one row to delete.');
//       return;
//     }
//     if (!window.confirm('Are you sure you want to delete these?')) return;

//     try {
//       const movieIdsToDelete = Array.from(new Set(
//         rowIdsToDelete.map(rid => rid.split('__')[0])
//       ));
//       for (const mid of movieIdsToDelete) {
//         await fetch(`http://localhost:5000/api/movies/${mid}`, { method: 'DELETE' });
//       }
//       setMovies(prev => prev.filter(m => !movieIdsToDelete.includes(m._id)));
//       setSelectedRows([]);
//     } catch (err) {
//       console.error('Error deleting selected movies:', err);
//     }
//   };

//   const exportData = (type) => {
//     if (selectedRows.length === 0) {
//       alert('Please select at least one row to export.');
//       return;
//     }

//     const exportRows = rows.filter(r => selectedRows.includes(r.rowId));
//     const data = exportRows.map(r => ({
//       Theater: r.theaterName,
//       Movie: movies.find(m => m._id === r.movieId)?.name || 'N/A',
//       Screens: r.screenNames,
//       Types: formatTypes(r.typePrice),
//     }));

//     if (type === 'excel') {
//       const worksheet = XLSX.utils.json_to_sheet(data);
//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'Movies');
//       XLSX.writeFile(workbook, 'movies.xlsx');
//     } else if (type === 'csv') {
//       const worksheet = XLSX.utils.json_to_sheet(data);
//       const csv = XLSX.utils.sheet_to_csv(worksheet);
//       const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//       saveAs(blob, 'movies.csv');
//     } else if (type === 'pdf') {
//       const doc = new jsPDF();
//       autoTable(doc, {
//         head: [['Theater', 'Movie', 'Screens', 'Types']],
//         body: data.map(d => [d.Theater, d.Movie, d.Screens, d.Types]),
//       });
//       doc.save('movies.pdf');
//     }
//   };

//   // const handleToggle = (rowId) => {
//   //   setToggleStates(prev => ({
//   //     ...prev,
//   //     [rowId]: !prev[rowId],
//   //   }));
//   // };

// //   const handleToggle = async (rowId) => {
// //   const updatedState = !toggleStates[rowId];
// //   setToggleStates((prev) => ({
// //     ...prev,
// //     [rowId]: updatedState,
// //   }));

// //   // ✅ Find the theater ID
// //   const row = rows.find((r) => r.rowId === rowId);
// //   const theaterName = row?.theaterName;
// //   if (!theaterName) return;

// //   try {
// //     // ✅ Fetch the theater object to get ID
// //     const theaterResponse = await fetch("http://localhost:5000/api/theaters");
// //     const theaterData = await theaterResponse.json();
// //     const theater = theaterData.find(
// //       (t) => t.cinema.toLowerCase() === theaterName.toLowerCase()
// //     );

// //     if (!theater) {
// //       console.error("Theater not found:", theaterName);
// //       return;
// //     }

// //     // ✅ Send toggle request to backend
// //     await fetch(`http://localhost:5000/api/theaters/${theater._id}/toggle`, {
// //       method: "PUT",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ isEnabled: updatedState }),
// //     });

// //     console.log(`Theater ${theaterName} set to ${updatedState ? "Enabled" : "Disabled"}`);
// //   } catch (err) {
// //     console.error("Error updating toggle:", err);
// //   }
// // };

// const handleToggle = async (rowId) => {
//   const updatedState = !toggleStates[rowId];
//   setToggleStates((prev) => ({
//     ...prev,
//     [rowId]: updatedState,
//   }));

//   const [movieId, theaterIndex] = rowId.split("__");
//   if (!movieId) return;

//   try {
//     await fetch(
//       `http://localhost:5000/api/movies/${movieId}/theaters/${theaterIndex}/toggle`,
//       {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ isEnabled: updatedState }),
//       }
//     );

//     console.log(`Toggled theater index ${theaterIndex} for movie ${movieId}`);
//   } catch (err) {
//     console.error("Error updating toggle:", err);
//   }
// };



//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="managemovie">
//         <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp;&nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <Container className="py-4 moviecontainer">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h3 className="text-danger">Manage Movie List</h3>
//           <div>
//             <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
//             <Button variant="outline-success" size="sm" onClick={() => exportData('excel')} className="me-2">Excel</Button>
//             <Button variant="outline-primary" size="sm" onClick={() => exportData('csv')} className="me-2">CSV</Button>
//             <Button variant="outline-dark" size="sm" onClick={() => exportData('pdf')}>PDF</Button>
//           </div>
//         </div>

//         <Form.Group className="mb-3" controlId="searchInput">
//           <Form.Control
//             type="text"
//             placeholder="Search movie by name..."
//             value={searchTerm}
//             onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
//           />
//         </Form.Group>

//         <div className="d-flex justify-content-end mb-2">
//           <Form.Select
//             style={{ width: '150px' }}
//             value={rowsPerPage}
//             onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
//           >
//             <option value={5}>5 per page</option>
//             <option value={10}>10 per page</option>
//             <option value={20}>20 per page</option>
//           </Form.Select>
//         </div>

//         {loading ? (
//           <div className="text-center"><Spinner animation="border" /></div>
//         ) : (
//           <>
//             <Table striped bordered hover responsive>
//               <thead>
//                 <tr>
//                   <th>
//                     <Form.Check
//                       type="checkbox"
//                       onChange={(e) => {
//                         if (e.target.checked) {
//                           setSelectedRows(currentRows.map(r => r.rowId));
//                         } else {
//                           setSelectedRows([]);
//                         }
//                       }}
//                       checked={
//                         currentRows.length > 0 &&
//                         selectedRows.length === currentRows.length &&
//                         currentRows.every(r => selectedRows.includes(r.rowId))
//                       }
//                     />
//                   </th>
//                   <th>Theater Name</th>
//                   <th>Movie Name</th>
//                   <th>Screens</th>
//                   <th>Class & Price</th>
//                   <th>Actions</th>
//                   <th>Toggle</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentRows.length === 0 ? (
//                   <tr><td colSpan="7" className="text-center">No data found.</td></tr>
//                 ) : currentRows.map(r => {
//                   const movie = movies.find(m => m._id === r.movieId);
//                   return (
//                     <tr key={r.rowId}>
//                       <td>
//                         <Form.Check
//                           type="checkbox"
//                           checked={selectedRows.includes(r.rowId)}
//                           onChange={() => handleRowSelect(r.rowId)}
//                         />
//                       </td>
//                       <td>{r.theaterName}</td>
//                       <td>{movie?.name ?? 'N/A'}</td>
//                       <td>{r.screenNames}</td>
//                       <td>{formatTypes(r.typePrice)}</td>
//                       <td>
//                         <Button
//                           variant="outline-success"
//                           size="sm"
//                           className="me-2"
//                           onClick={() => navigate('/newmovie', { state: { movie, edit: true } })}
//                         >Edit</Button>
//                         <Button
//                           variant="outline-danger"
//                           size="sm"
//                           onClick={() => handleDeleteSelected([r.rowId])}
//                         >Delete</Button>
//                       </td>
//                       <td>
//                         <Form.Check
//                           type="switch"
//                           id={`custom-switch-${r.rowId}`}
//                           checked={toggleStates[r.rowId] || false}
//                           onChange={() => handleToggle(r.rowId)}
//                         />
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </Table>

//             {totalPages > 1 && (
//               <div className="d-flex justify-content-center mt-3">
//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
//                   disabled={currentPage === 1}
//                   className="me-2"
//                 >Previous</Button>
//                 {[...Array(totalPages)].map((_, idx) => (
//                   <Button
//                     key={idx + 1}
//                     variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
//                     size="sm"
//                     onClick={() => setCurrentPage(idx + 1)}
//                     className="me-1"
//                   >{idx + 1}</Button>
//                 ))}
//                 <Button
//                   variant="outline-secondary"
//                   size="sm"
//                   onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
//                   disabled={currentPage === totalPages}
//                 >Next</Button>
//               </div>
//             )}
//           </>
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
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [toggleStates, setToggleStates] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const navigate = useNavigate();
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  // ✅ Fetch movies
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

  // ✅ Extract rows (movie + theater)
  const getRows = () => {
    const rows = [];
    movies.forEach(movie => {
      const { _id: movieId, typePrice = [], theaters = [] } = movie;

      if (theaters.length === 0) {
        rows.push({
          rowId: `${movieId}__noTheater`,
          movieId,
          theaterName: 'N/A',
          screenNames: 'N/A',
          typePrice,
          isEnabled: false,
        });
      } else {
        theaters.forEach((th, ti) => {
          const tName = th.name || 'N/A';
          const screens = th.screens || [];
          const allScreenNames = screens.map(sc => sc.screenName).filter(Boolean);
          const screenNamesString = allScreenNames.length > 0 ? allScreenNames.join(', ') : 'N/A';

          rows.push({
            rowId: `${movieId}__${ti}`,
            movieId,
            theaterName: tName,
            screenNames: screenNamesString,
            typePrice,
            isEnabled: th.isEnabled ?? true,
          });
        });
      }
    });
    return rows;
  };

  // ✅ Format class & price
  const formatTypes = (typePriceArray) => {
    if (!Array.isArray(typePriceArray) || typePriceArray.length === 0) return 'N/A';

    return typePriceArray.map(tp => {
      const types = tp.type || [];
      const prices = tp.price || [];
      return types.map((t, i) => `${t}: ₹${prices[i] ?? '0'}`).join(', ');
    }).join(' | ');
  };

  const rows = getRows();

  // ✅ Initialize toggle states when movies change
  useEffect(() => {
    const initialStates = {};
    movies.forEach(movie => {
      movie.theaters?.forEach((th, i) => {
        initialStates[`${movie._id}__${i}`] = th.isEnabled ?? true;
      });
    });
    setToggleStates(initialStates);
  }, [movies]);

  // ✅ Search filter
  const filteredRows = rows.filter(r =>
    r.movieId && movies.find(m => m._id === r.movieId)?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Pagination
  const indexLast = currentPage * rowsPerPage;
  const indexFirst = indexLast - rowsPerPage;
  const currentRows = filteredRows.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  // ✅ Row select
  const handleRowSelect = (rowId) => {
    setSelectedRows(prev =>
      prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]
    );
  };

  // ✅ Delete selected
  const handleDeleteSelected = async (customRowIds = null) => {
    const rowIdsToDelete = customRowIds || selectedRows;
    if (rowIdsToDelete.length === 0) {
      alert('Please select at least one row to delete.');
      return;
    }
    if (!window.confirm('Are you sure you want to delete these?')) return;

    try {
      const movieIdsToDelete = Array.from(new Set(
        rowIdsToDelete.map(rid => rid.split('__')[0])
      ));
      for (const mid of movieIdsToDelete) {
        await fetch(`http://localhost:5000/api/movies/${mid}`, { method: 'DELETE' });
      }
      setMovies(prev => prev.filter(m => !movieIdsToDelete.includes(m._id)));
      setSelectedRows([]);
    } catch (err) {
      console.error('Error deleting selected movies:', err);
    }
  };

  // ✅ Export data
  const exportData = (type) => {
    if (selectedRows.length === 0) {
      alert('Please select at least one row to export.');
      return;
    }

    const exportRows = rows.filter(r => selectedRows.includes(r.rowId));
    const data = exportRows.map(r => ({
      Theater: r.theaterName,
      Movie: movies.find(m => m._id === r.movieId)?.name || 'N/A',
      Screens: r.screenNames,
      Types: formatTypes(r.typePrice),
    }));

    if (type === 'excel') {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Movies');
      XLSX.writeFile(workbook, 'movies.xlsx');
    } else if (type === 'csv') {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const csv = XLSX.utils.sheet_to_csv(worksheet);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'movies.csv');
    } else if (type === 'pdf') {
      const doc = new jsPDF();
      autoTable(doc, {
        head: [['Theater', 'Movie', 'Screens', 'Types']],
        body: data.map(d => [d.Theater, d.Movie, d.Screens, d.Types]),
      });
      doc.save('movies.pdf');
    }
  };

  // ✅ Toggle per movie-theater only
  const handleToggle = async (rowId) => {
    const updatedState = !toggleStates[rowId];
    setToggleStates((prev) => ({
      ...prev,
      [rowId]: updatedState,
    }));

    const [movieId, theaterIndex] = rowId.split("__");
    if (!movieId || theaterIndex === "noTheater") return;

    try {
      await fetch(`http://localhost:5000/api/movies/${movieId}/theaters/${theaterIndex}/toggle`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isEnabled: updatedState }),
      });

      console.log(`Toggled theater ${theaterIndex} for movie ${movieId}`);
    } catch (err) {
      console.error("Error updating toggle:", err);
    }
  };

  return (
    <>
      <Adminheader />
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      <div className="managemovie">
        <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp;&nbsp;
        <span className="mt-2">{menuName}</span>
      </div>

      <Container className="py-4 moviecontainer">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-danger">Manage Movie List</h3>
          <div>
            <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
            <Button variant="outline-success" size="sm" onClick={() => exportData('excel')} className="me-2">Excel</Button>
            <Button variant="outline-primary" size="sm" onClick={() => exportData('csv')} className="me-2">CSV</Button>
            <Button variant="outline-dark" size="sm" onClick={() => exportData('pdf')}>PDF</Button>
          </div>
        </div>

        <Form.Group className="mb-3" controlId="searchInput">
          <Form.Control
            type="text"
            placeholder="Search movie by name..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          />
        </Form.Group>

        <div className="d-flex justify-content-end mb-2">
          <Form.Select
            style={{ width: '150px' }}
            value={rowsPerPage}
            onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
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
                          setSelectedRows(currentRows.map(r => r.rowId));
                        } else {
                          setSelectedRows([]);
                        }
                      }}
                      checked={
                        currentRows.length > 0 &&
                        selectedRows.length === currentRows.length &&
                        currentRows.every(r => selectedRows.includes(r.rowId))
                      }
                    />
                  </th>
                  <th>Theater Name</th>
                  <th>Movie Name</th>
                  <th>Screens</th>
                  <th>Class & Price</th>
                  <th>Actions</th>
                  <th>Toggle</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.length === 0 ? (
                  <tr><td colSpan="7" className="text-center">No data found.</td></tr>
                ) : currentRows.map(r => {
                  const movie = movies.find(m => m._id === r.movieId);
                  return (
                    <tr key={r.rowId}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          checked={selectedRows.includes(r.rowId)}
                          onChange={() => handleRowSelect(r.rowId)}
                        />
                      </td>
                      <td>{r.theaterName}</td>
                      <td>{movie?.name ?? 'N/A'}</td>
                      <td>{r.screenNames}</td>
                      <td>{formatTypes(r.typePrice)}</td>
                      <td>
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="me-2"
                          onClick={() => navigate('/newmovie', { state: { movie, edit: true } })}
                        >Edit</Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDeleteSelected([r.rowId])}
                        >Delete</Button>
                      </td>
                      <td>
                        <Form.Check
                          type="switch"
                          id={`custom-switch-${r.rowId}`}
                          checked={toggleStates[r.rowId] || false}
                          onChange={() => handleToggle(r.rowId)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-3">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="me-2"
                >Previous</Button>
                {[...Array(totalPages)].map((_, idx) => (
                  <Button
                    key={idx + 1}
                    variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
                    size="sm"
                    onClick={() => setCurrentPage(idx + 1)}
                    className="me-1"
                  >{idx + 1}</Button>
                ))}
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >Next</Button>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
}
