import quotesArt from "../../assets/quotes.png"

const Testimonials = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="px-4">
          <div class="w-1/5 border-2 border-t border-gray-800 rounded-xl mb-4"></div>
          <h2 className="text-left text-3xl font-semibold uppercase mb-4">
            Testimonials
          </h2>
          <div className="md:flex flex-wrap font-semibold md:text-lg">
            <div className="md:max-w-xs mb-6 md:m-4 p-4 rounded-xl shadow-md flex">
              <img className="h-4 mr-2" src={quotesArt} alt="Art to Quotes Ubomi" />
              <div>
                <p className="mb-4">
                  For anyone looking for an innovative and self-starting project and events manager, I highly recommend Lindiwe Cook, she will surpass all expectations! Lindiwe is able to bring much-needed organisational and leadership skills to any project and can make magic with modest and big budgets
                </p>
                <p className="italic">
                  Lusanda Madikizela
                </p>
              </div>
            </div>
            <div className="md:max-w-xs mb-6 md:m-4 p-4 rounded-xl shadow-md flex">
              <img className="h-4 mr-2" src={quotesArt} alt="Art to Quotes Ubomi" />
              <div>
                <p className="mb-4">
                  Her attention to detail and continued briefing the client on the status of preparation and planning being either a project or event, will give you peace of mind and with the final product leaving you fired up and excited.
                </p>
                <p className="italic">
                  Xoliswa Boqwana
                </p>
              </div>
            </div>
            <div className="md:max-w-xs mb-6 md:m-4 p-4 rounded-xl shadow-md flex">
              <img className="h-4 mr-2" src={quotesArt} alt="Art to Quotes Ubomi" />
              <div>
                <p className="mb-4">
                  Lindiwe’s work always exceeds expectations. you don't have to doubt that she loves what she does because everything is about her passion for conducting her work
                </p>
                <p className="italic">
                  Thami Gqabi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials