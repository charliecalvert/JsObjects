import { getDate, getTitle } from './actions';
import { connect } from 'react-redux';
import Overview from './Overview';

const mapStateToProps = state => {
    return {
        title: state.title,
        date: state.date
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchTitle: () => {
            dispatch(getTitle());
        },
        dispatchDate: () => {
            dispatch(getDate());
        }
    };
};

const OverviewConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Overview);

export default OverviewConnect;
