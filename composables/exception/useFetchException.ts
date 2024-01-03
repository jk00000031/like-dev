export const useFetchException = (message: string | unknown, code?: number) => ({
  code: code || 40000,
  data: null,
  msg: message,
});
