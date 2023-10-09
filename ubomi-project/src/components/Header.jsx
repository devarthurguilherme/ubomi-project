import React from 'react'
import image from "../assets/Header_Image.png"
import logo from "../assets/Logo.png"


const Header = () => {
  return (
    <header>
        <div className="bg-myGreen min-h-screen flex flex-col justify-center items-center">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="lg:w-1/2 text-center">
                <img src={logo} alt="Ubomi Logo" />
                <h1 className="text-6xl text-white">EVENTS & PROJECT MANAGEMENT</h1>
                <p className="text-lg">
                  100% FEMALE BLACK-OWNED COMPANY PROVIDING FULL-SERVICE, LIFESTYLE-BASED, PROFESSIONAL EVENT PLANNING AND PROJECT MANAGEMENT.
                </p>
              </div>
              <div className="lg:w-1/2 text-center">
                <img src={image} alt="Ubomi lunch"/>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header