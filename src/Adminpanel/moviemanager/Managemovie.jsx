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

import React, { useState, useEffect } from 'react';
import '../moviemanager/Managemovie.css';
import { Card, Button, Row, Col, Container, Spinner, ListGroup } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';

export default function MovieDisplay() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate();

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

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

  // const handleDelete = async (id) => {
  //   if (!window.confirm('Are you sure you want to delete this movie?')) return;

  //   try {
  //     const res = await fetch(`http://localhost:5000/api/movies/${id}`, {
  //       method: 'DELETE'
  //     });

  //     if (res.ok) {
  //       setMovies(movies.filter(movie => movie._id !== id));
  //     } else {
  //       console.error('Failed to delete movie');
  //     }
  //   } catch (err) {
  //     console.error('Error deleting movie:', err);
  //   }
  // };

const handleDelete = async (id) => {
  if (!window.confirm('Are you sure you want to delete this movie?')) return;

  try {
    const res = await fetch(`http://localhost:5000/api/movies/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Failed to delete movie');
    }

    // ✅ Remove the deleted movie from state
    setMovies(prev => prev.filter(movie => movie._id !== id));
  } catch (err) {
    console.error('Error deleting movie:', err);
    alert('Error deleting movie. Please try again.');
  }
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
        <h3 className='text-danger'>Manage Movie List</h3>
        {loading ? (
          <div className="text-center"><Spinner animation="border" /></div>
        ) : movies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {movies.map((m) => (
              <Col key={m._id}>
                <Card className="h-100 shadow-sm">
                  {m.imageUrl && (
                    <Card.Img
                      variant="top"
                      src={m.imageUrl}
                      onError={e => (e.target.style.display = 'none')}
                    />
                  )}
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{m.name} <small className="text-muted">({m.format})</small></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted small">
                      {m.language} • {m.genre} • {m.duration}
                    </Card.Subtitle>
                    <Card.Text><strong>Certificate:</strong> {m.certificate}</Card.Text>
                    <Card.Text><strong>Rating:</strong> {m.rating}/10</Card.Text>
                    <Card.Text><strong>Screen:</strong> {m.screen}</Card.Text>
                    <Card.Text className="mb-3">{m.description}</Card.Text>

                    {/* Cast */}
                    <Card.Text className="mb-2"><strong>Cast:</strong></Card.Text>
                    <ListGroup variant="" className="mb-2">
                      {m.cast?.map((actor, i) => (
                        <ListGroup.Item key={i} className='mb-1'>
                          {actor.imageUrl && (
                            <img src={actor.imageUrl} alt={actor.name} style={{ width: '30px', height: '30px', objectFit: 'cover', marginRight: '10px', borderRadius: '50%' }} />
                          )}
                          {actor.name}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>

                    {/* Crew */}
                    <Card.Text className="mb-2"><strong>Crew:</strong></Card.Text>
                    <ListGroup variant="">
                      {m.crew?.map((member, i) => (
                        <ListGroup.Item key={i} className='mb-1'>
                          {member.imageUrl && (
                            <img src={member.imageUrl} alt={member.name} style={{ width: '30px', height: '30px', objectFit: 'cover', marginRight: '10px', borderRadius: '50%' }} />
                          )}
                          {member.name} - <em>{member.role}</em>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>

                    <div className="mt-2 p-1 d-flex justify-content-end">
                      <Button
                        className='bg-success px-3'
                        size="sm"
                        variant="outline-primary"
                        onClick={() => navigate('/newmovie', { state: { movie: m, edit: true } })}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => handleDelete(m._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>

                  {m.releaseDate && (
                    <Card.Footer className="text-muted small text-end">
                      Released: {new Date(m.releaseDate).toLocaleDateString()}
                    </Card.Footer>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
