import React from 'react'

function Forminsert() {
    return (
        <>
            <form>
                <input type="text" placeholder='ชื่อรายการ' className='form-control my-2' />
                <input type="text" placeholder='จำนวนเงิน' className='form-control my-2' />
                <input type="submit" className='form-control btn btn-success' value={"บันทึกรายการ"} />
            </form>
        </>
    )
}

export default Forminsert