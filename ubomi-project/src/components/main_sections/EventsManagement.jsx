import React from 'react'

const EventsManagement = () => {
  return (
    <section className="bg-myOrange min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto bg-red-400">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="lg:w-1/2 text-center">
            <h2>Subtitle</h2>
            <p>Paragraph</p>
          </div>
          <div className="lg:w-1/2 text-center">
            <p>Image 1</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsManagement