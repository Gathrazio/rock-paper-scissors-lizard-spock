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
          className={`prevent-select absolute sm:left-[3.7rem] sm:top-[1.8rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block -rotate-[36deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute sm:right-[3.7rem] sm:top-[1.8rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block rotate-[36deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute sm:right-[0.5rem] sm:top-[11.1rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute sm:left-[0.5rem] sm:top-[11.1rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block -rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute sm:left-[8.6rem] sm:top-[16.8rem] sm:h-[8rem] sm:w-[8rem] hidden sm:block rotate-[180deg]`}/>
        {/* interior arrows */}
        <img
          src={arrow}
          className={`prevent-select absolute sm:h-[17rem] sm:w-[17rem] sm:top-[3rem] sm:left-[1.1rem] hidden sm:block rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute sm:h-[17rem] sm:w-[17rem] sm:top-[3.2rem] sm:right-[1.1rem] hidden sm:block -rotate-[108deg]`}/>
        <img
          src={arrow}
          className={`absolute sm:h-[17rem] sm:w-[17rem] sm:top-[1rem] sm:left-[4rem] hidden sm:block rotate-[180deg]`}/>
        <img
          src={arrow}
          className={`absolute sm:h-[17rem] sm:w-[17rem] sm:top-[6.7rem] sm:left-[2rem] hidden sm:block rotate-[36deg]`}/>
        <img
          src={arrow}
          className={`prevent-select absolute sm:h-[17rem] sm:w-[17rem] sm:top-[6.7rem] sm:right-[2rem] hidden sm:block -rotate-[36deg]`}/>
      </PlayArena>
      <Results handIds={handIds} didWin={didWin} conclusion={conclusion}/>
      <SheldonQuote />
      <Footer />
    </div>
  )
}