import React, { useEffect, useState } from "react";
import TeamRow from "./TeamRow";
import LiveBadge from "./LiveBadge";
import { REFRESH_TIME, SHEET_URL } from "../sheetConfig";

export default function ScoreTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData =  async () => {
      try {
        console.log("Fetching started...");

        const res = await fetch(SHEET_URL);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched data:", data);

        if (!Array.isArray(data)) {
          console.error("Data is not array", data);
          return;
        }

        const sortedData = [...data].sort(
          (a, b) => Number(b.total) - Number(a.total),
        );

        setTeams(sortedData); 
        console.log("Teams state updated");
      } catch (error) {
        console.error("Fetch error", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, REFRESH_TIME);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-wide text-cyan-400">
            BGMI LIVE SCOREBOARD
          </h1>
          <LiveBadge />
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full border-collapse">
            <thead className="bg-slate-800 text-slate-300">
              <tr>
                <th className="px-4 py-3 text-left">Rank</th>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-4 py-3 text-center">Fin Pts</th>
                <th className="px-4 py-3 text-center">Pos Pts</th>
                <th className="px-4 py-3 text-center">Total</th>
                <th className="px-4 py-3 text-center">Satus</th>
              </tr>
            </thead>

            <tbody>
              {[...teams].sort((a, b) => Number(b.total) - Number(a.total)).map((team, index) => (
                <TeamRow
                  key={`${team.team}-${index}`}
                  rank={index + 1}
                  {...team}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
