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
import DataContext from './data/DataContext';


function App() {

  const Initdata = []
  const [items, SetItems] = useState(Initdata)
  const [sumIncome, setsumIncome] = useState(0);
  const [sumExpense, setsumExpense] = useState(0);
  // เพิ่มข้อมูล
  const AddItem = (newItem) => {
    console.log(newItem);
    SetItems((preitems => {
      return [newItem, ...preitems]
    }));
  }

  // รวมค่า income expense
  useEffect(() => {
    console.log("Effact App");
    const amount = items.map((items) => items.amount);
    const income = amount.filter((e) => e > 0).reduce((total, e) => (total += e), 0)
    const expense = amount.filter((e) => e < 0).reduce((total, e) => (total += e), 0)
    console.log(items, income);
    setsumIncome(income);
    setsumExpense(Math.abs(expense));
  }, [items, sumIncome, sumExpense]);

  return (
    <DataContext.Provider value={{ sumIncome: sumIncome, sumExpense: sumExpense }}>
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
                <Forminsert ItemSubmit={AddItem}></Forminsert>
                <Transaction Items={items}></Transaction>
              </>
            }>
            </Route>
          </Routes>
        </Router>
      </div>
    </DataContext.Provider >
  )
}

export default App
