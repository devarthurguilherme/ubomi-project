import quotesArt from "../../assets/quotes.png"

const Testimonials = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto">
            <h1 className="text-center text-5xl uppercase">Testimonials</h1>
            <div className="flex flex-col lg:flex-row">
              <div className="flex lg:w-1/3">
                <img src={quotesArt} alt="Art to Quotes Ubomi" />
                <div>
                  <p className="text-lg font-semibold">
                    For anyone looking for an innovative and self-starting project and events manager, I highly recommend Lindiwe Cook, she will surpass all expectations! Lindiwe is able to bring much-needed organisational and leadership skills to any project and can make magic with modest and big budgets
                  </p>
                  <p className="italic font-semibold">
                    Lusanda Madikizela
                  </p>
                </div>
              </div>
              <div className="flex lg:w-1/3">
                <img src={quotesArt} alt="Art to Quotes Ubomi" />
                <div>
                  <p className="text-lg font-semibold">
                    Her attention to detail and continued briefing the client on the status of preparation and planning being either a project or event, will give you peace of mind and with the final product leaving you fired up and excited.
                  </p>
                  <p className="italic font-semibold">
                    Xoliswa Boqwana
                  </p>
                </div>
              </div>
              <div className="flex lg:w-1/3">
                <img src={quotesArt} alt="Art to Quotes Ubomi" />
                <div>
                  <p className="text-lg font-semibold">
                    Lindiwe’s work always exceeds expectations. you don't have to doubt that she loves what she does because everything is about her passion for conducting her work.
                  </p>
                  <p className="italic font-semibold">
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