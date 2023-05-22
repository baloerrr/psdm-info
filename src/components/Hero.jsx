import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div id="beranda" className="text-white bg-violet-700">
      <div className="hero text-center w-full">
        <div className="hero-content flex-col lg:flex-row justify-center">
          <div className="mt-20">
            <h1 className="text-7xl font-bold">PSDM</h1>
            <p className="py-6 text-2xl font-semibold">
              Pemberdayaan Sumber Daya Mahasiswa
            </p>
            {/* <Link
              to={
                'https://docs.google.com/forms/d/e/1FAIpQLSeO9XDqfXX5FXaS1ZTk5oUhXyHJj2Y88oADzGTEmiMdxFm1Hw/viewform'
              }
              className="btn btn-sm bg-white border-none text-violet-700 rounded-none hover:bg-transparent hover:text-white hover:border-none px-6"
            >
              Selengkapnya
            </Link> */}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f1f5f9"
          fillOpacity="1"
          d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,165.3C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default Hero
