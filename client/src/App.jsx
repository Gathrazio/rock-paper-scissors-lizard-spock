import Titlebar from './components/Titlebar.jsx'
import Play from './components/Play.jsx'
import PlayArena from './components/PlayArena.jsx'
import SheldonQuote from './components/SheldonQuote.jsx'
import Instructions from './components/Instructions.jsx'
import Footer from './components/Footer.jsx'
import arrow from './assets/right-arrow-thin.png'

export default function App() {
  const exteriorSquareDims = "11rem";

  return (
    <div className="bg-slate-300 min-h-screen h-fit sm:pb-10 pb-5 relative">
      <Titlebar />
      <Instructions />
      <PlayArena>
        {/* play icons */}
        <Play iconId={1} />
        <Play iconId={2} />
        <Play iconId={3} />
        <Play iconId={4} />
        <Play iconId={5} />
        {/* exterior arrows */}
        <img
          src={arrow}
          className={`absolute lg:left-[6rem] lg:top-[3.6rem] lg:h-[11rem] lg:w-[11rem] sm:left-[3.7rem] sm:top-[1.8rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block -rotate-[36deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:right-[6rem] lg:top-[3.6rem] lg:h-[11rem] lg:w-[11rem] sm:right-[3.7rem] sm:top-[1.8rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block rotate-[36deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:right-[1.5rem] lg:top-[18.8rem] lg:h-[11rem] lg:w-[11rem] sm:right-[0.5rem] sm:top-[11.1rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:left-[1.5rem] lg:top-[18.8rem] lg:h-[11rem] lg:w-[11rem]  sm:left-[0.5rem] sm:top-[11.1rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block -rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:left-[14.5rem] lg:top-[27.8rem] lg:h-[11rem] lg:w-[11rem] sm:left-[8.6rem] sm:top-[16.8rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block rotate-[180deg]`}/>
        {/* interior arrows */}
        <img
          src={arrow}
          className={`absolute lg:left-[2.8rem] lg:top-[6.1rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[3rem] sm:left-[1.1rem] hidden sm:block rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:right-[2.8rem] lg:top-[6.1rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[3.2rem] sm:right-[1.1rem] hidden sm:block -rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:left-[7.7rem] lg:top-[3.5rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[1rem] sm:left-[4rem] hidden sm:block rotate-[180deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:left-[4.2rem] lg:top-[11.6rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[6.7rem] sm:left-[2rem] hidden sm:block rotate-[36deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:right-[4.2rem] lg:top-[11.6rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[6.7rem] sm:right-[2rem] hidden sm:block -rotate-[36deg]`}/>
      </PlayArena>
      <SheldonQuote />
      <Footer />
    </div>
  )
}