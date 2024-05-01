import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Forminsert(props) {
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
            id: uuidv4(),
            title: title,
            amount: amount
        }
        props.ItemSubmit(Itemdata);
        SetTitle("");
        SetAmount(0);
    }



    return (
        <>
            <form onSubmit={submit}>
                <input type="text" placeholder='ชื่อรายการ' className='form-control my-2' onChange={eventitle} value={title} />
                <input type="text" placeholder='จำนวนเงิน' className='form-control my-2' onChange={evenamount} value={amount} />
                <input type="submit" className='form-control btn btn-success' value={"บันทึกรายการ"} />
            </form>
        </>
    )
}

export default Forminsert