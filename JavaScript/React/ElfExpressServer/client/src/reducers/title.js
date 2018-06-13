/**
 * Created by charlie on 5/1/17.
 */

const title = (state = { origTitle: 'Title: ' }, action) => {
    console.log('TITLE CALLED');
    state.title = state.origTitle + state.counter;
    return state;
};
