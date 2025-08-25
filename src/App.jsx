
import React, { useState } from 'react'
import './App.css';
import './cat/Categories.css';
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import './topend/Navbar.css';
import Navbar from './topend/Navbar';
import Innerinput from './insidenav/Innerinput';
import Categories from './cat/Categories';
import './banner/Slider.css';
import Slider from './banner/Slider';

import Cities from './insidenav/Cities';
import Login from './Login';
// import Login from './insidenav/Login';
import RecomendedMovies from './moviecat/RecomendedMovies';

import Rms from './sections/Rms';
import './moviesdetails/Retromoviedetails.css';
import Tfms from './sections/Tfms';
import './moviesdetails/Touristfamily.css';
import Hms from './sections/Hms';
import './moviesdetails/Hit.css';
import Tbms from './sections/Tbms';
import './moviesdetails/Thunderbolts.css';
import Tms from './sections/Tms';
import './moviesdetails/Thunderbolts.css';

import RetroBuytickets from './theaterselection/RetroBuytickets';
import TouristfamilyBuytickets from './theaterselection/TouristfamilyBuytickets';
import HitBuytickets from './theaterselection/HitBuytickets';
import ThunderboltsBuytickets from './theaterselection/ThunderboltsBuytickets';
import ThodarumBuytickets from './theaterselection/ThodarumBuytickets';

import Comedyshow from './events/Comedyshow';
import Comedyshowinner from './eventsinner/Comedyshowinner';

import Survivorcult from './eventsinner/eventdetails/Survivorcult';

import Sevenplusone from './eventsinner/eventdetails/Sevenplusone';
import Makkamishi from './eventsinner/eventdetails/Makkamishi';

import Extraordinary from './eventsinner/eventdetails/Extraordinary';
import Kisiko from './eventsinner/eventdetails/Kisiko';
import Letsdomakka from './eventsinner/eventdetails/Letsdomakka';
import Eightbypraveen from './eventsinner/eventdetails/Eightbypraveen';

import Movieseatselection from './loading/Movieseatselection';

// Retro seat selection

import RetroCosmoscinema from './Numberofseats/Retroseatlayout/RetroCosmoscinema';
import RetroKarpagamcinema from './Numberofseats/Retroseatlayout/RetroKarpagamcinema';
import RetroMurugancinema from './Numberofseats/Retroseatlayout/RetroMurugancinema';
import RetroKalpanacinema from './Numberofseats/Retroseatlayout/RetroKalpanacinema';



// Touristfamily seat selection

import TouristCosmoscinema from './Numberofseats/Touristfamilyseatlayout/TouristCosmoscinema';
import TouristKarpagamcinema from './Numberofseats/Touristfamilyseatlayout/TouristKarpagamcinema';
import TouristMurugancinema from './Numberofseats/Touristfamilyseatlayout/TouristMurugancinema';
import TouristKalpanacinema from './Numberofseats/Touristfamilyseatlayout/TouristKalpanacinema';



// Hit seat selection

import HitCosmoscinema from './Numberofseats/Hitseatlayout/HitCosmoscinema';
import HitKarpagamcinema from './Numberofseats/Hitseatlayout/HitKarpagamcinema';
import HitMurugancinema from './Numberofseats/Hitseatlayout/HitMurugancinema';
import HitKalpanacinema from './Numberofseats/Hitseatlayout/HitKalpanacinema';



// Thunderbolts seat selection

import ThunderboltsCosmoscinema from './Numberofseats/Thunderboltsseatlayout/ThunderboltsCosmoscinema';
import ThunderboltsKarpagamcinema from './Numberofseats/Thunderboltsseatlayout/ThunderboltsKarpagamcinema';
import ThunderboltsMurugancinema from './Numberofseats/Thunderboltsseatlayout/ThunderboltsMurugancinema';
import ThunderboltsKalpanacinema from './Numberofseats/Thunderboltsseatlayout/ThunderboltsKalpanacinema';



// Thodarum seat selection

import ThodarumCosmoscinema from './Numberofseats/Thodarumseatlayout/ThodarumCosmoscinema';
import ThodarumKarpagamcinema from './Numberofseats/Thodarumseatlayout/ThodarumKarpagamcinema';
import ThodarumMurugancinema from './Numberofseats/Thodarumseatlayout/ThodarumMurugancinema';
import ThodarumKalpanacinema from './Numberofseats/Thodarumseatlayout/ThodarumKalpanacinema';

import Footer from './footer/Footer';


import BookingSummaryPage from './Bookingsummary/BookingSummaryPage.jsx';


//--------Adminpanel 
import { AuthProvider } from '../src/Adminpanel/AuthContext.jsx';
import { UserProvider } from '../src/Adminpanel/UserContext.jsx';

import Adminhome from './Adminpanel/AdminHome/Adminhome.jsx'
// import Register from './Adminpanel/Register/Register.jsx'
import Newtheater from './Adminpanel/Theaterdetails/Newtheater.jsx';
import Managemovie from './Adminpanel/moviemanager/Managemovie.jsx';
import Newmovie from './Adminpanel/moviemanager/Newmovie.jsx';
import AdminLogin from './Adminpanel/AdminLogin/AdminLogin.jsx';
import Newuser from './Adminpanel/User/Newuser.jsx';
import Manageuser from './Adminpanel/User/Manageuser.jsx';
import ManageTheater from './Adminpanel/Theaterdetails/Managetheater.jsx';
import { TheaterProvider } from './Adminpanel/Theaterdetails/TheaterContext.jsx';
import { MovieProvider } from './Adminpanel/moviemanager/MovieContext.jsx';
import { BannerProvider } from './Adminpanel/Banner/BannerContext.jsx';
import Newbanner from './Adminpanel/Banner/Newbanner.jsx';
import Managebanner from './Adminpanel/Banner/Managebanner.jsx';
// import ManageCustomer from './Adminpanel/ManageCustomer.jsx';


function Home() {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }

  return (
   <>
      
 
        {/* <div className="grid-container "> */}

          {/* <Adminheader OpenSidebar={OpenSidebar}/>
          <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
          <Adminhome/> */}

         {/* </div> */}

      <Navbar/>
      <Categories/>
      <Slider/>
      <RecomendedMovies/>    
      {/* <Comedyshow/>   */}
      <Footer/>
     
  </>
  );
}

function App (){
  return (
    <>
      
  <AuthProvider>  
   <BrowserRouter>

 <BannerProvider>  
  <MovieProvider>    
    <TheaterProvider>
      <UserProvider> 
        <Routes>

          {/*Adminlogin*/}

            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Adminhome />} /> 
            <Route path="/newuser" element={<Newuser />} /> 
            <Route path="/manageuser" element={<Manageuser />} />
            <Route path="/newtheater" element={<Newtheater />} />
            <Route path="/managetheater" element={<ManageTheater />} />
            <Route path="/newmovie" element={<Newmovie />} />  
            <Route path="/managemovie" element={<Managemovie />} />  
            <Route path="/newbanner" element={<Newbanner />} />  
            <Route path="/managebanner" element={<Managebanner />} />  
            {/* <Route path="/managecustomer" element={<ManageCustomer />} /> */}

          {/*Adminlogin*/}




            <Route path='/' element={<Home />} />
            <Route path='innerinput' element={<Innerinput />} />
            <Route path='cities' element={<Cities />} />
            <Route path='login' element={<Login />} />    

            {/* sections */}  

            <Route path='retro' element={<Rms />} />
            <Route path='touristfamily' element={<Tfms />} />
            <Route path='hit' element={<Hms />} />
            <Route path='thunderbolts' element={<Tbms />} />
            <Route path='thodarum' element={<Tms />} />

            {/* theaterselection */}

            <Route path='retro/buytickets' element={<RetroBuytickets />} />
            <Route path='touristfamily/buytickets' element={<TouristfamilyBuytickets />} />
            <Route path='hit/buytickets' element={<HitBuytickets />} />
            <Route path='thunderbolts/buytickets' element={<ThunderboltsBuytickets />} />
            <Route path='thodarum/buytickets' element={<ThodarumBuytickets />} />

            {/* seatselection */}

            {/* <Route path='retro/buytickets/cosmosseatselection' element={<Retrocosmos/>} />
            <Route path='retro/buytickets/karpagamseatselection' element={<Retrokarpagam/>} />
            <Route path='retro/buytickets/muruganseatselection' element={<Retromurugan/>} />
            <Route path='retro/buytickets/kalpanaseatselection' element={<Retrokalpana/>} /> */}

            {/* <Route path='touristfamily/buytickets/cosmosseatselection' element={<Touristcosmos/>} />
            <Route path='touristfamily/buytickets/karpagamseatselection' element={<Touristkarpagam/>} />
            <Route path='touristfamily/buytickets/muruganseatselection' element={<Touristmurugan/>} />
            <Route path='touristfamily/buytickets/kalpanaseatselection' element={<Touristkalpana/>} /> */}

            {/* <Route path='hit/buytickets/cosmosseatselection' element={<Hitcosmos/>} />
            <Route path='hit/buytickets/karpagamseatselection' element={<Hitkarpagam/>} />
            <Route path='hit/buytickets/muruganseatselection' element={<Hitmurugan/>} />
            <Route path='hit/buytickets/kalpanaseatselection' element={<Hitkalpana/>} /> */}

            {/* <Route path='thunderbolts/buytickets/cosmosseatselection' element={<Thunderboltscosmos/>} />
            <Route path='thunderbolts/buytickets/karpagamseatselection' element={<Thunderboltskarpagam/>} />
            <Route path='thunderbolts/buytickets/kalpanaseatselection' element={<Thunderboltskalpana/>} />
            <Route path='thunderbolts/buytickets/muruganseatselection' element={<Thunderboltsmurugan/>} /> */}

            {/* <Route path='thodarum/buytickets/cosmosseatselection' element={<Thodarumcosmos/>} />
            <Route path='thodarum/buytickets/karpagamseatselection' element={<Thodarumkarpagam/>} />
            <Route path='thodarum/buytickets/kalpanaseatselection' element={<Thodarumkalpana/>} />
            <Route path='thodarum/buytickets/muruganseatselection' element={<Thodarummurugan/>} /> */}


            {/* <Route path='touristfamily/buytickets/seatselection' element={<Movieseatselection/>} />
            <Route path='hit/buytickets/seatselection' element={<Movieseatselection/>} />
            <Route path='thunderbolts/buytickets/seatselection' element={<Movieseatselection/>} />
            <Route path='thodarum/buytickets/seatselection' element={<Movieseatselection/>} /> */}

            {/* seatlayout */}
            
          
            <Route path='retro/buytickets/Cosmoscinemaseatlayout' element={<RetroCosmoscinema/>} />
            <Route path='retro/buytickets/Karpagamcinemaseatlayout' element={<RetroKarpagamcinema/>} />
            <Route path='retro/buytickets/Murugancinemaseatlayout' element={<RetroMurugancinema/>} />
            <Route path='retro/buytickets/Kalpanacinemaseatlayout' element={<RetroKalpanacinema/>} />

            <Route path='touristfamily/buytickets/Cosmoscinemaseatlayout' element={<TouristCosmoscinema/>} />
            <Route path='touristfamily/buytickets/Karpagamcinemaseatlayout' element={<TouristKarpagamcinema/>} />
            <Route path='touristfamily/buytickets/Murugancinemaseatlayout' element={<TouristMurugancinema/>} />
            <Route path='touristfamily/buytickets/Kalpanacinemaseatlayout' element={<TouristKalpanacinema/>} />

            <Route path='hit/buytickets/Cosmoscinemaseatlayout' element={<HitCosmoscinema/>} />
            <Route path='hit/buytickets/Karpagamcinemaseatlayout' element={<HitKarpagamcinema/>} />
            <Route path='hit/buytickets/Murugancinemaseatlayout' element={<HitMurugancinema/>} />
            <Route path='hit/buytickets/Kalpanacinemaseatlayout' element={<HitKalpanacinema/>} />

            <Route path='thunderbolts/buytickets/Cosmoscinemaseatlayout' element={<ThunderboltsCosmoscinema/>} />
            <Route path='thunderbolts/buytickets/Karpagamcinemaseatlayout' element={<ThunderboltsKarpagamcinema/>} />
            <Route path='thunderbolts/buytickets/Murugancinemaseatlayout' element={<ThunderboltsMurugancinema/>} />
            <Route path='thunderbolts/buytickets/Kalpanacinemaseatlayout' element={<ThunderboltsKalpanacinema/>} />

            <Route path='thodarum/buytickets/Cosmoscinemaseatlayout' element={<ThodarumCosmoscinema/>} />
            <Route path='thodarum/buytickets/Karpagamcinemaseatlayout' element={<ThodarumKarpagamcinema/>} />
            <Route path='thodarum/buytickets/Murugancinemaseatlayout' element={<ThodarumMurugancinema/>} />
            <Route path='thodarum/buytickets/Kalpanacinemaseatlayout' element={<ThodarumKalpanacinema/>} />

            <Route path="/booking-summary" element={<BookingSummaryPage />} />

            {/* <Route path="/seatlayout" element={<HitCosmoscinema />} /> */}
            
            {/* events */}

            <Route path='events/comedyshow' element={<Comedyshowinner />} />

            {/* events */}
            
            <Route path='events/comedyshow/survivorcult' element={<Survivorcult />} />
            <Route path='events/comedyshow/sevenplusone' element={<Sevenplusone />} />
            <Route path='events/comedyshow/makkamishi' element={<Makkamishi />} />
            <Route path='events/comedyshow/extraordinary' element={<Extraordinary />} />
            <Route path='events/comedyshow/kisiko' element={<Kisiko/>} />
            <Route path='events/comedyshow/letsdomakka' element={<Letsdomakka/>} />
            <Route path='events/comedyshow/eightbypraveen' element={<Eightbypraveen/>} />



        </Routes>
      </UserProvider>
    </TheaterProvider>
  </MovieProvider>
</BannerProvider> 
 </BrowserRouter>
</AuthProvider>            


  </>
)

}
  export default App;