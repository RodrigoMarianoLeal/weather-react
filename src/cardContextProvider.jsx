import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export default function CardContextProvider({ children }) {

  const [cardInfo, setCardInfo] = useState({});
 
  return (
    <CardContext.Provider value={[cardInfo, setCardInfo]}>
      {children}
    </CardContext.Provider>
  );
}
