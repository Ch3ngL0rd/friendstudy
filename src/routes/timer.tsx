import React from "react";
import { Link, useParams } from "react-router-dom";
import { Timer } from "../components/timer";

export default function Study() {
  // gets params via react-router-dom
  const { time } = useParams();
  const starting_time = parseInt(time as string)
  const { seconds, minutes, seconds_remaining } = Timer({ seconds: starting_time })
  // The circle is a progress bar
  return (
    <main>
      <h1>Timer</h1>
      <Link to={"/"}>Home</Link>
      <div className="flex justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-500 rounded-full" style={{ clipPath: `inset(0 ${100 - seconds_remaining / starting_time * 100}% 0 0)` }}></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-2xl font-semibold text-gray-700">{minutes}:{seconds}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
