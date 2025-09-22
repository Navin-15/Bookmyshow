// import Carousel from "react-bootstrap/Carousel";
// import img1 from '/images/banner1.avif'
// import img2 from '/images/banner2.jpg'
// import img3 from '/images/banner3.avif'

// function Slider() {
//   return (
//     <Carousel className="car  py-2 ">

//       <Carousel.Item indicators={"false"} interval={3000} className="carousel-div">
       

//         <div className="px-3">
//             <img className="carousel-1" src={img1} alt="" />
//         </div>

//       </Carousel.Item>

//       <Carousel.Item interval={1000} className="carousel-div">
       
       
//         <div className="px-3"> 
//           <img className="carousel-1" src={img2} alt="" />
//         </div>
//       </Carousel.Item>

//       <Carousel.Item interval={1000} className="carousel-div">
       

//         <div className="px-3">
//           <img className="carousel-1" src={img3} alt="" />
//         </div>
//       </Carousel.Item>

//     </Carousel>
//   );
// }

// export default Slider;

//responsive code

// import Carousel from "react-bootstrap/Carousel";
// import img1 from '/images/banner1.avif';
// import img2 from '/images/banner2.jpg';
// import img3 from '/images/banner3.avif';
// import '../banner/Slider.css';

// function Slider() {
//   return (
//     <Carousel className=" car slider-carousel px-1" controls={true} indicators={true} fade={true}>
      
//         <Carousel.Item interval={3000} className="carousel-div w-100"  >
//         <img className="d-block w-100 slider-img carousel-1"  src={img1} alt="Slide 1"  />
//       </Carousel.Item>
      

//       <Carousel.Item interval={3000} className="carousel-div w-100" >
//         <img className="d-block w-100 slider-img carousel-1" src={img2} alt="Slide 2" />
//       </Carousel.Item>

//       <Carousel.Item interval={3000} className="carousel-div w-100" >
//         <img className="d-block w-100 slider-img carousel-1" src={img3} alt="Slide 3" />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;


import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { BannerContext } from "../Adminpanel/Banner/BannerContext";
import "../banner/Slider.css";

function Slider() {
  const { banners } = useContext(BannerContext);

  const enabledBanners = banners.filter((b) => b.enabled);

  return (
    <Carousel
      className="car slider-carousel px-1"
      controls={true}
      indicators={true}
      fade={true}
    >
      {enabledBanners.map((banner) => (
        <Carousel.Item
          key={banner.id}
          interval={2000}
          className="carousel-div w-100"
        >
          <img
            className="d-block w-100 slider-img carousel-1"
            src={banner.image}
            alt={banner.name}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;