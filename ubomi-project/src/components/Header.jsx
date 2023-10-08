import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="bg-myGreen min-h-screen flex flex-col justify-center items-center">
          <div className="container mx-auto bg-red-400">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="lg:w-1/2 text-center">
                <h1>Logo</h1>
                <h2>Subtitle</h2>
                <p>Paragraph</p>
              </div>
              <div className="lg:w-1/2 text-center">
                <p>Image</p>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header