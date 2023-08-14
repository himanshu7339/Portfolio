import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Header  from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
     <>
     <Header/>
     <Home/>
     <Footer/>
     </>
  )
}

export default App;
