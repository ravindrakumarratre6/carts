import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OrderPage from './components/OrderPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/orders" element={<OrderPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
