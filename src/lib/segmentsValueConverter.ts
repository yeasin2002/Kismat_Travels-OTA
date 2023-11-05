export const StopQuantityConverter = (types: string) => {
  if (types === "1") {
    return "1 stop";
  } else if (types === "1+") {
    return "1+ stops";
  } else {
    return "No Stops";
  }
};

export const PaxTypeChecker = (PaxType: string) => {
  //   1. Adult
  // 2. Child
  // 3. Infant
  if ((PaxType = "3")) {
    return "Infant";
  } else if ((PaxType = "2")) {
    return "Child";
  }
  return "Adult";
};
