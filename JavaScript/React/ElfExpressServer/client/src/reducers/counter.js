/**
 * Created by charlie on 5/1/17.
 */

const baseTitle = 'ElfRester: ';

// Redux Reducer
const counter = (state={title: baseTitle + 0, counter: 0, eight: 0, nine: 0}, action) => {
        console.log("COUNTER CALLED");
        switch (action.type) {
            case 'INCREMENT':
                return {
                ...state,
                counter: state.counter+1,
                title: baseTitle + (state.counter+1)
            };
            case 'DECREMENT':
                return {
                    ...state,
                    counter: state.counter - 1,
                    title: baseTitle + (state.counter+1)
                };
            case 'GET_EIGHT':
                console.log("GET EIGHT CASE");
                return {
                    ...state,
                    eight: action.value
                };
            case 'GET_NINE':
                console.log("GET NINE CASE");
                return {
                    ...state,
                    nine: action.value
                };
            case 'TITLE':
                return {
                ...state,
                title: baseTitle + counter
            };
            default:
                return state;
        }
    };

export default counter;