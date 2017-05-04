/**
 * Created by charlie on 5/1/17.
 */

    // Redux Reducer
const counter = (state={origTitle:'Title: ', counter: 0}, action) => {
        console.log("COUNTER CALLED");
        switch (action.type) {
            case 'INCREMENT':
                state.counter++;
                break;
            case 'DECREMENT':
                state.counter--;
                break;
            case 'GET_EIGHT':
                console.log("GET EIGHT CASE");
                state.eight = 8;
                break;
            default:
                return state;
        }
        state.title = state.origTitle + state.counter;
        return state;
    };

export default counter;