import Link from "next/link";

const Register = ({ handleRegistered, handleRegistration }) => {

  return (
    <form>
      <h1 className="form-title text-4xl">Registration</h1>
      <p className="subtitle">Complete the following fields to complete your registration.</p>
      <p>Full name</p>
      <input className="register-input" type="text" placeholder="ej. Jame Turner Bond" />
      <p>Email</p>
      <input className="register-input" type="mail" placeholder="ej. jame24@gmail.com" />
      <p>Password</p>
      <input className="register-input" type="password" placeholder="ej. ########" />
      <p>Confirm password</p>
      <input className="register-input" type="password" placeholder="ej. ########" />
      <p>Wallet Address</p>
      <input className="register-input" type="text" placeholder="ej. 0x123456789..." />
      <p className="wallet-text">Wallet If you add an address, it will be used for a 2FA process, a token will be sent to it and you will have to enter it when you log in.t address </p>
      <input className="cancel-button" type="reset" value="Cancel" onClick={(handleRegistered)}/>
      <input className="submit-button" type="submit" value="Register" onClick={(handleRegistration)}/>
    </form>
  );
}
 
export default Register;