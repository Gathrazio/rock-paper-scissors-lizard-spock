import Titlebar from './components/Titlebar.jsx'
import Play from './components/Play.jsx'
import PlayArena from './components/PlayArena.jsx'
import SheldonQuote from './components/SheldonQuote.jsx'
import Instructions from './components/Instructions.jsx'
import arrow from './assets/right-arrow-thin.png'

export default function App() {
  const exteriorSquareDims = "11rem";

  return (
    <div className="bg-slate-300 min-h-screen h-fit pb-10">
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
        <img src={arrow} alt="" className={`absolute md:left-[6rem] md:top-[3.6rem] md:h-[11rem] md:w-[11rem] -rotate-[36deg]`}/>
        <img src={arrow} alt="" className={`absolute md:right-[6rem] md:top-[3.6rem] md:h-[11rem] md:w-[11rem] rotate-[36deg]`}/>
        <img src={arrow} alt="" className={`absolute md:right-[1.5rem] md:top-[18.8rem] md:h-[11rem] md:w-[11rem] rotate-[108deg]`}/>
        <img src={arrow} alt="" className={`absolute md:left-[1.5rem] md:top-[18.8rem] md:h-[11rem] md:w-[11rem] -rotate-[108deg]`}/>
        <img src={arrow} alt="" className={`absolute md:left-[14.5rem] md:top-[27.8rem] md:h-[11rem] md:w-[11rem] rotate-[180deg]`}/>
        {/* interior arrows */}
        <img src={arrow} alt="" className={`absolute md:left-[2.8rem] md:top-[6.1rem] md:h-[25rem] md:w-[25rem] rotate-[108deg]`}/>
        <img src={arrow} alt="" className={`absolute md:right-[2.8rem] md:top-[6.1rem] md:h-[25rem] md:w-[25rem] -rotate-[108deg]`}/>
        <img src={arrow} alt="" className={`absolute md:left-[7.7rem] md:top-[3.5rem] md:h-[25rem] md:w-[25rem] rotate-[180deg]`}/>
        <img src={arrow} alt="" className={`absolute md:left-[4.2rem] md:top-[11.6rem] md:h-[25rem] md:w-[25rem] rotate-[36deg]`}/>
        <img src={arrow} alt="" className={`absolute md:right-[4.2rem] md:top-[11.6rem] md:h-[25rem] md:w-[25rem] -rotate-[36deg]`}/>
      </PlayArena>
      <SheldonQuote />
    </div>
  )
}