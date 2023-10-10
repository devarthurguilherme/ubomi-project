import lindiwePicture from "../../assets/Lidiwe.jpeg"
import art from "../../assets/Art_Lindiwe_Cook.png"

const AboutTheOwner = () => {
  return (
    <section className="bg-myOrange py-10 flex flex-col justify-center items-center">
        <div className="container mx-auto">
            <div className="flex flex-col-reverse justify-center items-center">
              <div className="flex flex-col justify-center items-center text-center">
                <div className="bg-cover bg-center w-full h-80" style={{ backgroundImage: `url(${lindiwePicture})` }}>
                </div>
                <img className="-mt-8 w-3/4" src={art} alt="Lindiwe Cook" />
              </div>
              <div className="px-4 text-white ">
                <h2 className="text-2xl mb-4">ABOUT THE OWNER</h2>
                <p className="mb-8">
                  My passion for event coordination began during my upbringing in the Eastern Cape of South Africa, where coming together in celebration was a central aspect of life. While pursuing new career opportunities, I relocated to Pretoria while maintaining my devotion to uplifting others.
                </p>
                <p className="mb-8">
                  With a background in Human Resources and Commerce, I have cultivated a skill set that includes event planning, fundraising, and relationship building. My experience is broad, ranging from team-building activities to conferences and product launches.
                </p>
                <p className="mb-8">
                  I excel at facilitating engaging and memorable events tailored to meet the unique needs of my clients.
                </p>
              </div>
            </div>
          </div>
    </section>
  )
}

export default AboutTheOwner