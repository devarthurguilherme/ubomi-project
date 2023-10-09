import React from 'react'
import image from "../assets/Header_Image.png"
import logo from "../assets/Logo.png"


const Header = () => {
  return (
    <header>
        <div className="bg-myGreen py-6 lg:px-4 lg:py-32 flex flex-col justify-center items-center">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="text-center">
                <img className="w-3/4 mb-8 lg:mb-12" src={logo} alt="Ubomi Logo" />
                  <div>
                    <div className="md:hidden lg:block">
                      <h1 className="lg:block text-center font-semibold lg:text-left text-4xl lg:text-6xl leading-snug mb-8 lg:mb-10 text-white">EVENTS & 
                        <br />PROJECT <br />MANAGEMENT
                      </h1>
                    </div>
                    <div className="hidden md:block lg:hidden">
                      <h1 className="text-center font-semibold lg:text-left text-4xl leading-snug mb-8 lg:mb-12 text-white">
                        EVENTS & PROJECT MANAGEMENT
                      </h1>
                    </div>
                    <p className="lg:mr-12 px-2 mb-8 lg:mb-0 text-xl lg:text-2xl lg:text-left font-semibold">
                      100% female black-owned company providing full-service, lifestyle-based, professional event planning and project management.                
                    </p>
                  </div>
              </div>
              <img className=" lg:w-1/2 lg:rounded-3xl" src={image} alt="Ubomi lunch"/>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header