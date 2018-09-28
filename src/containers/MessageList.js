import { connect } from 'react-redux';
import MessageList from '../components/MessageList'

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
}

const mapDispatchToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
