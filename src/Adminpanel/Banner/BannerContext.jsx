
// import React, { createContext, useState } from "react";

// export const BannerContext = createContext();

// export const BannerProvider = ({ children }) => {
//   const [banners, setBanners] = useState([
//     { id: 1, name: "Banner 1", image: "/images/banner1.avif", enabled: true },
//     { id: 2, name: "Banner 2", image: "/images/banner2.jpg", enabled: true },
//     { id: 3, name: "Banner 3", image: "/images/banner3.avif", enabled: false },
//   ]);

//   return (
//     <BannerContext.Provider value={{ banners, setBanners }}>
//       {children}
//     </BannerContext.Provider>
//   );
// };

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);

  const fetchBanners = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/banners");
      setBanners(res.data);
    } catch (error) {
      console.error("Error fetching banners in context", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <BannerContext.Provider value={{ banners, setBanners, fetchBanners }}>
      {children}
    </BannerContext.Provider>
  );
};

