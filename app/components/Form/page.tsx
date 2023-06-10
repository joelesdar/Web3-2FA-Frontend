import { StyledForm } from "./styles";
import Login from "../Login/page";
import Register from "../Register/page";
import { useState } from "react";
import RegistrationSuccess from "../RegistrationSucces/page";


const Form = ({ registered, setRegistered }) => {

  const [registration, setRegistration] = useState(false);

  const handleRegistered = (e) => {
    e.preventDefault();
    setRegistered(!registered)
  }
  const handleRegistration = (e) => {
    e.preventDefault();
    setRegistration(!registration)
  }


  return (
    <StyledForm>
      {registered == true ? <Login handleRegistered={handleRegistered} /> : registration == false ? <Register handleRegistered={handleRegistered} handleRegistration={handleRegistration}/> : <RegistrationSuccess handleRegistered={handleRegistered} handleRegistration={handleRegistration} />}
    </StyledForm>
   );
}
 
export default Form;