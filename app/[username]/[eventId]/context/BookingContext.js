'use client';

import { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [yourDate, setYourDate] = useState(null);
  const [yourTime, setYourTime] = useState(null);

  return (
    <BookingContext.Provider value={{yourDate, setYourDate, yourTime, setYourTime}}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
