/**
 * Created by charlie on 6/6/17.
 */

import {connect} from 'react-redux';
import AppConnectJsxOnly from './AppConnectJsxOnly';

const mapStateToProps = (state) => {
    return {
        statement: state.statement
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deny: () => {
            dispatch({type: 'DENY'})
        },
        verify: () => {
            dispatch({type: 'VERIFY'})
        },
        noComment: () => {
            dispatch({type: 'NO COMMENT'})
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppConnectJsxOnly);

