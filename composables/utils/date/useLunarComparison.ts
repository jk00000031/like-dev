import { useSolarToLunar } from "./useSolarToLunar";

/**
 * 今年是否为闰年
 */
export const useLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * 通过农历年获取西方日期
 */
export const useLunarCalendarGetWestDateByYear = () => {
  const now = new Date();
  const lunar = useSolarToLunar(now.getFullYear(), now.getMonth(), now.getDate());
  console.log(lunar);
  return {};
};
