import {Link} from "react-router-dom";
import React, { useState, CSSProperties } from 'react';
export default function Xray() {
  const [pred, setPred] = useState('');
  const [usertype,setUsertype] = useState(window.localStorage.getItem('usertype'));
  const [data,setData]=useState({
    
    affect_pleura:"",
    overall_percent_of_abnormal_volume:"",
    
    qure_peffusion:"",
   
    qure_consolidation:""
  });
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }
  function FormData(body){
    return fetch(`http://localhost:5000/putxray`,{
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
      <label className="col-lg-2 col-form-label text-lg-right">Overall % Of Abnormal Volume:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.overall_percent_of_abnormal_volume} placeholder="Enter Overall %" id="overall_percent_of_abnormal_volume"/> <br/>
            
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Affect Pleura:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}   onChange={(e)=>handle(e)} className="form-control" value={data.affect_pleura} placeholder="Enter Affect Pleura" id="affect_pleura"/> <br/>
           
         
      </div>
      </div>
    
    
           
       
      
      <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Qure Peffusion:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.qure_peffusion} placeholder="Enter Qure Peffusion" id="qure_peffusion"/> <br/>
           
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Qure Consolidation:</label>
          <div className="col-lg-3">
          <input type="tel" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.qure_consolidation}  placeholder="Enter Qure Consolidation" id="qure_consolidation"/><br/>
      </div>
          
      </div>

          
     
    
<br/><br/>
        <div className="card-footer">
  <div className="row">

   <div className="col-lg-12 text-center">
    <Link to={"/"+usertype+"/predictionresult"}><button type="reset" className="btn btn-success mr-2" onClick={onSubmit}>Submit</button></Link>&nbsp; &nbsp;
    <Link to={"/"+usertype+"/selecttype"}> <button type="reset" onClick={onSubmit} className="btn btn-secondary">Add More</button></Link>
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
