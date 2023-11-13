import cookie from "js-cookie";

export const localAuthStoreName = "fly-hub-auth";

export function setAuth(value: string) {
  localStorage.setItem(localAuthStoreName, value);
  cookie.set(localAuthStoreName, value);
}

export function getAuth() {
  return localStorage.getItem(localAuthStoreName);
}

export function GetAdminAuth() {
  let key = cookie.get("key_ad");
  let session = cookie.get("value_ad");
  if (key && session) {
    return { key, session };
  }
  return false;
}

export function removeAuth() {
  localStorage.removeItem(localAuthStoreName);
  cookie.remove(localAuthStoreName);
}
