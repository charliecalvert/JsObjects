const getData = url => {
    switch (url) {
        case '/api/foo':
            return {
                result: 'success'
            };

        case '/api/numbers':
            return {
                numbers: ['One', 'Two', 'Three']
            };

        default:
            return {};
    }
};

export default getData;
