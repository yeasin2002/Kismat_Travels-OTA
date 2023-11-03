export const localAuthStoreName = "fly-hub-auth";

export function setAuth(value: string) {
  localStorage.setItem(localAuthStoreName, value);
}

export function getAuth() {
  return localStorage.get(localAuthStoreName);
}

export function removeAuth() {
  return localStorage.removeItem(localAuthStoreName);
}
