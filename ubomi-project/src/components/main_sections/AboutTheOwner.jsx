import lindiwePicture from "../../assets/Lidiwe.jpeg"
import art from "../../assets/Art_Lindiwe_Cook.png"

const AboutTheOwner = () => {
  return (
    <section className="bg-myOrange py-6 lg:px-4 lg:py-32 flex flex-col justify-center items-center">
        <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
              <div className="lg:w-1/2 flex flex-col justify-center items-center text-center">
                <img className="w-5/6 rounded-3xl" src={lindiwePicture} alt="Lindiwe" />
                <img className="w-3/5 -mt-10" src={art} alt="Lindiwe Cook" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="px-2 text-4xl lg:text-6xl text-white mb-8 lg:mb-10">ABOUT THE OWNER</h2>
                <p className="px-2 lg:text-2xl mb-8 lg:mb-10">
                  My passion for event coordination began during my upbringing in the Eastern Cape of South Africa, where coming together in celebration was a central aspect of life. While pursuing new career opportunities, I relocated to Pretoria while maintaining my devotion to uplifting others.
                </p>
                <p className="px-2 lg:text-2xl mb-8 lg:mb-10">
                  With a background in Human Resources and Commerce, I have cultivated a skill set that includes event planning, fundraising, and relationship building. My experience is broad, ranging from team-building activities to conferences and product launches.
                </p>
                <p className="px-2 lg:text-2xl mb-8 lg:mb-10">
                  I excel at facilitating engaging and memorable events tailored to meet the unique needs of my clients.
                </p>
              </div>
            </div>
          </div>
    </section>
  )
}

export default AboutTheOwner