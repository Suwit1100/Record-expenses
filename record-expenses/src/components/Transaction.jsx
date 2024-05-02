import React from 'react'
import "./css/Transaction.css"

function Transaction(props) {
    const { Items } = props;
    return (
        <div className='container'>
            {Items.map((e) => {
                const status = e.amount > 0 ? "income" : "expense";
                const symbo = e.amount > 0 ? "+" : "-";
                return (
                    <div className={`row d-flex align-items-center my-2 ${status}`} key={e.id}>
                        <div className="col-6">
                            {e.title}
                        </div>
                        <div className="col-6 text-end">
                            {symbo}{Math.abs(e.amount)}
                        </div>
                    </div>
                );
            })}
        </div >
    )
}

export default Transaction