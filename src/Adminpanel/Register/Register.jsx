// import React, { useState } from 'react'
// import '../Register/Register.css'
// import Header from '../Header'
// import Side from '../Side'
// import Home from '../Home'

// function Register() {
// const [openSidebarToggle, setOpenSidebarToggle ] = useState(false)

//   const OpenSidebar =() => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <>

//       {/* <Header OpenSidebar={OpenSidebar}/> */}
//       <Side openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       {/* <Home/>  */}


//         <div className="bg-warning reg-div">

//             <input type="fname" id="fname" name='fname' placeholder='First Name' className='reg-input'/> 
                    
//             <input type="lname" id="lname" name="lname" placeholder='Last Name' className='reg-input'/> 

//             <input type="email" id="email" name="email" placeholder='E-mail' className='reg-input '/> 
                    
//             <input type="number" id="number" name="number" placeholder='number' className='reg-input'/> 
                    
//             <input type="password" id="pwd" name="pwd" placeholder='Password' className='reg-input'/>

//             <input type="submit" value="Submit" className='sub'></input>

//         </div>

//         <div className="bg-info table-div my-1 ">

            
// <table className='border border-black container '>
//   <tr className='border border-black '>
//     <th className='border border-black p-3 ms-5'>FirstName <br />
//          <button className='me-5 mt-2'>filter Fname</button>
//     </th>
//     <th className='border border-black p-3 ms-5 '>LastName <br />
//         <button className='me-5 mt-2 '>filter Lname</button>
//     </th>
//     <th className='border border-black p-3 ms-5'>Email<br />
//         <button className='me-5 mt-2 '>filter Email</button>

//     </th>
//     <th className='border border-black p-3 ms-5 '>Phone<br />
//         <button className='me-5 mt-2 '>filter Phone</button>

//     </th>
//     <th className='border border-black p-3 ms-5 '>City <br />
//         <button className='me-5 mt-2 '>filter City</button>

//     </th>
//   </tr>
//   <tr className='border border-black '>
    
//     <td className='p-3 border border-black'>Alfreds Futterkiste</td>
//     <td className='p-3 border border-black'>Maria Anders</td>
//     <td className='p-3 border border-black'>samplemail.com</td>
//     <td className='p-3 border border-black'>987654326751</td>
//     <td className='p-3 border border-black'>Mexico</td>
//   </tr>
//   <tr className='border border-black '>
    
//     <td className='p-3 border border-black'>Centro comercial Moctezuma</td>
//     <td className='p-3 border border-black' >Francisco Chang</td>
//     <td className='p-3 border border-black' >samplemail.com</td>
//     <td className='p-3 border border-black'>7189647027</td>
//     <td className='p-3 border border-black'>France</td>
//   </tr>
//   <tr className='border border-black'>
    
//     <td className='p-3 border border-black'>Ernst Handel</td>
//     <td className='p-3 border border-black'>Roland Mendel</td>
//     <td className='p-3 border border-black'>samplemail.com</td>
//     <td className='p-3 border border-black'>93485986865</td>
//     <td className='p-3 border border-black'>Parise</td>
//   </tr>
//   <tr className='border border-black'>
    
//     <td className='p-3 border border-black'>Island Trading</td>
//     <td className='p-3 border border-black'>Helen Bennett</td>
//     <td className='p-3 border border-black'>samplemail.com</td>
//     <td className='p-3 border border-black'>98423074604</td>
//     <td className='p-3 border border-black'>Israil</td>
//   </tr>
//   <tr className='border border-black'>

//     <td className='p-3 border border-black'>Laughing Bacchus Winecellars</td>
//     <td className='p-3 border border-black'>Yoshi Tannamuri</td>
//     <td className='p-3 border border-black'>samplemail.com</td>
//     <td className='p-3 border border-black'>098349634435</td>
//     <td className='p-3 border border-black'>America</td>
//   </tr>
  
// </table>

//         </div>

//         <div className="bg-success excel">Download Excel</div>

//     </>
//   )
// }

// export default Register;

//====================================================================
// import React, { useState } from 'react';
//  import '../Register/Register.css'; // Adjusted path
// import Side from '../Side'; // Adjusted path

// function Register() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   // State to store form input values
//   const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     number: '',
//     // pwd: '',
//   });

//   // State to store validation error messages for each field
//   const [errors, setErrors] = useState({});

//   // State to store the registered users (table data)
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Initial dummy data for the table
//     {
//       fname: 'Alfreds',
//       lname: 'Futterkiste',
//       email: 'alfreds@samplemail.com',
//       phone: '987654326751',
      
//     },
//     {
//       fname: 'Centro',
//       lname: 'Moctezuma',
//       email: 'centro@samplemail.com',
//       phone: '7189647027',
    
//     },
//     {
//       fname: 'Ernst',
//       lname: 'Handel',
//       email: 'ernst@samplemail.com',
//       phone: '93485986865',
  
//     },
//     {
//       fname: 'Island',
//       lname: 'Trading',
//       email: 'island@samplemail.com',
//       phone: '98423074604',
      
//     },
//     {
//       fname: 'Laughing',
//       lname: 'Winecellars',
//       email: 'laughing@samplemail.com',
//       phone: '098349634435',
      
//     },
//   ]);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   // Handler for input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     // Clear the specific error message as the user types
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: '',
//     }));
//   };

//   // Function to validate the form data
//   const validateForm = () => {
//     let newErrors = {};
//     let isValid = true;

//     // First Name validation
//     if (!formData.fname.trim()) {
//       newErrors.fname = 'First Name is required.';
//       isValid = false;
//     } else if (formData.fname.trim().length < 2) {
//       newErrors.fname = 'First Name must be at least 2 characters.';
//       isValid = false;
//     }

//     // Last Name validation
//     if (!formData.lname.trim()) {
//       newErrors.lname = 'Last Name is required.';
//       isValid = false;
//     } else if (formData.lname.trim().length < 1) {
//       newErrors.lname = 'Last Name must be at least 1 characters.';
//       isValid = false;
//     }

//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required.';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       // Simple regex for email validation
//       newErrors.email = 'Email address is invalid.';
//       isValid = false;
//     }

//     // Phone Number validation
//     if (!formData.number.trim()) {
//       newErrors.number = 'Phone Number is required.';
//       isValid = false;
//     } else if (!/^\d{10}$/.test(formData.number)) {
//       // Assumes a 10-digit phone number
//       newErrors.number = 'Phone Number must be 10 digits.';
//       isValid = false;
//     }

//     // Password validation
//     // if (!formData.pwd.trim()) {
//     //   newErrors.pwd = 'Password is required.';
//     //   isValid = false;
//     // } else if (formData.pwd.trim().length < 6) {
//     //   newErrors.pwd = 'Password must be at least 6 characters.';
//     //   isValid = false;
//     // }

//     setErrors(newErrors); // Update the errors state
//     return isValid;
//   };

//   // Handler for form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior (page reload)

//     if (validateForm()) {
//       // If the form is valid, proceed with submission
//       // Add a dummy city for the new user, as your form doesn't have a city input
//       const newUser = { ...formData, phone: formData.number, city: 'Unknown' }; // Use formData.number for phone

//       // Update the registeredUsers state with the new user data
//       setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);

//       // Clear the form fields after submission
//       setFormData({
//         fname: '',
//         lname: '',
//         email: '',
//         number: '',
        
//       });
//       setErrors({}); // Clear all errors after successful submission
//       alert('Registration successful!'); // Use a custom modal in a real app
//     } else {
//       // If validation fails, errors state is already updated by validateForm()
//       alert('Please correct the errors in the form.'); // Use a custom modal in a real app
//     }
//   };

//   return (
//     <>
//       <Side openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

//       <div className="bg-warning reg-div p-4 rounded-lg shadow-lg max-w-md mx-auto my-8">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
//         <form onSubmit={handleSubmit} className="space-y-4 form">
//           {/* First Name */}
//           <div>
//             <input
//               type="text"
//               id="fname"
//               name="fname"
//               placeholder="First Name"
//               className={`reg-input w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
//                 errors.fname ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
//               }`}
//               value={formData.fname}
//               onChange={handleChange}
//             />
//             {errors.fname && <p className="text-red-500 text-sm mt-1">{errors.fname}</p>}
//           </div>

//           {/* Last Name */}
//           <div>
//             <input
//               type="text"
//               id="lname"
//               name="lname"
//               placeholder="Last Name"
//               className={`reg-input w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
//                 errors.lname ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
//               }`}
//               value={formData.lname}
//               onChange={handleChange}
//             />
//             {errors.lname && <p className="text-red-500 text-sm mt-1">{errors.lname}</p>}
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="E-mail"
//               className={`reg-input w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
//                 errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
//               }`}
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           {/* Phone Number */}
//           <div>
//             <input
//               type="tel" // Use type="tel" for phone numbers
//               id="number"
//               name="number"
//               placeholder="Phone Number (10 digits)"
//               className={`reg-input w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
//                 errors.number ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
//               }`}
//               value={formData.number}
//               onChange={handleChange}
//             />
//             {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
//           </div>

//           {/* Password */}
//           {/* <div>
//             <input
//               type="password"
//               id="pwd"
//               name="pwd"
//               placeholder="Password (min 6 characters)"
//               className={`reg-input w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
//                 errors.pwd ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
//               }`}
//               value={formData.pwd}
//               onChange={handleChange}
//             />
//             {errors.pwd && <p className="text-red-500 text-sm mt-1">{errors.pwd}</p>}
//           </div> */}

//           <button
//             type="submit"
//             className="sub w-full bg-blue-600 bg-success text-white p-1 rounded-md hover:bg-blue-700 transition-colors duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       <div className="bg-info table-div  my-4 p-4 rounded-lg shadow-lg overflow-x-auto">
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Registered Users</h2>
//         <table className="table bg-white border border-gray-200 rounded-md overflow-hidden">
//           <thead>
//             <tr className="bg-gray-100 border-b border-gray-200 text-left text-gray-600 uppercase text-sm leading-normal">
//               <th className="py-3 px-6 border-r border-gray-200">
//                 First Name <br />
//                 {/* <button className="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded-md">Filter Fname</button> */}
//               </th>
//               <th className="py-3 px-6 border-r border-gray-200">
//                 Last Name <br />
//                 {/* <button className="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded-md">Filter Lname</button> */}
//               </th>
//               <th className="py-3 px-6 border-r border-gray-200">
//                 Email <br />
//                 {/* <button className="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded-md">Filter Email</button> */}
//               </th>
//               <th className="py-3 px-6 border-r border-gray-200">
//                 Phone <br />
//                 {/* <button className="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded-md">Filter Phone</button> */}
//               </th>
//               {/* <th className="py-3 px-6">
//                 City <br />
//                 <button className="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded-md">Filter City</button>
//               </th> */}
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 text-sm">
//             {registeredUsers.map((user, index) => (
//               <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
//                 <td className="py-3 px-6 border-r border-gray-200">{user.fname}</td>
//                 <td className="py-3 px-6 border-r border-gray-200">{user.lname}</td>
//                 <td className="py-3 px-6 border-r border-gray-200">{user.email}</td>
//                 <td className="py-3 px-6 border-r border-gray-200">{user.phone}</td>
//                 {/* <td className="py-3 px-6">{user.city}</td> */}
//               </tr>
//             ))}
//             {registeredUsers.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="py-4 text-center text-gray-500">No registered users yet.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//          <div className="bg-success excel text-center  rounded-md shadow-md bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-200 cursor-pointer max-w-xs mx-auto my-8">
//               Download Excel
//          </div>

//       </div>

      
//     </>
//   );
// }

// export default Register;

//================================================================================================

import React, { useState } from 'react';
import '../Register/Register.css'; // Commented out as Tailwind handles most styling
import Adminsidebar from '../AdminSide/Adminsidebar'; // Assuming Side is a functional component and its path is correct

function Register() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // State to store form input values (removed pwd and city based on your latest code)
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    number: '',
  });

  // State to store validation error messages for each field
  const [errors, setErrors] = useState({});

  // State to store the registered users (table data)
  const [registeredUsers, setRegisteredUsers] = useState([
    // Initial dummy data for the table (removed pwd and city)
    {
      fname: 'Alfreds',
      lname: 'Futterkiste',
      email: 'alfreds@samplemail.com',
      phone: '987654326751',
    },
    {
      fname: 'Centro',
      lname: 'Moctezuma',
      email: 'centro@samplemail.com',
      phone: '7189647027',
    },
    {
      fname: 'Ernst',
      lname: 'Handel',
      email: 'ernst@samplemail.com',
      phone: '93485986865',
    },
    {
      fname: 'Island',
      lname: 'Trading',
      email: 'island@samplemail.com',
      phone: '98423074604',
    },
    {
      fname: 'Laughing',
      lname: 'Winecellars',
      email: 'laughing@samplemail.com',
      phone: '098349634435',
    },
  ]);

  // State to manage editing functionality
  const [editingIndex, setEditingIndex] = useState(null); // Stores the index of the user being edited

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the specific error message as the user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  // Function to validate the form data
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // First Name validation
    if (!formData.fname.trim()) {
      newErrors.fname = 'First Name is required.';
      isValid = false;
    } else if (formData.fname.trim().length < 2) {
      newErrors.fname = 'First Name must be at least 2 characters.';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lname.trim()) {
      newErrors.lname = 'Last Name is required.';
      isValid = false;
    } else if (formData.lname.trim().length < 1) { // Changed to 1 as per your original code
      newErrors.lname = 'Last Name must be at least 1 character.';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    // Phone Number validation
    if (!formData.number.trim()) {
      newErrors.number = 'Phone Number is required.';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = 'Phone Number must be 10 digits.';
      isValid = false;
    }

    setErrors(newErrors); // Update the errors state
    return isValid;
  };

  // Handler for form submission (Create or Update)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    if (validateForm()) {
      const newUser = { ...formData, phone: formData.number }; // Ensure 'phone' key matches table

      if (editingIndex !== null) {
        // Update existing user
        const updatedUsers = [...registeredUsers];
        updatedUsers[editingIndex] = newUser;
        setRegisteredUsers(updatedUsers);
        setEditingIndex(null); // Exit edit mode
        alert('User updated successfully!'); // Replace with custom modal
      } else {
        // Add new user
        setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
        alert('Registration successful!'); // Replace with custom modal
      }

      // Clear the form fields after submission/update
      setFormData({
        fname: '',
        lname: '',
        email: '',
        number: '',
      });
      setErrors({}); // Clear all errors
    } else {
      alert('Please correct the errors in the form.'); // Replace with custom modal
    }
  };

  // Handler for editing a user
  const handleEdit = (index) => {
    const userToEdit = registeredUsers[index];
    setFormData({
      fname: userToEdit.fname,
      lname: userToEdit.lname,
      email: userToEdit.email,
      number: userToEdit.phone, // Populate number field with phone data
    });
    setEditingIndex(index); // Set the index of the user being edited
    setErrors({}); // Clear any previous errors when starting an edit
  };

  // Handler for deleting a user
  const handleDelete = (index) => {
    // In a real app, replace confirm with a custom modal for better UX
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = registeredUsers.filter((_, i) => i !== index);
      setRegisteredUsers(updatedUsers);
      // If the deleted user was currently being edited, clear the form
      if (editingIndex === index) {
        setEditingIndex(null);
        setFormData({
          fname: '',
          lname: '',
          email: '',
          number: '',
        });
        setErrors({});
      }
      alert('User deleted successfully!'); // Replace with custom modal
    }
  };

  // Handler to cancel editing
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setFormData({
      fname: '',
      lname: '',
      email: '',
      number: '',
    });
    setErrors({});
  };


  return (
    <body className='bg-secondary'>
     
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}  />
      </div>

      <div className="min-h-screen reg-div bg-gray-100 flex flex-col items-center py-8 px-4 font-sans">
      {/* Side component (if it exists and is needed for overall layout) */}
      

        
     

      {/* Registration/Edit Form Card */}
      <div className=" regiform p-3 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto my-8 border border-gray-200">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
          {editingIndex !== null ? 'Edit User' : 'Register Account'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5 form">
          {/* First Name */}
          <div className='my-2 px-3'>
            <label htmlFor="fname" className="block text-sm fw-bold text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter first name"
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.fname ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
              }`}
              value={formData.fname}
              onChange={handleChange}
            />
            {errors.fname && <p className="text-red-600 text-xs mt-1">{errors.fname}</p>}
          </div>

          {/* Last Name */}
          <div className='my-2 px-3'>
            <label htmlFor="lname" className="block text-sm fw-bold text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter last name"
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.lname ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
              }`}
              value={formData.lname}
              onChange={handleChange}
            />
            {errors.lname && <p className="text-red-600 text-xs mt-1">{errors.lname}</p>}
          </div>

          {/* Email */}
          <div className='my-2 px-3'>
            <label htmlFor="email" className="block text-sm fw-bold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g., your.email@example.com"
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div className='my-2 px-3'>
            <label htmlFor="number" className="block text-sm fw-bold text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              placeholder="e.g., 1234567890 (10 digits)"
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.number ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
              }`}
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <p className="text-red-600 text-xs mt-1">{errors.number}</p>}
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-warning  bg-blue-600 text-white font-bold p-1 px-3 ms-3 mt-1  rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {editingIndex !== null ? 'Update User' : 'Register'}
            </button>
            {editingIndex !== null && (
              <button
                type="button" // Important: type="button" to prevent form submission
                onClick={handleCancelEdit}
                className="flex-1 bg-gray-400 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-500 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Registered Users Table */}
      <div className=" text-light  mt-3 my-8 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-4xl mx-auto border border-gray-200 overflow-x-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Registered Users</h2>
        {registeredUsers.length > 0 ? (
          <table className="min-w-full  divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                  {/* Filter buttons removed for brevity, can be re-added */}
                </th>
                <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" text-light divide-y divide-gray-200">
              {registeredUsers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm text-gray-800">{user.fname}</td>
                  <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm text-gray-800">{user.lname}</td>
                  <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
                  <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm text-gray-800">{user.phone}</td>
                  <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-light  bg-warning hover:text-indigo-900 mr-4 transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-light bg-danger hover:text-red-900 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="py-6 text-center text-gray-500 text-base">No registered users yet. Register one above!</p>
        )}
      </div>

      {/* Download Excel Button */}
      <button className="bg-success mt-2 text-white font-bold py-3 px-8  mt-8">
        Download Excel
      </button>
    </div>
    
    </body>
    
  );
}

export default Register;