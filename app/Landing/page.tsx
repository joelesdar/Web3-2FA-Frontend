import { StyledLanding } from "./styles"
import Image from "next/image";
import security from "../../public/Image.png";
import Link from "next/link";

const Landing = () => {
  return (
    <StyledLanding>
      <div className="first-section">
        <Image src={security} alt="logo"/>
        <h1>Web3-2FA</h1>
        <p className="subtitle">A blockchain-based two-factor authentication</p>
        <button><Link href="./../Demo">Get Started</Link></button>
        <p className="description">Web3-2FA is a JavaScript library that provides a web3 alternative to conventional 2FA methods using The Hedera network and React components and hooks.</p>
      </div>
    </StyledLanding>
  );
}
 
export default Landing;