import {useEffect} from 'react';
import React, { useState, CSSProperties } from 'react';
import {Link} from "react-router-dom";
export default function PredictionResult() {
    const [predictions,setPrediction] = useState([]);
    const [usertype,setUsertype] = useState(localStorage.getItem('usertype'));
    useEffect(()=>{
        fetch('http://localhost:5000/getindividualpredictionresult',{
          'method' : 'GET',
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        .then(resp => resp.json())
        .then(resp => setPrediction(resp),
        console.log(predictions),
        console.log("hello")
        )
        .catch(error => console.log(error))
  
    },[])
    const [report,setReport] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getreport',{
          'method' : 'GET',
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        .then(resp => resp.json())
        .then(resp => setReport(resp),
        console.log(report),
        console.log("hello")
        )
        .catch(error => console.log(error))
  
    },[])

    if(predictions.prediction==1){
        predictions.prediction="Failure With Resistance";

    }
    if(predictions.prediction==2){
        predictions.prediction="Failure Without Resistance";

    }
    if(predictions.prediction==0){
        predictions.prediction="No Failure";

    }

    var list=["No Failure","Failure With Resistance","Failure","accuracy","macro avg","weighted avg"];
    function getresult(){
        var x=document.getElementById("result");
        x.innerText=predictions.prediction;
    }
  return (
    <>
   
    <div className="col-md-12 col-lg-12 col-sm-12" style={{width:"80%",backgroundColor:"white",padding:"5vh",marginTop:"5vh",marginLeft:"20vh",marginBottom:"5vh"}}>
      <div className="row">
      
  

    {/* <div className="col-md-8 col-lg-8 col-sm-8"> */}
       <form className="form-control">
        <div>
            <h1 id="result">With the given information of the patient the model predicted the outcome that the treatement would end with "<b>{predictions.prediction}</b>"</h1>
        </div>
        {/* <div className="form-group row" style={{visibility:"hidden"}}>
          <h2>Below is the Classification Report of the Model:</h2>
          <table className="table" >
              <thead className='thead-dark ' style={{position:'sticky',top:'0px',background:'#62306A',color:'white'}} >
                <tr>
                  <th scope="col"></th>
                <th scope="col" >Precision</th>
                  <th scope="col" >Recall</th>
                  <th scope="col" >F1-Score</th>
                  <th scope="col" >Support</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                {report.map((report,index) => (
                  <tr id="bodytableelements">
                      <td>{list[index]}</td>
                      <td>{report.precision}</td>
                      <td>{report.recall}</td>
                      <td>{report.f1score}</td>
                      <td>{report.support}</td>
                      
                      
                    
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>Accuracy:{report[1].accuracy}</h2>
        
      </div> */}
       </form>
   {/* </div> */}
    </div>
    </div>
  </>
  )
}
