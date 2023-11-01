export function setLocal(key: string, value: Record<string, any>) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function parseLocal<Type = Record<string, any>>(key: string): Type | null {
  return JSON.parse(localStorage.getItem(key) as string) as Type | null;
}

export function removeLocal(key: string) {
  localStorage.removeItem(key);
}
