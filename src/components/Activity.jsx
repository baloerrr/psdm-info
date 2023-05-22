import Card from './Card'
import ceesgo from '../assets/ceesgo.webp'
import workshop from '../assets/workshop.webp'
import detail from '../assets/detail.webp'
import syarat from '../assets/syarat.webp'
import { Link } from 'react-router-dom'

function Activity() {
  return (
    <div id="aktivitas" className="pb-10 flex flex-col gap-14">
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl">AKTIVITAS</h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <Card
          title={'WORKSHOP'}
          src={workshop}
          text={
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeO9XDqfXX5FXaS1ZTk5oUhXyHJj2Y88oADzGTEmiMdxFm1Hw/viewform"
              role="button"
              className="btn border-none bg-violet-700 rounded-full w-36"
            >
              Daftar
            </a>
          }
          item={'item1'}
          carouselNo={
            <>
              <div className="flex justify-center absolute bottom-[9.4rem] w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs rounded-full">
                  1
                </a>
                <a href="#item2" className="btn btn-xs rounded-full">
                  2
                </a>
                <a href="#item3" className="btn btn-xs rounded-full">
                  3
                </a>
              </div>
            </>
          }
          carousel={
            <>
              <div className="carousel-item w-full">
                <div className="card w-80 bg-base-100 shadow-xl">
                  <figure id={'item2'}>
                    <Link>
                      <img
                        className="w-full h-80 object-cover"
                        src={detail}
                        alt="Shoes"
                      />
                    </Link>
                    <div className="flex justify-center absolute bottom-[9.4rem] w-full py-2 gap-2">
                      <a href="#item1" className="btn btn-xs rounded-full">
                        1
                      </a>
                      <a href="#item2" className="btn btn-xs rounded-full">
                        2
                      </a>
                      <a href="#item3" className="btn btn-xs rounded-full">
                        3
                      </a>
                    </div>
                  </figure>
                  <div className="card-body">
                    <div className="text-center">
                      <h2 className="font-extrabold text-xl">WORKSHOP</h2>
                    </div>
                    {/* <div>{info}</div> */}
                    <div className="text-center">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeO9XDqfXX5FXaS1ZTk5oUhXyHJj2Y88oADzGTEmiMdxFm1Hw/viewform"
                        role="button"
                        className="btn border-none bg-violet-700 rounded-full w-36"
                      >
                        Daftar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item w-full">
                <div className="card w-80 bg-base-100 shadow-xl">
                  <figure id={'item3'}>
                    <Link>
                      <img
                        className="w-full h-80 object-cover"
                        src={syarat}
                        alt="Shoes"
                      />
                    </Link>
                    <div className="flex justify-center absolute bottom-[9.4rem] w-full py-2 gap-2">
                      <a
                        href="#item1"
                        className="btn btn-xs  border-none rounded-full"
                      >
                        1
                      </a>
                      <a
                        href="#item2"
                        className="btn btn-xs  border-none rounded-full"
                      >
                        2
                      </a>
                      <a
                        href="#item3"
                        className="btn btn-xs border-none rounded-full"
                      >
                        3
                      </a>
                    </div>
                  </figure>
                  <div className="card-body">
                    <div className="text-center">
                      <h2 className="font-extrabold text-xl">WORKSHOP</h2>
                    </div>
                    {/* <div>{info}</div> */}
                    <div className="text-center">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeO9XDqfXX5FXaS1ZTk5oUhXyHJj2Y88oADzGTEmiMdxFm1Hw/viewform"
                        role="button"
                        className="btn border-none bg-violet-700 rounded-full w-36"
                      >
                        Daftar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <Card
          title={'CEESGO'}
          src={ceesgo}
          text={
            <button className="btn no-animation border-none bg-violet-700 rounded-full w-36">
              Coming Soon
            </button>
          }
        />
      </div>
    </div>
  )
}

export default Activity
