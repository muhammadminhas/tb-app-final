import {CSVLink} from 'react-csv';
import React, { useState, CSSProperties } from 'react';
import {toast} from 'react-toastify'; 
import {Link} from "react-router-dom";
import {useEffect} from 'react';
import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from 'react-papaparse';

const GREY = '#CCC';
const GREY_LIGHT = 'rgba(255, 255, 255, 0.4)';
const DEFAULT_REMOVE_HOVER_COLOR = '#A01919';
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = '#686868';
let usercount=1;
var datajson={}
function usercounter(){
  usercount=usercount+1;
}
function handleRemove(){
  fetch('/delete', {
    method: 'DELETE',
    header: {
       'Accept' : 'application/json',
       'Content-Type' : 'application/json',
      }
    })
}

function InsertData(body){
  return fetch(`http://localhost:5000/addmultidata`,{
      'method':'POST',
       headers : {
      'Content-Type':'application/json'
},
body:JSON.stringify(body)
})
.then(response => response.json())
.catch(error => console.log(error))
}
const styles = {
  zone: {
    alignItems: 'center',
    border: `2px dashed ${GREY}`,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  file: {
    background: 'linear-gradient(to bottom, #EEE, #DDD)',
    borderRadius: 20,
    display: 'flex',
    height: 120,
    width: 120,
    position: 'relative',
    zIndex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  info: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: '0.5em',
    justifyContent: 'center',
    display: 'flex',
  },
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 12,
    marginBottom: '0.5em',
  },
  progressBar: {
    bottom: 14,
    position: 'absolute',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  zoneHover: {
    borderColor: GREY_DIM,
  },
  default: {
    borderColor: GREY,
  },
  remove: {
    height: 23,
    position: 'absolute',
    right: 6,
    top: 6,
    width: 23,
  },
};
function changeFun(){
  window.location.href="/selecttype";
}
function multiuploadbtn(){
  document.getElementById('multiupload').style.visibility='visible';
}

export default function MultiPredicitionResult() {
  const [notifications,setNotifications] = useState([]);
  function convert(){
      fetch('http://localhost:5000/getmultipredictionresult',{
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

    }
    function InsertData(body){
      
      return fetch(`http://localhost:5000/addmultidata`,{
          'method':'POST',
           headers : {
          'Content-Type':'application/json'
    },
    body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    
    }
  const [data, setData] = useState('')
  const [usertype, setUsertype] = useState(localStorage.getItem('usertype'));
  var filename;
  const { CSVReader } = useCSVReader();
const [zoneHover, setZoneHover] = useState(false);
const [removeHoverColor, setRemoveHoverColor] = useState(
  DEFAULT_REMOVE_HOVER_COLOR
);
  return (
    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}}>

      <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '100%' }}>
        <div className="col-mg-12 col-lg-12 col-sm-12" style={{ marginTop: '5%' }}>
          <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Multiple Data Prediction</span>
          
          <br />
          
<div id="multiupload">
          <br />
          <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Upload CSV File:</span>
          <div>
          <CSVReader
      onUploadAccepted={(results: any) => {
        console.log('---------------------------');
        console.log("results")
        console.log(results);
        const data=['country','education','employment','case_definition','type_of_resistance','x_ray_count','organization','affect_pleura','overall_percent_of_abnormal_volume','le_isoniazid','le_rifampicin','le_p_aminosalicylic_acid','hain_isoniazid','hain_rifampicin','period_start','period_end','period_span','regimen_count','qure_peffusion','treatment_status','regimen_drug','comorbidity','ncbi_bioproject','gene_name','x_ray_exists','ct_exists','genomic_data_exists','qure_consolidation','outcome'];
        const cols=results.data[0].map((col,index)=>{
          return{
            Header:col,
            accessor:col.split(" ").join("_").toLowerCase(),
          };
        });
         
        var result=[];
        var keys=results.data[0];
        for(var i=1;i<results.data.length-1;i++){
          var item={};
         
          item[keys[0]]=results.data[i][0];
          item[keys[1]]=results.data[i][1];
          item[keys[2]]=results.data[i][2];
          item[keys[3]]=results.data[i][3];
          item[keys[4]]=results.data[i][4];
          item[keys[5]]=results.data[i][5];
          item[keys[6]]=results.data[i][6];
          item[keys[7]]=results.data[i][7];
          item[keys[8]]=results.data[i][8];
          item[keys[9]]=results.data[i][9];
          item[keys[10]]=results.data[i][10];
          item[keys[11]]=results.data[i][11];
          item[keys[12]]=results.data[i][12];
          item[keys[13]]=results.data[i][13];
          item[keys[14]]=results.data[i][14];
          item[keys[15]]=results.data[i][15];
          item[keys[16]]=results.data[i][16];
          item[keys[17]]=results.data[i][17];
          item[keys[18]]=results.data[i][18];
          item[keys[19]]=results.data[i][19];
          item[keys[20]]=results.data[i][20];
          item[keys[21]]=results.data[i][21];
          item[keys[22]]=results.data[i][22];
          item[keys[23]]=results.data[i][23];
          item[keys[24]]=results.data[i][24];
          item[keys[25]]=results.data[i][25];
          item[keys[26]]=results.data[i][26];
          item[keys[27]]=results.data[i][27];
          item[keys[28]]=results.data[i][28];
          result.push(item);
        }
        console.log(result)
        console.log(result.length)
        for(var i=0;i<result.length;i++){
  
          let data1={
            'country':result[i].country,
            'education':result[i].education,
            'employment':result[i].employment,
            'case_definition':result[i].case_definition,
            'type_of_resistance':result[i].type_of_resistance,
            'x_ray_count':result[i].x_ray_count,
            'organization':result[i].organization,
            'affect_pleura':result[i].affect_pleura,
            'overall_percent_of_abnormal_volume':result[i].overall_percent_of_abnormal_volume,
            'le_isoniazid':result[i].le_isoniazid,
            'le_rifampicin':result[i].le_rifampicin,
            'le_p_aminosalicylic_acid':result[i].le_p_aminosalicylic_acid,
            'hain_isoniazid':result[i].hain_isoniazid,
            'hain_rifampicin':result[i].hain_rifampicin,
            'period_start':result[i].period_start,
            'period_end':result[i].period_end,
            'period_span':result[i].period_span,
            'regimen_count':result[i].regimen_count,
            'qure_peffusion':result[i].qure_peffusion,
            'treatment_status':result[i].treatment_status,
            'regimen_drug':result[i].regimen_drug,
            'comorbidity':result[i].comorbidity,
            'ncbi_bioproject':result[i].ncbi_bioproject,
            'gene_name':result[i].gene_name,
            'x_ray_exists':result[i].x_ray_exists,
            'ct_exists':result[i].ct_exists,
            'genomic_data_exists':result[i].genomic_data_exists,
            'qure_consolidation':result[i].qure_consolidation,
            'outcome':result[i].outcome
          }
          InsertData(data1)
        }
       
        
        console.log('---------------------------');
        setZoneHover(false);
      }}
      onDragOver={(event: DragEvent) => {
        event.preventDefault();
        setZoneHover(true);
      }}
      onDragLeave={(event: DragEvent) => {
        event.preventDefault();
        setZoneHover(false);
      }}
    >
      {({
       getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
        Remove,
      }: any) => (
        <>
          <div 
            {...getRootProps()}
           
            style={Object.assign(
              {},
              styles.zone,
              zoneHover && styles.zoneHover
            )}
          >
            {acceptedFile ? (
              filename=acceptedFile.name,
              <>
                <div  style={styles.file}>
                  <div  style={styles.info}>
                    <span style={styles.size}>
                      {formatFileSize(acceptedFile.size)}
                      
                    </span>
                    <span style={styles.name}>{acceptedFile.name}</span>
                  </div>
                  <div style={styles.progressBar}>
                    <ProgressBar />
                  </div>
                  <div 
                    {...getRemoveFileProps()}
                     
                    style={styles.remove}
                    onMouseOver={(event: Event) => {
                      event.preventDefault();
                      setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                      
                    }}
                    onMouseOut={(event: Event) => {
                      event.preventDefault();
                      setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
                    }}
                  >
                    <Remove color={removeHoverColor}></Remove>
                  </div>
                </div>
              </>
            ) : (
              'Drop CSV file here or click to upload'
            )}
          </div>
        </>
      )}
    </CSVReader>
<br />
</div>
    </div>
   < div className="col-md-12 col-lg-12 col-sm-12 text-center"> 
    <Link to={"/"+usertype+"/multiresult"} ><button type="button"  id='viewbtn' className="btn btn-primary btn-md text-center" onClick={convert} style={{ backgroundColor: '#62306A', width: '100px' }}>Submit</button></Link>
    </div>
    <br />
      
        </div>


      </div>
    </div>
  )
}
