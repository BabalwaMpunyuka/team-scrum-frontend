import { useReducer } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import {
  ADD_MESSAGE,
  CLEAR_MESSAGE,
  LOGIN,
  LOGOUT,
  SET_DARK_MODE,
  CLEAR_DARK_MODE,
  SET_IS_AUTH,
} from "./appActions";

const initialState = {
  isAuth: false,
  messages: [], // {id:1, content: "", title:"", type:"",timeout:5000}
  isDark: false,
  user:{}
};

const AppState = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addMessage = (message) => {
    dispatch({
        type: ADD_MESSAGE,
        payload:message
    })
  };

  const clearMessage = (messageId) => {
    dispatch({
        type: CLEAR_MESSAGE,
        payload:messageId
    })
  };

  const propagateMessage = (prop_message) => {
    const message = {
        ...prop_message,
        id: Math.floor(Math.random() * 5000),
    }
    addMessage(message)
    setTimeout(() => clearMessage(message.id), prop_message.timeout | 10000);
  };

  const setDarkMode = () => {
    dispatch({
      type: SET_DARK_MODE,
      payload:{}
  })
  };

  const clearDarkMode = () => {
    dispatch({
      type: CLEAR_DARK_MODE,
      payload:{}
  })
  };

  const login = (user) => {
      dispatch({
          type: LOGIN,
          payload:user
      });
  };

  const logout = () => {
      dispatch({
          type:LOGOUT
      });
  };

  const setIsAuth = (isAuth) => {
    dispatch({
        type: SET_IS_AUTH,
        payload:isAuth
    })
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        addMessage,
        clearMessage,
        propagateMessage,
        login,
        logout,
        setIsAuth,
        setDarkMode,
        clearDarkMode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
