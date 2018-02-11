/**
 * Created by charlie on 5/1/17.
 */

const baseTitle = 'Elven React Redux REST Demo';
const baseCounterString = 'The counter is set to: ';
// Redux Reducer
const counter = (state = {
    title: baseTitle,
    counterString: baseCounterString + 0,
    counter: 0,
    eight: 0,
    nine: 0
}, action) => {
    console.log("COUNTER CALLED");
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
                counterString: baseCounterString + (state.counter + 1)
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
                counterString: baseCounterString + (state.counter + 1)
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

                title: baseTitle
            };

        case 'DATE':
            const currentdate = new Date();
            return {
                ...state,
                date: currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds()
            };

        default:
            return state;
    }
};

export default counter;