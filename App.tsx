import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SelectUser from './pages/SelectUser';
import Account from './pages/Account';
import Update from './pages/Update';
import {NativeRouter, Routes, Route} from 'react-router-native';
import CurrentUserContextProvider from './contexts/CurrentUserContext';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <CurrentUserContextProvider>
          <StatusBar />
          <Routes>
            <Route path="/" element={<SelectUser />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/update/:action" element={<Update />} />
          </Routes>
        </CurrentUserContextProvider>
      </SafeAreaView>
    </NativeRouter>
  );
};
export default App;
