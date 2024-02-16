import React from 'react';
import { NetInfoProvider } from './src/components/NetInfo/NetInfo';
import MainNavigator from './src/MainNavigator'; 

const App = () => {
  return (
    <NetInfoProvider>
      <MainNavigator />
    </NetInfoProvider>
  );
};

export default App;