export const optionsIndex = (arr: string[]) => {
  return arr.map((item, index) => {
    return { value: item, label: item };
  });
};
