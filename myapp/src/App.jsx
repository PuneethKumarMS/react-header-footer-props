import React from "react";
import Header from "./components/Header"; //importing folders/files
import Footer from "./components/Footer";
import './App.css'; // CSS properties file

function App() {
  return(
  <div className="container">
    <Header title="My React App" />
    <Footer tagline="Learning React Props &copy; 2025 My Website, All rights reserved."/>
  </div>
  );
}
export default App;
