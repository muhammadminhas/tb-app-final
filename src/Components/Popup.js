import React from 'react'
import {useState,useEffect} from 'react';
export default function Popup(props) {
  const [data,setData] = useState([]);
  // ar arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
    
  for( var i = 0; i < props.newimportdata.length; i++){ 
                                 
      if (props.newimportdata[i].importedby!=props.username&&props.newimportdata[i].filename!=props.filename) { 
          props.newimportdata.splice(i, 1); 
          i--; 
      }
  }
 
  
  return (props.trigger)?(
    <div className="popup" style={{backgroundColor:"white"}}>
      <div className="popup-inner">
      <button className="close-btn" onClick={()=>props.setTrigger(false)}>close</button>
<h1>View Data</h1>
<div id="outerwrapper">
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
                {props.newimportdata.map((newimportdata,index) => (
                  <tr id="bodytableelements">
                      {}
                      <td>{newimportdata.id}</td>
                      <td>{newimportdata.country	}</td>
                      <td>{newimportdata.education	}</td>
                      <td>{newimportdata.employment	}</td>
                      <td>{newimportdata.case_definition}</td>
                      <td>{newimportdata.type_of_resistance}</td>
                      <td>{newimportdata.x_ray_count	}</td>
                      <td>{newimportdata.organization	}</td>
                      <td>{newimportdata.affect_pleura	}</td>
                      <td>{newimportdata.overall_percent_of_abnormal_volume}</td>
                      <td>{newimportdata.le_isoniazid	}</td>
                      <td>{newimportdata.le_rifampicin}</td>
                      <td>{newimportdata.le_p_aminosalicylic_acid	}</td>
                      <td>{newimportdata.hain_isoniazid}</td>
                      <td>{newimportdata.hain_rifampicin}</td>
                      <td>{newimportdata.period_start}</td>
                      <td>{newimportdata.period_end	}</td>
                      <td>{newimportdata.period_span	}</td>
                      <td>{newimportdata.regimen_count}</td>
                      <td>{newimportdata.qure_peffusion	}</td>
                      <td>{newimportdata.treatment_status}</td>
                      <td>{newimportdata.regimen_drug}</td>
                      <td>{newimportdata.comorbidity}</td>
                      <td>{newimportdata.ncbi_bioproject}</td>
                      <td>{newimportdata.gene_name	}</td>
                      <td>{newimportdata.x_ray_exists	}</td>
                      <td>{newimportdata.ct_exists	}</td>
                      <td>{newimportdata.genomic_data_exists}</td>
                      <td>{newimportdata.qure_consolidation}</td>     
                      <td>{newimportdata.outcome}</td>            
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
      
        </div>
</div>

    </div>
  ):"";
}
