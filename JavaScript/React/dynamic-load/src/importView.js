import { lazy } from 'react';

export const importView = moduleName => lazy(() => {
    return import(`./elfmods/${moduleName}`).catch(() => {
        import(`./elfmods/NullModule`);
    });
  }
);
