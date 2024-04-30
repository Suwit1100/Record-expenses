import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function LinkTo() {
    return (
        <Router>
            <div className="row mt-4 mb-2">
                <div className="col-6 text-center align-items-center">
                    <Link to="/" className='btn btn-outline-success form-control '>สรุปยอด</Link>
                </div>
                <div className="col-6 text-center align-items-center">
                    <Link to="/insert" className='btn btn-outline-success form-control '>เพิ่มรายการ</Link>
                </div>
            </div>
        </Router>

    )
}

export default LinkTo