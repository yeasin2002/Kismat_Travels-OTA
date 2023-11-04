import cookie from "js-cookie";

export const localAuthStoreName = "fly-hub-auth";

export function setAuth(value: string) {
  localStorage.setItem(localAuthStoreName, value);
  cookie.set(localAuthStoreName, value);
}

export function getAuth() {
  return localStorage.get(localAuthStoreName);
}

export function removeAuth() {
  localStorage.removeItem(localAuthStoreName);
  cookie.remove(localAuthStoreName);
}
