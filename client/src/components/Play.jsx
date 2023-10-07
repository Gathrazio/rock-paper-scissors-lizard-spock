import { IconContext } from 'react-icons';
import {FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard, FaHandSpock } from 'react-icons/fa'


export default function Play ({iconId}) {
    const determineIconAndPositioning = () => {
        let positionStyles;
        switch (iconId){
                case 1:
                    positionStyles = "lg:top-[11.6rem] lg:left-[0.6rem] sm:top-[7rem] sm:left-[0.5rem] top-[5.5rem] left-[1rem]"
                    return [<FaHandScissors />, positionStyles]
                case 2:
                    positionStyles = ' top-[1.5rem] sm:top-0 lg:left-[16rem] sm:left-[10.1rem] left-[6.87rem]'
                    return [<FaHandPaper />, positionStyles]
                case 3:
                    positionStyles = "lg:top-[11.6rem] lg:right-[0.6rem] sm:top-[7rem] sm:right-[0.5rem] top-[5.5rem] right-[1rem]"
                    return [<FaHandRock />, positionStyles]
                case 4:
                    positionStyles = "lg:top-[29rem] lg:left-[25.8rem] sm:top-[18.4rem] sm:right-[4.2rem] top-[12rem] right-[3.3rem]"
                    return [<FaHandLizard />, positionStyles]
                case 5:
                    positionStyles = "lg:top-[29rem] lg:left-[6.5rem] sm:top-[18.4rem] sm:left-[4.2rem] top-[12rem] left-[3.3rem]"
                    return [<FaHandSpock />, positionStyles]
            }
    }
    
    return (
        <div className={`rounded-full border-2 border-black w-fit lg:p-5 sm:p-2 p-5 absolute bg-cyan-400 transition ease-in-out delay-5 hover:bg-cyan-200 hover:cursor-pointer z-50 ${determineIconAndPositioning()[1]}`}>
            <IconContext.Provider value={{ className: 'lg:w-20 lg:h-20 w-14 h-14' }}>
                {determineIconAndPositioning()[0]}
            </IconContext.Provider>
        </div>
    )
}