// AdminLogin.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../AdminLogin/AdminLogin.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// function AdminLogin() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError('');

//     const validUsername = 'admin';
//     const validPassword = 'admin12345';

//     if (username === validUsername && password === validPassword) {
//       navigate('/dashboard');
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div className="adminlogin-background d-flex align-items-center justify-content-center vh-100">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6 col-lg-4">
//             <form onSubmit={handleLogin} className="adminlogin-form bg-white p-4 shadow rounded">
//               <h3 className="text-center mb-4">Admin Login</h3>

//               {error && <div className="alert alert-danger">{error}</div>}

//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   autoComplete="username"
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   autoComplete="current-password"
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary w-100">Login</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;

//og code 

// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../AdminLogin/AdminLogin.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { AuthContext } from '../AuthContext';

// function AdminLogin() {
//   const [usernameInput, setUsernameInput] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { setUsername } = useContext(AuthContext);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError('');

//     const validUsername = 'admin';
//     const validPassword = 'admin12345';

//     if (usernameInput === validUsername && password === validPassword) {
//       setUsername(usernameInput);
//       navigate('/dashboard');
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div className="adminlogin-background d-flex align-items-center justify-content-center vh-100">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6 col-lg-4">
//             <form onSubmit={handleLogin} className="adminlogin-form bg-white p-4 shadow rounded">
//               <h3 className="text-center mb-4">Admin Login</h3>

//               {error && <div className="alert alert-danger">{error}</div>}

//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Username"
//                   value={usernameInput}
//                   onChange={(e) => setUsernameInput(e.target.value)}
//                   autoComplete="username"
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   autoComplete="current-password"
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary w-100">Login</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AdminLogin;

//clone code for working

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AdminLogin/AdminLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../AuthContext';

function AdminLogin() {
  const [usernameInput, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUsername } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const validUsername = 'admin';
    const validPassword = 'admin12345';

    if (usernameInput === validUsername && password === validPassword) {
      setUsername(usernameInput);
      navigate('/dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="adminlogin-background d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <form onSubmit={handleLogin} className="adminlogin-form bg-white p-4 shadow rounded">
              <h3 className="text-center mb-4">Admin Login</h3>

              {error && <div className="alert alert-danger">{error}</div>}

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminLogin;


// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../AdminLogin/AdminLogin.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { AuthContext } from '../AuthContext';

// function AdminLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { setUsername } = useContext(AuthContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:5000/api/logins/login', { email, password });

//       // Save user info if needed
//       localStorage.setItem('user', JSON.stringify(res.data));

//       setUsername(res.data.name || res.data.email); // Update AuthContext
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed. Try again.');
//     }
//   };

//   return (
//     <div className="adminlogin-background d-flex align-items-center justify-content-center vh-100">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6 col-lg-4">
//             <form onSubmit={handleLogin} className="adminlogin-form bg-white p-4 shadow rounded">
//               <h3 className="text-center mb-4">Admin Login</h3>

//               {error && <div className="alert alert-danger">{error}</div>}

//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   autoComplete="username"
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   autoComplete="current-password"
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary w-100">Login</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;
