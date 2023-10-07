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
        <div className="w-full bg-red-400 w-fit h-auto sm:mb-[20px]">
            <h2 className="text-center font-semibold text-2xl">Results</h2>
            <div className="grid grid-cols-3 grid-rows-[50px_100px] w-full h-full [&>*]:p-1 [&>*]:flex [&>*]:justify-center [&>*]:items-center">
                <div className="font-semibold">You played:</div>
                <div className="font-semibold">House played:</div>
                <div className="font-semibold">Conclusion:</div>
                <div className="w-full flex justify-center items-center">
                    {handIds[0] != 0 && <div className="rounded-full border-2 border-black w-fit p-5 absolute bg-cyan-400">
                    <IconContext.Provider value={{ className: 'lg:w-10 lg:h-10 w-5 h-5' }}>
                        {determineIcon("player")}
                    </IconContext.Provider>
                    </div>}
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    {handIds[1] != 0 && <div className="rounded-full border-2 border-black w-fit p-5 absolute bg-cyan-400">
                    <IconContext.Provider value={{ className: 'lg:w-10 lg:h-10 w-5 h-5' }}>
                        {determineIcon("house")}
                    </IconContext.Provider>
                    </div>}
                </div>
                <div>
                    <div className="p-4 text-center">
                        {determineStatement(didWin)} {conclusion}
                    </div>
                </div>
            </div>
        </div>
    )
}