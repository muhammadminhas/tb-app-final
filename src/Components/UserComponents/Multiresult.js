import React from 'react'
import {useState,useEffect} from 'react';
import {CSVLink} from 'react-csv';
export default function Multiresult() {

    const [patients,setPatients] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getrusermultidata',{
          'method' : 'GET',
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        .then(resp => resp.json())
        .then(resp => setPatients(resp),
        console.log(patients)
        )
        .catch(error => console.log(error))
  
    },[])
    
    
    const resultHeader=[
        {label:"country",key:"country"},
        {label: "education",key: "education" },
        {label: "employment",key: "employment" },
        {label: "case_definition",key: "case_definition" },
        {label: "type_of_resistance",key: "type_of_resistance" },
        {label: "x_ray_count",key: "x_ray_count" },
        {label: "organization",key: "organization" },
        {label: "affect_pleura",key: "affect_pleura" },
        {label: "overall_percent_of_abnormal_volume",key: "overall_percent_of_abnormal_volume" },
        {label: "le_isoniazid",key: "le_isoniazid" },
        {label: "le_rifampicin",key:" le_rifampicin" },
        {label: "le_p_aminosalicylic_acid",key: "le_p_aminosalicylic_acid" },
        {label: "hain_isoniazid",key: "hain_isoniazid" },
        {label: "hain_rifampicin",key: "hain_rifampicin" },
        {label: "period_start",key: "period_start" },
        {label: "period_end",key: "period_end" },
        {label: "period_span",key: "period_span" },
        {label: "regimen_count",key: "regimen_count" },
        {label: "qure_peffusion",key: "qure_peffusion" },
        {label: "treatment_status",key: "treatment_status" },
        {label: "regimen_drug",key: "regimen_drug" },
        {label: "comorbidity",key: "comorbidity" },
        {label: "ncbi_bioproject",key: "ncbi_bioproject" },
        {label: "gene_name",key: "gene_name" },
        {label: "x_ray_exists",key: "x_ray_exists" },
        {label: "ct_exists",key: "ct_exists" },
        {label: "genomic_data_exists",key: "genomic_data_exists" },
        {label: "qure_consolidation",key: "qure_consolidation" },
        {label: "outcome",key: "outcome" },
      ]
      
    const [predictions,setPrediction] = useState([]);
    const [predData,setPredData] = useState([]);
    const Export={
        filename:'PredictionsResult.csv',
        headers:resultHeader,
        data:patients+predictions
      }; 
    useEffect(()=>{
        fetch('http://localhost:5000/getresult',{
          'method' : 'GET',
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        .then(resp => resp.json())
        .then(resp => setPrediction(resp),
        console.log(predictions),
        // console.log("hello")
        )
        .catch(error => console.log(error))
  
    },[])
   
       
    
   for(var i=0;i<predictions.length;i++){
    if(predictions[i]==1){
        predictions[i]="Failure With Resistance Detected";
    }   
    if(predictions[i]==2){
        predictions[i]="Failure Without Resistance Detected";
    }
    if(predictions[i]==0){
        predictions[i]="No Failure Detected";
    }
    
}

  return (
    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}}>

      <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '100%' }}>
        <div className="col-mg-12 col-lg-12 col-sm-12 " style={{ marginTop: '5%',alignItems:"center",marginLeft:"20vh",marginRight:"20vh"}}>
         <h1>Result</h1>
         <table className="table" style={{width:"70%"}}>
              <thead className='thead-dark ' style={{position:'sticky',top:'0px',background:'#62306A',color:'white'}} >
                <tr>

                <th scope="col" style={{width:"50%"}}>Patient Id Number</th>
       
                  <th scope="col" style={{width:"50%"}}>Outcome</th>
                  
                </tr>
              </thead>
              <tbody id="bodytable">
                {predictions.map((predictions,index) => (
                  <tr id="bodytableelements">
                      <td>{index+1}</td>
                      <td>{predictions}</td>
                      
                      
                    
                  </tr>
                ))}
              </tbody>
            </table>
           
    </div>
    </div>
    </div>

  )
}
