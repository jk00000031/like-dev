// 获取所有的项目
export const useProjectFindAll = () => useFetch("/api/projects/all");

// 获取今年（农历年）的项目
export const useProjectFilterCurrentYear = (params?: Partial<{ start: string; end: string }>) => {
  return useFetch("/api/projects/", {
    method: "post",
    params,
  });
};
