// src/components/moviemanager/MovieDisplay.jsx
import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';
import '../moviemanager/Managemovie.css'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';

export default function MovieDisplay() {
  
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const { movies, deleteMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (

    <>
    
    <Adminheader />
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

        <div className=" text ">
            <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
            <span className="mt-2">{menuName} </span>
        </div>

    <Container className="py-4 moviecontainer">
      <h2 className='text-danger'>Manage Movie List</h2>
      {movies.length === 0 ? (
        <p>No movies added.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {movies.map((m, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow-sm">
                {m.imageUrl && <Card.Img variant="top" src={m.imageUrl} onError={e => (e.target.style.display = 'none')} />}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{m.name} <small className="text-muted">({m.format})</small></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted small">
                    {m.language} • {m.genre} • {m.duration}
                  </Card.Subtitle>
                  <Card.Text className="mb-3">{m.description}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between">
                    <Button size="sm" variant="outline-primary" onClick={() => navigate('/newmovie', { state: { editIndex: idx, movie: m } })}>
                      Edit
                    </Button>
                    <Button size="sm" variant="outline-danger" onClick={() => deleteMovie(idx)}>
                      Delete
                    </Button>
                  </div>
                </Card.Body>
                {m.releaseDate && <Card.Footer className="text-muted small text-end">Released: {m.releaseDate}</Card.Footer>}
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
    
    </>

  );
}
