/**
 * Created by charlie on 6/1/17.
 */

const spokesman = (state = { statement: 'No comment' }, action) => {
    switch (action.type) {
        case 'VERIFY':
            return { statement: 'I stand by it. In fact, I invented it.' };
        case 'DENY':
            return { statement: 'I deny everything. Never heard of it.' };
        case 'NO COMMENT':
            return {statement: 'No comment.'};
        default:
            return state;
    }
};

export default spokesman;
