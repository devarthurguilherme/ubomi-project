import image from "../../assets/Events_Management.jpeg"

const EventsManagement = () => {
  return (
    <section className="bg-myOrange pt-10 md:py-10 lg:py-16">
      <div className="lg:bg-red-400 container lg:max-w-6xl mx-auto">
        <div className="lg:flex lg:justify-center">
          <div className="px-4 lg:w-1/2 lg:px-0 lg:mr-10 text-white">
            <div class="w-1/5 md:1/6 border-2 border-t border-gray-300 rounded-xl mb-4"></div>
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-semibold uppercase mb-4">Events management</h2>
            <p className="mb-8 md:text-lg lg:text-xl">
              Pre-event planning budget creation & management detailed timelines for the event venue booking and contract negotiation event management, design
              floor plan layout and décor planning menu creation specific for the event outsourcing of extra services, eg entertainers, photographer, catering, rental companies, shuttle services.
            </p>
            <p className="mb-8 md:text-lg lg:text-xl">
              Execution of every detail of your event onsite management & post event coordinate team/volunteers tear down and clean up post-event summary and follow-up.
            </p>
          </div>
          <div className="lg:w-2/5 lg:px-4">
            <img className="mx-auto max-h-screen lg:max-h-96 rounded shadow-lg lg:rounded-xl lg:shadow-xl"src={image}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsManagement