import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import Dashboard from "./pages/Dashboard";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <Routers>
          <Router path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routers>
        <Footer/>
    </>
  )
}

export default App
