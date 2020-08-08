const importString = (string: string) => {
  return JSON.parse(decodeURIComponent(string));
};

export default importString;
