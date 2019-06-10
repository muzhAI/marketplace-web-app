import { compose, withState, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { withRouter, generatePath } from 'react-router-dom';
import ContactSellerModal from './ContactSellerModalView';
import { routes } from '../router';
import { messagesOperations } from '../../modules/messages';
import { chatsOperations } from '../../modules/chats';

const mapDispatchToProps = {
  createChat: chatsOperations.createChat,
  sendMessage: messagesOperations.sendMessage,
};

function mapStateToProps(state) {
  return {
    isLoading: state.messages.sendMessage.isLoading,
    chat: state.chats.items,
  };
}

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('text', 'setMessage', ''),
  withHandlers({
    handleChange: ({ setMessage }) => (event) => {
      setMessage(event.target.value);
    },
    submit: ({
      product,
      createChat,
      setMessage,
      text,
      sendMessage,
      history,
    }) => async (event) => {
      text = text.trim();
      event.preventDefault();
      if (!product.chatId) {
        await createChat(product.id, text);
        setMessage('');
        history.push(routes.inbox);
      } else {
        await sendMessage(product.chatId, text);
        setMessage('');
        history.push(generatePath(routes.chat, { id: product.chatId }));
      }
    },
  }),
  withProps(({ text }) => ({
    disabled: text.trim().length === 0,
  })),
);

export default enhancer(ContactSellerModal);
