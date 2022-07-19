import { useEffect, useState, useRef } from "react";
import { html as bug } from "./templates/bug.md";
import { html as chore } from "./templates/chore.md";
import { sendTemplates } from "./utils/templatesBus";

const templatesMap = new Map([
  ["chore", chore],
  ["bug", bug],
]);

function App() {
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSelectTemplate = () => {
    const select = selectRef.current;
    if (select) {
      const selected = select.options[select.selectedIndex];
      if (templatesMap.has(selected.value)) {
        sendTemplates({
          title: `${selected.value} template`,
          body: templatesMap.get(selected.value),
        });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center min-w-max h-100 items-center">
      <select
        ref={selectRef}
        defaultValue="DEFAULT"
        className="focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md p-2 text-center ring-1 ring-slate-300 shadow-sm mb-2"
      >
        <option value="DEFAULT" disabled>
          Select your option
        </option>
        <option value="chore">Chore</option>
        <option value="bug">Bug</option>
      </select>
      <button
        onClick={handleSelectTemplate}
        className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg hover:bg-indigo-500"
      >
        Set Templates
      </button>
    </div>
  );
}

export default App;
