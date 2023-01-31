import {Link} from "react-router-dom";
import React, { useState, CSSProperties } from 'react';
export default function Demographic() {
  const [pred, setPred] = useState('');
  const [usertype,setUsertype] = useState(window.localStorage.getItem('usertype'));
  const [data,setData]=useState({
    country:"",
    education:"",
    employment:"",
   
    organization:"",
   


  });
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }
  function FormData(body){
    return fetch(`http://localhost:5000/putdemographic`,{
        'method':'POST',
         headers : {
        'Content-Type':'application/json'
  },
  body:JSON.stringify(body)
})
.then(response => response.json())
.catch(error => console.log(error))

}

function onSubmit(){
  FormData(data)
  console.log(FormData(data))
}
  return (
    <>
    <div>
     <a href={"/"+usertype+"/selecttype"}><button type="button" className="btn btn-primary" style={{marginLeft:"5vh",background:"#62306A"}}>Back</button></a>
    </div>
    <div className="col-md-12 col-lg-12 col-sm-12" style={{width:"80%",backgroundColor:"white",padding:"5vh",marginTop:"5vh",marginLeft:"20vh",marginBottom:"5vh"}}>
      <div className="row">
      <h2>Fill in the Details</h2>
  

    {/* <div className="col-md-8 col-lg-8 col-sm-8"> */}
       <form className="form-control">
       <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Country:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.country} placeholder="Enter Country" id="country"/> <br/>
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Education:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.education} placeholder="Enter Education" id="education"/> <br/>
         
      </div>
      </div>
      <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Employment:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.employment} placeholder="Enter Employment" id="employment"/> <br/>
             
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Organization:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.organization} placeholder="Enter Organization" id="organization"/> <br/>
           
             
          </div>
      </div>
     
           
    
     
<br/><br/>
        <div className="card-footer">
  <div className="row">

   <div className="col-lg-12 text-center">
    <Link to={"/"+usertype+"/predictionresult"}><button type="reset" className="btn btn-success mr-2" onClick={onSubmit}>Submit</button></Link>&nbsp; &nbsp;
    <Link to={"/"+usertype+"/selecttype"}><button type="reset" onClick={onSubmit} className="btn btn-secondary">Add More</button></Link>
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
