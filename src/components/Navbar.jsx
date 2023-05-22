import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'
import '../../src/App.css'

function Navbar() {
  const [click, setClick] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  const closeMenu = () => {
    setClick(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="navbar sticky top-0 z-10 bg-violet-700 text-white">
      <div className="flex-1">
        <a className="btn btn-ghost font-bold text-3xl">PSDM</a>
      </div>

      {isMobile ? (
        <div className="md:flex-none dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className={`menu ${
              isMobile
                ? 'bg-white md:bg-violet-700 px-1 menu-compact dropdown-content mt-5 p-2 shadow-lg rounded-box w-52 '
                : ''
            }`}
          >
            <li>
              <Link
                className="font-bold md:text-white text-slate-800 bg-white md:bg-violet-700 hover:bg-[#6528c9] hover:text-white"
                to="beranda"
                smooth={true}
                spy={true}
                onClick={closeMenu}
              >
                BERANDA
              </Link>
            </li>
            <li>
              <Link
                className="font-bold md:text-white text-slate-800 bg-white md:bg-violet-700 hover:bg-[#6528c9] hover:text-white"
                to="aktivitas"
                smooth={true}
                spy={true}
                onClick={closeMenu}
              >
                AKTIVITAS
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex-none">
          <ul
            tabIndex="0"
            className={`menu menu-horizontal border-none bg-white`}
          >
            <li>
              <Link
                className="font-bold md:text-white border-violet-700 text-slate-800 bg-white md:bg-violet-700 hover:bg-[#6528c9] hover:text-white"
                to="beranda"
                smooth={true}
                spy={true}
                onClick={closeMenu}
                onSetActive={false}
                activeClass={false}
              >
                BERANDA
              </Link>
            </li>
            <li>
              <Link
                className="font-bold md:text-white text-slate-800 bg-white md:bg-violet-700 hover:bg-[#6528c9] hover:text-white"
                to="aktivitas"
                smooth={true}
                spy={true}
                onClick={closeMenu}
              >
                AKTIVITAS
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
