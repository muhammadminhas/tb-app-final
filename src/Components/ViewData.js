
import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export default function Body(props) {
  const [patients,setPatients] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/get',{
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
  function toggle() {
    var x = document.getElementById("#viewbtn");
    var y=document.getElementById('#outerwrapper')
    if (x.innerHTML =="View") {
      x.innerHTML= "Cancel";
      y.style.visibility='visible';
    }
    else if(x.innerHTML=="Cancel"){
      x.innerHTML = "View";
      y.style.visibility='hidden';
    }
  }
  function hide(){
    document.getElementById('outerwrapper').style.visibility='hidden';
    document.getElementById('cancelbtn').style.visibility='hidden';
  }
  function show(){
    
  
    document.getElementById('outerwrapper').style.visibility='visible';
    document.getElementById('cancelbtn').style.visibility='visible';
  
  
  }

  return (


    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}}>

      <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '100%' }}>
        <div className="col-mg-12 col-lg-12 col-sm-12" style={{ marginTop: '5%' }}>
          <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Dataset:</span>
          <select disabled className="form-select form-select-lg .disabled" aria-label=".form-select-lg example">
            <option selected>NIH Dataset</option>
           
          </select>
          <br />
          {/* <button type="button" onClick={show} id='viewbtn' className="btn btn-primary btn-md" style={{ backgroundColor: '#62306A', width: '100px' }}>View</button>
          <button type="button" onClick={hide} id='cancelbtn' className="btn btn-primary btn-md" style={{ backgroundColor: 'red', width: '100px',visibility:"hidden" }}>Cancel</button> */}
          <div id="outerwrapper" >
            <div id="innerwrapper">
            <table className="table">
              <thead className='thead-dark ' style={{position:'sticky',top:'0px',background:'#62306A',color:'white'}} >
                <tr>

                  <th scope="col">Patient Id Number</th>
                  <th scope="col">Country	</th>
                  <th scope="col">Education		</th>
                  <th scope="col">Employment	</th>
                  <th scope="col">Case_definition</th>
                  <th scope="col">Type_of_resistance</th>
                  <th scope="col">X_ray_count	</th>
                  <th scope="col">Organization	</th>
                  <th scope="col">Affect_pleura	</th>
                  <th scope="col">Overall_percent_of_abnormal_volume</th>
                  <th scope="col">Le_isoniazid	</th>
                  <th scope="col">Le_rifampicin</th>
                  <th scope="col">Le_p_aminosalicylic_acid	</th>
                  <th scope="col">Hain_isoniazid</th>
                  <th scope="col">Hain_rifampicin</th>
                  <th scope="col">Period_start</th>
                  <th scope="col">Period_end	</th>
                  <th scope="col">Period_span	</th>
                  <th scope="col">Regimen_count</th>
                  <th scope="col">Qure_peffusion	</th>
                  <th scope="col">Treatment_status</th>
                  <th scope="col">Regimen_drug</th>
                  <th scope="col">Comorbidity</th>
                  <th scope="col">Ncbi_bioproject</th>
                  <th scope="col">Gene_name	</th>
                  <th scope="col">X_ray_exists	</th>
                  <th scope="col">Ct_exists	</th>
                  <th scope="col">Genomic_data_exists</th>
                  <th scope="col">Qure_consolidation</th>
                  <th scope="col">Outcome</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                {patients.map((patients) => (
                  <tr id="bodytableelements">
                    
                      <td>{patients.id}</td>
                      <td>{patients.country	}</td>
                      <td>{patients.education	}</td>
                      <td>{patients.employment	}</td>
                      <td>{patients.case_definition}</td>
                      <td>{patients.type_of_resistance}</td>
                      <td>{patients.x_ray_count	}</td>
                      <td>{patients.organization	}</td>
                      <td>{patients.affect_pleura	}</td>
                      <td>{patients.overall_percent_of_abnormal_volume}</td>
                      <td>{patients.le_isoniazid	}</td>
                      <td>{patients.le_rifampicin}</td>
                      <td>{patients.le_p_aminosalicylic_acid	}</td>
                      <td>{patients.hain_isoniazid}</td>
                      <td>{patients.hain_rifampicin}</td>
                      <td>{patients.period_start}</td>
                      <td>{patients.period_end	}</td>
                      <td>{patients.period_span	}</td>
                      <td>{patients.regimen_count}</td>
                      <td>{patients.qure_peffusion	}</td>
                      <td>{patients.treatment_status}</td>
                      <td>{patients.regimen_drug}</td>
                      <td>{patients.comorbidity}</td>
                      <td>{patients.ncbi_bioproject}</td>
                      <td>{patients.gene_name	}</td>
                      <td>{patients.x_ray_exists	}</td>
                      <td>{patients.ct_exists	}</td>
                      <td>{patients.genomic_data_exists}</td>
                      <td>{patients.qure_consolidation}</td>     
                      <td>{patients.outcome}</td>            
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
      
        </div>


      </div>
    </div>
</div>

  )
}
