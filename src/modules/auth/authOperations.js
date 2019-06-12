import * as actions from './authActions';
import Api from '../../api';
import { colorSetter } from '../../utils/avatarsColorSetter';

export function login(body) {
  return async function loginThunk(dispatch) {
    let error;
    try {
      dispatch(actions.login.start());

      const result = await Api.Auth.login(body);
      const { user, token } = result.data;
      const viewer = colorSetter(user);
      console.log(user);
      Api.Auth.setToken(token);

      dispatch(actions.login.success(viewer));
    } catch (err) {
      error = err;
      dispatch(actions.login.error({ message: err.message }));
      throw err;
    }
    return error;
  };
}

export function register(body) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const result = await Api.Auth.register(body);
      const { user, token } = result.data;
      const viewer = colorSetter(user);
      console.log(user);
      Api.Auth.setToken(token);

      dispatch(actions.register.success(viewer));
    } catch (err) {
      dispatch(actions.register.error({ message: err.message }));
      throw err;
    }
  };
}
