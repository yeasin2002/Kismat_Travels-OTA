"use client";

import { useSmoothScroll } from "$hooks";
import { Fragment, ReactNode } from "react";

export function GlobalProvider({ children }: { children: ReactNode }) {
  useSmoothScroll();
  return <Fragment>{children}</Fragment>;
}
