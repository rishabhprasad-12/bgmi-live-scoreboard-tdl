import React from "react";
import { useEffect, useState } from "react";
import { SHEET_URL, REFRESH_TIME } from "./sheetConfig";
import ScoreTable from "./components/ScoreTable";
import LiveBadge from "./components/LiveBadge";

function App() {
  const [matchStatus, setMatchStatus] = useState("END");

  return (
    <div className="app">
      {matchStatus === "LIVE" && <LiveBadge />}
      <ScoreTable />
    </div>
  );
}

export default App;
