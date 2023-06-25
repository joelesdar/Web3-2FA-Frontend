import Link from "next/link";
import { useState } from "react";
import axios from 'axios'

const Register = ({ handleRegistered}) => {

  const[fullName, setFullName] = useState('')
  const[email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleRegistration =async (e) => {
    e.preventDefault()

    try{
      const response = await axios.post('/api/auth/register', {
        fullName,
        email,
        password,
        confirmPassword,
        walletAddress,
      })

      //registro exitoso
      console.log(response.data.message)
    } catch (error){
      setErrorMessage(error.respons.data.message)
    }
  }


  return (
    <form onSubmit= {handleRegistration}>
      <h1 className="form-title text-4xl">Registration</h1>
      <p className="subtitle">Complete the following fields to complete your registration.</p>
      <p>Full name</p>
      <input 
      className="register-input" 
      type="text" 
      placeholder="ej. Jame Turner Bond"
      value={fullName}
      onChange={(e)=> setFullName(e.target.value)}
      />
      <p>Email</p>
      <input 
      className="register-input" 
      type="mail" 
      placeholder="ej. jame24@gmail.com" 
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      />
      <p>Password</p>
      <input 
      className="register-input" 
      type="password" 
      placeholder="ej. ########" 
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      />
      <p>Confirm password</p>
      <input 
      className="register-input" 
      type="password" 
      placeholder="ej. ########" 
      value={confirmPassword}
      onChange={(e)=> setConfirmPassword(e.target.value)}
      />
      <p>Wallet Address</p>
      <input 
      className="register-input" 
      type="text" 
      placeholder="ej. 0x123456789..." 
      value={walletAddress}
      onChange={(e)=> setWalletAddress(e.target.value)}
      />
      <p className="wallet-text">Wallet If you add an address, it will be used for a 2FA process, a token will be sent to it and you will have to enter it when you log in.t address </p>
      <input className="cancel-button" type="reset" value="Cancel" onClick={(handleRegistered)}/>
      <input className="submit-button" type="submit" value="Register" onClick={(handleRegistration)}/>
    </form>
  );
}
 
export default Register;