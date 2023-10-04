// import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Registration_form from "./components/Registration_form";
import Home from "./components/Home";

function App() {

  // const urlr = import.meta.env.VITE_REGION;
  return (
    
    <BrowserRouter>
    <Link to={"form"}>
      change
    </Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="form" element={<Registration_form/>}/>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
