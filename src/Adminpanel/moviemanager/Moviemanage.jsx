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


import React, { useState } from 'react';
import {
  Container, Row, Col,
  Form, Button, Card
} from 'react-bootstrap';
import '../moviemanager/Moviemanage.css'; // custom spacing/overflow rules
import Adminsidebar from '../AdminSide/Adminsidebar';

const MovieManager = () => {
  const empty = {
    name: '',
    description: '',
    duration: '',
    format: '2D',
    language: '',
    releaseDate: '',
    imageUrl: ''
  };

  const [form, setForm] = useState(empty);
  const [movies, setMovies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const submit = e => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert('Movie name is required');
      return;
    }
    if (editIndex !== null) {
      setMovies(ms => ms.map((m, idx) => (idx === editIndex ? form : m)));
    } else {
      setMovies(ms => [...ms, form]);
    }
    clearForm();
  };

  const clearForm = () => {
    setForm(empty);
    setEditIndex(null);
  };

  const editMovie = idx => {
    setForm(movies[idx]);
    setEditIndex(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteMovie = idx => {
    if (window.confirm(`Delete "${movies[idx].name}"?`)) {
      setMovies(ms => ms.filter((_, i) => i !== idx));
    }
  };

  const { name, description, duration, format, language, releaseDate, imageUrl } = form;
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
         const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
  return (

    <>
    <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}  />
      </div>

    <Container className="py-4 bg-secondary" style={{ maxWidth: '980px', margin: '5px auto', fontFamily: 'Arial, sans-serif',position: 'relative', left: '145px'}}>
      <h2 className="mb-3">{editIndex !== null ? 'Edit Movie' : 'Add Movie'}</h2>
      <Form onSubmit={submit} noValidate>
        <Row xs={1} md={2} className="g-3">
          <Col>
            <Form.Group controlId="movieName">
              <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter title"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="movieLanguage">
              <Form.Label>Language</Form.Label>
              <Form.Control
                name="language"
                type="text"
                value={language}
                onChange={handleChange}
                placeholder="e.g. English, Tamil"
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="movieDuration">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                name="duration"
                type="text"
                value={duration}
                onChange={handleChange}
                placeholder="e.g. 2h 15m"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="movieFormat">
              <Form.Label>Format</Form.Label>
              <Form.Select
                name="format"
                value={format}
                onChange={handleChange}
              >
                <option>2D</option>
                <option>3D</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="movieRelease">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                name="releaseDate"
                type="date"
                value={releaseDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="movieImage">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                name="imageUrl"
                type="url"
                value={imageUrl}
                onChange={handleChange}
                placeholder="https://..."
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group controlId="movieDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={3}
                value={description}
                onChange={handleChange}
                placeholder="Brief synopsis"
              />
            </Form.Group>
          </Col>

          <Col xs={12} className="d-flex gap-2">
            <Button variant="primary" type="submit">
              {editIndex !== null ? 'Update Movie' : 'Create Movie'}
            </Button>
            <Button variant="secondary" onClick={clearForm}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>

      <hr className="my-4" />

      <h3>Movie List</h3>
      {movies.length === 0 ? (
        <p className="text-muted">No movies added yet.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {movies.map((m, idx) => (
            <Col key={idx}>
              <Card className="movie-card h-100 shadow-sm">
                {m.imageUrl ? (
                  <Card.Img
                    variant="top"
                    src={m.imageUrl}
                    alt={`${m.name} poster`}
                    onError={e => (e.target.style.display = 'none')}
                  />
                ) : null}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>
                    {m.name}{' '}
                    <small className="text-muted">({m.format})</small>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted small">
                    {m.language || 'N/A'} · {m.duration || 'Unknown duration'}
                  </Card.Subtitle>
                  <Card.Text className="mb-3">{m.description}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => editMovie(idx)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => deleteMovie(idx)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
                {m.releaseDate && (
                  <Card.Footer className="text-muted text-end small">
                    Released: {m.releaseDate}
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
};

export default MovieManager;
