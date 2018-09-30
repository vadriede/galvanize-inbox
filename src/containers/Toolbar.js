import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar'
import { selectAll, markRead } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        selection: state.currentSelectionState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        'selector': (updateTo) => dispatch(selectAll(updateTo)),
        'markRead': (isRead) => dispatch(markRead(isRead)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
