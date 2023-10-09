import image from "../../assets/Project_Management_Celebration.jpeg"

const ProjectManagement = () => {
  return (
    <section className="bg-myBlue min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto bg-red-400">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
              <div className="lg:w-1/2 text-center">
                <img src={image} alt="Ubomi Celebretion and Project Management" />
              </div>
              <div className="lg:w-1/2 text-center">
                <h2>Subtitle</h2>
                <p>Paragraph</p>
              </div>
            </div>
          </div>
    </section>
  )
}

export default ProjectManagement