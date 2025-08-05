// import { RiCloseFill } from "react-icons/ri";
// import Googlelogo from "/images/googlelogo.svg"
// import Email from "/images/email.svg"
// import { FaApple } from "react-icons/fa";
// import Indianflag from "/images/indianflag.svg"
// import { useNavigate } from 'react-router-dom';



// function Login() {
// const navigate = useNavigate();

// const GoBack = () => {
//     window.scrollTo(0, 0);
//      navigate(-1);
//   };

//   return (
//     <>
//         <div className="login-main-div ">
//             <div className="login-div "> 
//                 <div className=" empty-div  ">
                    
//                     <div className="content-div ">

//                         <div className="get-started-div get">
//                             <div className="getstart">
//                                 Get started
//                             </div>
//                             <div className="cls ">
//                                 <div className="cls-2">
//                                     <RiCloseFill  className='clo' onClick={GoBack}/>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="continue-section  ">
//                                 <div className="continue-with-parent ">

//                                     <div className="continue-with-child-one ">
                                        
//                                         <div className="continue-with-grandchild ">

//                                             <div className="continue-with-grandchild-1 ">
//                                                 <div className="continue-with-grandchild-1-1 ">
//                                                     <div className="continue-with-google-div ">
//                                                         <span className='continue-with-google-text'>
//                                                             <span className='google-logo-span '>
//                                                                 <img className='google-logo' src={Googlelogo} alt="google" />
//                                                             </span>
//                                                         </span>
//                                                         Continue with Google
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="continue-with-grandchild-1">
//                                                 <div className="continue-with-grandchild-1-1">
//                                                     <div className="continue-with-google-div ">
//                                                         <span className='continue-with-google-text '>
//                                                             <span className='google-logo-span '>
//                                                                 <img className='google-logo' src={Email} alt="email" />
//                                                             </span>
//                                                         </span>
//                                                         Continue with Email
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="continue-with-grandchild-1 ">
//                                                 <div className="continue-with-grandchild-1-1">
//                                                     <div className="continue-with-google-div ">
//                                                         <span className='continue-with-google-text '>
//                                                             <span className='google-logo-span '>
//                                                                 <FaApple className='apple-icon' />
//                                                             </span>
//                                                         </span>
//                                                         Continue with apple
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                         </div>

//                                     </div>

//                                 </div>

//                                 <div className="continue-with-child-two ">

//                                         <div className="or-div ">OR</div>
//                                 </div>

//                                 <form className="form-parent ">
//                                 <div className="form-child-1 ">
//                                     <div className="form-grand-child-1 ">

//                                         <div className="indian-flag-div ">
//                                             <img className='indian-flg ' src={Indianflag} alt="" />
//                                         </div>

//                                         <div className="ninetyone-text ">+91</div>

//                                         <div className="input-box">
//                                             <div className="input-div ">
//                                                 <label className='lable ' htmlFor=""></label>
//                                                 <input className='in-put ' type="tel" placeholder='Continue with mobile number' /> 
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="form-child-2 ">
//                                     <div className="i-agree-div ">
//                                         I agree to the &nbsp;
//                                         <a className='terms-policy' href="">Terms & Conditions</a> 
//                                         &nbsp; & &nbsp;
//                                         <a className='terms-policy' href="">Privacy policy</a>
//                                     </div>
//                                 </div>
//                         </form>

//                         </div>
                                                                       
//                     </div>

//                 </div>

//             </div>
//         </div>
//     </>
//   )
// }

// export default Login


import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Simple hardcoded credentials (replace with backend validation)
        const validEmail = 'user@gmail.com';
        const validPassword = 'password';

        if (email === validEmail && password === validPassword) {
            // Save login status
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', name); // Optional: store name if needed

            // Get redirect target and booking data if available
            const redirectTo = location.state?.redirectTo || '/';
            const bookingData = location.state?.bookingData || null;

            // Redirect after login
            navigate(redirectTo, { state: bookingData });
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className='bg-secondary py-5'>
            {/* <h2>Login Page</h2> */}
            <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px',backgroundColor: ''}}>
                <h2 className="mb-4 text-center text-light fw-bold">Login</h2>
                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <label className='text-light'>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className='text-light' >Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className='text-light' >Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
