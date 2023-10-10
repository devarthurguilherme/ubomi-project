import quotesArt from "../../assets/quotes.png"

const Testimonials = () => {
  return (
    <section className="py-6 lg:px-4 lg:py-32 flex flex-col justify-center items-center">
        <div className="container mx-auto">
            <h1 className="text-center text-2xl font-semibold lg:text-5xl uppercase mb-8 lg:mb-10">Testimonials</h1>
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 mx-4 p-4 rounded-xl shadow-md flex lg:w-1/3">
                <img className="h-4 lg:h-6" src={quotesArt} alt="Art to Quotes Ubomi" />
                <div>
                  <p className="ml-4 mb-4 lg:mb-8 lg:text-lg font-semibold">
                    For anyone looking for an innovative and self-starting project and events manager, I highly recommend Lindiwe Cook, she will surpass all expectations! Lindiwe is able to bring much-needed organisational and leadership skills to any project and can make magic with modest and big budgets
                  </p>
                  <p className="ml-4 italic font-semibold">
                    Lusanda Madikizela
                  </p>
                </div>
              </div>
              <div className="mb-6 lg:mb-0 mx-4 p-4 rounded-xl shadow-md flex lg:w-1/3">
                <img className="h-4 lg:h-6" src={quotesArt} alt="Art to Quotes Ubomi" />
                <div>
                  <p className="mt-6 ml-4 mb-4 lg:mb-8 lg:text-lg font-semibold">
                    Her attention to detail and continued briefing the client on the status of preparation and planning being either a project or event, will give you peace of mind and with the final product leaving you fired up and excited.
                  </p>
                  <p className="ml-4 italic font-semibold">
                    Xoliswa Boqwana
                  </p>
                </div>
              </div>
              <div className="mb-6 lg:mb-0 mx-4 p-4 rounded-xl shadow-md flex lg:w-1/3">
                <img className="h-4 lg:h-6" src={quotesArt} alt="Art to Quotes Ubomi" />
                <div>
                  <p className="mt-6 ml-4 mb-4 lg:mb-8 lg:text-lg font-semibold">
                    Lindiwe’s work always exceeds expectations. you don't have to doubt that she loves what she does because everything is about her passion for conducting her work.
                  </p>
                  <p className="ml-4 italic font-semibold">
                    Thami Gqabi
                  </p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials