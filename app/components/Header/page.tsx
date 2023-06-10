'use client'
import Link from "next/link"
import { StyledHeader } from "./styles";
import { use } from "react";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="./../../Demo">Demo</Link>
    </StyledHeader>
   );
}
 
export default Header;