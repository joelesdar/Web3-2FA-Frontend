'use client'
import Link from "next/link"
import Image from "next/image"
import { StyledDemo } from "../styles"
import { StyledForm } from "@/app/components/Form/styles"
import { StyledUser } from "./styles"
import userImage from "./../../../public/profile.png"

const User = ({ handleRegistered }) => {

  return (
    <StyledDemo>
      <StyledUser>
        <Image src={userImage} alt="user"/>
        <p className="subtitle">Full name</p>
        <p>Daniela Maissi</p>
        <p className="subtitle">Email</p>
        <p>danielamaissi4@gmail.com</p>
        <p className="subtitle">Password</p>
        <p>**********</p>
        <Link className="cancel-button" href="../../Demo">Close session</Link>
      </StyledUser>
    </StyledDemo>
  );
}
 
export default User;