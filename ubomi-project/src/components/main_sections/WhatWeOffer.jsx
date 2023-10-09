import image1 from "../../assets/What_We_Offer_image1.png"
import image2 from "../../assets/What_We_Offer_image2.png"
import image3 from "../../assets/What_We_Offer_image3.png"
import printArt from "../../assets/print_art.png"

const WhatWeOffer = () => {
  return (
    <div className="bg-myBlue min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
              <div className="">
                <img src={image1} alt="Ubomi breakfast"/>
              </div>
              <div className="">
                <img src={image2} alt="Ubomi breakfast"/>
              </div>
              <div className="">
                <img src={image3} alt="Ubomi breakfast"/>
              </div>
            </div>
            <div className="flex">
              <h2 className="text-5xl text-white">What We Offer</h2>
              <img src={printArt} alt="Ubomi art"/>
            </div>
        </div>
    </div>
  )
}

export default WhatWeOffer