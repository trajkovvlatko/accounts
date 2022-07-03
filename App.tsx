import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Home from './pages/Home';
import {NativeRouter, Routes, Route} from 'react-router-native';
import AddExpense from './pages/AddExpense';
import AddSalary from './pages/AddSalary';
import Account from './pages/Account';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/add-expense/:id" element={<AddExpense />} />
            <Route path="/add-salary/:id" element={<AddSalary />} />
          </Routes>
        </ScrollView>
      </SafeAreaView>
    </NativeRouter>
  );
};
export default App;
