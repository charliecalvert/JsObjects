module.exports = (api) => {
    api.cache(true);

    const presets = [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ];
    const plugins = [
        '@babel/plugin-proposal-class-properties',
        [
            '@babel/transform-runtime', {
                regenerator: true,
            },
        ],
    ];

    return {
        presets,
        plugins,
    };
};
