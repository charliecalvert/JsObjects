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
        '@babel/plugin-transform-runtime',
    ];

    return {
        presets,
        plugins,
    };
};
