export default function TeamRow({ rank, team, finPts, posPts, total, Status }) {
  const maxBars = 4;
  const activeBars = Number(Status);

  return (
    <tr className="border-b border-slate-700 hover:bg-slate-800 transition">
      <td className="px-4 py-3 font-bold">{rank}</td>
      <td className="px-4 py-3">{team}</td>
      <td className="px-4 py-3 text-center">{finPts}</td>
      <td className="px-4 py-3 text-center">{posPts}</td>
      <td className="px-4 py-3 text-center font-extrabold text-cyan-400">
        {total}
      </td>

      {/* Status Bars */}
      <td className="px-4 py-3 text-center">
        <div className="flex justify-center gap-1">
          {[...Array(maxBars)].map((_, index) => (
            <span
              key={index}
              className={`w-2 h-5 rounded-sm ${
                index < activeBars ? "bg-white" : "bg-red-500"
              }`}
            />
          ))}
        </div>
      </td>
    </tr>
  );
}
