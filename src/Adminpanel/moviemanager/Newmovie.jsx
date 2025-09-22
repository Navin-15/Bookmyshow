

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

// import React, { useState, useContext, useEffect } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import '../moviemanager/Newmovie.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';
// // import { MovieContext } from './MovieContext';

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
//   // const { movies, addMovie, updateMovie } = useContext(MovieContext);
//   const navigate = useNavigate();
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [errors, setErrors] = useState({});


//   useEffect(() => {
//   const stateMovie = location.state?.movie;
//   const isEdit = location.state?.edit;

//   if (isEdit && stateMovie) {
//     setForm(stateMovie);
//     setEditIndex(stateMovie._id);  // Use the MongoDB ID to update later
//   }
// }, [location.state]);


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

//   // old submit format

//   // const submit = e => {
//   //   e.preventDefault();
//   //   if (!validateForm()) return;

//   //   if (editIndex !== null) {
//   //     updateMovie(editIndex, form);
//   //   } else {
//   //     addMovie(form);
//   //   }

//   //   clearForm();
//   //   navigate('/managemovie');
//   // };

// //   const submit = async (e) => {
// //   e.preventDefault();
// //   if (!validateForm()) return;

// //   try {
// //     const response = await fetch('http://localhost:5000/api/movies', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify(form)
// //     });

// //     if (!response.ok) {
// //       const errorData = await response.json();
// //       throw new Error(errorData.error || 'Failed to save movie');
// //     }

// //     clearForm();
// //     navigate('/managemovie');
// //   } catch (error) {
// //     console.error('Error saving movie:', error.message);
// //     alert('Failed to save movie. Check console for details.');
// //   }
// // };


// const submit = async (e) => {
//   e.preventDefault();
//   if (!validateForm()) return;

//   try {
//     const url = editIndex
//       ? `http://localhost:5000/api/movies/${editIndex}`  // For update
//       : 'http://localhost:5000/api/movies';              // For create

//     const method = editIndex ? 'PUT' : 'POST';

//     const response = await fetch(url, {
//       method,
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



// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import '../moviemanager/Newmovie.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MovieManager = () => {
//   const empty = {
//     name: '',
//     description: '',
//     duration: '',
//     format: '2D',
//     language: '',
//     releaseDate: '',
//     imageUrl: '', // Will hold base64 image
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
//   const navigate = useNavigate();
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [posterPreview, setPosterPreview] = useState('');

//   useEffect(() => {
//     const stateMovie = location.state?.movie;
//     const isEdit = location.state?.edit;

//     if (isEdit && stateMovie) {
//       setForm(stateMovie);
//       setEditIndex(stateMovie._id);
//       setPosterPreview(stateMovie.imageUrl); // If base64 or valid URL
//     }
//   }, [location.state]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   const handlePosterChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64 = await toBase64(file);
//       setForm(f => ({ ...f, imageUrl: base64 }));
//       setPosterPreview(base64);
//     }
//   };

//   const toBase64 = file => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = error => reject(error);
//     });
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

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const url = editIndex
//         ? `http://localhost:5000/api/movies/${editIndex}`
//         : 'http://localhost:5000/api/movies';

//       const method = editIndex ? 'PUT' : 'POST';

//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(form)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to save movie');
//       }

//       clearForm();
//       navigate('/managemovie');
//     } catch (error) {
//       console.error('Error saving movie:', error.message);
//       alert('Failed to save movie. Check console for details.');
//     }
//   };

//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//     setErrors({});
//     setPosterPreview('');
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
//           marginBottom: '10px',
//           fontFamily: 'Arial, sans-serif',
//           borderRadius: '8px'
//         }}
//       >
//         <h3 className="mb-4 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
//         <Form onSubmit={submit} noValidate>
//           <Row className="g-3">
//             {/* Movie Name */}
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

//             {/* Upload Poster */}
//             <Col md={12}>
//               <Form.Group>
//                 <Form.Label>Upload Poster Image</Form.Label>
//                 <Form.Control
//                   type="file"
//                   accept="image/*"
//                   onChange={handlePosterChange}
//                 />
//                 {posterPreview && (
//                   <img
//                     src={posterPreview}
//                     alt="Poster Preview"
//                     style={{ marginTop: '10px', width: '100%', maxHeight: '400px', objectFit: 'cover' }}
//                   />
//                 )}
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
//              <Col xs={12}>
//               <hr />
//                <h5 className="mb-3 text-secondary">Cast</h5>
//                {form.cast.map((c, i) => (
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


//  mistake correcting code 


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Select from 'react-select';
// import '../moviemanager/Newmovie.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MovieManager = () => {
//   const empty = {
//     name: '',
//     description: '',
//     duration: '',
//     format: '2D',
//     language: '',
//     releaseDate: '',
//     imageUrl: '', // Will hold base64 image
//     rating: '',
//     genre: '',
//     certificate: '',
//     cast: [{ name: '', imageUrl: '' }],
//     crew: [{ name: '', role: '', imageUrl: '' }]
//   };

//   const location = useLocation();

//   const [cinema, setCinema] = useState('');
//   const [screen, setScreen] = useState('');
//   const [showTime, setShowTime] = useState([]);
//   const menuName = location.state?.menu || "No data received";
//   const [form, setForm] = useState(empty);
//   const [editIndex, setEditIndex] = useState(null);
//   const navigate = useNavigate();
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [posterPreview, setPosterPreview] = useState('');

//   const showTimeOptions = [
//   { value: "09:00 AM", label: "09:00 AM" },
//   { value: "12:30 PM", label: "12:30 PM" },
//   { value: "04:00 PM", label: "04:00 PM" },
//   { value: "07:30 PM", label: "07:30 PM" },
//   { value: "11:00 PM", label: "11:00 PM" },
// ];

// const isEdit = location.state?.isEdit || false;
//   const editEntry = location.state?.entry || null;

//   useEffect(() => {
//     const stateMovie = location.state?.movie;
//     const isEdit = location.state?.edit;

//     if (isEdit && stateMovie) {
//       setForm(stateMovie);
//       setEditIndex(stateMovie._id);
//       setPosterPreview(stateMovie.imageUrl); // If base64 or valid URL
//     }
//   }, [location.state]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   const handlePosterChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64 = await toBase64(file);
//       setForm(f => ({ ...f, imageUrl: base64 }));
//       setPosterPreview(base64);
//     }
//   };

//   const toBase64 = file => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = error => reject(error);
//     });
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
//     if (!cinema.trim()) newErrors.cinema = "Theater name is required";
//     if (!screen.trim()) newErrors.screen = "Screen is required";
//     if (!showTime || showTime.length === 0) newErrors.showTime = "Select at least one show time";

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

// const submit = async (e) => {
//   e.preventDefault();
//   if (!validateForm()) return;

//   try {
//     // Prepare the theater object
//     const theaterData = {
//       name: cinema,
//       screen: screen,
//       showTimes: showTime.map(st => st.value) // convert Select options to array of strings
//     };

//     // Merge into form
//     const payload = {
//       ...form,
//       theater: theaterData
//     };

//     const url = editIndex
//       ? `http://localhost:5000/api/movies/${editIndex}`
//       : 'http://localhost:5000/api/movies';

//     const method = editIndex ? 'PUT' : 'POST';

//     const response = await fetch(url, {
//       method,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(payload)
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


//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//     setErrors({});
//     setPosterPreview('');
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
//           marginBottom: '10px',
//           fontFamily: 'Arial, sans-serif',
//           borderRadius: '8px'
//         }}
//       >
//         <h3 className="mb-4 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
//         <Form onSubmit={submit} noValidate>
//           <Row className="g-3">
//             {/* Movie Name */}
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

//             {/* Upload Poster */}
//             <Col md={12}>
//               <Form.Group>
//                 <Form.Label>Upload Poster Image</Form.Label>
//                 <Form.Control
//                   type="file"
//                   accept="image/*"
//                   onChange={handlePosterChange}
//                 />
//                 {posterPreview && (
//                   <img
//                     src={posterPreview}
//                     alt="Poster Preview"
//                     style={{ marginTop: '10px', width: '100%', maxHeight: '400px', objectFit: 'cover' }}
//                   />
//                 )}
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
//              <Col xs={12}>
//               <hr />
//                <h5 className="mb-3 text-secondary">Cast</h5>
//                {form.cast.map((c, i) => (
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

//             {/* theater field */}

//           <form className='for'>
//           <div className="mb-3">
//             <label>Theater Name</label>
//             <input
//               type="text"
//               value={cinema}
//               onChange={(e) => setCinema(e.target.value)}
//               className={`form-control ${errors.cinema ? 'is-invalid' : ''}`}
//               placeholder="Enter Theater Name"
//             />
//             {errors.cinema && <div className="invalid-feedback">{errors.cinema}</div>}
//           </div>

          
//           <div className="mb-3">
//             <label>Screen Name</label>
//             <select
//               value={screen}
//               onChange={(e) => setScreen(e.target.value)}
//               className={`form-control select-with-icon ${errors.screen ? 'is-invalid' : ''}`}
//             >
//               <option value="">Select Screen</option>
//               <option value="Screen A">Screen A</option>
//               <option value="Screen B">Screen B</option>
//               <option value="Screen C">Screen C</option>
//               <option value="Screen D">Screen D</option>
//               <option value="Screen E">Screen E</option>
//             </select>
//             {errors.screen && <div className="invalid-feedback">{errors.screen}</div>}
//           </div>

   
//          <div className="mb-3">
//             <label>Show Timings</label>
//             <Select
//             isMulti
//             name="showTimes"
//             options={showTimeOptions}
//             value={showTime}
//             onChange={(selectedOptions) => setShowTime(selectedOptions)}
//             classNamePrefix="react-select"
//             />
//           {errors.showTime && <div className="text-danger mt-1">{errors.showTime}</div>}
//         </div>
//         </form>

//             {/* theater field */}

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


//expected code theater card

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Select from 'react-select';
// import '../moviemanager/Newmovie.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MovieManager = () => {
//   const empty = {
//     name: '',
//     description: '',
//     duration: '',
//     format: '2D',
//     language: '',
//     releaseDate: '',
//     imageUrl: '',
//     rating: '',
//     genre: '',
//     certificate: '',
//     cast: [{ name: '', imageUrl: '' }],
//     crew: [{ name: '', role: '', imageUrl: '' }],
//     theaters: [
//       {
//         name: '',
//         screens: [
//           { screenName: '', showTimes: [] }
//         ]
//       }
//     ]
//   };

//   const showTimeOptions = [
//     { value: "09:00 AM", label: "09:00 AM" },
//     { value: "12:30 PM", label: "12:30 PM" },
//     { value: "04:00 PM", label: "04:00 PM" },
//     { value: "07:30 PM", label: "07:30 PM" },
//     { value: "11:00 PM", label: "11:00 PM" },
//   ];

//   const location = useLocation();
//   const [form, setForm] = useState(empty);
//   const [editIndex, setEditIndex] = useState(null);
//   const [posterPreview, setPosterPreview] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const menuName = location.state?.menu || "No data received";

//   const isEdit = location.state?.isEdit || false;

//   useEffect(() => {
//     const stateMovie = location.state?.movie;
//     const isEdit = location.state?.edit;

//     if (isEdit && stateMovie) {
//       setForm(stateMovie);
//       setEditIndex(stateMovie._id);
//       setPosterPreview(stateMovie.imageUrl);
//     }
//   }, [location.state]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   const handlePosterChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64 = await toBase64(file);
//       setForm(f => ({ ...f, imageUrl: base64 }));
//       setPosterPreview(base64);
//     }
//   };

//   const toBase64 = file => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = error => reject(error);
//     });
//   };

//   // -------------------- THEATER HANDLERS --------------------

//   const handleTheaterChange = (tIndex, field, value) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex][field] = value;
//     setForm(f => ({ ...f, theaters }));
//   };

//   const handleScreenChange = (tIndex, sIndex, field, value) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens[sIndex][field] = value;
//     setForm(f => ({ ...f, theaters }));
//   };

//   const handleShowTimeChange = (tIndex, sIndex, selected) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens[sIndex].showTimes = selected;
//     setForm(f => ({ ...f, theaters }));
//   };

//   const addTheater = () => {
//     setForm(f => ({
//       ...f,
//       theaters: [...f.theaters, { name: '', screens: [{ screenName: '', showTimes: [] }] }]
//     }));
//   };

//   const removeTheater = (tIndex) => {
//     const theaters = form.theaters.filter((_, i) => i !== tIndex);
//     setForm(f => ({ ...f, theaters }));
//   };

//   const addScreen = (tIndex) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens.push({ screenName: '', showTimes: [] });
//     setForm(f => ({ ...f, theaters }));
//   };

//   const removeScreen = (tIndex, sIndex) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens = theaters[tIndex].screens.filter((_, i) => i !== sIndex);
//     setForm(f => ({ ...f, theaters }));
//   };

//   // -------------------- VALIDATION --------------------

//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.name.trim()) newErrors.name = 'Movie name is required';
//     if (!form.duration.trim()) newErrors.duration = 'Duration is required';
//     if (!form.language.trim()) newErrors.language = 'Language is required';
//     if (!form.releaseDate.trim()) newErrors.releaseDate = 'Release date is required';

//     form.theaters.forEach((theater, tIndex) => {
//       if (!theater.name.trim()) {
//         newErrors[`theater-${tIndex}`] = "Theater name is required";
//       }
//       theater.screens.forEach((screen, sIndex) => {
//         if (!screen.screenName.trim()) {
//           newErrors[`screen-${tIndex}-${sIndex}`] = "Screen name is required";
//         }
//         if (!screen.showTimes || screen.showTimes.length === 0) {
//           newErrors[`showtime-${tIndex}-${sIndex}`] = "At least one show time required";
//         }
//       });
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       // Prepare payload
//       const payload = {
//         ...form,
//         theaters: form.theaters.map(t => ({
//           ...t,
//           screens: t.screens.map(s => ({
//             ...s,
//             showTimes: s.showTimes.map(st => st.value)
//           }))
//         }))
//       };

//       const url = editIndex
//         ? `http://localhost:5000/api/movies/${editIndex}`
//         : 'http://localhost:5000/api/movies';

//       const method = editIndex ? 'PUT' : 'POST';

//       const response = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to save movie');
//       }

//       clearForm();
//       navigate('/managemovie');
//     } catch (error) {
//       console.error('Error saving movie:', error.message);
//       alert('Failed to save movie. Check console for details.');
//     }
//   };

//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//     setErrors({});
//     setPosterPreview('');
//   };

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   // -------------------- UI --------------------

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
//           marginBottom: '10px',
//           fontFamily: 'Arial, sans-serif',
//           borderRadius: '8px'
//         }}
//       >
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h3 className="mb-0 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
//           <Button variant="outline-primary" size="sm" onClick={addTheater}>+ Add New Theater</Button>
//         </div>

//         <Form onSubmit={submit} noValidate>
//           <Row className="g-3">
//             {/* Movie Fields */}
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Movie Name *</Form.Label>
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
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Genre</Form.Label>
//                 <Form.Control name="genre" value={form.genre} onChange={handleChange} />
//               </Form.Group>
//             </Col>
//             {/* ... other movie fields (language, duration, etc) ... */}

//             {/* Poster Upload */}
//             <Col md={12}>
//               <Form.Group>
//                 <Form.Label>Upload Poster Image</Form.Label>
//                 <Form.Control type="file" accept="image/*" onChange={handlePosterChange} />
//                 {posterPreview && (
//                   <img src={posterPreview} alt="Poster Preview" style={{ marginTop: '10px', width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
//                 )}
//               </Form.Group>
//             </Col> 

//             {/* ----------- THEATERS ----------- */}
//             {form.theaters.map((theater, tIndex) => (
//               <Col xs={12} key={tIndex} className="border p-3 mt-4">
//                 <div className="d-flex justify-content-between align-items-center mb-2">
//                   <h5>Theater {tIndex + 1}</h5>
//                   {form.theaters.length > 1 && (
//                     <Button variant="outline-danger" size="sm" onClick={() => removeTheater(tIndex)}>Remove Theater</Button>
//                   )}
//                 </div>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Theater Name</Form.Label>
//                   <Form.Control
//                     value={theater.name}
//                     onChange={(e) => handleTheaterChange(tIndex, 'name', e.target.value)}
//                     isInvalid={!!errors[`theater-${tIndex}`]}
//                   />
//                   <Form.Control.Feedback type="invalid">{errors[`theater-${tIndex}`]}</Form.Control.Feedback>
//                 </Form.Group>

//                 {theater.screens.map((screen, sIndex) => (
//                   <Row key={sIndex} className="align-items-end mb-3">
//                     <Col md={4}>
//                       <Form.Group>
//                         <Form.Label>Screen Name</Form.Label>
//                         <Form.Control
//                           value={screen.screenName}
//                           onChange={(e) => handleScreenChange(tIndex, sIndex, 'screenName', e.target.value)}
//                           isInvalid={!!errors[`screen-${tIndex}-${sIndex}`]}
//                         />
//                         <Form.Control.Feedback type="invalid">{errors[`screen-${tIndex}-${sIndex}`]}</Form.Control.Feedback>
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group>
//                         <Form.Label>Show Timings</Form.Label>
//                         <Select
//                           isMulti
//                           options={showTimeOptions}
//                           value={screen.showTimes}
//                           onChange={(selected) => handleShowTimeChange(tIndex, sIndex, selected)}
//                         />
//                         {errors[`showtime-${tIndex}-${sIndex}`] && <div className="text-danger">{errors[`showtime-${tIndex}-${sIndex}`]}</div>}
//                       </Form.Group>
//                     </Col>
//                     <Col md={2} className="d-flex">
//                       <Button variant="outline-primary" size="sm" className="me-2" onClick={() => addScreen(tIndex)}>+ Add</Button>
//                       {theater.screens.length > 1 && (
//                         <Button variant="outline-danger" size="sm" onClick={() => removeScreen(tIndex, sIndex)}>Remove</Button>
//                       )}
//                     </Col>
//                   </Row>
//                 ))}
//               </Col>
//             ))}

//             {/* Buttons */}
//             <Col xs={12} className="text-end mt-4">
//               <Button variant="transparent" className='clear' onClick={clearForm}>Clear</Button>
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

// theater section and poster upload section

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Select from 'react-select';
// import '../moviemanager/Newmovie.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MovieManager = () => {
//   const empty = {
//     description: '',
//     duration: '',
//     format: '2D',
//     language: '',
//     releaseDate: '',
//     imageUrl: '',
//     rating: '',
//     certificate: '',
//     cast: [{ name: '', imageUrl: '' }],
//     crew: [{ name: '', role: '', imageUrl: '' }],
//     theaters: [
//       {
//         name: '',
//         screens: [
//           { screenName: '', showTimes: [] }
//         ]
//       }
//     ]
//   };

//   const showTimeOptions = [
//     { value: "09:00 AM", label: "09:00 AM" },
//     { value: "12:30 PM", label: "12:30 PM" },
//     { value: "04:00 PM", label: "04:00 PM" },
//     { value: "07:30 PM", label: "07:30 PM" },
//     { value: "11:00 PM", label: "11:00 PM" },
//   ];

//   const location = useLocation();
//   const [form, setForm] = useState(empty);
//   const [editIndex, setEditIndex] = useState(null);
//   const [posterPreview, setPosterPreview] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const menuName = location.state?.menu || "No data received";

//   const isEdit = location.state?.isEdit || false;

//   useEffect(() => {
//     const stateMovie = location.state?.movie;
//     const isEdit = location.state?.edit;

//     if (isEdit && stateMovie) {
//       setForm(stateMovie);
//       setEditIndex(stateMovie._id);
//       setPosterPreview(stateMovie.imageUrl);
//     }
//   }, [location.state]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   const handlePosterChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64 = await toBase64(file);
//       setForm(f => ({ ...f, imageUrl: base64 }));
//       setPosterPreview(base64);
//     }
//   };

//   const toBase64 = file => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = error => reject(error);
//     });
//   };

//   // -------------------- THEATER HANDLERS --------------------

//   const handleTheaterChange = (tIndex, field, value) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex][field] = value;
//     setForm(f => ({ ...f, theaters }));
//   };

//   const handleScreenChange = (tIndex, sIndex, field, value) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens[sIndex][field] = value;
//     setForm(f => ({ ...f, theaters }));
//   };

//   const handleShowTimeChange = (tIndex, sIndex, selected) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens[sIndex].showTimes = selected;
//     setForm(f => ({ ...f, theaters }));
//   };

//   const addTheater = () => {
//     setForm(f => ({
//       ...f,
//       theaters: [...f.theaters, { name: '', screens: [{ screenName: '', showTimes: [] }] }]
//     }));
//   };

//   const removeTheater = (tIndex) => {
//     const theaters = form.theaters.filter((_, i) => i !== tIndex);
//     setForm(f => ({ ...f, theaters }));
//   };

//   const addScreen = (tIndex) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens.push({ screenName: '', showTimes: [] });
//     setForm(f => ({ ...f, theaters }));
//   };

//   const removeScreen = (tIndex, sIndex) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens = theaters[tIndex].screens.filter((_, i) => i !== sIndex);
//     setForm(f => ({ ...f, theaters }));
//   };

//   // -------------------- VALIDATION --------------------

//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.duration.trim()) newErrors.duration = 'Duration is required';
//     if (!form.language.trim()) newErrors.language = 'Language is required';
//     if (!form.releaseDate.trim()) newErrors.releaseDate = 'Release date is required';

//     form.theaters.forEach((theater, tIndex) => {
//       if (!theater.name.trim()) {
//         newErrors[`theater-${tIndex}`] = "Theater name is required";
//       }
//       theater.screens.forEach((screen, sIndex) => {
//         if (!screen.screenName.trim()) {
//           newErrors[`screen-${tIndex}-${sIndex}`] = "Screen name is required";
//         }
//         if (!screen.showTimes || screen.showTimes.length === 0) {
//           newErrors[`showtime-${tIndex}-${sIndex}`] = "At least one show time required";
//         }
//       });
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       // Prepare payload
//       const payload = {
//         ...form,
//         theaters: form.theaters.map(t => ({
//           ...t,
//           screens: t.screens.map(s => ({
//             ...s,
//             showTimes: s.showTimes.map(st => st.value)
//           }))
//         }))
//       };

//       const url = editIndex
//         ? `http://localhost:5000/api/movies/${editIndex}`
//         : 'http://localhost:5000/api/movies';

//       const method = editIndex ? 'PUT' : 'POST';

//       const response = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to save movie');
//       }

//       clearForm();
//       navigate('/managemovie');
//     } catch (error) {
//       console.error('Error saving movie:', error.message);
//       alert('Failed to save movie. Check console for details.');
//     }
//   };

//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//     setErrors({});
//     setPosterPreview('');
//   };

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   // -------------------- UI --------------------

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
//           marginBottom: '10px',
//           fontFamily: 'Arial, sans-serif',
//           borderRadius: '8px'
//         }}
//       >
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h3 className="mb-0 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
//           <Button variant="outline-primary" size="sm" onClick={addTheater}>+ Add New Theater</Button>
//         </div>

//         <Form onSubmit={submit} noValidate>
//           <Row className="g-3">
//             {/* Poster Upload */}
//             <Col md={12}>
//               <Form.Group>
//                 <Form.Label>Upload Poster Image</Form.Label>
//                 <Form.Control type="file" accept="image/*" onChange={handlePosterChange} />
//                 {posterPreview && (
//                   <img src={posterPreview} alt="Poster Preview" style={{ marginTop: '10px', width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
//                 )}
//               </Form.Group>
//             </Col> 

//             {/* ----------- THEATERS ----------- */}
//             {form.theaters.map((theater, tIndex) => (
//               <Col xs={12} key={tIndex} className="border p-3 mt-4">
//                 <div className="d-flex justify-content-between align-items-center mb-2">
//                   <h5>Theater {tIndex + 1}</h5>
//                   {form.theaters.length > 1 && (
//                     <Button variant="outline-danger" size="sm" onClick={() => removeTheater(tIndex)}>Remove Theater</Button>
//                   )}
//                 </div>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Theater Name</Form.Label>
//                   <Form.Control
//                     value={theater.name}
//                     onChange={(e) => handleTheaterChange(tIndex, 'name', e.target.value)}
//                     isInvalid={!!errors[`theater-${tIndex}`]}
//                   />
//                   <Form.Control.Feedback type="invalid">{errors[`theater-${tIndex}`]}</Form.Control.Feedback>
//                 </Form.Group>

//                 {theater.screens.map((screen, sIndex) => (
//                   <Row key={sIndex} className="align-items-end mb-3">
//                     <Col md={4}>
//                       <Form.Group>
//                         <Form.Label>Screen Name</Form.Label>
//                         <Form.Control
//                           value={screen.screenName}
//                           onChange={(e) => handleScreenChange(tIndex, sIndex, 'screenName', e.target.value)}
//                           isInvalid={!!errors[`screen-${tIndex}-${sIndex}`]}
//                         />
//                         <Form.Control.Feedback type="invalid">{errors[`screen-${tIndex}-${sIndex}`]}</Form.Control.Feedback>
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group>
//                         <Form.Label>Show Timings</Form.Label>
//                         <Select
//                           isMulti
//                           options={showTimeOptions}
//                           value={screen.showTimes}
//                           onChange={(selected) => handleShowTimeChange(tIndex, sIndex, selected)}
//                         />
//                         {errors[`showtime-${tIndex}-${sIndex}`] && <div className="text-danger">{errors[`showtime-${tIndex}-${sIndex}`]}</div>}
//                       </Form.Group>
//                     </Col>
//                     <Col md={2} className="d-flex">
//                       <Button variant="outline-primary" size="sm" className="me-2" onClick={() => addScreen(tIndex)}>+ Add</Button>
//                       {theater.screens.length > 1 && (
//                         <Button variant="outline-danger" size="sm" onClick={() => removeScreen(tIndex, sIndex)}>Remove</Button>
//                       )}
//                     </Col>
//                   </Row>
//                 ))}
//               </Col>
//             ))}

//             {/* Buttons */}
//             <Col xs={12} className="text-end mt-4">
//               <Button variant="transparent" className='clear' onClick={clearForm}>Clear</Button>
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

//expected code

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Select from 'react-select';
// import '../moviemanager/Newmovie.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MovieManager = () => {
//   const empty = {
//     name: '',
//     description: '',
//     duration: '',
//     format: '2D',
//     language: '',
//     releaseDate: '',
//     imageUrl: '',
//     rating: '',
//     genre: '',
//     certificate: '',
//     cast: [{ name: '', imageUrl: '' }],
//     crew: [{ name: '', role: '', imageUrl: '' }],
//     theaters: [{ name: '', screens: [{ screenName: '', showTimes: [] }] }]
//   };

//   const showTimeOptions = [
//     { value: "09:00 AM", label: "09:00 AM" },
//     { value: "12:30 PM", label: "12:30 PM" },
//     { value: "04:00 PM", label: "04:00 PM" },
//     { value: "07:30 PM", label: "07:30 PM" },
//     { value: "11:00 PM", label: "11:00 PM" },
//   ];

//   const location = useLocation();
//   const [form, setForm] = useState(empty);
//   const [editIndex, setEditIndex] = useState(null);
//   const [posterPreview, setPosterPreview] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const menuName = location.state?.menu || "No data received";

//   useEffect(() => {
//     const stateMovie = location.state?.movie;
//     const isEdit = location.state?.edit;

//     if (isEdit && stateMovie) {
//       setForm(stateMovie);
//       setEditIndex(stateMovie._id);
//       setPosterPreview(stateMovie.imageUrl);
//     }
//   }, [location.state]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   };

//   // Movie Details Handlers
//   const handlePosterChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64 = await toBase64(file);
//       setForm(f => ({ ...f, imageUrl: base64 }));
//       setPosterPreview(base64);
//     }
//   };

//   const toBase64 = file => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = error => reject(error);
//     });
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

//   // Theater and Screen Handlers
//   const handleTheaterChange = (tIndex, field, value) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex][field] = value;
//     setForm(f => ({ ...f, theaters }));
//   };

//   const handleScreenChange = (tIndex, sIndex, field, value) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens[sIndex][field] = value;
//     setForm(f => ({ ...f, theaters }));
//   };

//   const handleShowTimeChange = (tIndex, sIndex, selected) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens[sIndex].showTimes = selected;
//     setForm(f => ({ ...f, theaters }));
//   };

//   const addTheater = () => {
//     setForm(f => ({
//       ...f,
//       theaters: [...f.theaters, { name: '', screens: [{ screenName: '', showTimes: [] }] }]
//     }));
//   };

//   const removeTheater = (tIndex) => {
//     const theaters = form.theaters.filter((_, i) => i !== tIndex);
//     setForm(f => ({ ...f, theaters }));
//   };

//   const addScreen = (tIndex) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens.push({ screenName: '', showTimes: [] });
//     setForm(f => ({ ...f, theaters }));
//   };

//   const removeScreen = (tIndex, sIndex) => {
//     const theaters = [...form.theaters];
//     theaters[tIndex].screens = theaters[tIndex].screens.filter((_, i) => i !== sIndex);
//     setForm(f => ({ ...f, theaters }));
//   };

//   // Form Validation
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

//     form.theaters.forEach((theater, tIndex) => {
//       if (!theater.name.trim()) {
//         newErrors[`theater-${tIndex}`] = "Theater name is required";
//       }
//       theater.screens.forEach((screen, sIndex) => {
//         if (!screen.screenName.trim()) {
//           newErrors[`screen-${tIndex}-${sIndex}`] = "Screen name is required";
//         }
//         if (!screen.showTimes || screen.showTimes.length === 0) {
//           newErrors[`showtime-${tIndex}-${sIndex}`] = "At least one show time required";
//         }
//       });
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//         // Transform showTimes into plain strings before sending
//       const payload = {
//         ...form,
//         theaters: form.theaters.map(t => ({
//           ...t,
//           screens: t.screens.map(s => ({
//             ...s,
//             showTimes: s.showTimes.map(st => st.value)  // store only times
//           }))
//         }))
//       };

//       const url = editIndex
//         ? `http://localhost:5000/api/movies/${editIndex}`
//         : 'http://localhost:5000/api/movies';

//       const method = editIndex ? 'PUT' : 'POST';

//       const response = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to save movie');
//       }

//       clearForm();
//       navigate('/managemovie');
//     } catch (error) {
//       console.error('Error saving movie:', error.message);
//       alert('Failed to save movie. Check console for details.');
//     }
//   };

//   const clearForm = () => {
//     setForm(empty);
//     setEditIndex(null);
//     setErrors({});
//     setPosterPreview('');
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
//           marginBottom: '10px',
//           fontFamily: 'Arial, sans-serif',
//           borderRadius: '8px'
//         }}
//       >
//         <h3 className="mb-4 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
//         <Form onSubmit={submit} noValidate>
//           <Row className="g-3">
//             {/* Movie Name */}
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

//             {/* Upload Poster */}
//             <Col md={12}>
//               <hr />
//               <Form.Group>
//                 <Form.Label>Upload Poster Image</Form.Label>
//                 <Form.Control
//                   type="file"
//                   accept="image/*"
//                   onChange={handlePosterChange}
//                 />
//                 {posterPreview && (
//                   <img
//                     src={posterPreview}
//                     alt="Poster Preview"
//                     style={{ marginTop: '10px', width: '100%', maxHeight: '400px', objectFit: 'cover' }}
//                   />
//                 )}
//               </Form.Group>
//             </Col>

//             {/* ----------- THEATERS ----------- */}
//             <Col xs={12}>
//                 <hr />
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h5 className="mb-0 text-secondary">Theaters and Showtimes</h5>
//                   <Button variant="outline-primary" size="sm" onClick={addTheater}>+ Add New Theater</Button>
//                 </div>
//             </Col>
            
//             {form.theaters.map((theater, tIndex) => (
//               <Col xs={12} key={tIndex} className="border p-3 mb-4">
//                 <div className="d-flex justify-content-between align-items-center mb-2">
//                   <h6>Theater {tIndex + 1}</h6>
//                   {form.theaters.length > 1 && (
//                     <Button variant="outline-danger" size="sm" onClick={() => removeTheater(tIndex)}>Remove Theater</Button>
//                   )}
//                 </div>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Theater Name</Form.Label>
//                   <Form.Control
//                     value={theater.name}
//                     onChange={(e) => handleTheaterChange(tIndex, 'name', e.target.value)}
//                     isInvalid={!!errors[`theater-${tIndex}`]}
//                   />
//                   <Form.Control.Feedback type="invalid">{errors[`theater-${tIndex}`]}</Form.Control.Feedback>
//                 </Form.Group>

//                 {theater.screens.map((screen, sIndex) => (
//                   <Row key={sIndex} className="align-items-end mb-3">
//                     <Col md={4}>
//                       <Form.Group>
//                         <Form.Label>Screen Name</Form.Label>
//                         <Form.Control
//                           value={screen.screenName}
//                           onChange={(e) => handleScreenChange(tIndex, sIndex, 'screenName', e.target.value)}
//                           isInvalid={!!errors[`screen-${tIndex}-${sIndex}`]}
//                         />
//                         <Form.Control.Feedback type="invalid">{errors[`screen-${tIndex}-${sIndex}`]}</Form.Control.Feedback>
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group>
//                         <Form.Label>Show Timings</Form.Label>
//                         <Select
//                           isMulti
//                           options={showTimeOptions}
//                           value={screen.showTimes}
//                           onChange={(selected) => handleShowTimeChange(tIndex, sIndex, selected)}
//                         />
//                         {errors[`showtime-${tIndex}-${sIndex}`] && <div className="text-danger">{errors[`showtime-${tIndex}-${sIndex}`]}</div>}
//                       </Form.Group>
//                     </Col>
//                     <Col md={2} className="d-flex">
//                       <Button variant="outline-primary" size="sm" className="me-2" onClick={() => addScreen(tIndex)}>+ Add</Button>
//                       {theater.screens.length > 1 && (
//                         <Button variant="outline-danger" size="sm" onClick={() => removeScreen(tIndex, sIndex)}>Remove</Button>
//                       )}
//                     </Col>
//                   </Row>
//                 ))}
//               </Col>
//             ))}

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

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import '../moviemanager/Newmovie.css';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import { useNavigate, useLocation } from 'react-router-dom';

const MovieManager = () => {
  // Option lists for the new select fields
  const genreOptions = [
    { value: "Action", label: "Action" },
    { value: "Thriller", label: "Thriller" },
    { value: "Drama", label: "Drama" },
    { value: "Comedy", label: "Comedy" },
    { value: "Horror", label: "Horror" },
    { value: "Love", label: "Love" },
  ];

  const languageOptions = [
    { value: "Tamil", label: "Tamil" },
    { value: "English", label: "English" },
    { value: "Telugu", label: "Telugu" },
    { value: "Kannada", label: "Kannada" },
    { value: "Malayalam", label: "Malayalam" },
    { value: "Hindi", label: "Hindi" },
  ];

  const certificateOptions = [
    { value: "UA", label: "UA" },
    { value: "UA16+", label: "UA16+" },
    { value: "A", label: "A" },
  ];

  const screenOptions = [
    { value: "Screen-1", label: "Screen-1" },
    { value: "Screen-2", label: "Screen-2" },
    { value: "Screen-3", label: "Screen-3" },
    { value: "Screen-4", label: "Screen-4" },
    { value: "Screen-5", label: "Screen-5" },
  ];

  const showTimeOptions = [
    { value: "09:00 AM", label: "09:00 AM" },
    { value: "12:30 PM", label: "12:30 PM" },
    { value: "04:00 PM", label: "04:00 PM" },
    { value: "07:30 PM", label: "07:30 PM" },
    { value: "11:00 PM", label: "11:00 PM" },
  ];

  const empty = {
    name: '',
    description: '',
    duration: '',
    format: '2D',
    language: [],
    releaseDate: '',
    imageUrl: '',
    rating: '',
    genre: [],
    certificate: '',
    cast: [{ name: '', imageUrl: '' }],
    crew: [{ name: '', role: '', imageUrl: '' }],
    theaters: [{ name: '', screens: [{ screenName: [], showTimes: [] }] }]
  };

  const location = useLocation();
  const [form, setForm] = useState(empty);
  const [editIndex, setEditIndex] = useState(null);
  const [posterPreview, setPosterPreview] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const menuName = location.state?.menu || "No data received";

  // useEffect(() => {
  //   const stateMovie = location.state?.movie;
  //   const isEdit = location.state?.edit;

  //   if (isEdit && stateMovie) {
  //     // Re-hydrate multi-select fields from plain strings to an array of objects
  //     const rehydratedForm = {
  //       ...stateMovie,
  //       genre: stateMovie.genre ? stateMovie.genre.map(g => ({ value: g, label: g })) : [],
  //       language: stateMovie.language ? stateMovie.language.map(l => ({ value: l, label: l })) : [],
  //       certificate: stateMovie.certificate ? { value: stateMovie.certificate, label: stateMovie.certificate } : null,
  //       theaters: stateMovie.theaters.map(t => ({
  //         ...t,
  //         screens: t.screens.map(s => ({
  //           ...s,
  //           screenName: s.screenName ? s.screenName.map(sn => ({ value: sn, label: sn })) : [],
  //           showTimes: s.showTimes.map(st => ({ value: st, label: st }))
  //         }))
  //       }))
  //     };
  //     setForm(rehydratedForm);
  //     setEditIndex(stateMovie._id);
  //     setPosterPreview(stateMovie.imageUrl);
  //   }
  // }, [location.state]);

  useEffect(() => {
  const stateMovie = location.state?.movie;
  const isEdit = location.state?.edit;

  if (isEdit && stateMovie) {
    const rehydratedForm = {
      ...stateMovie,
      genre: Array.isArray(stateMovie.genre)
        ? stateMovie.genre.map(g => ({ value: g, label: g }))
        : stateMovie.genre
        ? [{ value: stateMovie.genre, label: stateMovie.genre }]
        : [],

      language: Array.isArray(stateMovie.language)
        ? stateMovie.language.map(l => ({ value: l, label: l }))
        : stateMovie.language
        ? [{ value: stateMovie.language, label: stateMovie.language }]
        : [],

      certificate: stateMovie.certificate
        ? { value: stateMovie.certificate, label: stateMovie.certificate }
        : null,

      theaters: Array.isArray(stateMovie.theaters)
        ? stateMovie.theaters.map(t => ({
            ...t,
            screens: Array.isArray(t.screens)
              ? t.screens.map(s => ({
                  ...s,
                  screenName: Array.isArray(s.screenName)
                    ? s.screenName.map(sn => ({ value: sn, label: sn }))
                    : s.screenName
                    ? [{ value: s.screenName, label: s.screenName }]
                    : [],
                  showTimes: Array.isArray(s.showTimes)
                    ? s.showTimes.map(st => ({ value: st, label: st }))
                    : []
                }))
              : []
          }))
        : []
    };

    setForm(rehydratedForm);
    setEditIndex(stateMovie._id);
    setPosterPreview(stateMovie.imageUrl);
  }
}, [location.state]);


  const toBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSelectChange = (name, selectedOptions) => {
    setForm(f => ({ ...f, [name]: selectedOptions }));
  };

  // Handle local file upload for poster, cast, and crew
  const handleImageChange = async (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await toBase64(file);
      setForm(f => ({ ...f, [field]: base64 }));
      if (field === 'imageUrl') {
        setPosterPreview(base64);
      }
    }
  };

  const handleCastChange = (index, e, isFile = false) => {
    const newCast = [...form.cast];
    if (isFile) {
      toBase64(e.target.files[0]).then(base64 => {
        newCast[index]['imageUrl'] = base64;
        setForm(f => ({ ...f, cast: newCast }));
      });
    } else {
      const { name, value } = e.target;
      newCast[index][name] = value;
      setForm(f => ({ ...f, cast: newCast }));
    }
  };

  const handleCrewChange = (index, e, isFile = false) => {
    const newCrew = [...form.crew];
    if (isFile) {
      toBase64(e.target.files[0]).then(base64 => {
        newCrew[index]['imageUrl'] = base64;
        setForm(f => ({ ...f, crew: newCrew }));
      });
    } else {
      const { name, value } = e.target;
      newCrew[index][name] = value;
      setForm(f => ({ ...f, crew: newCrew }));
    }
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

  // Theater and Screen Handlers
  const handleTheaterChange = (tIndex, field, value) => {
    const theaters = [...form.theaters];
    theaters[tIndex][field] = value;
    setForm(f => ({ ...f, theaters }));
  };

  const handleScreenChange = (tIndex, sIndex, selected) => {
    const theaters = [...form.theaters];
    theaters[tIndex].screens[sIndex].screenName = selected;
    setForm(f => ({ ...f, theaters }));
  };

  const handleShowTimeChange = (tIndex, sIndex, selected) => {
    const theaters = [...form.theaters];
    theaters[tIndex].screens[sIndex].showTimes = selected;
    setForm(f => ({ ...f, theaters }));
  };

  const addTheater = () => {
    setForm(f => ({
      ...f,
      theaters: [...f.theaters, { name: '', screens: [{ screenName: [], showTimes: [] }] }]
    }));
  };

  const removeTheater = (tIndex) => {
    const theaters = form.theaters.filter((_, i) => i !== tIndex);
    setForm(f => ({ ...f, theaters }));
  };

  const addScreen = (tIndex) => {
    const theaters = [...form.theaters];
    theaters[tIndex].screens.push({ screenName: [], showTimes: [] });
    setForm(f => ({ ...f, theaters }));
  };

  const removeScreen = (tIndex, sIndex) => {
    const theaters = [...form.theaters];
    theaters[tIndex].screens = theaters[tIndex].screens.filter((_, i) => i !== sIndex);
    setForm(f => ({ ...f, theaters }));
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Movie name is required';
    if (!form.duration.trim()) newErrors.duration = 'Duration is required';
    if (form.language.length === 0) newErrors.language = 'Language is required';
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

    form.theaters.forEach((theater, tIndex) => {
      if (!theater.name.trim()) {
        newErrors[`theater-${tIndex}`] = "Theater name is required";
      }
      theater.screens.forEach((screen, sIndex) => {
        if (!screen.screenName || screen.screenName.length === 0) {
          newErrors[`screen-${tIndex}-${sIndex}`] = "At least one screen name is required";
        }
        if (!screen.showTimes || screen.showTimes.length === 0) {
          newErrors[`showtime-${tIndex}-${sIndex}`] = "At least one show time required";
        }
      });
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Transform multi-select values into plain string arrays before sending
      const payload = {
        ...form,
        genre: form.genre?.map(g => g.value) ?? [],  // save as array of strings
        language: form.language?.map(l => l.value) ?? [],
        certificate: form.certificate?.value ?? form.certificate ?? "",
        theaters: form.theaters.map(t => ({
          ...t,
          screens: t.screens.map(s => ({
            ...s,
            screenName: s.screenName.map(sn => sn.value),
            showTimes: s.showTimes.map(st => st.value)
          }))
        }))
      };

      const url = editIndex
        ? `http://localhost:5000/api/movies/${editIndex}`
        : 'http://localhost:5000/api/movies';

      const method = editIndex ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
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
    setPosterPreview('');
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
          marginBottom: '10px',
          fontFamily: 'Arial, sans-serif',
          borderRadius: '8px'
        }}
      >
        <h3 className="mb-4 text-danger">{editIndex !== null ? 'Edit Movie' : 'Create New Movie'}</h3>
        <Form onSubmit={submit} noValidate>
          <Row className="g-3">
            {/* Movie Name */}
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

            {/* Genre Multi-select */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Genre</Form.Label>
                <Select
                  isMulti
                  name="genre"
                  options={genreOptions}
                  value={form.genre}
                  onChange={selected => handleSelectChange('genre', selected)}
                />
              </Form.Group>
            </Col>

            {/* Language Multi-select */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Language <span className="text-danger">*</span></Form.Label>
                <Select
                  isMulti
                  name="language"
                  options={languageOptions}
                  value={form.language}
                  onChange={selected => handleSelectChange('language', selected)}
                  className={!!errors.language ? 'is-invalid' : ''}
                />
                {!!errors.language && <div className="invalid-feedback d-block">{errors.language}</div>}
              </Form.Group>
            </Col>

            {/* Certificate Select */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Certificate</Form.Label>
                <Select
                  name="certificate"
                  options={certificateOptions}
                  value={form.certificate}
                  onChange={selected => handleSelectChange('certificate', selected)}
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
                    <Form.Group controlId={`cast-image-${i}`}>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={e => handleCastChange(i, e, true)}
                      />
                    </Form.Group>
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
                    <Form.Group controlId={`crew-image-${i}`}>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={e => handleCrewChange(i, e, true)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={1}>
                    <Button variant="outline-danger" size="sm" onClick={() => removeCrew(i)} disabled={form.crew.length === 1}>Remove</Button>
                  </Col>
                </Row>
              ))}
              <Button variant="outline-primary" size="sm" onClick={addCrew}>Add Crew</Button>
            </Col>

            {/* Upload Poster */}
            <Col md={12}>
              <hr />
              <Form.Group>
                <Form.Label>Upload Poster Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={e => handleImageChange(e, 'imageUrl')}
                />
                {posterPreview && (
                  <img
                    src={posterPreview}
                    alt="Poster Preview"
                    style={{ marginTop: '10px', width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                  />
                )}
              </Form.Group>
            </Col>

            {/* ----------- THEATERS ----------- */}
            <Col xs={12}>
              <hr />
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 text-secondary">Theaters and Showtimes</h5>
                <Button variant="outline-primary" size="sm" onClick={addTheater}>+ Add New Theater</Button>
              </div>
            </Col>

            {form.theaters.map((theater, tIndex) => (
              <Col xs={12} key={tIndex} className="border p-3 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6>Theater {tIndex + 1}</h6>
                  {form.theaters.length > 1 && (
                    <Button variant="outline-danger" size="sm" onClick={() => removeTheater(tIndex)}>Remove Theater</Button>
                  )}
                </div>

                <Form.Group className="mb-3">
                  <Form.Label>Theater Name</Form.Label>
                  <Form.Control
                    value={theater.name}
                    onChange={(e) => handleTheaterChange(tIndex, 'name', e.target.value)}
                    isInvalid={!!errors[`theater-${tIndex}`]}
                  />
                  <Form.Control.Feedback type="invalid">{errors[`theater-${tIndex}`]}</Form.Control.Feedback>
                </Form.Group>

                {theater.screens.map((screen, sIndex) => (
                  <Row key={sIndex} className="align-items-end mb-3">
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Screen Name</Form.Label>
                        <Select
                          isMulti
                          options={screenOptions}
                          value={screen.screenName}
                          onChange={(selected) => handleScreenChange(tIndex, sIndex, selected)}
                          className={!!errors[`screen-${tIndex}-${sIndex}`] ? 'is-invalid' : ''}
                        />
                        {!!errors[`screen-${tIndex}-${sIndex}`] && <div className="invalid-feedback d-block">{errors[`screen-${tIndex}-${sIndex}`]}</div>}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Show Timings</Form.Label>
                        <Select
                          isMulti
                          options={showTimeOptions}
                          value={screen.showTimes}
                          onChange={(selected) => handleShowTimeChange(tIndex, sIndex, selected)}
                          className={!!errors[`showtime-${tIndex}-${sIndex}`] ? 'is-invalid' : ''}
                        />
                        {!!errors[`showtime-${tIndex}-${sIndex}`] && <div className="invalid-feedback d-block">{errors[`showtime-${tIndex}-${sIndex}`]}</div>}
                      </Form.Group>
                    </Col>
                    <Col md={2} className="d-flex">
                      <Button variant="outline-primary" size="sm" className="me-2" onClick={() => addScreen(tIndex)}>+ Add</Button>
                      {theater.screens.length > 1 && (
                        <Button variant="outline-danger" size="sm" onClick={() => removeScreen(tIndex, sIndex)}>Remove</Button>
                      )}
                    </Col>
                  </Row>
                ))}
              </Col>
            ))}

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