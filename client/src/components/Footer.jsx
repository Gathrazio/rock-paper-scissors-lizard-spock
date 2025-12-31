import { IconContext } from 'react-icons';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

export default function Footer () {
    return (
        <div className="flex bg-amber-400 w-full h-[40px] items-center justify-center">
            <IconContext.Provider value={{ className: 'w-14 h-8 z-50 mx-3 sm:mx-10 transition ease-in-out delay-5 hover:text-slate-100 hover:cursor-pointer' }}>
                <div onClick={() => window.open("https://github.com/Gathrazio", "_blank")}>
                    <FaGithubSquare />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: ' w-14 h-8 z-50 mx-3 sm:mx-10 transition ease-in-out delay-5 hover:text-slate-100 hover:cursor-pointer' }}>
                <div onClick={() => window.open("https://www.linkedin.com/in/noahnsjensen/", "_blank")}>
                    <AiFillLinkedin />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'w-14 h-8 z-50 mx-3 sm:mx-10 transition ease-in-out delay-5 hover:text-slate-100 hover:cursor-pointer' }}>
                <div onClick={() => window.open("https://debtnet5.com", "_blank")}>
                    <CgWebsite />
                </div>
            </IconContext.Provider>
        </div>
    )
}