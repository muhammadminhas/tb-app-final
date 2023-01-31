import {Link} from "react-router-dom";
import React, { useState, CSSProperties } from 'react';
import {register} from "../services/auth";
import Swal from 'sweetalert2';

export default function UserManagement() { 
  const initialFormState = {username: '', password: '',usertype:'user' }
  const [form, setForm] = useState(initialFormState);
  function handleChange(e) {
    const { id, value } = e.target
    setForm({ ...form, [id]: value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!form.username || !form.password) return
    console.log(form)
    register(form).then((res) => {
        Swal.fire("Success", "User Created Successfully", "success");
        console.log(res)
    })
    .catch((err) => {
       Swal.fire("Error", "User Already Exists", "error");
       console.log(err)
    })
    setForm(initialFormState)
    }
  return (
    <>
  
    <div className="col-md-12 col-lg-12 col-sm-12" style={{width:"80%",backgroundColor:"white",padding:"5vh",marginTop:"5vh",marginLeft:"20vh",marginBottom:"5vh"}}>
      <div className="row">
      <h2>User Management</h2>
       <form className="form-control"
       >
       
      
         <div className="form-group row">
              <label className="col-lg-2 col-form-label text-lg-right">Username:</label>
             <div className="col-lg-3">
                <input type="text"  className="form-control" onChange={(e)=>handleChange(e)} value={form.username} placeholder="Enter Username" id="username"/> <br/>
             </div>
                <label className="col-lg-2 col-form-label text-lg-right">Password:</label>
                <div className="col-lg-3">
            <input type="password"  className="form-control" onChange={(e)=>handleChange(e)} value={form.password} placeholder="Enter Password" id="password"/> <br/>
        
      </div>
      </div>
        <div className="card-footer">
  <div className="row">

   <div className="col-lg-12 text-center">
   <Link ><button type="reset" className="btn btn-success mr-2" type="submit" onClick={handleSubmit}>Submit</button></Link>&nbsp; &nbsp;

   </div>
  </div>
 </div>
           
   </form>
   {/* </div> */}
    </div>
    </div>
  </>
  )
}
