import { BiLogoFacebook } from "react-icons/bi"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer>
      <div className="min-h-min flex flex-col justify-center items-center">
        <div className="container mx-auto bg-red-400">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:w-1/2 text-center">
              <h2>Subtitle</h2>
            </div>
            <div className="lg:w-1/2 flex">
              <a href="https://www.facebook.com/" target="blank">
                <BiLogoFacebook />
              </a>
              <a href="mailto:someone@example.com/" target="blank">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer