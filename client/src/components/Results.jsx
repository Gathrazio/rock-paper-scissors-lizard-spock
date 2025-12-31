import { IconContext } from 'react-icons';
import {FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard, FaHandSpock } from 'react-icons/fa'


export default function Results ({handIds, didWin, conclusion}) {
    const determineIcon = (identifier) => {
        switch (identifier === "player" ? handIds[0] : handIds[1]){
                case 1:
                    return <FaHandScissors />
                case 2:
                    return <FaHandPaper />
                case 3:
                    return <FaHandRock />
                case 4:
                    return <FaHandLizard />
                case 5:
                    return <FaHandSpock />
        }
    }

    const determineStatement = (didWin) => {
        if (typeof didWin === "object") {
            return "";
        } else if (didWin === false) {
            return "Failure."
        }
        return "Victory!"
    }

    return (
        <div className="w-full bg-amber-300 w-fit h-[180px] sm:h-[160px] sm:mb-[20px]">
            <h2 className="prevent-select text-center font-semibold text-2xl pt-1 text-sky-700">Results</h2>
            <div className="grid grid-cols-3 grid-rows-[50px_60px] w-full h-full [&>*]:p-1 [&>*]:flex [&>*]:justify-center [&>*]:items-center">
                <div className="prevent-select font-semibold text-teal-900">You played:</div>
                <div className="prevent-select font-semibold text-teal-900">House played:</div>
                <div className="prevent-select font-semibold text-teal-900">Conclusion:</div>
                <div className="w-full flex pt-0 items-center">
                    {handIds[0] != 0 && <div className="rounded-full w-fit p-5 absolute bg-sky-400">
                    <IconContext.Provider value={{ className: 'sm:w-7 sm:h-7 w-5 h-5' }}>
                        {determineIcon("player")}
                    </IconContext.Provider>
                    </div>}
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    {handIds[1] != 0 && <div className="rounded-full w-fit p-5 absolute bg-sky-400">
                    <IconContext.Provider value={{ className: 'sm:w-7 sm:h-7 w-5 h-5' }}>
                        {determineIcon("house")}
                    </IconContext.Provider>
                    </div>}
                </div>
                <div>
                    <div className="prevent-select pl-2 pr-2 pt-0 sm:font-bold text-center h-[70px] text-teal-900">
                        {determineStatement(didWin)} {conclusion}
                    </div>
                </div>
            </div>
        </div>
    )
}