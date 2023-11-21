import { Prettify, User, UserCredential } from "$interface";
import {
  GET,
  POST,
  PUT,
  dispatchManualChange,
  onLocalStorageChange,
  parseLocal,
  removeAuth,
  removeLocal,
  setAuth,
  setLocal,
} from "$lib";
import { isString, validate } from "nested-object-validate";
import { FunctionComponent, ReactNode, createContext, useEffect, useState } from "react";

interface CallBackFun<Res = any> {
  onError: (e: unknown) => void;
  onSuccess: (r?: Res) => void;
}

type AuthFunWrapper<AugmentType, ReturnType = any> = (
  values: AugmentType & Partial<CallBackFun<ReturnType>>
) => Promise<[ReturnType, null] | [null, unknown]>;

type SignUpFun = AuthFunWrapper<UserCredential, User>;
type SignInFun = AuthFunWrapper<Omit<UserCredential, "name">, User>;
type signOutFun = AuthFunWrapper<{}, { success: true }>;
type ChangePasswordFun = AuthFunWrapper<{ current: string; password: string }, { success: true }>;
type GoogleAuth = AuthFunWrapper<{ token: string }, User>;

interface Value {
  signUp: SignUpFun;
  signIn: SignInFun;
  signOut: signOutFun;
  currentUser: User | null;
  changePassword: ChangePasswordFun;
  googleAuth: GoogleAuth;
  setCurrentUser: (user: unknown) => void;
}

const AuthContext = createContext<Prettify<Value> | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

function validateUser(user: unknown) {
  return validate(
    user,
    [
      isString("name"),
      isString("email"),
      isString("id"),
      isString("createdAt"),
      isString("updatedAt"),
      ["photoUrl", () => true],
    ],
    { strict: false }
  ).checked as User | null;
}

function removeLocalUser() {
  removeLocal(localStorageUserDataKey);
}

function cb() {}

const localStorageUserDataKey = "user-information" as const;

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [currentUser, _setCurrentUser] = useState<User | null>(null);
  const [wait, setWait] = useState(true);

  useEffect(() => {
    _setCurrentUser(validateUser(parseLocal(localStorageUserDataKey)));
    setWait(false);
    const destroyDispatchManualChange = dispatchManualChange();
    const destroyOnLocalStorageChange = onLocalStorageChange(removeLocalUser);

    return function () {
      destroyOnLocalStorageChange();
      destroyDispatchManualChange();
    };
  }, []);

  const signOut: signOutFun = ({ onError = cb, onSuccess = cb }) => {
    return new Promise(async (resolve) => {
      try {
        resolve([{ success: true }, null]);
        onSuccess({ success: true });
        removeAuth();
        _setCurrentUser(null);
        removeLocal(localStorageUserDataKey);
      } catch (error) {
        onError(error);
        resolve([null, error]);
      }
    });
  };

  const signUp: SignUpFun = async ({ onError = cb, onSuccess = cb, ...userCredential }) => {
    return new Promise(async (resolve) => {
      try {
        const { data } = await POST<{ user: User; auth: string }>("auth/signup", userCredential);
        _setCurrentUser(validateUser(data.user));
        setAuth(data.auth);
        setLocal(localStorageUserDataKey, validateUser(data.user)!);
        onSuccess(data.user);
        resolve([data.user, null]);
      } catch (error) {
        onError(error);
        resolve([null, error]);
      }
    });
  };

  const signIn: SignInFun = async ({ onError = cb, onSuccess = cb, ...userCredential }) => {
    return new Promise(async (resolve) => {
      try {
        const { data } = await POST<{ user: User; auth: string }>("auth/signin", userCredential);
        setAuth(data.auth);
        _setCurrentUser(validateUser(data.user));
        setLocal(localStorageUserDataKey, validateUser(data.user)!);
        onSuccess(data.user);
        resolve([data.user, null]);
      } catch (error) {
        onError(error);
        resolve([null, error]);
      }
    });
  };

  const changePassword: ChangePasswordFun = async ({ onError = cb, onSuccess = cb, ...userCredential }) => {
    return new Promise(async (resolve) => {
      try {
        const { data } = await PUT<{ success: true }>("auth/change-password", userCredential);
        onSuccess(data);
        resolve([data, null]);
      } catch (error) {
        onError(error);
        resolve([null, error]);
      }
    });
  };

  const googleAuth: GoogleAuth = async ({ token, onError = cb, onSuccess = cb }) => {
    return new Promise(async (resolve) => {
      try {
        const { data } = await GET<User>("auth/current", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAuth(token);
        _setCurrentUser(validateUser(data));
        setLocal(localStorageUserDataKey, validateUser(data)!);
        onSuccess(data);
        resolve([data, null]);
      } catch (error) {
        onError(error);
        resolve([null, error]);
      }
    });
  };

  function setCurrentUser(user: unknown) {
    setLocal(localStorageUserDataKey, validateUser(user)!);
    _setCurrentUser(validateUser(user));
  }

  return (
    <AuthContext.Provider
      value={{
        signOut,
        signUp,
        signIn,
        googleAuth,
        currentUser,
        setCurrentUser,
        changePassword,
      }}
    >
      {wait || children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

