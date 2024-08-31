export const extractIdFromUrl = (url: string) => {
  const segments = url.split("/");
  return Number(segments.pop() || segments.pop());
};
