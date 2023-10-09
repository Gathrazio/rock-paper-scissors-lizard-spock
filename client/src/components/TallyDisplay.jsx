export default function TallyDisplay ({playStats}) {
    return (
        <div className="bg-amber-300 [&>*]:text-slate-800 grid grid-cols-3 grid-rows-2 [&>*]:text-center [&>*]:p-1">
            <div className="prevent-select font-semibold">Wins</div>
            <div className="prevent-select font-semibold">Total Played</div>
            <div className="prevent-select font-semibold">Win %</div>
            <div className="prevent-select">{playStats[0]}</div>
            <div className="prevent-select">{playStats[1]}</div>
            <div className="prevent-select">{playStats[1] != 0 && `${Math.trunc(playStats[0] / playStats[1] * 100 ** 2) / 100}%`}</div>
        </div>
    )
}