import { StyledLanding } from "./styles"
import Image from "next/image";
import security from "../../public/Image.png";
import Link from "next/link";

const Landing = () => {
  return (
    <StyledLanding>
      <div className="cover">
        <Image src={security} alt="logo"/>
        <div className="get-started">
          <h1>Web3-2FA</h1>
          <p className="subtitle">A blockchain-based two-factor authentication</p>
          <button><Link href="./../Demo">Get Started</Link></button>
        </div>
        <p className="description">Web3-2FA is a JavaScript library that provides a web3 alternative to conventional 2FA methods using <span><Link href="https://hedera.com/" target="_blank">The Hedera network</Link></span> and React components and hooks.</p>
      </div>
      <div className="section">
        <h2 className="section-title">How does it work??</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="section">
        <h2 className="section-title">Example</h2>
        <iframe src="https://www.w3schools.com"></iframe>
      </div>
      <div className="section">
        <h2 className="section-title">Get started</h2>
        <ol type="1" className="steps">
          <li>1. npm install web3-2fa</li>
          <li>2. Import &#123; W2FaProvider  &#125; from &apos;web3-2fa&apos; in the _app file.</li>
          <li>3. Wrap the W2FaProvider on the App component.</li>
          <li>4. Import &#123; useW2Fa, W2FaButton, ...  &#125; from &apos;web3-2fa&apos;</li>
          <li>5. ¡Start building!</li>
        </ol>
        <p className="docs">You can find the documentation in the <span><Link href="https://github.com/joelesdar/Web3-2FA-Frontend" target="_blank">Github repository</Link></span> in the readme.md file</p>
      </div>
    </StyledLanding>
  );
}
 
export default Landing;