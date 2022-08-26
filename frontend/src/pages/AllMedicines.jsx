import React from "react";
import { Link } from "react-router-dom";

export default function AllMedicines({allData}){
    return <div className="card">
              <div className="card-body">
            <div className="card-header text-center">
                     <img src={`https://shitalmhaskemedicalstore.herokuapp.com/`+allData.pic } height="200px" width="100%" className="pb-3" alt="" /> <br />
                    <h5>{allData.heading}</h5>
                    <div>
                    <Link className="btn btn-danger btn-sm mt-2 mb-2" to={`/MedicineDetails/${allData._id}`}>Show Details</Link>
                     </div>
                  </div>
              </div>
         </div>

}