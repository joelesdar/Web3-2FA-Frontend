import { StyledForm } from "./styles";
import Link from "next/link";

const Form = () => {
  return (
    <StyledForm>
      <h1 className="form-title text-4xl">Web3-2FA <br/>Demo</h1>
      <p>Email</p>
      <input type="mail" placeholder="ej. jame24@gmail.com" />
      <p>Password</p>
      <input type="password" placeholder="ej. ########" />`
      <input className="submit-button" type="submit" value="Login"/>
      <p>Don't have an account? <Link href="#">Sign up</Link></p>
      {/* <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cyan-800">
        hola desde el form
      </div> */}
    </StyledForm>
   );
}
 
export default Form;