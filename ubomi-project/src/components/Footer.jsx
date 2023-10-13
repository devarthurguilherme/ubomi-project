import { BiLogoFacebook } from "react-icons/bi"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer>
    <div className="bg-myBlue py-10 lg:py-16">
      <div className="lg:bg-red-400 container lg:max-w-6xl mx-auto">
        <div className="px-4 text-white">
          <h3 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold mb-4 lg:mb-8">CONTACT US</h3>
          <div className="mb-4 lg:mb-8 flex lg:justify-center text-3xl md:text-5xl">
            <a className="" href="https://www.facebook.com/" target="blank">
              <BiLogoFacebook />
            </a>
            <a className="ml-8"href="mailto:someone@example.com/" target="blank">
              <MdEmail />
            </a>
          </div>
          <p className="text-sm md:text-base text-center">© 2023 Ubomi</p>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer