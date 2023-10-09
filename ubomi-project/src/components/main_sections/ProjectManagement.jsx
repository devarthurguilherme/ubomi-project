import image from "../../assets/Project_Management_Celebration.jpeg"

const ProjectManagement = () => {
  return (
    <section className="bg-myBlue min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="lg:w-1/2 text-center">
            <img src={image} alt="Ubomi Celebretion and Project Management" />
          </div>
          <div className="lg:w-1/2 text-center">
            <h2 className="text-5xl text-white font-semibold">Project management</h2>
              <ul className="text-lg">
                <li>Project Planning</li>
                <li>Time and cost Management</li>
                <li>Quality and Risk Management</li>
                <li>Human Resources Management</li>
                <li>Communications Management</li>
                <li>Wrap-Up and Closing</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectManagement