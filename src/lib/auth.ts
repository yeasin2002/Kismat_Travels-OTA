import { remove, set } from "js-cookie";

export const localAuthStoreName = "fly-hub-auth";

export function setAuth(value: string) {
  localStorage.setItem(localAuthStoreName, value);
  set(localAuthStoreName, value);
}

export function getAuth() {
  return localStorage.get(localAuthStoreName);
}

export function removeAuth() {
  localStorage.removeItem(localAuthStoreName);
  remove(localAuthStoreName);
}
