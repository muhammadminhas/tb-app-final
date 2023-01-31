import {Link} from "react-router-dom";
import React, { useState, CSSProperties } from 'react';
export default function Clinical() {
  const [pred, setPred] = useState('');
  const [usertype,setUsertype] = useState(window.localStorage.getItem('usertype'));
  const [data,setData]=useState({
   
    case_definition:"",
    type_of_resistance:"",
    x_ray_count:null,
    period_start:null,
    period_end:null,
    period_span:null,
    regimen_count:null,
    treatment_status:"",
    regimen_drug:"",
    comorbidity:"",
    x_ray_exists:"",
    ct_exists:"",
    genomic_data_exists:"",
    
  });
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }
  function FormData(body){
    return fetch(`http://localhost:5000/putclinical`,{
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
          <label className="col-lg-2 col-form-label text-lg-right">Type of Resistance:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.type_of_resistance} placeholder="Enter Type of Resistance" id="type_of_resistance"/> <br/>
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Xray Count:</label>
          <div className="col-lg-3">
          <input type="number" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.x_ray_count} placeholder="Enter Xray Count" id="x_ray_count"/> <br/>
        
      </div>
      </div>
      
     
      <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Period Start:</label>
          <div className="col-lg-3">
          <input type="number" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.period_start}  placeholder="Enter Period Start" id="period_start"/> <br/>
        
             
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Period End:</label>
          <div className="col-lg-3">
          <input type="number" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.period_end} placeholder="Enter Period End" id="period_end"/> <br/>
        
      </div>
      </div>

      
      <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Period Span:</label>
          <div className="col-lg-3">
          <input type="number" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.period_span}  placeholder="Enter Period Span" id="period_span"/> <br/>
         
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Regimen Count:</label>
          <div className="col-lg-3">
          <input type="number" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.regimen_count} placeholder="Enter Regimen Count" id="regimen_count"/> <br/>

      </div>
      </div>
      
        
      <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Xray Exists:</label>
          <div className="col-lg-3">
          <input type="tel" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.x_ray_exists} placeholder="Enter Xray Exists" id="x_ray_exists"/> <br/>
        
             
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">CT Exists:</label>
          <div className="col-lg-3">
          <input type="tel" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.ct_exists} placeholder="Enter CT Exists" id="ct_exists"/> <br/>
    
      </div>
      </div>
  
           
      <div className="form-group row">
      <label className="col-lg-2 col-form-label text-lg-right">Regimen Drug:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.regimen_drug}  placeholder="Enter Regimen Drug" id="regimen_drug"/> <br/>
             
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Comorbidity:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.comorbidity} placeholder="Enter Comorbidity" id="comorbidity"/> <br/>
            
      </div>
          
      </div>
      
    
           
       
      
      

          
     
    
      
     <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Genomic Data Exists:</label>
          <div className="col-lg-3">
          <input type="tel" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.genomic_data_exists}  placeholder="Enter Genomic Data Exists" id="genomic_data_exists"/> <br/>
        
             
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Treatment Status:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.treatment_status}  placeholder="Enter Treatment Status" id="treatment_status"/> <br/>
           
      </div>
      </div>
      <div className="form-group row">
          
          <label className="col-lg-2 col-form-label text-lg-right">Case Defination:</label>
          <div className="col-lg-3">
        <input type="text" style={{marginTop:"0px"}}onChange={(e)=>handle(e)} className="form-control" value={data.case_definition} placeholder="Enter Case Defination" id="case_definition"/><br/>
        
         
      </div>
      
      </div>
<br/><br/>
        <div className="card-footer">
  <div className="row">

   <div className="col-lg-12 text-center">
   <Link to={"/"+usertype+"/predictionresult"}><button type="reset" className="btn btn-success mr-2" onClick={onSubmit}>Submit</button></Link>&nbsp; &nbsp;
   <Link to={"/"+usertype+"/selecttype"}>  <button type="reset" onClick={onSubmit} className="btn btn-secondary">Add More</button></Link>

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
