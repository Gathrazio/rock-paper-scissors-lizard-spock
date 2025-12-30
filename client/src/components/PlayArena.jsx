export default function PlayArena ({children}) {
    return (
        <div className="p-20 border-red-500 relative h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem]  sm:rounded-full rounded-xl bg-teal-400 mx-auto my-5">
            {children}
        </div>
    )
}