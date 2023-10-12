import image1 from "../../assets/What_We_Offer_image1.png"
import image2 from "../../assets/What_We_Offer_image2.png"
import image3 from "../../assets/What_We_Offer_image3.png"

const WhatWeOffer = () => {
  return (
    <div className="bg-myBlue py-10">
      <div className="px-2 container mx-auto">
        <div className="px-2 mt-6">
          <div class="w-1/5 border-2 border-t border-gray-300 rounded-xl mb-4"></div>
          <div className="mb-10">
            <h2 className="relative text-2xl md:text-3xl uppercase text-white">
              What We Offer
            </h2>
          </div>
        </div>
        <div className="md:flex flex-wrap">
          <div className="md:max-w-xs bg-cover bg-center w-full h-80 mb-8 md:m-4 rounded shadow-lg" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="md:max-w-xs bg-cover bg-center w-full h-80 mb-8 md:m-4 rounded shadow-lg" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="md:max-w-xs bg-cover bg-center w-full h-80 md:m-4 rounded shadow-lg" style={{ backgroundImage: `url(${image3})` }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer