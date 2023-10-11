import image1 from "../../assets/What_We_Offer_image1.png"
import image2 from "../../assets/What_We_Offer_image2.png"
import image3 from "../../assets/What_We_Offer_image3.png"
import printArt from "../../assets/print_art.png"

const WhatWeOffer = () => {
  return (
    <div className="bg-myBlue pt-10">
      <div className="container mx-auto">
        <div className="px-4 mt-6">
          <div className="w-full absolute z-10 flex justify-center">
                {/*<img className="w-10 rotate-90 -mt-6"src={printArt} alt="Ubomi art"/> BROKE PAGE TO LEFT HERE!*/}
          </div>
          <div class="w-1/5 border-2 border-t border-gray-300 rounded-xl mb-4"></div>
          <div className="mb-10 flex relative z-0 bg-red-400">
            <h2 className="relative text-2xl uppercase text-white">What We Offer</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
              <div className="bg-cover bg-center w-full h-80 mb-8" style={{ backgroundImage: `url(${image1})` }}>
              </div>
              <div className="bg-cover bg-center w-full h-80 mb-8" style={{ backgroundImage: `url(${image2})` }}>
              </div>
              <div className="bg-cover bg-center w-full h-80" style={{ backgroundImage: `url(${image3})` }}>
              </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer