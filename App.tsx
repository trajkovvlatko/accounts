import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './pages/Home';
import Update from './pages/Update';
import {NativeRouter, Routes, Route} from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <StatusBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:action/:id" element={<Update />} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
};
export default App;
