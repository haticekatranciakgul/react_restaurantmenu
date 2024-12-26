import React from 'react'
import { Link } from 'react-router-dom'


function Content({navigation}) {
  return (
    <div>
      <div className="font-extrabold text-9xl md:text-8xl [text-wrap:balance] text-center	mx-auto
             bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        <span>Bugün</span>
        <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] 
                md:h-[calc(theme(fontSize.8xl)*theme(lineHeight.tight))] overflow-hidden pl-3 text-center">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block ">
            <li>Risotto</li>
            <li>Noodle</li>
            <li>Pizza</li>
            <li>Steak</li>
            <li>Hamburger</li>
            <li aria-hidden="true">Fajita</li>
          </ul>
        </span><br />
        <span>Yemek İster misin?</span><br />
        <main className="flex items-center justify-center pb-10">
          <div className="text-red-500 animate-heartbeat text-9xl">❤️</div>
        </main>
      </div>
      <div className="text-center animate-slideInLeft ">
        {/* Animasyonlu Buton */}
        <button
          type="button" 
          className="relative rounded-full text-center bg-gray-800 p-3 text-gray-400
        hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
        focus:ring-offset-gray-800 animate-slideInLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Animasyonlu Yazı */}
        <span className="text-4xl mx-3 text-gray-300  mt-4">
          <Link to="/Menu">Menü için tıklayınız!</Link>
        </span>

      </div>
    </div>
  )
}

export default Content
