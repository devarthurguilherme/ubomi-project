import lindiwePicture from "../../assets/Lidiwe.jpeg"
import art from "../../assets/Art_Lindiwe_Cook.png"

const AboutTheOwner = () => {
  return (
    <section className="bg-myOrange min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
              <div className="lg:w-1/2 text-center">
                <img src={lindiwePicture} alt="" />
                <img src={art} alt="" />
              </div>
              <div className="lg:w-1/2 text-center">
                <h2 className="text-5xl text-white">ABOUT THE OWNER</h2>
                <p className="text-lg">
                  My passion for event coordination began during my upbringing in the Eastern Cape of South Africa, where coming together in celebration was a central aspect of life. While pursuing new career opportunities, I relocated to Pretoria while maintaining my devotion to uplifting others.
                </p>
                <p className="text-lg">
                  With a background in Human Resources and Commerce, I have cultivated a skill set that includes event planning, fundraising, and relationship building. My experience is broad, ranging from team-building activities to conferences and product launches.
                </p>
                <p className="text-lg">
                  I excel at facilitating engaging and memorable events tailored to meet the unique needs of my clients.
                </p>
              </div>
            </div>
          </div>
    </section>
  )
}

export default AboutTheOwner