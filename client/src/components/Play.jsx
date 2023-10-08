import { IconContext } from 'react-icons';
import {FaHandRock, FaHandPaper, FaHandScissors, FaHandLizard, FaHandSpock } from 'react-icons/fa'


export default function Play ({iconId, updatePlayStats}) {
    const rules = [
        {
            ruleSequence: [1, 2],
            reason: "Scissors cuts paper!"    
        },
        {
            ruleSequence: [2, 3],
            reason: "Paper covers rock!"
        },
        {
            ruleSequence: [3, 4],
            reason: "Rock crushes lizard!"
        },
        {
            ruleSequence: [4, 5],
            reason: "Lizard poisons Spock!"
        },
        {
            ruleSequence: [5, 1],
            reason: "Spock smashes scissors!"
        },
        {
            ruleSequence: [1, 4],
            reason: "Scissors decapitates lizard!"
        },
        {
            ruleSequence: [4, 2],
            reason: "Lizard eats paper!"
        },
        {
            ruleSequence: [2, 5],
            reason: "Paper disproves Spock!"
        },
        {
            ruleSequence: [5, 3],
            reason: "Spock vaporizes rock!"
        },
        {
            ruleSequence: [3, 1],
            reason: "Rock crushes scissors!"
        }
    ]
    const determineIconAndPositioning = () => {
        let positionStyles;
        switch (iconId){
                case 1:
                    positionStyles = "lg:top-[11.6rem] lg:left-[0.65rem] sm:top-[7rem] sm:left-[0.5rem] top-[5.5rem] left-[1rem]"
                    return [<FaHandScissors />, positionStyles]
                case 2:
                    positionStyles = ' top-[1.5rem] sm:top-0 lg:left-[16rem] sm:left-[10.1rem] left-[6.87rem]'
                    return [<FaHandPaper />, positionStyles]
                case 3:
                    positionStyles = "lg:top-[11.6rem] lg:right-[0.65rem] sm:top-[7rem] sm:right-[0.5rem] top-[5.5rem] right-[1rem]"
                    return [<FaHandRock />, positionStyles]
                case 4:
                    positionStyles = "lg:top-[29rem] lg:left-[26.4rem] sm:top-[18.4rem] sm:right-[4rem] top-[12rem] right-[3.3rem]"
                    return [<FaHandLizard />, positionStyles]
                case 5:
                    positionStyles = "lg:top-[29rem] lg:left-[6.15rem] sm:top-[18.4rem] sm:left-[4rem] top-[12rem] left-[3.5rem]"
                    return [<FaHandSpock />, positionStyles]
            }
    }

    const generateRandomId = () => Math.ceil(Math.random() * 5);
    const arraysEqual = (arr1, arr2) => arr1[0] === arr2[0] && arr1[1] === arr2[1];

    const playGame = (id) => {
        const houseId = generateRandomId()
        if (id === houseId) {
            updatePlayStats(false, [id, houseId], "It is a draw.")
            return;
        }
        const winner = rules.find(rule => arraysEqual(rule.ruleSequence, [id, houseId]))
        if (winner) {
            updatePlayStats(true, [id, houseId], winner.reason)
            return;
        }
        const houseWinRule = rules.find(rule => arraysEqual(rule.ruleSequence, [houseId, id]));
        updatePlayStats(false, [id, houseId], houseWinRule.reason)
    }
    
    return (
        <div className={`rounded-full w-fit lg:p-5 sm:p-2 p-5 absolute bg-amber-500 transition ease-in-out delay-5 hover:bg-sky-600 hover:cursor-pointer z-50 ${determineIconAndPositioning()[1]}`} onClick={() => playGame(iconId)}>
            <IconContext.Provider value={{ className: 'lg:w-20 lg:h-20 w-14 h-14' }}>
                {determineIconAndPositioning()[0]}
            </IconContext.Provider>
        </div>
    )
}