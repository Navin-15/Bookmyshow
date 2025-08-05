

// import React, { useState } from 'react';
// import '../Theaterdetails/AdminCategories.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Adminsidebar from '../AdminSide/Adminsidebar';

// function AdminCategories() {
//   const [enabled, setEnabled] = useState(false);

//   return (

// <>

//       <div className="sideside">
//         <Adminsidebar/>
//       </div>

//     <div className="categories-container  bg-warning rounded ">
//       <h3 className="mb-3 text-capitalize text-center border border-black">Categories</h3>

//       <div className="btn-group mb-4 w-25 controllbuttons " role="group">
//         <button
//           className={`btn ${enabled ? 'btn-primary' : 'btn-outline-primary'}`}
//           onClick={() => setEnabled(true)}
//         >
//           Enable
//         </button>
//         <button
//           className={`btn ${!enabled ? 'btn-primary' : 'btn-outline-primary'}`}
//           onClick={() => setEnabled(false)}
//         >
//           Disable
//         </button>
//       </div>

//       <div className="category-group  theatertype ">
//         <h3 className='text-center'>Theater Type</h3>
//         <span className="form-check me-4 ms-3">
//           <input
//             className="form-check-input ms-5"
//             type="checkbox"
//             id="ac"
//             disabled={!enabled}
//           />
//           <label className="form-check-label ms-2" htmlFor="ac">
//             AC
//           </label>
//         </span>
//         <span className="form-check ms-3">
//           <input
//             className="form-check-input ms-5"
//             type="checkbox"
//             id="non-ac"
//             disabled={!enabled}
//           />
//           <label className="form-check-label ms-2" htmlFor="non-ac">
//             Non-AC
//           </label>
//         </span>
//       </div>

//       <div className="category-group movietype">
//         <h3 className='text-center'>Movie Type</h3>
//         <span className="form-check  me-4  ms-5">
//           <input
//             className="form-check-input ms-4 "
//             type="checkbox"
//             id="2d"
//             disabled={!enabled}
//           />
//           <label className="form-check-label ms-2" htmlFor="2d">
//             2D
//           </label>
//         </span>
//         <span className="form-check  ms-4">
//           <input
//             className="form-check-input ms-5"
//             type="checkbox"
//             id="3d"
//             disabled={!enabled}
//           />
//           <label className="form-check-label ms-2" htmlFor="3d">
//             3D
//           </label>
//         </span>
//       </div>
//     </div>
//   </>
//   );
// }

// export default AdminCategories;


