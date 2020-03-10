import React from 'react'

const Test =()=>{
    return(
    <div className='d-flex justify-content-between border border-danger' style={{height:80}}>
        <div className='col-lg-4 align-self-end' >
             <i className="fa fa-envelope-open " aria-hidden="true" ></i>
        </div>
        
        <div className='col-lg-4 align-self-center' style={{fontWeight:'bold'}}>
            Hello
        </div>

    </div>
    )
}
export default Test