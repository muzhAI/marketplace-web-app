import { compose, lifecycle, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Chat from './ChatView';
import { messagesSelectors, messagesOperations } from '../../modules/messages';

function mapStateToProps(state, { match }) {
  return {
    messages: messagesSelectors.getMessages(state, match.params.id),
    isLoading: state.messages.fetchMessages.isLoading,
  };
}

const mapDispatchToProps = {
  sendMessage: messagesOperations.sendMessage,
  fetchMessages: messagesOperations.fetchMessages,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('text', 'setMessage', ''),
  withHandlers({
    handleChange: ({ setMessage }) => (event) => {
      setMessage(event.target.value);
    },
    sendMessage: ({ setMessage, text, sendMessage, match }) => (event) => {
      if (event.key === 'Enter' && text.length > 0) {
        sendMessage(match.params.id, text);
        setMessage('');
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchMessages(this.props.match.params.id);
    },
    componentDidUpdate(prevProps) {
      const { id } = this.props.match.params;
      if (id !== prevProps.match.params.id) {
        this.props.fetchMessages(id);
      }
    },
  }),
);

export default enhancer(Chat);
