const alias = {
  avatar: joinUrl(process.env.NEXT_PUBLIC_BACKEND_BASE_URL!, "users/avatar"),
} as const;

export function getImgSrc(root: keyof typeof alias, url: string) {
  if (isURL(url)) return url;
  return joinUrl(alias[root], url);
}

export function joinUrl(...args: string[]) {
  return args
    .map((url) => url?.replace(/^\/|\/$/g, ""))
    .filter(Boolean)
    .join("/");
}

export function isURL(str: string): boolean {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(str);
}
