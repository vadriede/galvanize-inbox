import { connect } from 'react-redux';
import MessageList from '../components/MessageList'

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
}

export default connect(mapStateToProps)(MessageList)
