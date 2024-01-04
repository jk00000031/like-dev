export const useBooksFilterCurrentYear = (params?: Partial<{ start: string; end: string }>) => {
  return useFetch('/api/books/', {
    method: 'post',
    params
  });
};
