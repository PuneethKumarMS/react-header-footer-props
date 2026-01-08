import React from "react";
import Header from "./components/Header"; /* folder/files */
import Footer from "./components/Footer";
import './App.css'; /*styles*/

function App() {
  return(
  <div className="container">
    <Header title="My React App" />
    <Footer tagline="Learning React Props &copy; 2025 My Website, All rights reserved."/>
  </div>
  );
}
export default App;
