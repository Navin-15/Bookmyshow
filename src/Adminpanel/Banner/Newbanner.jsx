

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


import React, { useState, useContext } from 'react';
import { BannerContext } from './BannerContext';
import { useNavigate, useLocation } from 'react-router-dom';
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

  const { banners, setBanners } = useContext(BannerContext);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!imageName.trim()) {
      newErrors.imageName = 'Banner name is required';
    }

    if (!imageFile) {
      newErrors.imageFile = 'Please upload a banner image';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newBanner = {
      id: Date.now(),
      name: imageName,
      image: URL.createObjectURL(imageFile)
    };

    setBanners([...banners, newBanner]);

    // Reset form
    setImageName('');
    setImageFile(null);
    setErrors({});
    navigate('/managebanner');
  };

  const handleCancel = () => {
    setImageName('');
    setImageFile(null);
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
        <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp;&nbsp;
        <span className="mt-2">{menuName}</span>
      </div>

      <div className="course-form-container">
        <div className="form-box">
          <h3 className='text-danger'>Add Banner</h3>

          <form onSubmit={handleSubmit} noValidate>
            {/* Banner Name */}
            <label>Banner Name</label>
            <input
              type="text"
              placeholder="Banner Name"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              className={errors.imageName ? 'input-error' : ''}
            />
            {errors.imageName && <div className="error-text">{errors.imageName}</div>}

            {/* Banner File Upload */}
            <label>Upload Banner Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className={errors.imageFile ? 'input-error' : ''}
            />
            {errors.imageFile && <div className="error-text">{errors.imageFile}</div>}

            {/* Buttons */}
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
