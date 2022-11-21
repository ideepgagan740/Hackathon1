// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Uploadcertificate from './components/Uploadcertificate';
import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/uploadcertificate" element={<Uploadcertificate />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
