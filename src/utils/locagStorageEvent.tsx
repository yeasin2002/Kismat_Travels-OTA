export function dispatch() {
  window.dispatchEvent(new CustomEvent("local-changed"));
}

export function onLocalStorageChange(callback: (event: Event) => void) {
  window.addEventListener("local-changed", callback);
  return () => window.removeEventListener("local-changed", callback);
}

export function dispatchManualChange() {
  function handleChange(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      dispatch();
    }
  }

  window.addEventListener("storage", handleChange);
  return () => window.removeEventListener("storage", handleChange);
}

//! local
export function setLocal(key: string, value: { [key: string]: any }) {
  localStorage.setItem(key, JSON.stringify(value));
  dispatch();
}

export function parseLocal<Type = Record<string, any>>(key: string): Type | null {
  return JSON.parse(localStorage.getItem(key) as string) as Type | null;
}

export function removeLocal(key: string) {
  localStorage.removeItem(key);
  dispatch();
}
