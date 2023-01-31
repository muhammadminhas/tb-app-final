import React from 'react'
import Preprocess from '../Components/Preprocess'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ViewData from '../Components/ViewData';
import AdminNav from '../Components/AdminNav';
import ClassificationReport from '../Components/ClassificationReport';
import ClassificationReportP from '../Components/ClassificationReportP';
import {useState,useEffect} from 'react';
import ImportExport from '../Components/ImportExport';
import AdminNotifications from '../Components/AdminNotifications';
import ModelTraining from '../Components/ModelTraining'
import Bacterial from "../Components/UserComponents/Bacterial";
import Xray from "../Components/UserComponents/Xray";
import Clinical from "../Components/UserComponents/Clinical";
import Demographic from "../Components/UserComponents/Demographic";
import MakePrediction from '../Components/UserComponents/MakePrediction';
import MultiPrediction from "../Components/UserComponents/MultiPredicitionResult";
import SelectType from '../Components/UserComponents/SelectType';
import UserNotifications from '../Components/UserComponents/UserNotifications';
import MultiResult from '../Components/UserComponents/Multiresult';
import PredictionResult from '../Components/UserComponents/PredictionResult'
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
export default function AdminPage() {
  const [records,setRecord] = useState([]);
  const insertedRecord =(record)=>{
    const new_record = [...records,record]
    setRecord(new_record)
  }

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
<AdminNav/>
    <Routes>
      {/* <Route path="/" element={<ViewData patients={patients}/>}> */}
      <Route path="/" element={<ViewData />}>
      </Route>
      <Route path="/importexport" element={<ImportExport patients={patients} insertedRecord={insertedRecord}/>} />
      <Route path="/preprocess" element={<Preprocess insertedRecord={insertedRecord} />} />
      <Route path="/adminnotifications" element={<AdminNotifications/>} />
      <Route path="/admin/modeltraining" element={<ModelTraining/>}/>
      <Route path="/makeprediction" element={<MakePrediction />} />
      <Route path="/multiprediction" element={<MultiPrediction/>}/>
      <Route path="/selecttype" element={<SelectType/>}/>
      <Route path="/predictionresult" element={<PredictionResult/>}/>
      <Route path="/multiresult" element={<MultiResult/>}/>
      <Route path="/xray" element={<Xray/>}/>
      <Route path="/clinical" element={<Clinical/>}/>
      <Route path="/demographic" element={<Demographic/>}/>
      <Route path="/bacterial" element={<Bacterial/>}/>
      <Route path="/classificationreport" element={<ClassificationReport/>}/>
      <Route path="/trainingresult" element={<ClassificationReportP/>}/>
    </Routes>
  

<Footer/>
  </>
  )
}
