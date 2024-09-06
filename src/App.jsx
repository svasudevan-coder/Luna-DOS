import { useState } from 'react';

import viteLogo from '/vite.svg';
import './App.css';
// images
import sprig from '/sprig.jpg';
import Spark from '/Spark.jpg';
import Lonestar from '/Lonestar.jpg';
import Webdev from '/webdev.jpg';
import Icon from '@hackclub/icons'



// components
import Faq from './components/Faq';
import Polaroid from './components/Polaroid';
import Workshops from './components/Workshops';

function App() {
  return (
    <main className="flex justify-center items-center min-h-screen flex-col bg-bgPurple w-full">
      
      <div className="flex flex-col items-center w-full mb-14 px-4 sm:px-6">
  <h1 className="text-3xl sm:text-4xl md:text-5xl mt-10 sm:mt-16 md:mt-20 font-bold text-center">
    Hack Club Presents...
  </h1>
  <h1 className="mt-0 text-6xl sm:text-7xl md:text-7xl font-bold text-center mt-8 sm:mt-10 md:mt-12">
    Luna🌙
  </h1>
  <h2 className="mt-4 sm:mt-5 md:mt-6 text-xl sm:text-2xl md:text-2xl mb-4 sm:mb-5 md:mb-6 text-center">
    October 5th | 8 AM - 8 PM | NYC, New York
  </h2>
  <a
    href="https://airtable.com/appRIyfNtzDvLhFv8/shrQHukCeNGSUcEOC"
    className="font-bold inline-block py-3 px-8 sm:px-10 md:px-12 border border-buttonPurple border-[0.16em] bg-buttonPurple rounded-sm m-0 mb-1 box-border no-underline text-white text-center transition-all duration-150 hover:bg-buttonPurple2 hover:border-buttonPurple2"
  >
    Register!
  </a>
</div>


      <div className='flex flex-col items-left w-4/6'>
        <h2 className='text-6xl mb-10 font-bold'>Luna is a social coding event!</h2>
        <p className='text-2xl'>Luna is a hackathon - a day long marathon where participants team up to code projects, learn new skills, and have fun! We invite teenagers who identify as girls or gender-nonconforming youth to join us for 12 hours of creating, exploring, and sharing!</p>
      </div>

      <h1 className="mt-10 border border-buttonPurple2 rounded-full px-2">Past Events</h1>
      <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
        <Polaroid
          img="/Lonestar.jpg"
          desc="9/16/23 - Lonestar"
        />
        <Polaroid
          img="/Spark.jpg"
          desc="August 2023 - Spark"
        />
        <Polaroid
          img="/Blossom.png"
          desc="3/16/2024 - Blossom"
        />
        <Polaroid
          img="/Evergreen.jpg"
          desc="5/3/2024 - Evergreen"
        />
      </div>

      <div className="flex flex-col items-left w-full sm:w-4/6 px-4 sm:px-0">
        <h2 className="text-4xl sm:text-6xl mb-6 sm:mb-10 font-bold">Workshops/Tracks</h2>
        
        <Workshops img="/sprig.jpg" name="Build your own video game" desc="
        In this workshop, participants will learn to create 2D video games in JavaScript. They’ll use Sprig, a web-based JavaScript editor created by Hack Club. After students complete this track, they’ll be shipped a free handheld console to play their game on!
        " />
        <div className='mt-4'></div>

        <Workshops img="/webdev.jpg" name="Create your own website" desc="In this workshop, participants will learn
        HTML and CSS by building their own personal website. They’ll use Replit, an online code editor, to build and host their site. With this track,
        attendees will learn the building blocks of web development!" />
      </div>

      {/* Center the Faq component properly */}
      <div className='flex justify-center w-full bg-bgPurple mb-10'>
        <div className='w-4/6'>
          <Faq />
        </div>
      </div>

      <a
  className="mb-10 text-xl"
  href="https://www.instagram.com/luna.hackclub/"
  >
    <div style={{ color: 'black' }}>
        <Icon glyph="instagram" size={32} />
    </div>
  </a>

      

    </main>
  );
}

export default App;