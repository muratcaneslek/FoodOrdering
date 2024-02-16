import React, { createContext, useState, useEffect, useContext } from "react";
import NetInfo from "@react-native-community/netinfo";

const NetInfoContext = createContext();

export const NetInfoProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const connect = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => connect();
  }, []);

  return (
    <NetInfoContext.Provider value={{ isConnected }}>
      {children}
    </NetInfoContext.Provider>
  );
};

export const useNetInfo = () => {
  return useContext(NetInfoContext);
};
