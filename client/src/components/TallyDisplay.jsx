export default function TallyDisplay ({playStats}) {
    return (
        <div className="bg-amber-300 [&>*]:text-slate-800 grid grid-cols-5 [&>*]:text-center grid-rows-2 [&>*]:p-1">
            <div></div>
            <div className="prevent-select font-semibold rounded-tl-lg bg-teal-600">Wins</div>
            <div className="prevent-select font-semibold bg-teal-600">Total Played</div>
            <div className="prevent-select font-semibold rounded-tr-lg bg-teal-600">Win %</div>
            <div></div>
            <div></div>
            <div className="prevent-select bg-teal-600">{playStats[0]}</div>
            <div className="prevent-select bg-teal-600">{playStats[1]}</div>
            <div className="prevent-select bg-teal-600">{playStats[1] != 0 && `${Math.trunc(playStats[0] / playStats[1] * 100 ** 2) / 100}%`}</div>
            <div></div>
        </div>
    )
}