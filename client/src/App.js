import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './components/views/HomePage/HomePage'
import SingleProduct from "./components/views/SingleProduct/SingleProduct";
import Footer from "./components/layout/Footer/Footer";
import TopBar from "./components/layout/TopBar/TopBar";

function App() {
  return (
    <main>
      <TopBar></TopBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours/:id" element={<SingleProduct />} />
        </Routes>
      <Footer />
   </main>
  );
}

export default App;
