import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Forminsert(props) {
    const [title, SetTitle] = useState("");
    const [amount, SetAmount] = useState(0);
    const [valid, SetValid] = useState(true);

    const eventitle = (e) => {
        console.log(e.target.value);
        SetTitle(e.target.value);
    }

    const evenamount = (e) => {
        console.log(e.target.value);
        SetAmount(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        const Itemdata = {
            id: uuidv4(),
            title: String(title),
            amount: Number(amount)
        };
        props.ItemSubmit(Itemdata);
        SetTitle("");
        SetAmount(0);
    }

    useEffect(() => {
        console.log("Call use Effect");
        if (amount != 0 && title.trim().length > 0) {
            SetValid(false);
        } else {
            SetValid(true);
        }
    }, [amount, title]);



    return (
        <>
            <form onSubmit={submit}>
                <input type="text" placeholder='ชื่อรายการ' className='form-control my-2' onChange={eventitle} value={title} />
                <input type="text" placeholder='จำนวนเงิน' className='form-control my-2' onChange={evenamount} value={amount} />
                <input type="submit" className='form-control btn btn-success' value={"บันทึกรายการ"} disabled={valid} />
            </form>
        </>
    )
}

export default Forminsert