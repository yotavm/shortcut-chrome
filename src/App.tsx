import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center min-w-max h-100 items-center">
      <select className="focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-300 shadow-sm mb-2">
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
