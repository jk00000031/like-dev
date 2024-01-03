import { useSolarToLunar } from "./useSolarToLunar";

export const useLunarCalendar = () => {
  const date = new Date();
  // return moment().year(date.getFullYear()).month(date.getMonth()).date(date.getDate()).lunar().format("YYYY-MM-DD");
  return useSolarToLunar(date.getFullYear(), date.getMonth(), date.getDate());
};
