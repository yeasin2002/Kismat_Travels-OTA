import { AuthContext } from "$context";
import { useContext } from "react";

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("Use useAuth inside provider!");
  return auth;
}
