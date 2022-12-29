import './style.css';
import { useState } from "react";
import { useAppSelector } from '../../redux/hooks/hooks';

const LogInPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");


  
  const userDatabase = useAppSelector(state=>state.users.userDatabase)
  
  const handleSubmit = () => {
    const userData = userDatabase.find((user) => user.username === uname);
    if (userData) {
      if (userData.password !== pass) {
        // Invalid password
        setErrorMessages("Invalid password");
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages("Username not found");
    }
  }
  
  
  


  

  const renderForm = (
      <div className="form">
     <form
     onSubmit={(e)=>{
      e.preventDefault();
      handleSubmit();
     }}>
       <div className="input-container">
         <label>Username </label>
         <input 
          value= {uname}
          onChange= {(e) => setUname(e.target.value) }
          required />
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input 
          value= {pass}
          onChange= {(e) => setPass(e.target.value) }
          required />
         
       </div>
       <div className="button-container">
         <button type="submit">Submit</button>
       </div>
     </form>
     {errorMessages}
   </div>
    )

  return(
      <div className="login-signup">
        <div className="login-form">
          <div className="title">Sign In </div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
  )
};

export default LogInPage;