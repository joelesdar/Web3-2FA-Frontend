import Link from "next/link"
import Image from "next/image"

const User = ({ handleRegistered }) => {

  return (
    <>
      <Image src="./../../public/profile.png" alt="user"/>
      <h1 className="form-title text-4xl">Web3-2FA <br/>Demo</h1>
      <p>Email</p>
      <input type="mail" placeholder="ej. jame24@gmail.com" />
      <p>Password</p>
      <input type="password" placeholder="ej. ########" />
      <input className="submit-button" type="submit" value="Login"/>
      <p className="sign-up-button">Don't have an account? <Link href="#" onClick={(handleRegistered)}>Sign up</Link></p>
    </>
  );
}
 
export default User;