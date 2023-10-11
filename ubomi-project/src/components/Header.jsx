import React from 'react'
import image from "../assets/Header_Image.png"
import logo from "../assets/Logo.png"


const Header = () => {
  return (
    <header>
        <div className="bg-myGreen pt-6 flex flex-col justify-center items-center">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="text-center">
                <img className="w-4/5 mb-8 mx-auto" src={logo} alt="Ubomi Logo" />
                  <div className="px-4 text-left">
                    <h1 className=" font-semibold text-4xl leading-tight mb-8 text-white">EVENTS & 
                      <br />PROJECT <br />MANAGEMENT
                    </h1>
                    <p className="text-white mb-8">
                      100% female black-owned company providing full-service, lifestyle-based, professional event planning and project management.                
                    </p>
                  </div>
              </div>
              <img className="" src={image} alt="Ubomi lunch"/>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header