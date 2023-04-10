import React, { useState } from 'react';
import ElvenList from './ElvenList';
import { importView } from './importView';
import './styles.css';

export default function App() {
    const [elfModules, setElfModules] = useState({});

    const addElfComponent = (moduleName) => {
    // Optional step: Don't load module twice.
        if (elfModules[moduleName]) return;

        const ElfView = importView(moduleName);
        setElfModules((elfModulesA) => ({ ...elfModulesA, [moduleName]: ElfView }));
    };

    const loadPartOne = () => addElfComponent('PartOne');
    const loadPartTwo = () => addElfComponent('PartTwo');
    const loadlElf01 = () => addElfComponent('Elf01');
    const loadlElf02 = () => addElfComponent('Elf02');
    const loadlElf03 = () => addElfComponent('Elf03');
    const loadlElf04 = () => addElfComponent('Elf04');

    return (
        <main>
            <section className="container">
                <button type="button" disabled={elfModules.PartOne} onClick={loadPartOne}>
                    Load Part One
                </button>
                <button type="button" disabled={elfModules.PartTwo} onClick={loadPartTwo}>
                    Load Part Two
                </button>
                <button type="button" disabled={elfModules.Elf01} onClick={loadlElf01}>
                    Load Elf One
                </button>
                <button type="button" disabled={elfModules.Elf02} onClick={loadlElf02}>
                    Load Elf Two
                </button>
                <button type="button" disabled={elfModules.Elf03} onClick={loadlElf03}>
                    Load Elf Three
                </button>
                <button type="button" disabled={elfModules.Elf04} onClick={loadlElf04}>
                    Load Elf Four
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
