import { normalize } from 'normalizr';
import * as actions from './authActions';
import Api, { schemas } from '../../api';

export function login(body) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const result = await Api.Auth.login(body);

      const user = normalize(result.data.user, schemas.user);

      Api.Auth.setToken(result.data.token);

      dispatch(actions.login.success(user));
    } catch (err) {
      dispatch(actions.login.error({ message: err.message }));
      throw err;
    }
  };
}

export function register(body) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const result = await Api.Auth.register(body);
      const user = normalize(result.data.user, schemas.user);

      Api.Auth.setToken(result.data.token);

      dispatch(actions.register.success(user));
    } catch (err) {
      dispatch(actions.register.error({ message: err.message }));
      throw err;
    }
  };
}
