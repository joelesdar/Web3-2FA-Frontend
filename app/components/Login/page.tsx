import Link from "next/link";

const Login = ({ handleRegistered }) => {

  return (
    <form>
      <h2 className="form-title">Web3-2FA <br/>Demo</h2>
      <div className="form-container">
        <p>Email</p>
        <input type="mail" placeholder="ej. jame24@gmail.com" />
        <p>Password</p>
        <input type="password" placeholder="ej. ########" />
        <input className="submit-button" type="submit" value="Login"/>
        <p className="sign-up-button">Don&apos;t have an account? <Link href="#" onClick={(handleRegistered)}>Sign up</Link></p>
      </div>
    </form>
  );
}
 
export default Login;