import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findPostUserDataAction, postUserDataAction } from '../action/bike-action'

export default function Admin({ history }) {
  const dispatch=useDispatch()
  const [heading,setheading]=useState("")
  const [desc,setdesc]=useState("")
  const [selectfile, setselctedfile] = useState()
  const [preview, setpreview] = useState("")
  const [toggle,settoggle]= useState(false)
  const { userloginRedux } = useSelector(state => state.userLogin)
  const {findPostUserData,isloading} = useSelector(state=> state.findPostUserData)
  const handlePic = (e) => {
    setselctedfile(e.target.files[0])
    const url = URL.createObjectURL(e.target.files[0])
    setpreview(url)
  }
  const handlePostData=async(e)=>{
    e.preventDefault()
    const fd = new FormData()
    fd.append("avatar", selectfile);
    fd.append("userId", userloginRedux.info._id);
    fd.append("heading", heading);
    fd.append("desc", desc);     
    fd.append("userInfo",userloginRedux.info)
    await dispatch(postUserDataAction(fd))
    setpreview("")
    await settoggle(pre=> !pre)  
    e.target.reset()
  }
  useEffect(() => {
    if(userloginRedux){
      dispatch(findPostUserDataAction(userloginRedux.info._id))
      
    } else {
      history.push("/login")
    }
  },[])
  return (
    <div> 

      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card">
            <div className="card-header">Add Data</div>
            <div className="card-body">
            <form action="" onSubmit={handlePostData}>
              <label htmlFor="">Medicine Name</label><br />
              <input type="text" placeholder='enter Heading'  onChange={e=> setheading(e.target.value)} className='form-control' required/><br />
              {/* <label htmlFor="">Description</label><br />
             <textarea name="" id="" cols="20" rows="05" onChange={e=> setdesc(e.target.value)} className='form-control' required placeholder='Enter Description'></textarea> <br /> */}
                <input type="file" className='form-control' accept='image/jpg, image/png' required onChange={handlePic} /> <br />
                {
                  preview ?<div className='text-center'>
                    <img src={preview} height="200px" className='pb-3' alt="add img" /></div>
                    :""
                 }
               <button className='btn btn-info' data-bs-dismiss="modal" >Uplaod</button>
               <button className='btn btn-warning ms-2' type='button' data-bs-dismiss="modal">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {
     isloading
                ? <div className='spinner spinner-border text-black '></div>
                : findPostUserData?.length > 0
              ?findPostUserData?.map((item) => (
                <div className="col-sm-4" key={item._id}>
                  <br />
                  <div className='card'>
                    <div className="card-body">
                      <img src={`https://shitalmhaskemedicalstore.herokuapp.com` + item.pic} alt="" height="150px" width="100%" className='img-fluid' />
                      <p>medicine name : <strong>{item.heading}</strong> </p>
                      {/* <p>desc : <strong>{item.desc}</strong> </p> */}
                      {/* <p>price : <strong>{item.price}</strong> </p> */}
                      <button className='btn btn-outline-danger' data-bs-target="#delete" data-bs-toggle="modal" onClick={(e) => {
                         
                      }}><i class="bi bi-trash-fill"></i></button>
                      {/* <button className='btn btn-outline-success ms-3' data-bs-target="#update" data-bs-toggle="modal" onClick={(e) => {
                        handleGetUpdateData(item._id)
                      }}><i class="bi bi-pencil-square"></i></button> */}
                  </div>
                </div>
                </div>
              ))
:<h1 className='text-center'>NO Data found</h1>
                
   }                  
    </div>
  )
}
