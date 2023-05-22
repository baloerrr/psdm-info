import { Link } from 'react-router-dom'

function Card({ src, title, text, imageLink, info }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <Link to={imageLink}>
          <img className="w-full h-80 object-cover" src={src} alt="Shoes" />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold text-xl">{title}</h2>
        <div>{info}</div>
        <div className="text-center">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
