import lindiwePicture from "../../assets/Lidiwe.jpeg"
import art from "../../assets/Art_Lindiwe_Cook.png"

const AboutTheOwner = () => {
  return (
    <section className="bg-myOrange py-10">
        <div className="container mx-auto">
            <div className="flex flex-col-reverse justify-center items-center">
              <div className="flex flex-col justify-center items-center text-center">
                <div className="bg-cover bg-center w-72 md:w-96 h-72 md:h-96 rounded shadow-lg" style={{ backgroundImage: `url(${lindiwePicture})` }}>
                </div>
                <img className="-mt-8 w-3/4" src={art} alt="Lindiwe Cook" />
              </div>
              <div className="px-4 text-white ">
                <div class="w-1/5 border-2 border-t border-gray-300 rounded-xl mb-4"></div>
                <h2 className="text-3xl mb-4">ABOUT THE OWNER</h2>
                <p className="text-lg mb-8">
                  My passion for event coordination began during my upbringing in the Eastern Cape of South Africa, where coming together in celebration was a central aspect of life. While pursuing new career opportunities, I relocated to Pretoria while maintaining my devotion to uplifting others.
                </p>
                <p className="text-lg mb-8">
                  With a background in Human Resources and Commerce, I have cultivated a skill set that includes event planning, fundraising, and relationship building. My experience is broad, ranging from team-building activities to conferences and product launches.
                </p>
                <p className="text-lg mb-8">
                  I excel at facilitating engaging and memorable events tailored to meet the unique needs of my clients.
                </p>
              </div>
            </div>
          </div>
    </section>
  )
}

export default AboutTheOwner