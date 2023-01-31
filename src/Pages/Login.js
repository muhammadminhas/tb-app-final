import React,{useState} from "react"
import { useNavigate  } from "react-router-dom"
import {signin} from "../services/auth"
import "./Login.css"
export default function () {
  
  let navigate = useNavigate();
  const initialFormState = {username:'',password:''};
  const [form, setForm] = useState(initialFormState);
  const [isLogin, setIsLogin] = useState(false)
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
   
  };
  console.log(form);
  return (
    <div className="Auth-form-container">
      <form className="Auth-form"
      onSubmit={(e) => {
        e.preventDefault();
        if(!form.username || !form.password){
          alert('Please fill the form');
          return;
      }
      signin(form).then((res)=>{
        if(res.usertype=="user"){
          navigate("/user")
        }
        else{
          navigate("/admin")
        }

       console.log(res);
      }).catch((err)=>{
        console.log(err);
      })

    }
    

      }

      >
        <div className="Auth-form-content">
       
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e)=>handleInput(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=>handleInput(e)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
       <br /><br />
        </div>
      </form>
    </div>
  )
}