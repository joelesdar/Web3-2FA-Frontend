import Link from "next/link";
import { useState } from "react";
import axios from 'axios'


const Login = ({ handleRegistered }: { handleRegistered: React.MouseEventHandler<HTMLAnchorElement> }) => {
  const[email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  
 
  

  const handleLogin = async (e:any) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
        otpCode
      })
      //autenticacion exitosa
      console.log(response.data.message)
    }catch(error:any){
      //error durante la autenticacion
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h1 className="form-title text-4xl">Web3-2FA <br/>Demo</h1>
      <p>Email</p>
      <input 
      type="mail" 
      placeholder="ej. jame24@gmail.com"
      value={email}
      onChange={(e)=> setEmail(e.target.value)} 
      />
      <p>Password</p>
      <input 
      type="password" 
      placeholder="ej. ########" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <p>2FA Code</p>
      <input
      type="text"
      placeholder="Enter 2FA code"
      value= {otpCode}
      onChange={(e) => setOtpCode(e.target.value)}
      />
      <input className="submit-button" type="submit" value="Login"/>
      <p className="sign-up-button">Don&apos;t have an account? <Link href="#" onClick={(handleRegistered)}>Sign up</Link></p>
      <Link href="./../../Demo/User">Usuario</Link>
    </form>
  );
}
 
export default Login;