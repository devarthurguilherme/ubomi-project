import quotesArt from "../../assets/quotes.png"

const Testimonials = () => {
  return (
    <section className="py-10 flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="px-4">
          <div class="w-1/5 border-2 border-t border-gray-800 rounded-xl mb-4"></div>
          <h1 className="text-left text-2xl font-semibold uppercase mb-4">Testimonials</h1>
          <div className="flex flex-col">
            <div className="mb-6 p-4 rounded-xl shadow-md flex">
              <img className="h-4" src={quotesArt} alt="Art to Quotes Ubomi" />
              <div>
                <p className="mb-4 font-semibold">
                  For anyone looking for an innovative and self-starting project and events manager, I highly recommend Lindiwe Cook, she will surpass all expectations! Lindiwe is able to bring much-needed organisational and leadership skills to any project and can make magic with modest and big budgets
                </p>
                <p className="italic font-semibold">
                  Lusanda Madikizela
                </p>
              </div>
            </div>
            <div className="mb-6 p-4 rounded-xl shadow-md flex">
              <img className="h-4" src={quotesArt} alt="Art to Quotes Ubomi" />
              <div>
                <p className="mb-4 font-semibold">
                  Her attention to detail and continued briefing the client on the status of preparation and planning being either a project or event, will give you peace of mind and with the final product leaving you fired up and excited.
                </p>
                <p className="italic font-semibold">
                  Xoliswa Boqwana
                </p>
              </div>
            </div>
            <div className="mb-6 p-4 rounded-xl shadow-md flex">
              <img className="h-4" src={quotesArt} alt="Art to Quotes Ubomi" />
              <div>
                <p className="mb-4 font-semibold">
                  Lindiwe’s work always exceeds expectations. you don't have to doubt that she loves what she does because everything is about her passion for conducting her work
                </p>
                <p className="italic font-semibold">
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