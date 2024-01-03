import { useLunarCalendarGetWestDateByYear } from "../utils/date/useLunarComparison";

// 获取所有的项目
export const useProjectFindAll = () => useFetch("/api/projects/all");

// 获取今年（农历年）的项目
export const useProjectFilterCurrentYear = () => {
  const dates = useLunarCalendarGetWestDateByYear();
  console.log(dates);
  return useFetch("/api/projects", {
    params: {},
  });
};
