import {Link} from "react-router-dom";
import React, { useState, CSSProperties } from 'react';
export default function Formpage() {
  const [pred, setPred] = useState('');
  const [data,setData]=useState({
    country:"",
    education:"",
    employment:"",
    case_definition:"",
    type_of_resistance:"",
    x_ray_count:null,
    organization:"",
    affect_pleura:"",
    overall_percent_of_abnormal_volume:"",
    le_isoniazid:"",
    le_rifampicin:"",
    le_p_aminosalicylic_acid:"",
    hain_isoniazid:"",
    hain_rifampicin:"",
    period_start:null,
    period_end:null,
    period_span:null,
    regimen_count:null,
    qure_peffusion:"",
    treatment_status:"",
    regimen_drug:"",
    comorbidity:"",
    ncbi_bioproject:"",
    gene_name:"",
    x_ray_exists:"",
    ct_exists:"",
    genomic_data_exists:"",
    qure_consolidation:""
  });
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }
  function FormData(body){
    return fetch(`http://localhost:5000/addform`,{
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
     <a href="/selecttype"><button type="button" className="btn btn-primary" style={{marginLeft:"5vh",background:"#62306A"}}>Back</button></a>
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
          <label className="col-lg-2 col-form-label text-lg-right">Case Defination:</label>
          <div className="col-lg-3">
        <input type="text" style={{marginTop:"0px"}}onChange={(e)=>handle(e)} className="form-control" value={data.case_definition} placeholder="Enter Case Defination" id="case_definition"/><br/>
        
         
      </div>
      </div>
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
          <label className="col-lg-2 col-form-label text-lg-right">Hain Isoniazid:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.hain_isoniazid} placeholder="Enter Hain Isoniazid" id="hain_isoniazid"/> <br/>
        
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Hain Rifampicin:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}   onChange={(e)=>handle(e)} className="form-control" value={data.hain_rifampicin} placeholder="Enter Hain Rifampicin" id="hain_rifampicin"/> <br/>
        
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
          <label className="col-lg-2 col-form-label text-lg-right">Organization:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.organization} placeholder="Enter Organization" id="organization"/> <br/>
           
             
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Affect Pleura:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}   onChange={(e)=>handle(e)} className="form-control" value={data.affect_pleura} placeholder="Enter Affect Pleura" id="affect_pleura"/> <br/>
           
         
      </div>
      </div>
      <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Overall % Of Abnormal Volume:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.overall_percent_of_abnormal_volume} placeholder="Enter Overall %" id="overall_percent_of_abnormal_volume"/> <br/>
            
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Le Isnoiazid:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.le_isoniazid}  placeholder="Enter Le Isnoiazid" id="le_isoniazid"/> <br/>
            
      </div>
      </div>
    
           
       
      <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Le Rifamipicin:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.le_rifampicin}  placeholder="Enter Le Rifamipicin" id="le_rifampicin"/> <br/>
           
             
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Le_p_aminosalicylic_Acid:</label>
          <div className="col-lg-3">
          <input type="tel" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.le_p_aminosalicylic_acid} placeholder="Enter Le_p_aminosalicylic_Acid" id="le_p_aminosalicylic_acid"/> <br/>

      </div>
      </div>
      <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Qure Peffusion:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.qure_peffusion} placeholder="Enter Qure Peffusion" id="qure_peffusion"/> <br/>
           
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Treatment Status:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.treatment_status}  placeholder="Enter Treatment Status" id="treatment_status"/> <br/>
           
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
          <label className="col-lg-2 col-form-label text-lg-right">Ncbi Bioproject:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.ncbi_bioproject}  placeholder="Enter Ncbi Bioproject" id="ncbi_bioproject"/> <br/>
           
          </div>
          <label className="col-lg-2 col-form-label text-lg-right">Gene Name:</label>
          <div className="col-lg-3">
          <input type="tel" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.gene_name} placeholder="Enter Gene Name" id="gene_name"/> <br/>

      </div>
      </div>
     <div className="form-group row">
          <label className="col-lg-2 col-form-label text-lg-right">Genomic Data Exists:</label>
          <div className="col-lg-3">
          <input type="tel" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.genomic_data_exists}  placeholder="Enter Genomic Data Exists" id="genomic_data_exists"/> <br/>
        
             
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
    <Link to="/predictionresult"><button type="reset" className="btn btn-success mr-2" onClick={onSubmit}>Submit</button></Link>&nbsp; &nbsp;
    <button type="reset" className="btn btn-secondary">Add More</button>
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
