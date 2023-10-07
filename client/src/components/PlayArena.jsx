export default function PlayArena ({children}) {
    return (
        <div className="p-20 relative h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] lg:h-[40rem] lg:w-[40rem] sm:rounded-full rounded-xl bg-teal-400 mx-auto my-5">
            {children}
        </div>
    )
}