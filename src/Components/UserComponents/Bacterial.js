import {Link} from "react-router-dom";
import React, { useState, CSSProperties } from 'react';
export default function Bacterial() {
  const [pred, setPred] = useState('');
  const [usertype,setUsertype] = useState(window.localStorage.getItem('usertype'));
  const [data,setData]=useState({
    
    le_isoniazid:"",
    le_rifampicin:"",
    le_p_aminosalicylic_acid:"",
    hain_isoniazid:"",
    hain_rifampicin:"",
   
    ncbi_bioproject:"",
    gene_name:"",
  });
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }
  function FormData(body){
    return fetch(`http://localhost:5000/putbacterial`,{
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
         
          <label className="col-lg-2 col-form-label text-lg-right">Le Isnoiazid:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}} onChange={(e)=>handle(e)} className="form-control" value={data.le_isoniazid}  placeholder="Enter Le Isnoiazid" id="le_isoniazid"/> <br/>
            
      </div>
      <label className="col-lg-2 col-form-label text-lg-right">Le Rifamipicin:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.le_rifampicin}  placeholder="Enter Le Rifamipicin" id="le_rifampicin"/> <br/>
           
             
          </div>
      </div>
    
           
       
      <div className="form-group row">
          
          <label className="col-lg-2 col-form-label text-lg-right">Le_p_aminosalicylic_Acid:</label>
          <div className="col-lg-3">
          <input type="tel" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.le_p_aminosalicylic_acid} placeholder="Enter Le_p_aminosalicylic_Acid" id="le_p_aminosalicylic_acid"/> <br/>

      </div>
      <label className="col-lg-2 col-form-label text-lg-right">Ncbi Bioproject:</label>
          <div className="col-lg-3">
          <input type="text" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.ncbi_bioproject}  placeholder="Enter Ncbi Bioproject" id="ncbi_bioproject"/> <br/>
           
          </div>
      </div>
     
    
      <div className="form-group row">
          
          <label className="col-lg-2 col-form-label text-lg-right">Gene Name:</label>
          <div className="col-lg-3">
          <input type="tel" style={{marginTop:"0px"}}  onChange={(e)=>handle(e)} className="form-control" value={data.gene_name} placeholder="Enter Gene Name" id="gene_name"/> <br/>

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
