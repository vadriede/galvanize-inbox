import { connect } from 'react-redux';
import Message from '../components/Message'
import { updateMessage } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        'starMessage': (msg) => dispatch(updateMessage(msg)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
