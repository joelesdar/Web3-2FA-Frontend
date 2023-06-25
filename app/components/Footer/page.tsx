import { StyledFooter } from "./styles";
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter>
      <h2>Web3-2FA</h2>
      <div className="menu mobile-menu">
         <ul>
          <li><Link href="https://github.com/joelesdar/Web3-2FA-Backend" target="_blank">Repository</Link></li>
          <li><Link href="https://github.com/joelesdar/Web3-2FA-Backend" target="_blank">NPM Package</Link></li>
          <li><Link href="./../../Demo">Demo</Link></li>
        </ul>
      </div>
      <div className="menu desktop-menu">
        <Link href="https://github.com/joelesdar/Web3-2FA-Backend" target="_blank">Repository</Link>
        <p> / </p>
        <Link href="https://github.com/joelesdar/Web3-2FA-Backend" target="_blank">NPM Package</Link>
        <p> / </p>
        <Link href="./../../Demo">Demo</Link>
      </div>
      <p className="copyright">Web3-2FA © 2023. All rights reserved.</p>
    </StyledFooter>
  );
}
 
export default Footer;