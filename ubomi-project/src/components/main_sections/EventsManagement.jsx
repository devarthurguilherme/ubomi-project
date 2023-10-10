import image from "../../assets/Events_Management.jpeg"

const EventsManagement = () => {
  return (
    <section className="bg-myOrange py-6 lg:px-4 lg:py-32 flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="lg:w-1/2 text-center">
            <div className="lg:w-2/3 bg-red-300 flex flex-col">
              <h2 className="text-white text-4xl font-semibold">Events management</h2>
              <p className="text-lg">
                Pre-event planning budget creation & management detailed timelines for the event venue booking and contract negotiation event management, design
                floor plan layout and décor planning menu creation specific for the event outsourcing of extra services, eg entertainers, photographer, catering, rental companies, shuttle services.
                Execution of every detail of your event onsite management & post event coordinate team/volunteers tear down and clean up post-event summary and follow-up
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 text-center">
            <div className="flex justify-center bg-red-600">
              <img className="w-3/5" src={image} alt="Ubomi Events Management" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsManagement