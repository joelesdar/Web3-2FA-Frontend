import Link from "next/link";

const Token = () => {
  return (
    <div className="successfull-container">
      <p>Please enter the 6-code token we send to your wallet address: 0x123...789</p>
      <input 
        className="register-input" 
        type="text" 
        placeholder="ej. 0x123456789..." 
        value={walletAddress}
        onChange={(e)=> setWalletAddress(e.target.value)}
      />
      <Link className="submit-button" href="#" onClick={(e) => {handleRegistered(e); handleRegistration(e);}}>Back to Login</Link>
      <Link className="cancel-button" href="#" onClick={(e) => {handleRegistered(e); handleRegistration(e);}}>Back to Login</Link>
    </div>
  );
}
 
export default Token;