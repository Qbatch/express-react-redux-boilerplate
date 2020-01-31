import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function auth(state=initialState.auth, action) {
  switch(action.type) {
    case types.REGISTER_USER_SUCCESS: {
      const { user, token } = action.payload;

      localStorage.setItem('AUTH_TOKEN', token);

      return { ...state, currentUser: user, isLoggedIn: true };
    }

    case types.REGISTER_USER_FAILURE:
      return state;

    case types.LOGIN_USER_SUCCESS: {
      const { user, token } = action.payload;

      localStorage.setItem('AUTH_TOKEN', token);

      return { ...state, currentUser: user, isLoggedIn: true };
    }

    case types.LOGIN_USER_FAILURE:
      return state;

    case types.GET_CURRENT_USER_SUCCESS: {
      const { user } = action.payload;

      return { ...state, currentUser: user, isLoggedIn: true, isFetching: false };
    }

    case types.GET_CURRENT_USER_FAILURE:
      return { ...state, isFetching: false };

    case types.SET_IS_FETCHING_USER:
      return { ...state, isFetching: action.payload };

    default:
      return state;
  }
}
