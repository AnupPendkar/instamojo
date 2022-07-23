import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import AmountAndPurposePage from './pages/amount and purpose page/AmountAndPurposePage';
import DetailsPage from './pages/details page/DetailsPage';
import Payment from './pages/payment page/Payment';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './userContext';
import { useState } from 'react';

function App() {
  const [purpose, setPurpose] = useState("Gift");
  const [amount, setAmount] = useState(10);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Navbar/>
          <UserContext.Provider value={{purpose, setPurpose, amount, setAmount}}>
            <Routes>
              <Route path="/" element={<AmountAndPurposePage />} />
              <Route path="/user-details" element={<DetailsPage />} />
              <Route path="/payment-methods" element={<Payment/>} />
            </Routes>
          </UserContext.Provider>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
