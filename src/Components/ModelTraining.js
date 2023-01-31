import {useEffect} from 'react';
import React, { useState, CSSProperties } from 'react';
import {selectModel} from '../services/model';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useNavigate} from 'react-router-dom';
export default function ModelTraining() {
  
  const [reportcheck,setReportCheck] = useState([]);
  const initialFormState={"Classifier":""}
  const [model,setModel] = useState(initialFormState);
  const [Report,setReport] = useState([]);
  const [loading,setLoading] = useState(false);
  const [progress,setProgress] = useState(0);
  const [progress2,setProgress2] = useState(0);
  const navigate=useNavigate();
  let accuracy=0;
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  useEffect(()=>{
    setProgress(progress2);

},[progress2])

  useEffect(()=>{
        fetch('http://localhost:5000/getreportcheck',{
          'method' : 'GET',
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        .then(resp => resp.json())
        .then(resp => setReportCheck(resp),
        console.log(reportcheck)
        )
        .catch(error => console.log(error))
  
    },[])
    const getResult=async (event) =>{
      setLoading(true);
      setProgress2(50);
      var e = document.getElementById("classifiers");
  var value = e.value;
  if(value!="null"){
   window.localStorage.setItem("Classifier",value);
   
   var x=localStorage.getItem("Preprocess")+localStorage.getItem("Classifier");
   model.Classifier=x;
  selectModel(model).then(res => {
   
    })
    .catch(err => console.log(err))

  }
 await delay(1000)
 
  await delay(1000)
  setProgress2(100);
  await delay(1000);
  alert("Model Training Successfully");
  navigate("/admin/classificationreport");

      // if(reportcheck[0].reportno==1){
      //   alert("Model Trained Successfully");
      //   setModel(initialFormState);
      //   window.location.href="/admin/trainingresult"
      // }
      // if(reportcheck[0].reportno==0){
      //   alert("Model Training Successfully");
      //   setModel(initialFormState)
      //   window.location.href="/admin/classificationreport"
      // }
    }

  return (
    <>
    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}}>

<div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '60vh' }}>
  <div className="col-md-12 col-lg-12 col-sm-12" style={{ marginTop: '5%' }}>
    <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Dataset:</span>
    <select style={{width:"100vh"}} disabled className="form-select form-select-lg .disabled" >
      <option selected>NIH Dataset</option>
     
    </select>
    <br />
    </div>
    
    <div className="col-md-9 col-lg-9 col-sm-9" style={{ marginTop: '5%' }}>
    <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Classifier:</span>
    <select style={{width:"100vh"}} id="classifiers" className="form-select form-select-lg .disabled" >
      <option disabled selected value="null">Select Classifier</option>
      <option value="RF">Random Forest</option>
      <option value="KNN">KNN Classifier</option>
      <option value="DT">Decision Tree</option>
      
    </select>
    <br />
    </div>
    {/* <div className="col-md-3 col-lg-3 col-sm-3" style={{ marginTop: '5%' }}>
    <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Dataset:</span>
    <input className="input"type="number" style={{width:"25vh",height:"4.4vh"}}/>
   
    <br />
    </div> */}
    <div className="col-md-12 col-lg-12 col-sm-12 text-center"> 
    {loading?
                    <div>
                          Training Please Wait...
                          <ProgressBar now={progress} animated label={`${progress}%`} />
                        </div>
                        :
                        <button type="button"  id='viewbtn' className="btn btn-primary btn-md text-center" onClick={getResult} style={{ backgroundColor: '#62306A', width: '100px' }}>Submit</button>
                        }
    

    </div>
    </div>

    </div>
    
  </>
  )
}
