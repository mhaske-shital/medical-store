import React ,{useState, useEffect}from 'react'

export default function () {
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=1.305385;
        const lon=30.923029;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div className=" mt-5">
            <iframe id="iframeId" height="500px" width="100%"></iframe>
            <br />
            <div className='col col-sm-6 offset-sm-3 mt-2'>
            <label>Address</label>
            <input type="text" className='form-control' placeholder='enter address'/>
           <button className='btn btn-success mt-2'>submit</button>
            </div>
        </div>
    );
}
