import React, { useState } from 'react';
import ElvenList from './ElvenList';
import { importView } from './importView';
import './styles.css';

export default function App() {
  const [elfModules, setElfModules] = useState({});

  const addElfComponent = moduleName => {
    // Optional step: Don't load module twice.
    if (elfModules[moduleName]) return;

    const ElfView = importView(moduleName);
    setElfModules(elfModules => ({ ...elfModules, [moduleName]: ElfView }));
  };
  
  const loadPartOne = () => addElfComponent('PartOne');
  const loadPartTwo = () => addElfComponent('PartTwo');

  return (
    <main>
      <section className="container">
        <button disabled={elfModules['PartOne']} onClick={loadPartOne}>
          Load Part One
        </button>
        <button disabled={elfModules['PartTwo']} onClick={loadPartTwo}>
          Load Part Two
        </button>
      </section>
      <section className="container">
        <React.Suspense fallback="Loading elfModules...">
          <div className="row">
            <ElvenList elfModules={elfModules} />
          </div>
        </React.Suspense>
      </section>
    </main>
  );
}
