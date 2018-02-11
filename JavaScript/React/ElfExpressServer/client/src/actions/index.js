/**
 * Created by charlie on 5/1/17.
 */

export const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};

export const getEight = (value) => {
    return {
        'type': 'GET_EIGHT',
        'value': value
    }
};

export const getTitle = () => {
    return {
        'type': 'TITLE'
    }
};
