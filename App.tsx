import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Home from './pages/Home';
import {NativeRouter, Routes, Route} from 'react-router-native';
import AddExpense from './pages/AddExpense';
import AddSalary from './pages/AddSalary';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <StatusBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expense/:id" element={<AddExpense />} />
          <Route path="/add-salary/:id" element={<AddSalary />} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
};
export default App;
