export const StopQuantityConverter = (types: string | null) => {
  if (types === "0") {
    return "Non-Stop";
  } else if (types === "1") {
    return "1 stop";
  } else if (types === "1+") {
    return "1+ stops";
  } else {
    return "Non-Stops";
  }
};

export const PaxTypeChecker = (PaxType: string) => {
  if ((PaxType = "3")) {
    return "Infant";
  } else if ((PaxType = "2")) {
    return "Child";
  }
  return "Adult";
};
