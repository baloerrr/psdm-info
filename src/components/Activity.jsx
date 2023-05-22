import React from 'react'
import Card from './Card'
import ceesgo from '../assets/ceesgo.webp'
import workshop from '../assets/workshop.webp'

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
              className="btn border-none bg-violet-700 rounded-full"
            >
              Daftar
            </a>
          }
          info={
            <ul>
              <h4>Syarat</h4>
              <li></li>
            </ul>
          }
        />
        <Card
          title={'CEESGO'}
          src={ceesgo}
          text={
            <button className="btn no-animation border-none bg-violet-700 rounded-full">
              Coming Soon
            </button>
          }
        />
      </div>
    </div>
  )
}

export default Activity
