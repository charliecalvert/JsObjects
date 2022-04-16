module.exports = (api) => {
    api.cache(true);

    const presets = ['@babel/preset-react', '@babel/preset-env'];
    const plugins = [];

    return {
        presets,
        plugins,
    };
};
