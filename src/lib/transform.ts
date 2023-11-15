export function transform<T extends object>(data: Record<string, any>): T {
  const obj: Record<string, string> = {};

  for (const key in data) {
    if (data[key] instanceof Object) {
      if ("label" in data[key] && "value" in data[key]) {
        obj[key] = data[key].value;
      }

      continue;
    }

    obj[key] = data[key];
  }

  return obj as T;
}
