import {
  LogoutFirebase,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithgoogle,
} from "../../firebase";
import { checkingCredentials, login, logout } from "./authSlice";

export const chekingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithgoogle();

    if (!result.ok) return dispatch(logout(result.message));

    dispatch(login(result));
  };
};

export const startCreatingWithEmailAndPasswod = (name, email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, message } = await registerWithEmailAndPassword(
      name,
      email,
      password
    );

    if (!ok) return dispatch(logout({ message }));

    dispatch(login({ displayName: name, email, photoURL, uid }));
  };
};

export const startLogingInWithEmailAndPasswod = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, message, displayName } =
      await loginWithEmailAndPassword(email, password);

    if (!ok) return dispatch(logout({ message }));

    dispatch(login({ displayName, email, photoURL, uid }));
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await LogoutFirebase();
    dispatch(logout({message: null}));
  };
};
