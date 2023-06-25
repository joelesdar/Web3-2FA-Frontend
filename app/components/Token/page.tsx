import Link from "next/link";

const Token = () => {
  return (
    <div className="successfull-container">
      <p>Please enter the 6-code token we send to your wallet address: 0x123...789</p>
      <input 
        className="register-input" 
        type="text" 
        placeholder="ej. 0x123456789..."
      />
      <Link className="submit-button" href="#">Cancel</Link>
      <Link className="cancel-button" href="#">Confirm</Link>
    </div>
  );
}
 
export default Token;