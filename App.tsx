import React from 'react';
import {ScrollView} from 'react-native';
import Header from './src/components/Header';
import Home from './src/pages/Home';

const App = () => {
  return (
    <ScrollView>
      <Header />
      <Home />
    </ScrollView>
  );
};

export default App;
