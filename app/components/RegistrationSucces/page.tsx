const RegistrationSuccess = ({ handleRegistered, handleRegistration }) => {
  return (
    <>
      <h1 className="form-title text-4xl">Successfull registration!</h1>
      <a href="#" onClick={(e) => {handleRegistered(e); handleRegistration(e);}}>Back to Login</a>
    </>
  );
}
 
export default RegistrationSuccess;