import { IconContext } from 'react-icons';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

export default function Footer () {
    return (
        <div className="absolute flex bottom-0 bg-rose-500 w-full p-5 h-[120px] items-center justify-around">
            <IconContext.Provider value={{ className: 'lg:w-20 lg:h-20 w-14 h-14 z-50 transition ease-in-out delay-5 hover:text-slate-100 hover:cursor-pointer' }}>
                <div onClick={() => window.open("https://github.com/Gathrazio", "_blank")}>
                    <FaGithubSquare />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'lg:w-20 lg:h-20 w-14 h-14 z-50 transition ease-in-out delay-5 hover:text-slate-100 hover:cursor-pointer' }}>
                <div onClick={() => window.open("https://www.linkedin.com/in/noahnsjensen/", "_blank")}>
                    <AiFillLinkedin />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'lg:w-20 lg:h-20 w-14 h-14 z-50 transition ease-in-out delay-5 hover:text-slate-100 hover:cursor-pointer' }}>
                <div onClick={() => window.open("https://noahnjensen.dev", "_blank")}>
                    <CgWebsite />
                </div>
            </IconContext.Provider>
        </div>
    )
}