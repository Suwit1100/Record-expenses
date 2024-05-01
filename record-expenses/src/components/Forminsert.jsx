import React, { useState } from 'react'


function Forminsert() {
    const [title, SetTitle] = useState("")
    const [amount, SetAmount] = useState(0)

    const eventitle = (e) => {
        console.log(e.target.value);
        SetTitle(e.target.value)
    }

    const evenamount = (e) => {
        console.log(e.target.value);
        SetAmount(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        const Itemdata = {
        }
    }



    return (
        <>
            <form onSubmit={submit}>
                <input type="text" placeholder='ชื่อรายการ' className='form-control my-2' onChange={eventitle} />
                <input type="text" placeholder='จำนวนเงิน' className='form-control my-2' onChange={evenamount} />
                <input type="submit" className='form-control btn btn-success' value={"บันทึกรายการ"} />
            </form>
        </>
    )
}

export default Forminsert