import { lazy } from 'react';

function loadDefault() {
    return () => {
        import(`./elfmods/NullModule`);
    };
}

function loadTargetCompnent(moduleName) {
    return () => {
        return import(`./elfmods/${moduleName}`).catch(loadDefault());
    };
}

export const importView = (moduleName) => lazy(loadTargetCompnent(moduleName));
