import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar'
import { selectAll, markRead, countUnread, deleteMessages, updateSelectionState, addLabel } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        selection: state.currentSelectionState,
        unreadCount: state.unreadCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        'selector': (updateTo) => dispatch(selectAll(updateTo)),
        'markRead': (isRead) => dispatch(markRead(isRead)),
        'countUnread': () => dispatch(countUnread()),
        'deleteMessages': () => {
            dispatch(deleteMessages())
            dispatch(countUnread())
            dispatch(updateSelectionState())
        },
        'addLabel': (event) => dispatch(addLabel(event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
