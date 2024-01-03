// 天干
const tianGan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
// 地支
const diZhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
// 农历月
const lunarMonth = new Array("正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊");
// 农历日
const lunarDay = new Array("一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "初", "廿");
// 格式化日期
const week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
const formatDate = function (time: string | number | Date, type: boolean) {
  const date = new Date(time);
  const y = date.getFullYear();
  const m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const w = date.getDay();
  const wStr = week[w];
  if (type) {
    return {
      year: y,
      month: m,
      day: d,
      week: w,
      weekStr: wStr,
    };
  } else {
    return y + "-" + m + "-" + d;
  }
};
// 基准年
const BENCHMARK_YEAR = 1900;
// 基准时间戳(国际零时区毫秒)
const BENCHMARK_TIME = Date.UTC(BENCHMARK_YEAR, 0, 30);

/**
 * 计算农历年是否有闰月, 参数为存储农历年的16进制
 * @param {Number} ly
 * @return {Boolean}
 * @eg {Function} hasLeapMonth(0x0b557)
 */
const hasLeapMonth = function (ly: number) {
  //农历低四位不等于0即为存在闰月
  //存在闰月即返回闰月所在月份
  if (ly & 0x0000f) {
    return ly & 0x0000f;
  } else {
    return false;
  }
};

/**
 * 计算农历闰月天数, 参数为存储农历年的16进制
 * @param {Number} ly
 * @return {Number}
 * @eg {Function} leapMonthDays(0x0b557)
 */
const leapMonthDays = function (ly: number) {
  //农历高四位等于0即为闰小月29天, 不等于0(等于1)即为闰大月30天
  //存在闰月即返回闰月天数
  if (hasLeapMonth(ly)) {
    return ly & 0xf0000 ? 30 : 29;
  } else {
    return 0;
  }
};

/**
 * 计算农历一年的总天数, 参数为存储农历年的16进制
 * @param {Number} ly
 * @return {Number}
 * @eg {Function} lunarYearDays(0x0b557)
 */
const lunarYearDays = function (ly: number) {
  //从高位第16位(1月)起向右移至低位第5位(12月)累加天数
  let totalDays = 0;
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    let monthDays = ly & i ? 30 : 29;
    totalDays += monthDays;
  }
  //考虑是否有闰月天数
  if (hasLeapMonth(ly)) {
    totalDays += leapMonthDays(ly);
  }
  return totalDays;
};

/**
 * 计算农历每个月的天数, 参数为存储农历年的16进制
 * @param {Number} ly
 * @return {Array}
 * @eg {Function} lunarYearMonths(0x0b557)
 */
const lunarYearMonths = function (ly: number) {
  //从高位第16位(1月)起向右移至低位第5位(12月)添加数组每项
  let monthArr = [];
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    monthArr.push(ly & i ? 30 : 29);
  }
  //考虑是否有闰月天数
  if (hasLeapMonth(ly)) {
    monthArr.splice(hasLeapMonth(ly) as number, 0, leapMonthDays(ly));
  }
  return monthArr;
};

// 将农历年转换为天干, 参数为存储农历年的16进制
const getTianGan = function (ly: number) {
  let tianGanKey = (ly - 3) % 10;
  if (tianGanKey === 0) tianGanKey = 10;
  return tianGan[tianGanKey - 1];
};

// 将农历年转换为地支, 参数为存储农历年的16进制
const getDiZhi = function (ly: number) {
  let diZhiKey = (ly - 3) % 12;
  if (diZhiKey === 0) diZhiKey = 12;
  return diZhi[diZhiKey - 1];
};

export const useSolarToLunar = (year: number, month: number, day: number) => {
  const lunarYearArr = new Array(
    0x04bd8,
    0x04ae0,
    0x0a570,
    0x054d5,
    0x0d260,
    0x0d950,
    0x16554,
    0x056a0,
    0x09ad0,
    0x055d2, //1900-1909
    0x04ae0,
    0x0a5b6,
    0x0a4d0,
    0x0d250,
    0x1d255,
    0x0b540,
    0x0d6a0,
    0x0ada2,
    0x095b0,
    0x14977, //1910-1919
    0x04970,
    0x0a4b0,
    0x0b4b5,
    0x06a50,
    0x06d40,
    0x1ab54,
    0x02b60,
    0x09570,
    0x052f2,
    0x04970, //1920-1929
    0x06566,
    0x0d4a0,
    0x0ea50,
    0x06e95,
    0x05ad0,
    0x02b60,
    0x186e3,
    0x092e0,
    0x1c8d7,
    0x0c950, //1930-1939
    0x0d4a0,
    0x1d8a6,
    0x0b550,
    0x056a0,
    0x1a5b4,
    0x025d0,
    0x092d0,
    0x0d2b2,
    0x0a950,
    0x0b557, //1940-1949
    0x06ca0,
    0x0b550,
    0x15355,
    0x04da0,
    0x0a5b0,
    0x14573,
    0x052b0,
    0x0a9a8,
    0x0e950,
    0x06aa0, //1950-1959
    0x0aea6,
    0x0ab50,
    0x04b60,
    0x0aae4,
    0x0a570,
    0x05260,
    0x0f263,
    0x0d950,
    0x05b57,
    0x056a0, //1960-1969
    0x096d0,
    0x04dd5,
    0x04ad0,
    0x0a4d0,
    0x0d4d4,
    0x0d250,
    0x0d558,
    0x0b540,
    0x0b6a0,
    0x195a6, //1970-1979
    0x095b0,
    0x049b0,
    0x0a974,
    0x0a4b0,
    0x0b27a,
    0x06a50,
    0x06d40,
    0x0af46,
    0x0ab60,
    0x09570, //1980-1989
    0x04af5,
    0x04970,
    0x064b0,
    0x074a3,
    0x0ea50,
    0x06b58,
    0x055c0,
    0x0ab60,
    0x096d5,
    0x092e0, //1990-1999
    0x0c960,
    0x0d954,
    0x0d4a0,
    0x0da50,
    0x07552,
    0x056a0,
    0x0abb7,
    0x025d0,
    0x092d0,
    0x0cab5, //2000-2009
    0x0a950,
    0x0b4a0,
    0x0baa4,
    0x0ad50,
    0x055d9,
    0x04ba0,
    0x0a5b0,
    0x15176,
    0x052b0,
    0x0a930, //2010-2019
    0x07954,
    0x06aa0,
    0x0ad50,
    0x05b52,
    0x04b60,
    0x0a6e6,
    0x0a4e0,
    0x0d260,
    0x0ea65,
    0x0d530, //2020-2029
    0x05aa0,
    0x076a3,
    0x096d0,
    0x04afb,
    0x04ad0,
    0x0a4d0,
    0x1d0b6,
    0x0d250,
    0x0d520,
    0x0dd45, //2030-2039
    0x0b5a0,
    0x056d0,
    0x055b2,
    0x049b0,
    0x0a577,
    0x0a4b0,
    0x0aa50,
    0x1b255,
    0x06d20,
    0x0ada0, //2040-2049
    0x14b63,
    0x09370,
    0x049f8,
    0x04970,
    0x064b0,
    0x168a6,
    0x0ea50,
    0x06b20,
    0x1a6c4,
    0x0aae0, //2050-2059
    0x0a2e0,
    0x0d2e3,
    0x0c960,
    0x0d557,
    0x0d4a0,
    0x0da50,
    0x05d55,
    0x056a0,
    0x0a6d0,
    0x055d4, //2060-2069
    0x052d0,
    0x0a9b8,
    0x0a950,
    0x0b4a0,
    0x0b6a6,
    0x0ad50,
    0x055a0,
    0x0aba4,
    0x0a5b0,
    0x052b0, //2070-2079
    0x0b273,
    0x06930,
    0x07337,
    0x06aa0,
    0x0ad50,
    0x14b55,
    0x04b60,
    0x0a570,
    0x054e4,
    0x0d160, //2080-2089
    0x0e968,
    0x0d520,
    0x0daa0,
    0x16aa6,
    0x056d0,
    0x04ae0,
    0x0a9d4,
    0x0a2d0,
    0x0d150,
    0x0f252, //2090-2099
    0x0d520, //2100
  );

  const time = formatDate(new Date(), true);
  // 初始化农历年月日
  let ly: number, lm: number, ld: number;
  // 初始化传入年月日
  let sy = time.year;
  let sm = time.month;
  let sd = time.day;
  if (sy <= BENCHMARK_YEAR || sy >= 2100) return { code: 400, msg: "输入年限不在查询表范围", status: false };
  // 计算与基准相差天数
  let differenceDay = (Date.UTC(Number(sy), Number(sm), Number(sd)) - BENCHMARK_TIME) / 86400000; //24*60*60*1000;

  //计算农历年份
  for (let y = 0; y < lunarYearArr.length; y++) {
    differenceDay -= lunarYearDays(lunarYearArr[y]);
    if (differenceDay <= 0) {
      ly = BENCHMARK_YEAR + y;
      // 计算返回农历年份确定后的剩余天数(用于计算农历月)
      differenceDay += lunarYearDays(lunarYearArr[y]);
      break;
    }
  }

  //计算农历月份
  for (let m = 0; m < lunarYearMonths(lunarYearArr[ly - BENCHMARK_YEAR]).length; m++) {
    differenceDay -= lunarYearMonths(lunarYearArr[ly - BENCHMARK_YEAR])[m];
    if (differenceDay <= 0) {
      // 有闰月时, 月份的数组长度会变成13, 因此, 当闰月月份小于等于m时, lm不需要加1
      if (hasLeapMonth(lunarYearArr[ly - BENCHMARK_YEAR]) && (hasLeapMonth(lunarYearArr[ly - BENCHMARK_YEAR]) as number) <= m) {
        if ((hasLeapMonth(lunarYearArr[ly - BENCHMARK_YEAR]) as number) < m) {
          lm = m;
        } else if (hasLeapMonth(lunarYearArr[ly - BENCHMARK_YEAR]) === m) {
          lm = "闰" + m;
        } else {
          lm = m + 1;
        }
      } else {
        lm = m + 1;
      }
      // 获取农历月份确定后的剩余天数(用于计算农历日)
      differenceDay += lunarYearMonths(lunarYearArr[ly - BENCHMARK_YEAR])[m];
      break;
    }
  }

  //计算农历日
  ld = differenceDay;

  // 将计算出来的农历月份转换成汉字月份, 闰月需要在前面加上闰字
  if (hasLeapMonth(lunarYearArr[ly - BENCHMARK_YEAR]) && typeof lm === "string" && lm.indexOf("闰") > -1) {
    lm = `闰${lunarMonth[/\d/.exec(lm) - 1]}月`;
  } else {
    lm = `${lunarMonth[lm - 1]}月`;
  }

  // 将计算出来的农历年份转换为天干地支年
  ly = getTianGan(ly) + getDiZhi(ly);

  // 将计算出来的农历天数转换成汉字
  if (ld < 11) {
    ld = `${lunarDay[10]}${lunarDay[ld - 1]}`;
  } else if (ld > 10 && ld < 20) {
    ld = `${lunarDay[9]}${lunarDay[ld - 11]}`;
  } else if (ld === 20) {
    ld = `${lunarDay[1]}${lunarDay[9]}`;
  } else if (ld > 20 && ld < 30) {
    ld = `${lunarDay[11]}${lunarDay[ld - 21]}`;
  } else if (ld === 30) {
    ld = `${lunarDay[2]}${lunarDay[9]}`;
  }

  // 后面更多返回可调用计算方法输出, 注意调用的时间农历年月日使用格式化中文前的数据
  return {
    code: 200,
    status: true,
    sy: sy, //传入年
    sm: sm, //传入月
    sd: sd, //传入日
    ly: ly, //农历年
    lm: lm, //农历月
    ld: ld, //农历日
  };
};
