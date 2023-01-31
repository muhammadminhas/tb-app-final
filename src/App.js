import logo from './logo.svg';
import './App.css';
import Preprocess from './Components/Preprocess'
import Header from './Components/Header';
import Footer from './Components/Footer';
import ViewData from './Components/ViewData';
import ImportExport from './Components/ImportExport';
import ModelTraining from './Components/ModelTraining';
import MultiPrediction from './Components/UserComponents/MultiPredicitionResult';
import AdminPage from './Pages/AdminPage'
import UserPage from './Pages/UserPage'
import Homepage from './Pages/Homepage'
import Form from "./Components/UserComponents/Formpage";
import MakePrediction from './Components/UserComponents/MakePrediction';
import SelectType from './Components/UserComponents/SelectType';
import Bacterial from "./Components/UserComponents/Bacterial";
import Xray from "./Components/UserComponents/Xray";
import Clinical from "./Components/UserComponents/Clinical";
import Demographic from "./Components/UserComponents/Demographic";
import PredictionResult from './Components/UserComponents/PredictionResult'
import MultiResult from './Components/UserComponents/Multiresult';
import UserImport from './Components/UserComponents/UserImport';
import ClassificationReport from './Components/ClassificationReport';
import ClassificationReportP from './Components/ClassificationReportP';
import UserNotifications from './Components/UserComponents/UserNotifications';
import AdminNav from './Components/AdminNav';
import Login from "./Pages/Login";
import AdminNotifications from './Components/AdminNotifications';
import UserManagement from './Components/UserManagement';
import React,{useState,useEffect} from 'react';
import UserNav from './Components/UserComponents/UserNav';
import {
  Router,
  Link,
  Routes,
  BrowserRouter,
  Route,
  Navigate
} from "react-router-dom";
function App() {
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
     <BrowserRouter>
 
    <Routes>
      {/* <----------------------------------------------------------> */}
      {/* Login Route */}
      <Route path="/login" element={< Login/>}>
      </Route>
      
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
    />
     {/* <-----------------------------------------------------------> */}
       {/* Admin Routes */}
     
      <Route
    path="/admin"
    element={
      <>
      <Header/>
      <AdminNav/>
        <ViewData />
      <Footer/>
    </>
    }
  />
  <Route
    path="/user"
    element={
      <>
      <Header/>
      <UserNav/>
        <UserNotifications />
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/preprocess"
    element={
      <>
      <Header/>
      <AdminNav/>
        <Preprocess />
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/adminnotifications"
    element={
      <>
      <Header/>
      <AdminNav/>
        <AdminNotifications />
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/importexport"
    element={
      <>
      <Header/>
      <AdminNav/>
      <ImportExport patients={patients} insertedRecord={insertedRecord}/>
      <Footer/>
    </>
    }
  />
   <Route
    path="/admin/usermanagement"
    element={
      <>
      <Header/>
      <AdminNav/>
      <UserManagement/>
      <Footer/>
    </>
    }
  />
    
    <Route
    path="/admin/modeltraining"
    element={
      <>
      <Header/>
      <AdminNav/>
      <ModelTraining/>
      <Footer/>
    </>
    }
  />
   <Route
    path="/admin/multiprediction"
    element={
      <>
      <Header/>
      <AdminNav/>
      <MultiPrediction/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/makeprediction"
    element={
      <>
      <Header/>
      <AdminNav/>
      <MakePrediction/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/selecttype"
    element={
      <>
      <Header/>
      <AdminNav/>
      <SelectType/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/predictionresult"
    element={
      <>
      <Header/>
      <AdminNav/>
      <PredictionResult/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/multiresult"
    element={
      <>
      <Header/>
      <AdminNav/>
      <MultiResult/>
      <Footer/>
    </>
    }
  />

  <Route
    path="/admin/xray"
    element={
      <>
      <Header/>
      <AdminNav/>
      <Xray/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/clinical"
    element={
      <>
      <Header/>
      <AdminNav/>
      <Clinical/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/demographic"
    element={
      <>
      <Header/>
      <AdminNav/>
      <Demographic/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/bacterial"
    element={
      <>
      <Header/>
      <AdminNav/>
      <Bacterial/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/user/multiprediction"
    element={
      <>
      <Header/>
      <UserNav/>
      <MultiPrediction/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/user/makeprediction"
    element={
      <>
      <Header/>
      <UserNav/>
      <MakePrediction/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/user/selecttype"
    element={
      <>
      <Header/>
      <UserNav/>
      <SelectType/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/user/predictionresult"
    element={
      <>
      <Header/>
      <UserNav/>
      <PredictionResult/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/user/multiresult"
    element={
      <>
      <Header/>
      <UserNav/>
      <MultiResult/>
      <Footer/>
    </>
    }
  />

  <Route
    path="/user/xray"
    element={
      <>
      <Header/>
      <UserNav/>
      <Xray/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/user/clinical"
    element={
      <>
      <Header/>
      <UserNav/>
      <Clinical/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/user/demographic"
    element={
      <>
      <Header/>
      <UserNav/>
      <Demographic/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/user/bacterial"
    element={
      <>
      <Header/>
      <UserNav/>
      <Bacterial/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/classificationreport"
    element={
      <>
      <Header/>
      <AdminNav/>
      <ClassificationReport/>
      <Footer/>
    </>
    }
  />
  <Route
    path="/admin/trainingresult"
    element={
      <>
      <Header/>
      <AdminNav/>
      <ClassificationReportP/>
      <Footer/>
    </>
    }
  />
  {/* Admin Routes End */}
  {/* <-----------------------------------------------------------> */}
  {/* User Routes */}
  <Route
    path="/user/userimport"
    element={
      <>
      <Header/>
      <UserNav/>
        <UserImport patients={patients}/>
      <Footer/>
    </>
    }
    />
    <Route
    path="/user/form"
    element={
      <>
      <Header/>
      <UserNav/>
        <Form/>
      <Footer/>
    </>
    }
    />
      <Route
    path="/user/viewdata"
    element={
      <>
      <Header/>
      <UserNav/>
      <ViewData patients={patients}/>
      <Footer/>
    </>
    }
    />
        <Route
    path="/user/makeprediction"
    element={
      <>
      <Header/>
      <UserNav/>
      <MakePrediction/>
      <Footer/>
    </>
    }
    />


    </Routes>
  
  </BrowserRouter>
    </>
  );
}

export default App;
