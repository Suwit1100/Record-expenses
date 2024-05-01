import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Title from './components/Title';
import Summaryexpensess from './components/Summaryexpenses';
import Forminsert from './components/Forminsert';
import Transaction from './components/Transaction';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <>
      <div className="container mb-5">
        <Title></Title>
        <Router>
          <div className="row mt-4 mb-5">
            <div className="col-6 text-center align-items-center">
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "btn btn-outline-success form-control active" : "btn btn-outline-success form-control"
              }>สรุปยอด</NavLink>
            </div>
            <div className="col-6 text-center align-items-center">
              <NavLink to="/insert" className={({ isActive }) =>
                isActive ? "btn btn-outline-success form-control active" : "btn btn-outline-success form-control"
              }>เพิ่มรายการ</NavLink>
            </div>
          </div>
          <Routes>
            <Route path='/' element={
              <Summaryexpensess></Summaryexpensess>
            }>
            </Route>
            <Route path='/insert' element={
              <>
                <Forminsert></Forminsert>
                <Transaction></Transaction>
              </>
            }>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
