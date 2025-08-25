import React, { createContext, useState } from 'react';

export const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);

  return (
    <BannerContext.Provider value={{ banners, setBanners }}>
      {children}
    </BannerContext.Provider>
  );
};
