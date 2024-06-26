import React from 'react'
import "./css/Summaryexpemses.css"
import DataContext from "../data/DataContext";
import { useContext } from 'react';
function Summaryexpenses() {
    const { sumIncome, sumExpense } = useContext(DataContext);
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };

    return (
        <>
            <div className="row mt-3">
                <div className="col-12 mb-3">
                    <div className="box-expense form-control text-center d-flex align-items-center justify-content-center">
                        <h4>
                            ยอดคงเหลือ : {formatNumber(sumIncome - sumExpense)}
                        </h4>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box-income form-control text-center d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col-12">
                                รายรับ
                            </div>
                            <div className="col-12">
                                {formatNumber(sumIncome)}
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
                            <div className="col-12 ">
                                {formatNumber(sumExpense)}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Summaryexpenses