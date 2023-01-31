import React from 'react'
import {useState,useEffect} from 'react';
import Popup from '../Components/Popup';
export default function AdminNotifications(props) {
  const [username,setUsername] = useState([]);
  const [filename,setFilename] = useState([]);
  const [buttonPopup,setButtonPopup] = useState(false);
  const [newimportdata,setNewimportdata] = useState([]);
  const [notifications,setNotifications] = useState([]);
  function onclickaccept(){
 var btn=document.getElementById("acceptbtn");
 var id=document.getElementById("iddd");
 id.Text();
 console.log(this.innerText());
  }

 function viewclick(e){
setButtonPopup(true)
  console.log(e)
  setUsername(notifications[e].username)
  console.log(notifications[e].username)
  setFilename(notifications[e].filename)
  console.log(notifications[e].filename)
}

  useEffect(()=>{
      fetch('http://localhost:5000/getnewimports',{
        'method' : 'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setNewimportdata(resp),
      console.log(newimportdata)
      )
      .catch(error => console.log(error))

  },[])
 
  useEffect(()=>{
      fetch('http://localhost:5000/getnotifications',{
        'method' : 'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setNotifications(resp),
      console.log(notifications)
      )
      .catch(error => console.log(error))

  },[])
//   console.log("all notification")
// console.log(notifications);
// console.log("index notification")
// console.log(notifications[0].filename);
  function UpdateArticle(id,body){
    return(
        fetch(`http://localhost:5000/update/${id}` ,{
            'method' : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(body)
        })
        .then(resp => resp.json())
    )
}

  return (
    <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '60vh' }}>

    <div className="container" style={{backgroundColor:"#62306A",width:"80%",height:"80%",marginTop:"5%",marginBottom:"5%"}}>
      <p id="notify">Notifications</p>
        <div style={{height:"20vh"}}>
        <div id="outerwrapper" style={{backgroundColor:"white"}}>
            <div id="innerwrapper">
            <table className="table">
              <thead className='thead-dark ' style={{position:'sticky',top:'0px',background:'#62306A',color:'white'}} >
                <tr >

                  <th scope="col">User Id Number</th>
                  <th scope="col">Username</th>
                  <th scope="col">Filename</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                {notifications.map((notifications,index) => (
                  <tr id="bodytableelements">
                    
                      <td i="iddd">{notifications.id}</td>
                      <td id="username">{notifications.username}</td>
                      <td id="filename">{notifications.filename}</td>
                      <td><button type="button" id="btn" onClick={()=>viewclick(index)} className="btn btn-link"style={{color: 'black'}}>View</button>
         
        </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
      
        </div>
<Popup  trigger={buttonPopup} newimportdata={newimportdata} setTrigger={setButtonPopup} username={username} filename={filename}/>
        {/* <div id="outerwrapper">
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
                {newimportdata.map((newimportdata) => (
                  <tr id="bodytableelements">
                      
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
         */}
        </div>
    </div>
     
  </div>

  )
}
