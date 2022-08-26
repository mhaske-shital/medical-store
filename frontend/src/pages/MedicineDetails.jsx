import React, {useEffect}from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { singleBikeAction } from "../action/bike-action";
export default function MedicineDetails({ match }) {
    const dispatch = useDispatch()
    const { singleBikeredux, isloading } = useSelector(state => state.singleBike)
    useEffect(() => {
        dispatch(singleBikeAction(match.params.id))   
    },[])
    return (
        <div className="alert alert-success " style={{height:"100vh"}}>
            <div className="container">
            <br />
            {
                isloading
                    ? <div className="spinner spinner-border"></div>
                    : <div className="row">
                        <br />
                    <div className="col-sm-4 offset-sm-4">
                        <div className="card">
                                <div className="card-body text-center">
                                    <div className="card-header">
                                    <img src={`https://shitalmhaskemedicalstore.herokuapp.com/`+singleBikeredux.pic } className="img-fluid pb-2" alt="" /> <br />
                                <h5>  {singleBikeredux.heading}</h5>
                                <h5>Description : {singleBikeredux.desc}</h5>
                                    <h5>Price : {singleBikeredux.price}</h5>
                                    <Link className="btn btn-success btn-sm px-4" to={`/cart`} >Buy Medicine</Link>
                               </div>
                            </div>
                      </div>
                    </div>
                </div>
            }
        </div>
        </div>
    )
}