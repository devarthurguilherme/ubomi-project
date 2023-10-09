import quotesArt from "../../assets/quotes.png"

const Testimonials = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto">
            <h1 className="text-center">Testimonials</h1>
            <div className="flex flex-col lg:flex-row">
              <div className="flex bg-red-300 lg:w-1/3">
                <img src={quotesArt} alt="Art to Quotes Ubomi" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in accusamus dolorem saepe, rem debitis quis harum veniam maiores, modi possimus illum. Iusto unde cumque doloribus sunt officiis atque tempora!</p>
              </div>
              <div className="flex bg-red-300 lg:w-1/3">
                <img src={quotesArt} alt="Art to Quotes Ubomi" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in accusamus dolorem saepe, rem debitis quis harum veniam maiores, modi possimus illum. Iusto unde cumque doloribus sunt officiis atque tempora!</p>
              </div>
              <div className="flex bg-red-300 lg:w-1/3">
                <img src={quotesArt} alt="Art to Quotes Ubomi" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in accusamus dolorem saepe, rem debitis quis harum veniam maiores, modi possimus illum. Iusto unde cumque doloribus sunt officiis atque tempora!</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials