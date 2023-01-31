import React from 'react'
import Preprocess from '../Components/Preprocess'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PredictionResult from '../Components/UserComponents/PredictionResult'
import ViewData from '../Components/ViewData';
import {useState,useEffect} from 'react';
import UserNav from '../Components/UserComponents/UserNav';
import Formpage from '../Components/UserComponents/Formpage';
import Bacterial from "../Components/UserComponents/Bacterial";
import Xray from "../Components/UserComponents/Xray";
import Clinical from "../Components/UserComponents/Clinical";
import Demographic from "../Components/UserComponents/Demographic";
import ImportExport from '../Components/ImportExport';
import MakePrediction from '../Components/UserComponents/MakePrediction';
import UserImport from '../Components/UserComponents/UserImport';
import Form from "../Components/UserComponents/Formpage";
import MultiPrediction from "../Components/UserComponents/MultiPredicitionResult";
import SelectType from '../Components/UserComponents/SelectType';
import UserNotifications from '../Components/UserComponents/UserNotifications';
import MultiResult from '../Components/UserComponents/Multiresult';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
export default function UserPage() {
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
  return (
<>
<Header/>
<UserNav/>

    <Routes>
      <Route path="/viewdata" element={<ViewData patients={patients}/>}>
        
      </Route>
      <Route path="/makeprediction" element={<MakePrediction />} />
      <Route path="/userimport" element={<UserImport patients={patients} />} />
      <Route path="/"  element={<UserNotifications />} />
      <Route path="/form" element={<Form/>}/>
      <Route path="/multiprediction" element={<MultiPrediction/>}/>
      <Route path="/selecttype" element={<SelectType/>}/>
      <Route path="/predictionresult" element={<PredictionResult/>}/>
      <Route path="/multiresult" element={<MultiResult/>}/>
      <Route path="/xray" element={<Xray/>}/>
      <Route path="/clinical" element={<Clinical/>}/>
      <Route path="/demographic" element={<Demographic/>}/>
      <Route path="/bacterial" element={<Bacterial/>}/>
    
    </Routes>
 



{/* <Footer/> */}
  </>
  )
}
