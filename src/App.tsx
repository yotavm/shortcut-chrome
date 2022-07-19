import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center min-w-max h-100 items-center">
      <select className="h-12 w-full rounded-sm border border-slate-400 mb-2">
        <option value="1">Bug</option>
        <option value="2">Chore</option>
        <option value="3">more</option>
      </select>
      <button className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg hover:bg-indigo-500">
        Set Templates
      </button>
    </div>
  );
}

export default App;
