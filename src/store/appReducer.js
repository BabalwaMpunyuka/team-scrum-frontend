import {
  ADD_MESSAGE,
  CLEAR_MESSAGE,
  LOGIN,
  LOGOUT,
  SET_IS_AUTH,
  SET_DARK_MODE,
  CLEAR_DARK_MODE,
} from "./appActions";

const appReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        user: {},
      };

    case LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };

    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case CLEAR_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };

    case SET_DARK_MODE:
      return {};
    case CLEAR_DARK_MODE:
      return {};
    default:
      return state;
  }
};

export default appReducer;
