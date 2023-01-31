import React from 'react'
import AdminPage from '../Pages/AdminPage'
import Footer from '../Components/Footer';
import UserPage from '../Pages/UserPage'
import { Navigate } from "react-router-dom";
import {useState,useEffect} from 'react';
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Outlet,
  } from "react-router-dom";
  
export default function () {
  const [userState, setUserState] = useState("homepage")
  const toggle = function (val) {
    setUserState(userState => val)
}
  return (
    <>
    {userState == "homepage" && <div>
      <button id="Admin" onClick={() => { toggle("Admin") }} >Admin</button>
      <button id="User" onClick={() => { toggle("User") }}>User</button>
         {/* <nav className="nav nav-tabs nav-pills nav-fill">
  <a id="nav-view" className="nav-link" aria-current="page" href="/AdminPage">Admin Page</a>
  <a id="nav" className="nav-link"  href="/UserPage">UserPage</a>
  
</nav> */}


    
            </div>
            }
       {userState == "Admin" && <div>
   
          <AdminPage/>

    
            </div>
            }
            {userState == "Admin" && <div>
   
          <AdminPage/>

    
            </div>
            }
            <Footer/>
    </>
  )
}
