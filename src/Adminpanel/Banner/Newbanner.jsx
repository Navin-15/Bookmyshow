

//without validation

// import React, { useState, useContext } from 'react';
// import { BannerContext } from './BannerContext';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import './Newbanner.css';

// const Newbanner = () => {

//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [imageName, setImageName] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const { banners, setBanners } = useContext(BannerContext);
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!imageFile) {
//       alert('Please upload a banner image.');
//       return;
//     }

//     const newBanner = {
//       id: Date.now(),
//       name: imageName,
//       image: URL.createObjectURL(imageFile)
//     };

//     setBanners([...banners, newBanner]);

//     // Reset form
//     setImageName('');
//     setImageFile(null);
//   };

//   const handleCancel = () => {
//     setImageName('');
//     setImageFile(null);
//   };

//     const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>
    
//     <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//         <div className=" text ">
//             <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp; &nbsp;
//             <span className="mt-2">{menuName} </span>
//         </div>

//     <div className="course-form-container">
//       {/* <div className="breadcrumb">BANNER &nbsp;•&nbsp; Add Banner</div> */}

//       <div className="form-box">
//         <h3>Add Banner</h3>
//         {/* <p>Use the below form to update your profile</p> */}

//         <form onSubmit={handleSubmit}>
//           <label>Banner Name</label>
//           <input
//             type="text"
//             placeholder="Banner Name"
//             value={imageName}
//             onChange={(e) => setImageName(e.target.value)}
//           />

//           <label>Upload Banner Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files[0])}
//           />

//           <div className="form-buttons">
//             <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
//             <button type="submit" className="save-btn" onClick={() => navigate('/managebanner')}>Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
    
//     </>
//   );
// };

// export default Newbanner;

//===========================================================================

//og code

// import React, { useState, useContext } from 'react';
// import { BannerContext } from './BannerContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import './Newbanner.css';

// const Newbanner = () => {
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const [imageName, setImageName] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const [errors, setErrors] = useState({});

//   const { banners, setBanners } = useContext(BannerContext);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};

//     if (!imageName.trim()) {
//       newErrors.imageName = 'Banner name is required';
//     }

//     if (!imageFile) {
//       newErrors.imageFile = 'Please upload a banner image';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const newBanner = {
//       id: Date.now(),
//       name: imageName,
//       image: URL.createObjectURL(imageFile)
//     };

//     setBanners([...banners, newBanner]);

//     // Reset form
//     setImageName('');
//     setImageFile(null);
//     setErrors({});
//     navigate('/managebanner');
//   };

//   const handleCancel = () => {
//     setImageName('');
//     setImageFile(null);
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

//       <div className="text">
//         <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp;&nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <div className="course-form-container">
//         <div className="form-box">
//           <h3 className='text-danger'>Add Banner</h3>

//           <form onSubmit={handleSubmit} noValidate>
//             {/* Banner Name */}
//             <label>Banner Name</label>
//             <input
//               type="text"
//               placeholder="Banner Name"
//               value={imageName}
//               onChange={(e) => setImageName(e.target.value)}
//               className={errors.imageName ? 'input-error' : ''}
//             />
//             {errors.imageName && <div className="error-text">{errors.imageName}</div>}

//             {/* Banner File Upload */}
//             <label>Upload Banner Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImageFile(e.target.files[0])}
//               className={errors.imageFile ? 'input-error' : ''}
//             />
//             {errors.imageFile && <div className="error-text">{errors.imageFile}</div>}

//             {/* Buttons */}
//             <div className="form-buttons">
//               <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
//               <button type="submit" className="save-btn">Save</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Newbanner;

//abcdefg

// import React, { useState, useContext } from 'react';
// import { BannerContext } from './BannerContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import './Newbanner.css';

// const Newbanner = () => {
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const [imageName, setImageName] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const [errors, setErrors] = useState({});

//   const { banners, setBanners } = useContext(BannerContext);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};

//     if (!imageName.trim()) {
//       newErrors.imageName = 'Banner name is required';
//     }

//     if (!imageFile) {
//       newErrors.imageFile = 'Please upload a banner image';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const newBanner = {
//       id: Date.now(),
//       name: imageName,
//       image: URL.createObjectURL(imageFile)
//     };

//     setBanners([...banners, newBanner]);

//     // Reset form
//     setImageName('');
//     setImageFile(null);
//     setErrors({});
//     navigate('/managebanner');
//   };

//   const handleCancel = () => {
//     setImageName('');
//     setImageFile(null);
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

//       <div className="banner">
//         <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp;&nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <div className="banner-form-container">
//         <div className="form-box">
//           <h3 className='text-danger'>Add Banner</h3>

//           <form onSubmit={handleSubmit} noValidate>
//             {/* Banner Name */}
//             <label>Banner Name</label>
//             <input
//               type="text"
//               placeholder="Banner Name"
//               value={imageName}
//               onChange={(e) => setImageName(e.target.value)}
//               className={errors.imageName ? 'input-error' : ''}
//             />
//             {errors.imageName && <div className="error-text">{errors.imageName}</div>}

//             {/* Banner File Upload */}
//             <label>Upload Banner Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImageFile(e.target.files[0])}
//               className={errors.imageFile ? 'input-error' : ''}
//             />
//             {errors.imageFile && <div className="error-text">{errors.imageFile}</div>}

//             {/* Buttons */}
//             <div className="form-buttons">
//               <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
//               <button type="submit" className="save-btn">Save</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Newbanner;















// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';
// import './Newbanner.css';

// const Newbanner = () => {
//   const location = useLocation();
//   const menuName = location.state?.menu || "No data received";
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const [imageName, setImageName] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const [errors, setErrors] = useState({});

//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     if (!imageName.trim()) newErrors.imageName = 'Banner name is required';
//     if (!imageFile) newErrors.imageFile = 'Please upload a banner image';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Convert image file to Base64 before sending to MongoDB
//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const base64Image = await convertToBase64(imageFile);

//       const res = await axios.post("http://localhost:5000/api/banners", {
//         name: imageName,
//         image: base64Image,
//       });

//       console.log("✅ Banner Saved:", res.data);
//       setImageName('');
//       setImageFile(null);
//       setErrors({});
//       navigate('/managebanner');
//     } catch (err) {
//       console.error("❌ Error saving banner:", err);
//     }
//   };

//   const handleCancel = () => {
//     setImageName('');
//     setImageFile(null);
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

//       <div className="banner">
//         <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp;&nbsp;
//         <span className="mt-2">{menuName}</span>
//       </div>

//       <div className="banner-form-container">
//         <div className="form-box">
//           <h3 className='text-danger'>Add Banner</h3>

//           <form onSubmit={handleSubmit} noValidate>
//             <label>Banner Name</label>
//             <input
//               type="text"
//               placeholder="Banner Name"
//               value={imageName}
//               onChange={(e) => setImageName(e.target.value)}
//               className={errors.imageName ? 'input-error' : ''}
//             />
//             {errors.imageName && <div className="error-text">{errors.imageName}</div>}

//             <label>Upload Banner Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImageFile(e.target.files[0])}
//               className={errors.imageFile ? 'input-error' : ''}
//             />
//             {errors.imageFile && <div className="error-text">{errors.imageFile}</div>}

//             <div className="form-buttons">
//               <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
//               <button type="submit" className="save-btn">Save</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Newbanner;


import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import './Newbanner.css';

const Newbanner = () => {
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const [imageName, setImageName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [imageSizeError, setImageSizeError] = useState('');

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!imageName.trim()) newErrors.imageName = 'Banner name is required';
    if (!imageFile) newErrors.imageFile = 'Please upload a banner image';
    if (imageSizeError) newErrors.imageFile = imageSizeError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Convert image file to Base64 before sending to MongoDB
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // ✅ Validate image size (1240x300) on file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageSizeError('');
    setErrors((prev) => ({ ...prev, imageFile: null }));

    if (file) {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width !== 1240 || img.height !== 300) {
          setImageSizeError(
            `Invalid image size. Required: 1240x300 px. Uploaded: ${img.width}x${img.height}px`
          );
          setImageFile(null);
        } else {
          setImageFile(file);
        }
        URL.revokeObjectURL(objectUrl);
      };

      img.onerror = () => {
        setImageSizeError("Couldn't load image. Please upload a valid image.");
        setImageFile(null);
        URL.revokeObjectURL(objectUrl);
      };

      img.src = objectUrl;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const base64Image = await convertToBase64(imageFile);

      const res = await axios.post("http://localhost:5000/api/banners", {
        name: imageName,
        image: base64Image,
        enabled: true, // optionally default enabled
      });

      console.log("✅ Banner Saved:", res.data);
      setImageName('');
      setImageFile(null);
      setImageSizeError('');
      setErrors({});
      navigate('/managebanner');
    } catch (err) {
      console.error("❌ Error saving banner:", err);
    }
  };

  const handleCancel = () => {
    setImageName('');
    setImageFile(null);
    setImageSizeError('');
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

      <div className="banner">
        <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp;&nbsp;
        <span className="mt-2">{menuName}</span>
      </div>

      <div className="banner-form-container">
        <div className="form-box">
          <h3 className='text-danger'>Add Banner</h3>

          <form onSubmit={handleSubmit} noValidate>
            <label>Banner Name</label>
            <input
              type="text"
              placeholder="Banner Name"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              className={errors.imageName ? 'input-error' : ''}
            />
            {errors.imageName && <div className="error-text">{errors.imageName}</div>}

            <label>Upload Banner Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={errors.imageFile ? 'input-error' : ''}
            />
            {errors.imageFile && <div className="error-text">{errors.imageFile}</div>}
            {imageSizeError && <div className="error-text">{imageSizeError}</div>}

            <div className="form-buttons">
              <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="save-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newbanner;
