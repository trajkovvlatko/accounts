import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SelectUser from './pages/SelectUser';
import Account from './pages/Account';
import Update from './pages/Update';
import {NativeRouter, Routes, Route} from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <StatusBar />
        <Routes>
          <Route path="/" element={<SelectUser />} />
          <Route path="/account/:userId" element={<Account />} />
          <Route
            path="/account/:userId/update/:action/:id"
            element={<Update />}
          />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
};
export default App;
