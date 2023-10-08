import React from 'react'

const WhatWeOffer = () => {
  return (
    <div className="bg-myBlue min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
              <div className="bg-red-300">
                <span>Image</span>
              </div>
              <div className="bg-red-300">
                <span>Image</span>
              </div>
              <div className="bg-red-300">
                <span>Image</span>
              </div>
            </div>
            <div className="flex">
              <h1>What We Offer</h1>
              <span>image</span>
            </div>
        </div>
    </div>
  )
}

export default WhatWeOffer