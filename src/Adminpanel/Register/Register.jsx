// import React, { useState } from 'react';
// import '../Register/Register.css'; // Commented out as Tailwind handles most styling
// import Adminsidebar from '../AdminSide/Adminsidebar'; // Assuming Side is a functional component and its path is correct
// import Adminheader from '../AdminHead/Adminheader';

// function Register() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   // State to store form input values (removed pwd and city based on your latest code)
//   const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     number: '',
//   });

//   // State to store validation error messages for each field
//   const [errors, setErrors] = useState({});

//   // State to store the registered users (table data)
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Initial dummy data for the table (removed pwd and city)
//     {
//       fname: 'Naveen',
//       lname: 'Kumar',
//       email: 'naveen123@gmail.com',
//       phone: '987654326751',
//     },
//     {
//       fname: 'Leo',
//       lname: 'das',
//       email: 'loedas@gmail.com',
//       phone: '7189647027',
//     },
//     {
//       fname: 'deva',
//       lname: 'raj',
//       email: 'devaraj@gmail.com',
//       phone: '93485986865',
//     }
//   ]);

//   // State to manage editing functionality
//   const [editingIndex, setEditingIndex] = useState(null); // Stores the index of the user being edited

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
//     } else if (formData.lname.trim().length < 1) { // Changed to 1 as per your original code
//       newErrors.lname = 'Last Name must be at least 1 character.';
//       isValid = false;
//     }

//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required.';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email address is invalid.';
//       isValid = false;
//     }

//     // Phone Number validation
//     if (!formData.number.trim()) {
//       newErrors.number = 'Phone Number is required.';
//       isValid = false;
//     } else if (!/^\d{10}$/.test(formData.number)) {
//       newErrors.number = 'Phone Number must be 10 digits.';
//       isValid = false;
//     }

//     setErrors(newErrors); // Update the errors state
//     return isValid;
//   };

//   // Handler for form submission (Create or Update)
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior (page reload)

//     if (validateForm()) {
//       const newUser = { ...formData, phone: formData.number }; // Ensure 'phone' key matches table

//       if (editingIndex !== null) {
//         // Update existing user
//         const updatedUsers = [...registeredUsers];
//         updatedUsers[editingIndex] = newUser;
//         setRegisteredUsers(updatedUsers);
//         setEditingIndex(null); // Exit edit mode
//         alert('User updated successfully!'); // Replace with custom modal
//       } else {
//         // Add new user
//         setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
//         alert('Registration successful!'); // Replace with custom modal
//       }

//       // Clear the form fields after submission/update
//       setFormData({
//         fname: '',
//         lname: '',
//         email: '',
//         number: '',
//       });
//       setErrors({}); // Clear all errors
//     } else {
//       alert('Please correct the errors in the form.'); // Replace with custom modal
//     }
//   };

//   // Handler for editing a user
//   const handleEdit = (index) => {
//     const userToEdit = registeredUsers[index];
//     setFormData({
//       fname: userToEdit.fname,
//       lname: userToEdit.lname,
//       email: userToEdit.email,
//       number: userToEdit.phone, // Populate number field with phone data
//     });
//     setEditingIndex(index); // Set the index of the user being edited
//     setErrors({}); // Clear any previous errors when starting an edit
//   };

//   // Handler for deleting a user
//   const handleDelete = (index) => {
//     // In a real app, replace confirm with a custom modal for better UX
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       const updatedUsers = registeredUsers.filter((_, i) => i !== index);
//       setRegisteredUsers(updatedUsers);
//       // If the deleted user was currently being edited, clear the form
//       if (editingIndex === index) {
//         setEditingIndex(null);
//         setFormData({
//           fname: '',
//           lname: '',
//           email: '',
//           number: '',
//         });
//         setErrors({});
//       }
//       alert('User deleted successfully!'); // Replace with custom modal
//     }
//   };

//   // Handler to cancel editing
//   const handleCancelEdit = () => {
//     setEditingIndex(null);
//     setFormData({
//       fname: '',
//       lname: '',
//       email: '',
//       number: '',
//     });
//     setErrors({});
//   };


//   return (
//      <>
//       <Adminheader/>
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}  />
//       </div>

//       <div className="min-h-screen reg-div bg-gray-100 flex flex-col items-center py-8 px-1 font-sans">
//       {/* Side component (if it exists and is needed for overall layout) */}

//       {/* Registration/Edit Form Card */}
//       <div className=" regiform p-5 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto my-8 border border-gray-200 bg-secondary mt-5 ">
//         <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
//           {editingIndex !== null ? 'Edit User' : 'Register Account'}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5 form">
//           {/* First Name */}
//           <div className='my-2 px-3'>
//             <label htmlFor="fname" className="block text-sm fw-bold text-gray-700 mb-1">First Name</label>
//             <input
//               type="text"
//               id="fname"
//               name="fname"
//               placeholder="Enter first name"
//               className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
//                 errors.fname ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
//               }`}
//               value={formData.fname}
//               onChange={handleChange}
//             />
//             {errors.fname && <p className="text-red-600 text-xs mt-1">{errors.fname}</p>}
//           </div>

//           {/* Last Name */}
//           <div className='my-2 px-3'>
//             <label htmlFor="lname" className="block text-sm fw-bold text-gray-700 mb-1">Last Name</label>
//             <input
//               type="text"
//               id="lname"
//               name="lname"
//               placeholder="Enter last name"
//               className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
//                 errors.lname ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
//               }`}
//               value={formData.lname}
//               onChange={handleChange}
//             />
//             {errors.lname && <p className="text-red-600 text-xs mt-1">{errors.lname}</p>}
//           </div>

//           {/* Email */}
//           <div className='my-2 px-1 ps-3'>
//             <label htmlFor="email" className="block text-sm fw-bold text-gray-700 mb-1">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="e.g., your.email@example.com"
//               className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
//                 errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
//               }`}
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
//           </div>

//           {/* Phone Number */}
//           <div className='my-2 px-2'>
//             <label htmlFor="number" className="block text-sm fw-bold text-gray-700 mb-1">Phone Number</label>
//             <input
//               type="tel"
//               id="number"
//               name="number"
//               placeholder="e.g., 1234567890 (10 digits)"
//               className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
//                 errors.number ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
//               }`}
//               value={formData.number}
//               onChange={handleChange}
//             />
//             {errors.number && <p className="text-red-600 text-xs mt-1">{errors.number}</p>}
//           </div>

//           <div className="flex space-x-4">
//             <button
//               type="submit"
//               className="flex-1 bg-success  bg-blue-600 text-white font-bold p-2 px-4 ms-3 mt-1  rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               {editingIndex !== null ? 'Update User' : 'Register'}
//             </button>
//             {editingIndex !== null && (
//               <button
//                 type="button" // Important: type="button" to prevent form submission
//                 onClick={handleCancelEdit}
//                 className="flex-1 bg-gray-400 text-white font-bold p-2 px-4 ms-2 rounded-lg hover:bg-gray-500 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 bg-success"
//               >
//                 Cancel Edit
//               </button>
//             )}
//           </div>
//         </form>
//       </div>

//       {/* Registered Users Table */}
//       <div className=" text-light  mt-1 my-8 p-5 sm:p-8 rounded-xl shadow-2xl w-full max-w-4xl mx-auto border border-gray-200 overflow-x-auto bg-secondary">
//         <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Registered Users</h2>
//         {registeredUsers.length > 0 ? (
//           <table className="min-w-full  divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   First Name
//                   {/* Filter buttons removed for brevity, can be re-added */}
//                 </th>
//                 <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Last Name
//                 </th>
//                 <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Phone
//                 </th>
//                 <th className="py-3 px-4 sm:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className=" text-light divide-y divide-gray-200">
//               {registeredUsers.map((user, index) => (
//                 <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
//                   <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm text-gray-800">{user.fname}</td>
//                   <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm text-gray-800">{user.lname}</td>
//                   <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
//                   <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm text-gray-800">{user.phone}</td>
//                   <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm font-medium ">
//                     <button
//                       onClick={() => handleEdit(index)}
//                       className="text-light  bg-warning px-3 py-1 hover:text-indigo-900 mr-4 transition-colors duration-200"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(index)}
//                       className="text-light bg-danger px-3 py-1 hover:text-red-900 transition-colors duration-200 ms-1"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="py-6 text-center text-gray-500 text-base">No registered users yet. Register one above!</p>
//         )}
//       </div>

//       {/* Download Excel Button */}
//       <button className="bg-success mt-2 text-white font-bold p-3 px-8  mt-8">
//         Download Excel
//       </button>
//     </div>
    
     
//     </>
//   );
// }

// export default Register;

//===========================================

// import React, { useState } from 'react';
// import '../Register/Register.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import Adminheader from '../AdminHead/Adminheader';

// function Register() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});

//   const [registeredUsers, setRegisteredUsers] = useState([
//     {
//       name: 'Naveen',
//       email: 'naveen123@gmail.com',
//       phone: '9876543267',
//       password: '********',
//     },
//     {
//       name: 'Leo',
//       email: 'loedas@gmail.com',
//       phone: '7189647027',
//       password: '********',
//     },
//     {
//       name: 'Deva',
//       email: 'devaraj@gmail.com',
//       phone: '7868832369',
//       password: '********',
//     },
//   ]);

//   const [editingIndex, setEditingIndex] = useState(null);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: '',
//     }));
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required.';
//       isValid = false;
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = 'Name must be at least 2 characters.';
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required.';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email address is invalid.';
//       isValid = false;
//     }

//     if (!formData.number.trim()) {
//       newErrors.number = 'Phone Number is required.';
//       isValid = false;
//     } else if (!/^\d{10}$/.test(formData.number)) {
//       newErrors.number = 'Phone Number must be 10 digits.';
//       isValid = false;
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required.';
//       isValid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters.';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const newUser = {
//         ...formData,
//         phone: formData.number,
//       };

//       if (editingIndex !== null) {
//         const updatedUsers = [...registeredUsers];
//         updatedUsers[editingIndex] = newUser;
//         setRegisteredUsers(updatedUsers);
//         setEditingIndex(null);
//         alert('User updated successfully!');
//       } else {
//         setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
//         alert('Registration successful!');
//       }

//       setFormData({
//         name: '',
//         email: '',
//         number: '',
//         password: '',
//       });
//       setErrors({});
//     } else {
//       alert('Please correct the errors in the form.');
//     }
//   };

//   const handleEdit = (index) => {
//     const userToEdit = registeredUsers[index];
//     setFormData({
//       name: userToEdit.name,
//       email: userToEdit.email,
//       number: userToEdit.phone,
//       password: userToEdit.password,
//     });
//     setEditingIndex(index);
//     setErrors({});
//   };

//   const handleDelete = (index) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       const updatedUsers = registeredUsers.filter((_, i) => i !== index);
//       setRegisteredUsers(updatedUsers);
//       if (editingIndex === index) {
//         setEditingIndex(null);
//         setFormData({
//           name: '',
//           email: '',
//           number: '',
//           password: '',
//         });
//         setErrors({});
//       }
//       alert('User deleted successfully!');
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditingIndex(null);
//     setFormData({
//       name: '',
//       email: '',
//       number: '',
//       password: '',
//     });
//     setErrors({});
//   };

//   return (
//     <>
//       <Adminheader />
//       <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       </div>

//       <div className="min-h-screen reg-div bg-gray-100 flex flex-col items-center py-8 px-1 font-sans">
//         <div className="regiform py-5 sm:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto my-8 border border-gray-200 bg-secondary mt-5">
//           <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
//             {editingIndex !== null ? 'Edit User' : 'Register Account'}
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-5 form">
//             {/* First Name */}
//             <div className="my-2 px-3">
//               <label htmlFor="name" className="block text-sm fw-bold text-gray-700 mb-1">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter name"
//                 className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
//                 }`}
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
//             </div>

//             {/* Email */}
//             <div className="my-2 px-3">
//               <label htmlFor="email" className="block text-sm fw-bold text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter email"
//                 className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
//                 }`}
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
//             </div>

//             {/* Phone Number */}
//             <div className="my-2 px-3">
//               <label htmlFor="number" className="block text-sm fw-bold text-gray-700 mb-1">Phone Number</label>
//               <input
//                 type="tel"
//                 id="number"
//                 name="number"
//                 placeholder="10-digit phone number"
//                 className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   errors.number ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
//                 }`}
//                 value={formData.number}
//                 onChange={handleChange}
//               />
//               {errors.number && <p className="text-red-600 text-xs mt-1">{errors.number}</p>}
//             </div>

//             {/* Password */}
//             <div className="my-2 px-3">
//               <label htmlFor="password" className="block text-sm fw-bold text-gray-700 mb-1">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter password"
//                 className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   errors.password ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'
//                 }`}
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
//             </div>

//             <div className="flex space-x-4">
//               <button
//                 type="submit"
//                 className="flex-1 bg-success text-white font-bold p-2 mt-5 rounded hover:bg-blue-700 transition duration-300"
//               >
//                 {editingIndex !== null ? 'Update User' : 'Register'}
//               </button>
//               {editingIndex !== null && (
//                 <button
//                   type="button"
//                   onClick={handleCancelEdit}
//                   className="flex-1 bg-warning text-white font-bold p-2 ms-1 rounded hover:bg-gray-600 transition duration-300"
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>

//         {/* Registered Users Table */}
//         <div className="mt-5 p-5 rounded-xl shadow-2xl w-full max-w-4xl mx-auto border border-gray-200 overflow-x-auto bg-secondary">
//           <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Registered Users</h2>
//           {registeredUsers.length > 0 ? (
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
//                   <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {registeredUsers.map((user, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="py-3 px-4 text-sm text-gray-800">{user.name}</td>
//                     <td className="py-3 px-4 text-sm text-gray-800">{user.email}</td>
//                     <td className="py-3 px-4 text-sm text-gray-800">{user.phone}</td>
//                     <td className="py-3 px-4 text-sm text-gray-800">********</td>
//                     <td className="py-3 px-4 text-sm">
//                       <button
//                         onClick={() => handleEdit(index)}
//                         className="bg-warning text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(index)}
//                         className="bg-danger text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="py-6 text-center text-gray-500 text-base">No registered users yet. Register one above!</p>
//           )}
//         </div>

//         {/* Download Button Placeholder */}
//         <button className="bg-success mt-1 text-white font-bold p-3 px-8 rounded-lg hover:bg-green-700">
//           Download Excel
//         </button>
//       </div>
//     </>
//   );
// }

// export default Register;

//==================================

import React, { useState } from 'react';
import '../Register/Register.css';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function Register() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    designation: '',
    permissions: []
  });

  const [errors, setErrors] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);

  const [registeredUsers, setRegisteredUsers] = useState([
    {
      name: 'Naveen',
      email: 'naveen123@gmail.com',
      phone: '9876543267',
      password: '********',
      designation: 'Manager',
      permissions: ['HR', 'Finance']
    },
    {
      name: 'Leo',
      email: 'loedas@gmail.com',
      phone: '7189647027',
      password: '********',
      designation: 'Developer',
      permissions: ['IT']
    },
    {
      name: 'Deva',
      email: 'devaraj@gmail.com',
      phone: '7868832369',
      password: '********',
      designation: 'Sales Executive',
      permissions: ['Sales', 'Marketing']
    },
  ]);

  const departments = ['HR', 'Sales', 'Finance', 'Marketing', 'IT'];

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handlePermissionChange = (dept) => {
    setFormData((prevData) => {
      const current = prevData.permissions;
      return {
        ...prevData,
        permissions: current.includes(dept)
          ? current.filter(p => p !== dept)
          : [...current, dept]
      };
    });
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    if (!formData.number.trim()) {
      newErrors.number = 'Phone Number is required.';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = 'Phone Number must be 10 digits.';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newUser = {
        ...formData,
        phone: formData.number,
      };

      if (editingIndex !== null) {
        const updatedUsers = [...registeredUsers];
        updatedUsers[editingIndex] = newUser;
        setRegisteredUsers(updatedUsers);
        setEditingIndex(null);
        alert('User updated successfully!');
      } else {
        setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
        alert('Registration successful!');
      }

      resetForm();
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      number: '',
      password: '',
      designation: '',
      permissions: []
    });
    setErrors({});
  };

  const handleEdit = (index) => {
    const userToEdit = registeredUsers[index];
    setFormData({
      name: userToEdit.name,
      email: userToEdit.email,
      number: userToEdit.phone,
      password: userToEdit.password,
      designation: userToEdit.designation || '',
      permissions: userToEdit.permissions || []
    });
    setEditingIndex(index);
    setErrors({});
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = registeredUsers.filter((_, i) => i !== index);
      setRegisteredUsers(updatedUsers);
      if (editingIndex === index) resetForm();
      alert('User deleted successfully!');
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    resetForm();
  };

  const handleDownloadExcel = () => {
  const data = registeredUsers.map(user => ({
    Name: user.name,
    Email: user.email,
    Phone: user.phone,
    Designation: user.designation,
    Permissions: user.permissions.join(', '),
    Password: '********', // hide original password
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(dataBlob, 'RegisteredUsers.xlsx');
};


  return (
    <>
      <Adminheader />
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      <div className="min-h-screen reg-div bg-gray-100 flex flex-col items-center py-8 px-1 font-sans">
        <div className="regiform py-5 sm:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto my-8 border border-gray-200 bg-secondary mt-5">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
            {editingIndex !== null ? 'Edit User' : 'Register Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 form">
            {/* Name */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Phone Number</label>
              <input
                type="tel"
                name="number"
                placeholder="10-digit number"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.number ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && <p className="text-red-600 text-xs mt-1">{errors.number}</p>}
            </div>

            {/* Password */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Designation */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="e.g. Manager, Developer"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.designation ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.designation}
                onChange={handleChange}
              />
              {errors.designation && <p className="text-red-600 text-xs mt-1">{errors.designation}</p>}
            </div>

            {/* Permissions */}
            <div className="my-2 px-3 w-50 d-flex flex-wrap">
              <label className="block text-sm fw-bold mb-1 mb-2 w-50">Department Permissions</label>
              <div className="grid grid-cols-2 gap-2">
                {departments.map((dept) => (
                  <label key={dept} className="inline-flex items-center space-x-2 ms-1">
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes(dept)}
                      onChange={() => handlePermissionChange(dept)}
                    />
                    <span className='ms-1'>{dept}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button type="submit" className="flex-1 bg-success text-white font-bold p-2 mt-5 rounded hover:bg-green-700">
                {editingIndex !== null ? 'Update User' : 'Register'}
              </button>
              {editingIndex !== null && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="flex-1 bg-warning text-white font-bold p-2 ms-1 rounded hover:bg-yellow-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Registered Users Table */}
        <div className="  mt-5  rounded-xl shadow-2xl w-full max-w-6xl mx-auto border border-gray-200 overflow-x-auto bg-secondary">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Registered Users</h2>
          {registeredUsers.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {registeredUsers.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-800">{user.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{user.email}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{user.phone}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{user.designation || '-'}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{user.permissions?.join(', ') || '-'}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">********</td>
                    <td className="py-3 px-4 text-sm">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-warning text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-danger text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="py-6 text-center text-gray-500 text-base">No registered users yet.</p>
          )}
        </div>

        {/* Download Button */}
        <button onClick={handleDownloadExcel} className="bg-success mt-3 text-white font-bold p-3 px-8 rounded-lg hover:bg-green-700">
          Download Excel
        </button>
      </div>
    </>
  );
}

export default Register;
