import {useEffect} from 'react';
import React, { useState, CSSProperties } from 'react';
export default function ClassificationReportP() {
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
    var list=["No Failure","Failure With Resistance","Failure Without Resistance","accuracy","macro avg","weighted avg"];
    var x=document.getElementById("index");
    var accuracy;
    if(x!=null){
        accuracy=report[0].accuracy;
    }
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
                {report.map((report,index) => (
                  <tr id="bodytableelements">
                      <td id="index"style={{background:'#62306A',color:"white",fontSize:"bold"}}>{list[index]}</td>
                      <td>{report.precision}</td>
                      <td>{report.recall}</td>
                      <td>{report.f1score}</td>
                      <td>{report.support}</td>
                  </tr>

                ))}
                
              </tbody>
            </table>
            <h4>Accuracy:{accuracy}</h4>
        
      </div>
       </form>
   {/* </div> */}
    </div>
    </div>
    </>
  )
}
