import { View, Text } from 'react-native';
import React from 'react';
import MainScreen from './MainScreen';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <MainScreen />
    </Provider>
  );
};

export default App
