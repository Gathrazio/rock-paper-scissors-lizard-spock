import Titlebar from './components/Titlebar.jsx'
import Play from './components/Play.jsx'
import PlayArena from './components/PlayArena.jsx'
import SheldonQuote from './components/SheldonQuote.jsx'
import Instructions from './components/Instructions.jsx'
import Footer from './components/Footer.jsx'
import Results from './components/Results.jsx'
import TallyDisplay from './components/TallyDisplay.jsx'
import arrow from './assets/right-arrow-thin.png'
import { useState } from 'react'

export default function App() {
  const [playStats, setPlayStats] = useState([0, 0]);
  const [handIds, setHandIds] = useState([0, 0]);
  const [conclusion, setConclusion] = useState();
  const [didWin, setDidWin] = useState({});
  const updatePlayStats = (didWinGame, ids, gameConclusion) => {
    setHandIds(ids)
    setConclusion(gameConclusion)
    if (didWinGame) {
      setDidWin(true)
      setPlayStats(prev => [prev[0] + 1, prev[1] + 1])
      return;
    }
    setDidWin(false)
    setPlayStats(prev => [prev[0], prev[1] + 1])
  }
  

   return (
    <div className="bg-slate-300 min-h-screen h-fit sm:pb-10 pb-5 relative">
      <Titlebar />
      <Instructions />
      <TallyDisplay playStats={playStats}/>
      <PlayArena>
        {/* play icons */}
        <Play iconId={1} updatePlayStats={updatePlayStats}/>
        <Play iconId={2} updatePlayStats={updatePlayStats}/>
        <Play iconId={3} updatePlayStats={updatePlayStats}/>
        <Play iconId={4} updatePlayStats={updatePlayStats}/>
        <Play iconId={5} updatePlayStats={updatePlayStats}/>
        {/* exterior arrows */}
        <img
          src={arrow}
          className={`prevent-select absolute lg:left-[6rem] lg:top-[3.6rem] lg:h-[11rem] lg:w-[11rem] sm:left-[3.7rem] sm:top-[1.8rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block -rotate-[36deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute lg:right-[6rem] lg:top-[3.6rem] lg:h-[11rem] lg:w-[11rem] sm:right-[3.7rem] sm:top-[1.8rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block rotate-[36deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute lg:right-[1.5rem] lg:top-[18.8rem] lg:h-[11rem] lg:w-[11rem] sm:right-[0.5rem] sm:top-[11.1rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute lg:left-[1.5rem] lg:top-[18.8rem] lg:h-[11rem] lg:w-[11rem]  sm:left-[0.5rem] sm:top-[11.1rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block -rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute lg:left-[14.5rem] lg:top-[27.8rem] lg:h-[11rem] lg:w-[11rem] sm:left-[8.6rem] sm:top-[16.8rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block rotate-[180deg]`}/>
        {/* interior arrows */}
        <img
          src={arrow}
          className={`prevent-select absolute lg:left-[2.8rem] lg:top-[6.1rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[3rem] sm:left-[1.1rem] hidden sm:block rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute lg:right-[2.8rem] lg:top-[6.1rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[3.2rem] sm:right-[1.1rem] hidden sm:block -rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:left-[7.7rem] lg:top-[3.5rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[1rem] sm:left-[4rem] hidden sm:block rotate-[180deg]`}/>
        <img
          src={arrow}
          className={`absolute lg:left-[4.2rem] lg:top-[11.6rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[6.7rem] sm:left-[2rem] hidden sm:block rotate-[36deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute lg:right-[4.2rem] lg:top-[11.6rem] lg:h-[25rem] lg:w-[25rem] sm:h-[17rem] sm:w-[17rem] sm:top-[6.7rem] sm:right-[2rem] hidden sm:block -rotate-[36deg]`}/>
      </PlayArena>
      <Results handIds={handIds} didWin={didWin} conclusion={conclusion}/>
      <SheldonQuote />
      <Footer />
    </div>
  )
}