import './style.css';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { addUser, setActiveUser } from '../../redux/slices/usersSlice';

const LogInPage = () => {
  const [errorMessages, setErrorMessages] = useState("Username: admin, Password: admin");
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useAppDispatch();
  const activeUser = useAppSelector(state=> state.users.activeUser.username);
  const userDatabase = useAppSelector(state=>state.users.userDatabase);

  const toogleIsSignUp = () => {setIsSignUp(!isSignUp)};
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    const userData = userDatabase.find((user) => user.username === uname);
    if (userData) {
      if (userData.password !== pass) {
        e.preventDefault();
        setErrorMessages("Invalid password");
      } else {
        e.preventDefault();
        dispatch(setActiveUser(userData));
      }
    } else {
      e.preventDefault();
      setErrorMessages("Username not found");
    }
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    const userData = userDatabase.find((user) => user.username === uname);
    if (userData) {
      e.preventDefault();
      setErrorMessages("Username already exist");
    } else {
      e.preventDefault();
      dispatch(addUser({ username: uname, password: pass, isAdmin: false,}));
      toogleIsSignUp();
    }
  };



  const renderForm = (
      <div className="form">
     <form
     onSubmit={(e)=>{
      if(isSignUp) {
        handleSignUp(e);
      } else {
        handleLogin(e);
      }
      

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
     
     <span
     className='login-signup-toogle'
     onClick={() => toogleIsSignUp()}
     > {!isSignUp ? "Create an account" : "Back to Login" } </span>
     <br/>
     <span className='error' >{errorMessages}</span>
   </div>
    )

  return(
      <div className="login-signup">
        <div className="login-form">
          <div className="title"> {!isSignUp ? "Sign In" : "Sign Up" } </div>
          {activeUser ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
  )
};

export default LogInPage;