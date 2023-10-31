import { Prettify, User, UserCredential } from "$interface";
import { GET, POST, PUT, dispatchManualChange, onLocalStorageChange, parseLocal, removeLocal, setLocal } from "$lib";
import { isString, validate } from "nested-object-validate";
import { FunctionComponent, ReactNode, createContext, useEffect, useState } from "react";

interface CallBackFun<Res = any> {
  onError: (e: unknown) => void;
  onSuccess: (r?: Res) => void;
}

type AuthFunWrapper<AugmentType, ReturnType = any> = (
  values: AugmentType & Partial<CallBackFun<ReturnType>>
) => Promise<[ReturnType, null] | [null, unknown]>;

type SingUpFun = AuthFunWrapper<UserCredential, User>;
type SingInFun = AuthFunWrapper<Omit<UserCredential, "name">, User>;
type singOutFun = AuthFunWrapper<{}, { success: true }>;
type ChangePasswordFun = AuthFunWrapper<{ current: string; password: string }, { success: true }>;
type GoogleAuth = AuthFunWrapper<{}, User>;

interface Value {
  singUp: SingUpFun;
  singIn: SingInFun;
  singOut: singOutFun;
  currentUser: User | null;
  changePassword: ChangePasswordFun;
  googleAuth: GoogleAuth;
}

const AuthContext = createContext<Prettify<Value> | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

function validateUser(user: unknown) {
  return validate(user, [
    isString("name"),
    isString("email"),
    isString("id"),
    isString("createdAt"),
    isString("updatedAt"),
    "photoUrl",
  ]).checked as User | null;
}

function removeLocalUser() {
  removeLocal(localStorageUserDataKey);
}

function cb() {}

const localStorageUserDataKey = "user-information" as const;

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [wait, setWait] = useState(true);

  useEffect(() => {
    setCurrentUser(validateUser(parseLocal(localStorageUserDataKey)));
    setWait(false);
    const destroyDispatchManualChange = dispatchManualChange();
    const destroyOnLocalStorageChange = onLocalStorageChange(removeLocalUser);

    return function () {
      destroyOnLocalStorageChange();
      destroyDispatchManualChange();
    };
  }, []);

  const singOut: singOutFun = ({ onError = cb, onSuccess = cb }) => {
    return new Promise(async (resolve) => {
      try {
        const { data } = await POST<{ success: true }>("auth/singout");
        resolve([data, null]);
        onSuccess(data);
        setCurrentUser(null);
        removeLocal(localStorageUserDataKey);
      } catch (error) {
        onError(error);
        resolve([null, error]);
      }
    });
  };

  const singUp: SingUpFun = async ({ onError = cb, onSuccess = cb, ...userCredential }) => {
    return new Promise(async (resolve) => {
      try {
        const { data } = await POST<User>("auth/singup", userCredential);
        setCurrentUser(validateUser(data));
        setLocal(localStorageUserDataKey, data);
        onSuccess(data);
        resolve([data, null]);
      } catch (error) {
        onError(error);
        resolve([null, error]);
      }
    });
  };

  const singIn: SingInFun = async ({ onError = cb, onSuccess = cb, ...userCredential }) => {
    return new Promise(async (resolve) => {
      try {
        const { data } = await POST<User>("auth/singin", userCredential);
        setCurrentUser(validateUser(data));
        setLocal(localStorageUserDataKey, validateUser(data)!);
        onSuccess(data);
        resolve([data, null]);
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

  const googleAuth: GoogleAuth = async ({ onError = cb, onSuccess = cb }) => {
    return new Promise(async (resolve) => {
      try {
        const { data } = await GET<User>("auth/google");
        setCurrentUser(validateUser(data));
        setLocal(localStorageUserDataKey, validateUser(data)!);
        onSuccess(data);
        resolve([data, null]);
      } catch (error) {
        onError(error);
        resolve([null, error]);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        singOut,
        singUp,
        singIn,
        googleAuth,
        currentUser,
        changePassword,
      }}
    >
      {wait || children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
