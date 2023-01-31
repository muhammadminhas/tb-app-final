import {CSVLink} from 'react-csv';
import React, { useState, CSSProperties,useEffect } from 'react';
import {toast} from 'react-toastify'; 
import {Link} from "react-router-dom";
import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from 'react-papaparse';
function handleRemove(){
  fetch('/deleteindividual', {
    method: 'DELETE',
    header: {
       'Accept' : 'application/json',
       'Content-Type' : 'application/json',
      }
    })
}
const GREY = '#CCC';
const GREY_LIGHT = 'rgba(255, 255, 255, 0.4)';
const DEFAULT_REMOVE_HOVER_COLOR = '#A01919';
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = '#686868';
let usercount=1;
function usercounter(){
  usercount=usercount+1;

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
  fetch('/delete', {
    method: 'DELETE',
    header: {
       'Accept' : 'application/json',
       'Content-Type' : 'application/json',
      }
    })
}
export default function MakePrediction() {

  var filename;
const [usertype, setUsertype] = useState('');
const [link1, setLink1] = useState('');
const [link2, setLink2] = useState('');
const [refresh, setRefresh] = useState(false);
function refreshfun(){
  setRefresh(true);
}
useEffect(() => {
  setUsertype(localStorage.getItem('usertype'));
  // if(usertype=="admin"){
  //   setLink1("/admin/selecttype");
  //   setLink2("/admin/multiprediction");
  // }
  // else if(usertype=="user"){
  //   setLink1("/user/selecttype");
  //   setLink2("/user/multiprediction");
  // }
}, []);
console.log(usertype)

  const { CSVReader } = useCSVReader();
const [zoneHover, setZoneHover] = useState(false);
const [removeHoverColor, setRemoveHoverColor] = useState(
  DEFAULT_REMOVE_HOVER_COLOR
);
  return (
    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}}>

      <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '100%' }}>
        <div className="col-mg-12 col-lg-12 col-sm-12" style={{ marginTop: '5%' }}>
          <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Trained Dataset:</span>
          <select disabled className="form-select form-select-lg .disabled" style={{width:"25vh"}}aria-label=".form-select-lg example">
            <option selected>NIH Dataset</option>
           
          </select>
          <br />
          <div className="text-center">
          <Link to={"/"+usertype+"/selecttype"}><button type="button"  id='viewbtn' className="btn btn-primary btn-md text-center"   style={{ backgroundColor: '#62306A', width: '250px' }}>Individual Data Prediction</button></Link>
<Link to={"/"+usertype+"/multiprediction"}><button type="button"  id='viewbtn' className="btn btn-primary btn-md" onClick={multiuploadbtn} style={{ backgroundColor: '#62306A', width: '250px',marginLeft:"1vh" }}>Multi Data Prediction</button></Link>

</div>
<div id="multiupload" style={{visibility:"hidden"}}>
          <br />
          <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Upload CSV File:</span>
          <div>
          <CSVReader
      onUploadAccepted={(results: any) => {
        console.log('---------------------------');
        console.log(results);
    
          


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
   {/* < div className="col-md-12 col-lg-12 col-sm-12 text-center"> 
    <button type="button"  id='viewbtn' className="btn btn-primary btn-md text-center" style={{ backgroundColor: '#62306A', width: '100px' }}>Submit</button>
    </div> */}
    <br />
      
        </div>


      </div>
    </div>
  )
}
