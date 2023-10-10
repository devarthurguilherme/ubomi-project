import image1 from "../../assets/What_We_Offer_image1.png"
import image2 from "../../assets/What_We_Offer_image2.png"
import image3 from "../../assets/What_We_Offer_image3.png"
import printArt from "../../assets/print_art.png"

const WhatWeOffer = () => {
  return (
    <div className="bg-myBlue py-6 lg:px-4 lg:py-32 flex flex-col justify-center items-center">
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
              <div className="bg-cover bg-center w-80 h-80 mb-8 lg:mb-0 image-rounded" style={{ backgroundImage: `url(${image1})` }}>
              </div>
              <div className="bg-cover bg-center w-80 h-80 mb-8 lg:mb-0 image-rounded" style={{ backgroundImage: `url(${image2})` }}>
              </div>
              <div className="bg-cover bg-center w-80 h-80 image-rounded" style={{ backgroundImage: `url(${image3})` }}>
              </div>
            </div>
            <div className="px-2 flex bg-red-400 justify-start lg:justify-end items-baseline bg-cover bg-center bg-top-right" style={{ backgroundImage: `url(${printArt})` }}>
              <h2 className="flex flex-col justify-end text-2xl lg:text-5xl uppercase text-white pr-6">What We Offer</h2>
              <img className="w-20 lg:w-36 rotate-90 -ml-14"src={printArt} alt="Ubomi art"/>
            </div>
        </div>
    </div>
  )
}

export default WhatWeOffer