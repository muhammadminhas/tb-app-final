import React from 'react'
import Banner from "../Images/banner.png";

import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import Logo from "../Images/tblogo.png"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ViewData from '../Components/ViewData'


export default function Header() {

  function check(){ 
   document.getElementbyId("nav-view").innerText="hello";
    if(window.location.href=="/ViewData"){
      document.getElementbyId("nav-view").classList.add('nav-link active');

    }
  
  }
 
  
  return (
<div style={{backgroundColor:"#D4D4D4"}}>
        <div className="col-lg-12 col-mg-12 col-sm-12" id="top" style={{backgroundColor:'#D4D4D4',borderBlockStyle:"ridge"}}>
          <span> U.S. Department of Health &amp; Human Services|National Institutes of Health|National Institute of Allergy
            and Infectious Diseases</span>
            
        </div>
        <div className="col-lg-12 col-mg-12 col-sm-12" id="top2">
          <img src={Logo} alt="" style={{marginLeft: '2px',maxHeight:"100%",maxWidth:"100%",objectfit:'cover'}} />
          <Link to="/login"><button type="button"  className="btn btn-link" style={{color: 'black',float:"right"}}>Logout</button></Link>

          
        </div>
        <div className="col-lg-12 col-mg-12 col-sm-12 text-center" id="top3">
          <p style={{fontWeight: 'bold'}}>TFMDR PORTAL</p>
        </div>
        <div style={{backgroundImage: `url(${Banner})`, height: '55px', width: '100%'}}>
        </div>
    
      </div>
  )
}
