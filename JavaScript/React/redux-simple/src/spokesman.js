/**
 * Created by charlie on 6/1/17.
 */

const spokesman = (state = { statement: 'No comment' }, action) => {
    switch (action.type) {
    case 'VERIFY':
        return { statement: 'We stand by it. In fact, we invented it.' };
    case 'DENY':
        return {
            statement: "We deny everything. We've never heard of it.",
        };
    case 'NO COMMENT':
        return { statement: 'No comment.' };
    default:
        return state;
    }
};

export default spokesman;
