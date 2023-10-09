import image from "../../assets/Events_Management.jpeg"

const EventsManagement = () => {
  return (
    <section className="bg-myOrange min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="lg:w-1/2 text-center">
            <h2 className="text-white text-4xl font-semibold">Events management</h2>
            <p className="text-lg">
              Pre-event planning budget creation & management detailed timelines for the event venue booking and contract negotiation event management, design
              floor plan layout and décor planning menu creation specific for the event outsourcing of extra services, eg entertainers, photographer, catering, rental companies, shuttle services.
              Execution of every detail of your event onsite management & post event coordinate team/volunteers tear down and clean up post-event summary and follow-up
            </p>
          </div>
          <div className="lg:w-1/2 text-center">
            <img src={image} alt="Ubomi Events Management" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsManagement