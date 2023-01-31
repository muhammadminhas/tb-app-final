import React from 'react'
import { useState, useEffect } from 'react';
export default function UserNav() {

React.useEffect(() => {
  let links = document.querySelectorAll('a.nav-link');
 
  if(window.location.pathname=="/user/userImport"){
    links[0].classList.remove('active');
    links[2].classList.remove('active');
    links[1].classList.add('active');
    }
    if(window.location.pathname=="/user/viewdata"){
      links[1].classList.remove('active');
      links[2].classList.remove('active');
      links[0].classList.add('active');
      }
      if(window.location.pathname=="/user/makeprediction"){
        links[0].classList.remove('active');
        links[1].classList.remove('active');
        links[2].classList.add('active');
        }
        if(window.location.pathname=="/user/"){
          links[0].classList.remove('active');
          links[1].classList.remove('active');
          links[2].classList.remove('active');
          links[3].classList.add('active');
          }

//   for(let i=0; i<3; i++){
//   links[i].addEventListener('keydown', (event) => {
//     this.classList.add('active');
   
//   });
// }
}, []);
  return (
    <div id="myDIV" style={{width: '80%', marginLeft: '10%', marginTop: '2%',background:'#D4D4D4'}}>
       <nav className="nav nav-tabs nav-pills nav-fill" id="navs">
     
  <a className="nav-link" aria-current="page" href="/user/viewdata">View Data</a>
  <a className="nav-link"  href="/user/userImport">Import Data</a>
  <a className="nav-link" href="/user/makeprediction">Make Prediction</a>
  <a className="nav-link" href="/user/">Status</a>
  
</nav>
</div>
  )
}
