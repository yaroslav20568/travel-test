export const extractNumFromStr = (input: string): number | null => {
  const match = input.match(/([\d\s]+)₽/);

  if (match) {
    const numberStr = match[1].replace(/\s+/g, '');

    return +numberStr;
  }

  return null;
};
