// import React, { useState } from 'react';
// import Adminsidebar from '../AdminSide/Adminsidebar';
// import '../AdminHome/Adminhome.css'
// import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
// from 'react-icons/bs'
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
// from 'recharts';
// import Adminheader from '../AdminHead/Adminheader';

// function Adminhome() {

//      const data = [
//         {
//           name: 'Page A',
//           uv: 4000,
//           pv: 2400,
//           amt: 2400,
//         },
//         {
//           name: 'Page B',
//           uv: 3000,
//           pv: 1398,
//           amt: 2210,
//         },
//         {
//           name: 'Page C',
//           uv: 2000,
//           pv: 9800,
//           amt: 2290,
//         },
//         {
//           name: 'Page D',
//           uv: 2780,
//           pv: 3908,
//           amt: 2000,
//         },
//         {
//           name: 'Page E',
//           uv: 1890,
//           pv: 4800,
//           amt: 2181,
//         },
//         {
//           name: 'Page F',
//           uv: 2390,
//           pv: 3800,
//           amt: 2500,
//         },
//         {
//           name: 'Page G',
//           uv: 3490,
//           pv: 4300,
//           amt: 2100,
//         },
//       ];

//       const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//        const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (

//     <>
//     <div className="header">
//       <Adminheader />
//   </div>

//     <div className="sideside">
//         <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}  />
//       </div>

//    <main className='main-container ms-1 mt-1 ' style={{position:'absolute', left: '246px', top: '56px'}}>
//         <div className='main-title'>
//             <h3>DASHBOARD</h3>
//         </div>

//         <div className='main-cards'>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>PRODUCTS</h3>
//                     <BsFillArchiveFill className='card_icon'/>
//                 </div>
//                 <h1>300</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>CATEGORIES</h3>
//                     <BsFillGrid3X3GapFill className='card_icon'/>
//                 </div>
//                 <h1>12</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>CUSTOMERS</h3>
//                     <BsPeopleFill className='card_icon'/>
//                 </div>
//                 <h1>33</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>ALERTS</h3>
//                     <BsFillBellFill className='card_icon'/>
//                 </div>
//                 <h1>42</h1>
//             </div>
//         </div>

//         <div className='charts'>
//             <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//             }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pv" fill="#8884d8" />
//                 <Bar dataKey="uv" fill="#82ca9d" />
//                 </BarChart>
//             </ResponsiveContainer>

//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//                 >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>

//         </div>
//     </main>
 
//     </>
//   )
// }

// export default Adminhome



import React, { useState } from 'react';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import '../AdminHome/Adminhome.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Adminhome() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
    { name: 'Page F', uv: 2390, pv: 3800 },
    { name: 'Page G', uv: 3490, pv: 4300 },
  ];

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  return (
    <>
    
    <div className="admin-container d-flex">

        <div className="adminside">
          <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        </div> 

      <div className="admin-content flex-grow-1">
        <Adminheader />
      
        <main className="main-container p-5 bg-info">
          <div className="main-title mb-4">
            <h3 className="fw-bold text-dark">Dashboard</h3>
          </div>

          <div className="dashboard-boxes row g-4 mb-4 container">
            <div className="col-md-3">
              <div className="card h-100 text-white bg-primary shadow">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5>Products</h5>
                  <BsFillArchiveFill size={30} />
                </div>
                <div className="card-footer fs-4 fw-bold">300</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 text-white bg-success shadow">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5>Categories</h5>
                  <BsFillGrid3X3GapFill size={30} />
                </div>
                <div className="card-footer fs-4 fw-bold">12</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 text-white bg-warning shadow">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5>Customers</h5>
                  <BsPeopleFill size={30} />
                </div>
                <div className="card-footer fs-4 fw-bold">33</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 text-white bg-danger shadow">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5>Alerts</h5>
                  <BsFillBellFill size={30} />
                </div>
                <div className="card-footer fs-4 fw-bold">42</div>
              </div>
            </div>
          </div>

          <div className="row g-4 dashboard-bars ">
            <div className="col-lg-6">
              <div className="card shadow">
                <div className="card-header fw-bold">Bar Chart</div>
                <div className="card-body">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill="#8884d8" />
                      <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card shadow">
                <div className="card-header fw-bold">Line Chart</div>
                <div className="card-body">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>  
    </>
  );
}

export default Adminhome;
