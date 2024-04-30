import React from 'react'
import "./css/Transaction.css"

function Transaction() {
    return (
        <div className='container'>
            <div className="row income d-flex align-items-center my-2">
                <div className="col-6">
                    เงินเดือน
                </div>
                <div className="col-6 text-end">
                    25000
                </div>
            </div>
            <div className="row expense d-flex align-items-center my-2">
                <div className="col-6 ">
                    อาหาร :
                </div>
                <div className="col-6 text-end">
                    -5000
                </div>
            </div>
        </div>
    )
}

export default Transaction