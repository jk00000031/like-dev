import * as echarts from 'echarts';

export default defineComponent({
  setup() {
    const chartContainerRef = ref();
    const data = [
      ['2000-06-05', 0],
      ['2000-06-06', 0],
      ['2000-06-07', 0],
      ['2000-06-08', 0],
      ['2000-06-09', 0],
      ['2000-06-10', 0],
      ['2000-06-11', 0],
      ['2000-06-12', 0],
      ['2000-06-13', 0],
      ['2000-06-14', 0],
      ['2000-06-15', 0],
      ['2000-06-16', 0],
      ['2000-06-17', 0],
      ['2000-06-18', 0],
      ['2000-06-19', 0],
      ['2000-06-20', 0],
      ['2000-06-21', 0],
      ['2000-06-22', 0],
      ['2000-06-23', 0],
      ['2000-06-24', 0],
      ['2000-06-25', 0],
      ['2000-06-26', 0],
      ['2000-06-27', 0],
      ['2000-06-28', 0],
      ['2000-06-29', 0],
      ['2000-06-30', 0],
      ['2000-07-01', 0],
      ['2000-07-02', 0],
      ['2000-07-03', 0],
      ['2000-07-04', 0],
      ['2000-07-05', 0],
      ['2000-07-06', 0],
      ['2000-07-07', 0],
      ['2000-07-08', 0],
      ['2000-07-09', 0],
      ['2000-07-10', 0],
      ['2000-07-11', 0],
      ['2000-07-12', 0],
      ['2000-07-13', 0],
      ['2000-07-14', 0],
      ['2000-07-15', 0],
      ['2000-07-16', 0],
      ['2000-07-17', 0],
      ['2000-07-18', 0],
      ['2000-07-19', 0],
      ['2000-07-20', 0],
      ['2000-07-21', 0],
      ['2000-07-22', 0],
      ['2000-07-23', 0],
      ['2000-07-24', 0]
    ];
    const dateList = data.map(function (item) {
      return item[0];
    });
    const valueList = data.map(function (item) {
      return item[1];
    });

    function getOptions() {
      return {
        // Make gradient line here
        visualMap: {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400,
          color: ['#16a34a', '#f0fdf4']
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: dateList
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: valueList
          }
        ]
      };
    }

    function renderChart() {
      const chart = echarts.init(chartContainerRef.value);
      chart.setOption(getOptions());
    }

    onMounted(() => nextTick(() => renderChart()));

    return {
      chartContainerRef
    };
  },
  render() {
    return <div ref="chartContainerRef" class="border rounded-md"></div>;
  }
});
