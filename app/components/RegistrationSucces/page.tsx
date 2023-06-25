import Link from "next/link";

const RegistrationSuccess = ({ handleRegistered, handleRegistration }) => {
  return (
    <div className="successfull-container">
      <h2 className="form-title">Successfull registration!</h2>
      <Link className="submit-button back-button" href="#" onClick={(e) => {handleRegistered(e); handleRegistration(e);}}>Back to Login</Link>
    </div>
  );
}
 
export default RegistrationSuccess;