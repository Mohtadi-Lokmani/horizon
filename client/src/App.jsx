

import { Route, Routes } from "react-router-dom"
import Header from "./components/common/header/Header"
import Home from "./Page/Home"
import Diplome from "./Page/Diplome"
import Contact from "./Page/Contact"
import Continue from "./Page/continue"
import Footer from "./components/common/footer/Footer"
import "./App.css"
import EntrePrise from "./Page/EntrePrise"
import Login from "./Page/Login"
import Dashboard from "./Page/Dashboard"
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
     
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Diplome" element={<Diplome />} />
          <Route path="/Continue" element={<Continue />} />
          <Route path="/entreprise" element={<EntrePrise />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard/*" element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
      />
        </Routes>
     
      </div>
    </>
  )
}

export default App