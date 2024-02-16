import React from 'react';
import { NetInfoProvider } from './src/components/NetInfo/NetInfo'; // Yolunuza göre düzenleyin
import MainNavigator from './src/MainNavigator'; // Yolunuza göre düzenleyin

const App = () => {
  return (
    <NetInfoProvider>
      <MainNavigator />
    </NetInfoProvider>
  );
};

export default App;