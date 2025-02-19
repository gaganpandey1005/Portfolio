import React from 'react'
import logo from '../assets/logo.png'
import  {FaLinkedin} from "react-icons/fa"
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const NavBar = () => {
  return (
    <>
      <nav className="mb-20 flex itmes-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="w-30 h-30" src={logo} alt="" />
        </div>
        <div className="m-2 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/gaganpandey/">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/prathampandey_1005/">
            <FaInstagram />
          </a>

          <a href="https://github.com/gaganpandey1005">
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar