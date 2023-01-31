import React from 'react'

export default function Preprocess() {
  function insertreportcheck(body){
    return fetch(`http://localhost:5000/addreportcheck`,{
        'method':'POST',
         headers : {
        'Content-Type':'application/json'
  },
  body:JSON.stringify(body)
})
.then(response => response.json())
.catch(error => console.log(error))

}
  function handleSubmit(){
    alert("Data has been Preprocessed");
   
    var x = document.getElementById('smotebox');
    if(x.checked){
      window.localStorage.setItem("Preprocess","1")
      var data={
        "reportno":1
      }
      
      insertreportcheck(data)
      console.log(data)
      console.log("checked")
      
    }
    else{
      window.localStorage.setItem("Preprocess","0")
      var data={
        "reportno":0
      }
      insertreportcheck(data)
    }
    // window.location.href="/modeltraining"
  }

  // function update() { 
  //   var select = document.getElementById('dropdown');
  //   var select1 = document.getElementById('inlineCheckbox1');
  //   var select2 = document.getElementById('inlineCheckbox2');
  //   var text = select.options[select.selectedIndex].text;
  //   var value = select.options[select.selectedIndex].value;
  //   console.log(text); // English
  //   var x=document.getElementById("subname");
  //   x.innerText=text+" Technique";
  //   if(value==1){
  //     select1.innerText="SMOTE";
  //     select2.innerText="Near Miss"
  //   }
  //   if(value==2){
      
  //     select1.innerText="Interpolate"
  //   }
  //   if(value==3){
  //     select1.innerText="Label Encoding";
  //     select1.innerText="One Hot Encoding"
  //   }
  //   if(value==4){
  //     select1.innerText="Info Gain";
  //     select1.innerText="Ranking"
  //   }
 
    
  // }
  return (
    <div style={{ backgroundColor: '#D4D4D4',height:"100%",paddingBottom:"0px",marginTop:'0px'}}>

      <div className="row" style={{ width: '80%', marginLeft: '10%', backgroundColor: 'white', height: '100%' }}>
        <div className="col-mg-12 col-lg-12 col-sm-12" style={{ marginTop: '5%' }}>
          <span style={{ fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 'bold' }}>Select Dataset:</span>
          <select disabled className="form-select form-select-lg .disabled" aria-label=".form-select-lg example">
            <option selected>NIH Dataset</option>
           
          </select>
          <br />
         <div className="container" style={{height:"30vh",marginBottom:"17vh"}}>
          <br />
          
{/* <select id="subdropdown" class="form-select" aria-label="Default select example" onChange={update}>
  <option selected disabled>Select the Technique</option>
  <option id="option" value="1"></option>
  <option id="option" value="2"></option>
</select>  */}
<div className="col-md-12 col-lg-12 col-sm-12">
  <h4>Class Balancing</h4>
  <div className="form-check">
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox"  value="option1" id="smotebox"></input>
  <label className="form-check-label">SMOTE</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" value="option2"></input>
  <label className="form-check-label">Near Miss</label>
</div>
</div>
</div>
<div className="col-md-12 col-lg-12 col-sm-12">
  <h4>Transformation</h4>
  <div className="form-check">
<div className="form-check form-check-inline">
  <input className="form-check-input" checked type="checkbox"  value="option1"></input>
  <label className="form-check-label"  >Label Encoding</label>
</div>

</div>
</div>
<div className="col-md-12 col-lg-12 col-sm-12">
  <h4>Feature Selection</h4>
  <div className="form-check">
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox"  value="option1"></input>
  <label className="form-check-label"  >Info Gain</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" value="option2"></input>
  <label className="form-check-label"  for="inlineCheckbox2">Ranking</label>
</div>
</div>
</div>
<div className="col-md-12 col-lg-12 col-sm-12">
  <h4>Missing Values</h4>
  <div className="form-check">
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox"  checked value="option1"></input>
  <label className="form-check-label"  >Interpolate</label>
</div>

</div>
<button type="button"  id='viewbtn' className="btn btn-primary btn-md" onClick={handleSubmit} style={{ backgroundColor: '#62306A', width: '100px',marginLeft:"1vh",marginTop:"2vh"}}>Apply</button>
</div>
{/* <div className="container" style={{textAlign:"center"}}>
  <br />
<button type="button"  id='viewbtn' className="btn btn-primary btn-md" style={{ backgroundColor: '#62306A', width: '100px',marginLeft:"1vh" }}>Apply</button>
</div> */}
         </div>

          
        </div>


      </div>
      
    </div>


  )
}
