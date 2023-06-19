'use client'
import Link from "next/link"
import { StyledHeader } from "./styles";
import Image from "next/image";
import { useState } from "react";
import menuIcon from "../..//../public/Menu icon.svg";
import closeIcon from "../..//../public/Close icon.svg";

const Header = () => {

  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
    console.log(showButton)
  }

  return (
    <StyledHeader>
      <Link href="./../../Demo">Web3-2FA</Link>
      <div className="menu-icon">
        {showButton && 
        <a onClick={toggleButton}>
          <Image
            priority
            src={menuIcon}
            alt="Menu"
            id="menu"
          />
        </a>}
        {!showButton && 
        <a onClick={toggleButton}>
          <Image
            priority
            src={closeIcon}
            alt="Menu"
            id="close"
          />
        </a>}
      </div>
      {!showButton &&<div className="menu">
         <ul>
          <li><Link href="https://github.com/joelesdar/Web3-2FA-Backend" target="_blank">Repository</Link></li>
          <li><Link href="https://github.com/joelesdar/Web3-2FA-Backend" target="_blank">NPM Package</Link></li>
          <li><Link href="./../../Demo">Demo</Link></li>
        </ul>
      </div>}
      <div className="navbar">
        	<Link href="https://github.com/joelesdar/Web3-2FA-Backend" target="_blank">Repository</Link>
          <Link href="https://github.com/joelesdar/Web3-2FA-Backend" target="_blank">NPM Package</Link>
          <Link href="./../../Demo">Demo</Link>
      </div>
    </StyledHeader>
  );
}
 
export default Header;