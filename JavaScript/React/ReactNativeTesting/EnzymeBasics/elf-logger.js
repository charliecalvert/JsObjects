export default (() => {
    let saveConsole = null;
    const logger = {};

    logger.on = () => {
        if (saveConsole) {
            window['console']['log'] = saveConsole;
        }
    };

    logger.off = () => {
        saveConsole = console.log;
        window['console']['log'] = () => {};
    };

    return logger;
})();