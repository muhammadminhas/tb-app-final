import {useEffect} from 'react';
import React, { useState, CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
export default function ClassificationReport() {
    const [report,setReport] = useState([]);
    const location = useLocation();
    console.log(location.state);
    useEffect(()=>{
        fetch('http://localhost:5000/getClassificationReport',{
          'method' : 'GET',
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        .then(resp => resp.json())
        .then(resp => setReport(resp[0]),
        console.log("hello")
        )
        .catch(error => console.log(error))
  
    },[])
    var list=["No Failure","Failure With Resistance","Failure Without Resistance"];

  return (
    <>
    <div className="col-md-12 col-lg-12 col-sm-12" style={{width:"80%",backgroundColor:"white",padding:"5vh",marginTop:"5vh",marginLeft:"20vh",marginBottom:"5vh"}}>
      <div className="row">
    {/* <div className="col-md-8 col-lg-8 col-sm-8"> */}
       <form className="form-control">
        <div className="form-group row">
          <h2>Classification Report:</h2>
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
                
                  <tr id="bodytableelements">
                      <td id="index"style={{background:'#62306A',color:"white",fontSize:"bold"}}>{list[0]}</td>
                      <td id="precision">{report.Precision0}</td>
                      <td id="recall">{report.Recall0}</td>
                      <td id="f1score">{report.F1_score0}</td>
                      <td id="support">{report.Support0}</td>
                  </tr>
                  <tr id="bodytableelements">
                  <td id="index"style={{background:'#62306A',color:"white",fontSize:"bold"}}>{list[1]}</td>
                      <td id="precision1">{report.Precision1}</td>
                      <td id="recall1">{report.Recall1}</td>
                      <td id="f1score1">{report.F1_score1}</td>
                      <td id="support1">{report.Support1}</td>
                  </tr>
                  <tr id="bodytableelements">
                      <td id="index"style={{background:'#62306A',color:"white",fontSize:"bold"}}>{list[2]}</td>
                      <td id="precision2">{report.Precision2}</td>
                      <td id="recall2">{report.Recall2}</td>
                      <td id="f1score2">{report.F1_score2}</td>
                      <td id="support2">{report.Support2}</td>
                  </tr>
        
                
              </tbody>
            </table>
            <h1 style={{color:"black"}}>Accuracy: {report.Accuracy}</h1>
        
      </div>
       </form>
   {/* </div> */}
    </div>
    </div>
    </>
  )
}
