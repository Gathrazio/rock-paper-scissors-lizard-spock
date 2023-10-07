export default function PlayArena ({children}) {
    return (
        <div className="p-20 relative h-[16rem] w-[16rem] sm:h-[25rem] sm:w-[25rem] lg:h-[40rem] lg:w-[40rem] rounded-full bg-emerald-400 mx-auto mt-5">
            {children}
        </div>
    )
}