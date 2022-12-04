import React, { createContext, useContext, useState, useEffect} from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext;

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalItem, setTotalItem] = useState();
  const [totalQantities, setTotalQuantites] = useState();
  const [qty, setQty] = useState(1);

  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  )
}