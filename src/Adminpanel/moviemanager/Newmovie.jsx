// with validation

// import React, { useState, useContext } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import '../moviemanager/Newmovie.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';
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
//   const [editIndex, setEditIndex] = useState(null);
//   const { movies, addMovie, updateMovie } = useContext(MovieContext);
//   const navigate = useNavigate();
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

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
//     if (form.cast.length === 1) return;
//     const newCast = form.cast.filter((_, i) => i !== index);
//     setForm(f => ({ ...f, cast: newCast }));
//   };

//   const addCrew = () => {
//     setForm(f => ({ ...f, crew: [...f.crew, { name: '', role: '', imageUrl: '' }] }));
//   };

//   const removeCrew = (index) => {
//     if (form.crew.length === 1) return;
//     const newCrew = form.crew.filter((_, i) => i !== index);
//     setForm(f => ({ ...f, crew: newCrew }));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!form.name.trim()) newErrors.name = 'Movie name is required';
//     if (!form.duration.trim()) newErrors.duration = 'Duration is required';
//     if (!form.language.trim()) newErrors.language = 'Language is required';
//     if (!form.releaseDate.trim()) newErrors.releaseDate = 'Release date is required';

//     form.cast.forEach((member, index) => {
//       if (!member.name.trim()) {
//         newErrors[`cast-name-${index}`] = 'Cast name is required';
//       }
//     });

//     form.crew.forEach((member, index) => {
//       if (!member.name.trim()) {
//         newErrors[`crew-name-${index}`] = 'Crew name is required';
//       }
//       if (!member.role.trim()) {
//         newErrors[`crew-role-${index}`] = 'Role is required';
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const submit = e => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     if (editIndex !== null) {
//       updateMovie(editIndex, form);
//     } else {
//       addMovie(form);
//     }

//     clearForm();
//     navigate('/managemovie');
//   };

//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//     setErrors({});
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

//       <div className="movie">
//         <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <Container
//         className="py-4 bg-light"
//           style={{
//           maxWidth: '948px',
//           margin: '130px auto',
//           fontFamily: 'Arial, sans-serif',
//           position: 'relative',
//           left: '122px',
//           borderRadius: '8px',
//         }}
//       >
//         <h3 className="mb-3 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
//         <Form onSubmit={submit} noValidate>
//           <Row xs={1} md={2} className="g-3">

//             {/* Movie Name */}
//             <Col>
//               <Form.Group controlId="movieName">
//                 <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="name"
//                   type="text"
//                   value={form.name}
//                   onChange={handleChange}
//                   isInvalid={!!errors.name}
//                   placeholder="Movie Name"
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.name}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Col>

//             {/* Genre */}
//             <Col>
//               <Form.Group controlId="movieGenre">
//                 <Form.Label>Genre</Form.Label>
//                 <Form.Control
//                   name="genre"
//                   type="text"
//                   value={form.genre}
//                   onChange={handleChange}
//                   placeholder="Movie Gerner"
//                 />
//               </Form.Group>
//             </Col>

//             {/* Language */}
//             <Col>
//               <Form.Group controlId="movieLanguage">
//                 <Form.Label>Language <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="language"
//                   type="text"
//                   value={form.language}
//                   onChange={handleChange}
//                   placeholder="Movie Language"
//                   isInvalid={!!errors.language}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.language}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Col>

//             {/* Certificate */}
//             <Col>
//               <Form.Group controlId="movieCertificate">
//                 <Form.Label>Certificate</Form.Label>
//                 <Form.Control
//                   name="certificate"
//                   type="text"
//                   value={form.certificate}
//                   onChange={handleChange}
//                   placeholder="Movie Certificate"
//                 />
//               </Form.Group>
//             </Col>

//             {/* Duration */}
//             <Col>
//               <Form.Group controlId="movieDuration">
//                 <Form.Label>Duration <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="duration"
//                   type="text"
//                   value={form.duration}
//                   onChange={handleChange}
//                   isInvalid={!!errors.duration}
//                   placeholder="Movie Duration"
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.duration}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Col>

//             {/* Rating */}
//             <Col>
//               <Form.Group controlId="movieRating">
//                 <Form.Label>Rating (0 to 5)</Form.Label>
//                 <Form.Control
//                   name="rating"
//                   type="number"
//                   min={0}
//                   max={5}
//                   step={0.1}
//                   value={form.rating}
//                   onChange={handleChange}
//                   placeholder="Movie Rating"
//                 />
//               </Form.Group>
//             </Col>

//             {/* Format */}
//             <Col>
//               <Form.Group controlId="movieFormat">
//                 <Form.Label>Format</Form.Label>
//                 <Form.Select
//                   name="format"
//                   value={form.format}
//                   onChange={handleChange}
//                 >
//                   <option>2D</option>
//                   <option>3D</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>

//             {/* Release Date */}
//             <Col>
//               <Form.Group controlId="movieRelease">
//                 <Form.Label>Release Date <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="releaseDate"
//                   type="date"
//                   value={form.releaseDate}
//                   onChange={handleChange}
//                   isInvalid={!!errors.releaseDate}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.releaseDate}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Col>

//             {/* Image URL */}
//             <Col>
//               <Form.Group controlId="movieImage">
//                 <Form.Label>Poster URL</Form.Label>
//                 <Form.Control
//                   name="imageUrl"
//                   type="url"
//                   value={form.imageUrl}
//                   onChange={handleChange}
//                   placeholder="Movie Image URL"
//                 />
//               </Form.Group>
//             </Col>

//             {/* Screen */}
//             <Col>
//               <Form.Group controlId="movieScreen">
//                 <Form.Label>Screen</Form.Label>
//                 <Form.Control
//                   name="screen"
//                   type="text"
//                   value={form.screen}
//                   onChange={handleChange}
//                   placeholder="Movie Screen"
//                 />
//               </Form.Group>
//             </Col>

//             {/* Description */}
//             <Col xs={12}>
//               <Form.Group controlId="movieDesc">
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   name="description"
//                   as="textarea"
//                   rows={3}
//                   value={form.description}
//                   onChange={handleChange}
//                   placeholder="Movie Description"
//                 />
//               </Form.Group>
//             </Col>

//             {/* Cast */}
//             <Col xs={12} className='px-4'>
//               <h5>Cast</h5>
//               {form.cast.map((c, i) => (
//                 <Row key={i} className="align-items-center mb-2">
//                   <Col md={5}>
//                     <Form.Control
//                       name="name"
//                       type="text"
//                       value={c.name}
//                       onChange={e => handleCastChange(i, e)}
//                       placeholder="Cast member name"
//                       isInvalid={!!errors[`cast-name-${i}`]}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors[`cast-name-${i}`]}
//                     </Form.Control.Feedback>
//                   </Col>
//                   <Col md={5}>
//                     <Form.Control
//                       name="imageUrl"
//                       type="url"
//                       value={c.imageUrl}
//                       onChange={e => handleCastChange(i, e)}
//                       placeholder="Image URL"
//                     />
//                   </Col>
//                   <Col md={2}>
//                     <Button variant="danger" size="sm" onClick={() => removeCast(i)} disabled={form.cast.length === 1}>
//                       Remove
//                     </Button>
//                   </Col>
//                 </Row>
//               ))}
//               <Button variant="secondary" size="sm" onClick={addCast}>Add Cast</Button>
//             </Col>

//             {/* Crew */}
//             <Col xs={12} className='px-4'>
//               <h5 className="mt-4">Crew</h5>
//               {form.crew.map((c, i) => (
//                 <Row key={i} className="align-items-center mb-2">
//                   <Col md={4}>
//                     <Form.Control
//                       name="name"
//                       type="text"
//                       value={c.name}
//                       onChange={e => handleCrewChange(i, e)}
//                       placeholder="Crew name"
//                       isInvalid={!!errors[`crew-name-${i}`]}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors[`crew-name-${i}`]}
//                     </Form.Control.Feedback>
//                   </Col>
//                   <Col md={4}>
//                     <Form.Control
//                       name="role"
//                       type="text"
//                       value={c.role}
//                       onChange={e => handleCrewChange(i, e)}
//                       placeholder="Role"
//                       isInvalid={!!errors[`crew-role-${i}`]}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors[`crew-role-${i}`]}
//                     </Form.Control.Feedback>
//                   </Col>
//                   <Col md={3}>
//                     <Form.Control
//                       name="imageUrl"
//                       type="url"
//                       value={c.imageUrl}
//                       onChange={e => handleCrewChange(i, e)}
//                       placeholder="Image URL"
//                     />
//                   </Col>
//                   <Col md={1}>
//                     <Button variant="danger" size="sm" onClick={() => removeCrew(i)} disabled={form.crew.length === 1}>
//                       Remove
//                     </Button>
//                   </Col>
//                 </Row>
//               ))}
//               <Button variant="secondary" size="sm" onClick={addCrew}>Add Crew</Button>
//             </Col>

//             {/* Buttons */}
//             <Col xs={12} className="d-flex gap-2 p-2 createupdatediv">
//               <Button variant="primary" type="submit" className='createupdate'>
//                 {editIndex !== null ? 'Update' : 'Create'}
//               </Button>
//               <Button variant="secondary" onClick={clearForm} className='clear'>
//                 Clear
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Container>
//     </>
//   );
// };

// export default MovieManager;

//proper form validation 

// import React, { useState, useContext } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import '../moviemanager/Newmovie.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';
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
//   const [editIndex, setEditIndex] = useState(null);
//   const { movies, addMovie, updateMovie } = useContext(MovieContext);
//   const navigate = useNavigate();
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

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
//     if (form.cast.length === 1) return;
//     const newCast = form.cast.filter((_, i) => i !== index);
//     setForm(f => ({ ...f, cast: newCast }));
//   };

//   const addCrew = () => {
//     setForm(f => ({ ...f, crew: [...f.crew, { name: '', role: '', imageUrl: '' }] }));
//   };

//   const removeCrew = (index) => {
//     if (form.crew.length === 1) return;
//     const newCrew = form.crew.filter((_, i) => i !== index);
//     setForm(f => ({ ...f, crew: newCrew }));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!form.name.trim()) newErrors.name = 'Movie name is required';
//     if (!form.duration.trim()) newErrors.duration = 'Duration is required';
//     if (!form.language.trim()) newErrors.language = 'Language is required';
//     if (!form.releaseDate.trim()) newErrors.releaseDate = 'Release date is required';

//     form.cast.forEach((member, index) => {
//       if (!member.name.trim()) {
//         newErrors[`cast-name-${index}`] = 'Cast name is required';
//       }
//     });

//     form.crew.forEach((member, index) => {
//       if (!member.name.trim()) {
//         newErrors[`crew-name-${index}`] = 'Crew name is required';
//       }
//       if (!member.role.trim()) {
//         newErrors[`crew-role-${index}`] = 'Role is required';
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const submit = e => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     if (editIndex !== null) {
//       updateMovie(editIndex, form);
//     } else {
//       addMovie(form);
//     }

//     clearForm();
//     navigate('/managemovie');
//   };

//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//     setErrors({});
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

//       <div className="movie">
//         <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <Container
//         className="py-4 px-4 bg-white shadow-sm"
//         style={{
//           maxWidth: '947px',
//           marginTop: '130px',
//           marginLeft: '288px',
//           marginRight: 'auto',
//           marginBottom: '10px',
//           fontFamily: 'Arial, sans-serif',
//           borderRadius: '8px'
//         }}
//       >
//         <h3 className="mb-4 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
//         <Form onSubmit={submit} noValidate>
//           {/* <h5 className="mb-3 text-secondary border-bottom pb-2">General Information</h5> */}
//           <Row className="g-3">

//             {/* Name */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="name"
//                   type="text"
//                   value={form.name}
//                   onChange={handleChange}
//                   isInvalid={!!errors.name}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>

//             {/* Genre */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Genre</Form.Label>
//                 <Form.Control
//                   name="genre"
//                   type="text"
//                   value={form.genre}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>

//             {/* Language */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Language <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="language"
//                   type="text"
//                   value={form.language}
//                   onChange={handleChange}
//                   isInvalid={!!errors.language}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.language}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>

//             {/* Certificate */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Certificate</Form.Label>
//                 <Form.Control
//                   name="certificate"
//                   type="text"
//                   value={form.certificate}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>

//             {/* Duration */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Duration <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="duration"
//                   type="text"
//                   value={form.duration}
//                   onChange={handleChange}
//                   isInvalid={!!errors.duration}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.duration}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>

//             {/* Rating */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Rating (0 to 10)</Form.Label>
//                 <Form.Control
//                   name="rating"
//                   type="number"
//                   min={0}
//                   max={10}
//                   step={0.1}
//                   value={form.rating}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>

//             {/* Format */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Format</Form.Label>
//                 <Form.Select name="format" value={form.format} onChange={handleChange}>
//                   <option>2D</option>
//                   <option>3D</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>

//             {/* Release Date */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Release Date <span className="text-danger">*</span></Form.Label>
//                 <Form.Control
//                   name="releaseDate"
//                   type="date"
//                   value={form.releaseDate}
//                   onChange={handleChange}
//                   isInvalid={!!errors.releaseDate}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.releaseDate}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>

//             {/* Image URL */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Poster URL</Form.Label>
//                 <Form.Control
//                   name="imageUrl"
//                   type="url"
//                   value={form.imageUrl}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>

//             {/* Screen */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Screen</Form.Label>
//                 <Form.Control
//                   name="screen"
//                   type="text"
//                   value={form.screen}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>

//             {/* Description */}
//             <Col xs={12}>
//               <Form.Group>
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   name="description"
//                   as="textarea"
//                   rows={3}
//                   value={form.description}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>

//             {/* Cast Section */}
//             <Col xs={12}>
//               <hr />
//               <h5 className="mb-3 text-secondary">Cast</h5>
//               {form.cast.map((c, i) => (
//                 <Row key={i} className="align-items-center mb-2">
//                   <Col md={5}>
//                     <Form.Control
//                       name="name"
//                       type="text"
//                       value={c.name}
//                       onChange={e => handleCastChange(i, e)}
//                       placeholder="Cast member name"
//                       isInvalid={!!errors[`cast-name-${i}`]}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors[`cast-name-${i}`]}
//                     </Form.Control.Feedback>
//                   </Col>
//                   <Col md={5}>
//                     <Form.Control
//                       name="imageUrl"
//                       type="url"
//                       value={c.imageUrl}
//                       onChange={e => handleCastChange(i, e)}
//                       placeholder="Image URL"
//                     />
//                   </Col>
//                   <Col md={2}>
//                     <Button variant="outline-danger" size="sm" onClick={() => removeCast(i)} disabled={form.cast.length === 1}>Remove</Button>
//                   </Col>
//                 </Row>
//               ))}
//               <Button variant="outline-primary" size="sm" onClick={addCast}>Add Cast</Button>
//             </Col>

//             {/* Crew Section */}
//             <Col xs={12}>
//               <hr />
//               <h5 className="mb-3 text-secondary">Crew</h5>
//               {form.crew.map((c, i) => (
//                 <Row key={i} className="align-items-center mb-2">
//                   <Col md={4}>
//                     <Form.Control
//                       name="name"
//                       type="text"
//                       value={c.name}
//                       onChange={e => handleCrewChange(i, e)}
//                       placeholder="Crew name"
//                       isInvalid={!!errors[`crew-name-${i}`]}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors[`crew-name-${i}`]}
//                     </Form.Control.Feedback>
//                   </Col>
//                   <Col md={4}>
//                     <Form.Control
//                       name="role"
//                       type="text"
//                       value={c.role}
//                       onChange={e => handleCrewChange(i, e)}
//                       placeholder="Role"
//                       isInvalid={!!errors[`crew-role-${i}`]}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors[`crew-role-${i}`]}
//                     </Form.Control.Feedback>
//                   </Col>
//                   <Col md={3}>
//                     <Form.Control
//                       name="imageUrl"
//                       type="url"
//                       value={c.imageUrl}
//                       onChange={e => handleCrewChange(i, e)}
//                       placeholder="Image URL"
//                     />
//                   </Col>
//                   <Col md={1}>
//                     <Button variant="outline-danger" size="sm" onClick={() => removeCrew(i)} disabled={form.crew.length === 1}>Remove</Button>
//                   </Col>
//                 </Row>
//               ))}
//               <Button variant="outline-primary" size="sm" onClick={addCrew}>Add Crew</Button>
//             </Col>

//             {/* Buttons */}
//             <Col xs={12} className="text-end mt-4">
//               <Button variant="transparent" className='clear' onClick={clearForm}>
//                 Clear
//               </Button>
//               <Button type="submit" className="me-2 create" variant="danger">
//                 {editIndex !== null ? 'Update' : 'Create'}
//               </Button>
//             </Col>

//           </Row>
//         </Form>
//       </Container>
//     </>
//   );
// };

// export default MovieManager;

//working code 

import React, { useState, useContext, useEffect } from 'react';
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


  useEffect(() => {
  const stateMovie = location.state?.movie;
  const isEdit = location.state?.edit;

  if (isEdit && stateMovie) {
    setForm(stateMovie);
    setEditIndex(stateMovie._id);  // Use the MongoDB ID to update later
  }
}, [location.state]);


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

  // old submit format

  // const submit = e => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   if (editIndex !== null) {
  //     updateMovie(editIndex, form);
  //   } else {
  //     addMovie(form);
  //   }

  //   clearForm();
  //   navigate('/managemovie');
  // };

//   const submit = async (e) => {
//   e.preventDefault();
//   if (!validateForm()) return;

//   try {
//     const response = await fetch('http://localhost:5000/api/movies', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(form)
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || 'Failed to save movie');
//     }

//     clearForm();
//     navigate('/managemovie');
//   } catch (error) {
//     console.error('Error saving movie:', error.message);
//     alert('Failed to save movie. Check console for details.');
//   }
// };


const submit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  try {
    const url = editIndex
      ? `http://localhost:5000/api/movies/${editIndex}`  // For update
      : 'http://localhost:5000/api/movies';              // For create

    const method = editIndex ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to save movie');
    }

    clearForm();
    navigate('/managemovie');
  } catch (error) {
    console.error('Error saving movie:', error.message);
    alert('Failed to save movie. Check console for details.');
  }
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

      <div className="movie">
        <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
        <span className="mt-2">{menuName}</span>
      </div>

      <Container
        className="py-4 px-4 bg-white shadow-sm"
        style={{
          maxWidth: '947px',
          marginTop: '130px',
          marginLeft: '288px',
          marginRight: 'auto',
          marginBottom: '10px',
          fontFamily: 'Arial, sans-serif',
          borderRadius: '8px'
        }}
      >
        <h3 className="mb-4 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
        <Form onSubmit={submit} noValidate>
          {/* <h5 className="mb-3 text-secondary border-bottom pb-2">General Information</h5> */}
          <Row className="g-3">

            {/* Name */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Genre */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  name="genre"
                  type="text"
                  value={form.genre}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            {/* Language */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Language <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  name="language"
                  type="text"
                  value={form.language}
                  onChange={handleChange}
                  isInvalid={!!errors.language}
                />
                <Form.Control.Feedback type="invalid">{errors.language}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Certificate */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Certificate</Form.Label>
                <Form.Control
                  name="certificate"
                  type="text"
                  value={form.certificate}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            {/* Duration */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Duration <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  name="duration"
                  type="text"
                  value={form.duration}
                  onChange={handleChange}
                  isInvalid={!!errors.duration}
                />
                <Form.Control.Feedback type="invalid">{errors.duration}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Rating */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Rating (0 to 10)</Form.Label>
                <Form.Control
                  name="rating"
                  type="number"
                  min={0}
                  max={10}
                  step={0.1}
                  value={form.rating}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            {/* Format */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Format</Form.Label>
                <Form.Select name="format" value={form.format} onChange={handleChange}>
                  <option>2D</option>
                  <option>3D</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Release Date */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Release Date <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  name="releaseDate"
                  type="date"
                  value={form.releaseDate}
                  onChange={handleChange}
                  isInvalid={!!errors.releaseDate}
                />
                <Form.Control.Feedback type="invalid">{errors.releaseDate}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Image URL */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Poster URL</Form.Label>
                <Form.Control
                  name="imageUrl"
                  type="url"
                  value={form.imageUrl}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            {/* Screen */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Screen</Form.Label>
                <Form.Control
                  name="screen"
                  type="text"
                  value={form.screen}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            {/* Description */}
            <Col xs={12}>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  as="textarea"
                  rows={3}
                  value={form.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            {/* Cast Section */}
            <Col xs={12}>
              <hr />
              <h5 className="mb-3 text-secondary">Cast</h5>
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
                    <Button variant="outline-danger" size="sm" onClick={() => removeCast(i)} disabled={form.cast.length === 1}>Remove</Button>
                  </Col>
                </Row>
              ))}
              <Button variant="outline-primary" size="sm" onClick={addCast}>Add Cast</Button>
            </Col>

            {/* Crew Section */}
            <Col xs={12}>
              <hr />
              <h5 className="mb-3 text-secondary">Crew</h5>
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
                    <Button variant="outline-danger" size="sm" onClick={() => removeCrew(i)} disabled={form.crew.length === 1}>Remove</Button>
                  </Col>
                </Row>
              ))}
              <Button variant="outline-primary" size="sm" onClick={addCrew}>Add Crew</Button>
            </Col>

            {/* Buttons */}
            <Col xs={12} className="text-end mt-4">
              <Button variant="transparent" className='clear' onClick={clearForm}>
                Clear
              </Button>
              <Button type="submit" className="me-2 create" variant="danger">
                {editIndex !== null ? 'Update' : 'Create'}
              </Button>
            </Col>

          </Row>
        </Form>
      </Container>
    </>
  );
};

export default MovieManager;
