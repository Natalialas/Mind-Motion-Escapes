import React from "react";
import { Route, Routes } from "react-router-dom";
// import Header from './components/layout/Header/Header';
// import Footer from './components/layout/Footer/Footer'
import HomePage from './components/views/HomePage/HomePage'

function App() {
  return (
    <main>
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      {/* <Footer /> */}
   </main>
  );
}

export default App;
