import image from "../../assets/Project_Management_Celebration.jpeg"

const ProjectManagement = () => {
  return (
    <section className="pt-10 md:py-10 flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="px-4 mb-8">
          <div class="w-1/5 border-2 border-t border-gray-800 rounded-xl mb-4"></div>
            <h2 className="text-2xl md:text-3xl font-semibold uppercase mb-4">Project management</h2>
            <ul className="md:text-xl">
              <li>Project Planning;</li>
              <li>Time and cost Management;</li>
              <li>Quality and Risk Management;</li>
              <li>Human Resources Management;</li>
              <li>Communications Management; and</li>
              <li>Wrap-Up and Closing.</li>
            </ul>
        </div>
          <div className="">
            <img className="mx-auto max-h-screen rounded shadow-lg"src={image} alt="Ubomi Celebretion and Project Management" />
          </div>
      </div>
    </section>
  )
}

export default ProjectManagement