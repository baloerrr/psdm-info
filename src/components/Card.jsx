import { Link } from 'react-router-dom'

function Card({ src, title, text, item, info, carousel, carouselNo }) {
  return (
    <>
      <div className="w-80 carousel rounded-box">
        <div className="carousel-item w-full">
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure id={item}>
              <Link>
                <img
                  className="w-full h-80 object-cover"
                  src={src}
                  alt="Shoes"
                />
              </Link>
              {carouselNo}
            </figure>
            <div className="card-body">
              <div className="text-center">
                <h2 className="font-extrabold text-xl">{title}</h2>
              </div>
              <div>{info}</div>
              <div className="text-center">
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
        {carousel}
      </div>
    </>
  )
}

export default Card
