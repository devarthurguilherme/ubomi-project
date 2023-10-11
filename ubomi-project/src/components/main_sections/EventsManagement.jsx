import image from "../../assets/Events_Management.jpeg"

const EventsManagement = () => {
  return (
    <section className="bg-myOrange pt-10 flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="">
          <div className="px-4 text-white">
            <div class="w-1/5 border-2 border-t border-gray-300 rounded-xl mb-4"></div>
            <h2 className="text-left text-2xl font-semibold uppercase mb-4">Events management</h2>
            <p className="mb-8">
              Pre-event planning budget creation & management detailed timelines for the event venue booking and contract negotiation event management, design
              floor plan layout and décor planning menu creation specific for the event outsourcing of extra services, eg entertainers, photographer, catering, rental companies, shuttle services.
              Execution of every detail of your event onsite management & post event coordinate team/volunteers tear down and clean up post-event summary and follow-up.
            </p>
          </div>
          <div className="">
            <div className="bg-cover bg-center w-full h-96" style={{ backgroundImage: `url(${image})` }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsManagement