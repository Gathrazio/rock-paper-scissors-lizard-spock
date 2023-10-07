import { IconContext } from 'react-icons';
import {FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard, FaHandSpock } from 'react-icons/fa'


export default function Play ({iconId}) {
    const determineIconAndPositioning = () => {
        let positionStyles;
        switch (iconId){
                case 1:
                    positionStyles = "lg:top-[11.6rem] lg:left-[0.6rem]"
                    return [<FaHandScissors />, positionStyles]
                case 2:
                    positionStyles = 'lg:top-0 lg:left-[16rem]'
                    return [<FaHandPaper />, positionStyles]
                case 3:
                    positionStyles = "lg:top-[11.6rem] lg:right-[0.6rem]"
                    return [<FaHandRock />, positionStyles]
                case 4:
                    positionStyles = "lg:top-[29rem] lg:right-[6.5rem]"
                    return [<FaHandLizard />, positionStyles]
                case 5:
                    positionStyles = "lg:top-[29rem] lg:left-[6.5rem]"
                    return [<FaHandSpock />, positionStyles]
            }
    }
    
    return (
        <div className={`rounded-full border-2 border-black w-fit p-5 absolute bg-cyan-400 ${determineIconAndPositioning()[1]}`}>
            <IconContext.Provider value={{ className: 'w-20 h-20' }}>
                {determineIconAndPositioning()[0]}
            </IconContext.Provider>
        </div>
    )
}