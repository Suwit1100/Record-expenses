import React from 'react'
import "./css/Summaryexpemses.css"

function Summaryexpenses() {
    return (
        <>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="box-income form-control text-center d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col-12">
                                รายรับ
                            </div>
                            <div className="col-12">
                                50000
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box-expense form-control text-center d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col-12">
                                รายจ่าย
                            </div>
                            <div className="col-12">
                                4000
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center mt-3">
                    <h4 className='m-0'>ยอดคงเหลือ : 3500</h4>
                </div>
            </div>
        </>
    )
}

export default Summaryexpenses