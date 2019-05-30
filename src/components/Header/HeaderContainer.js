import { compose, withState, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderView from './HeaderView';
import { viewerActions } from '../../modules/viewer';
import Api from '../../api';

function mapStateToProps(state) {
  return {
    viewer: state.viewer.user,
  };
}

const mapDispatchToProps = {
  logout: viewerActions.logout,
};

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('isPopoverVisible', 'popoverToggle', false),
  withHandlers({
    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.logout();
    },
    handlePopoverToggle: (props) => () => {
      props.popoverToggle(!props.isPopoverVisible);
    },
  }),
);

export default enhance(HeaderView);
