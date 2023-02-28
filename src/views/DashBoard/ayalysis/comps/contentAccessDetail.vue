<template>
  <section ref="echratsBarRef" class="section"></section>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import * as echarts from 'echarts';
import moment from 'moment';

export default {
  data() {
    return {
      xAxisData: [],
      seriesData: [],
    };
  },
  created() {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 8; i++) {
      this.xAxisData.push(moment(new Date().getTime() - i * 1000 * 60 * 60 * 24).format('YYYY-MM-DD'));
      this.seriesData.push(Math.floor(Math.random() * (100 - 1) + 1));
    }
    this.xAxisData.reverse();
  },
  mounted() {
    this.randerEcharts();
  },
  methods: {
    randerEcharts() {
      const option = {
        backgroundColor: '#fff',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: '15%',
          right: '6%',
          left: '6%',
          bottom: '25%',
        },
        xAxis: [
          {
            type: 'category',
            data: this.xAxisData,
            axisLine: {
              lineStyle: {
                color: '#FFFFFF',
              },
            },
            axisLabel: {
              rotate: 30,
              margin: 10,
              color: '#909399',
              interval: 0, // 使x轴文字显示全
              textStyle: {
                fontSize: 12,
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: '{value}',
              color: '#909399',
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(0,186,255,.6)',
              },
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.12)',
              },
            },
          },
        ],
        series: [
          {
            type: 'bar',
            data: this.seriesData,
            barWidth: '28px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0,244,255,1)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,77,167,1)', // 100% 处的颜色
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
              },
            },
            label: {
              normal: {
                show: true,
                lineHeight: 20,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                  color: '#00D6F9',
                  fontSize: 18,
                },
              },
            },
          },
        ],
      };
      const chartDom = this.$refs.echratsBarRef;
      const myChart = echarts.init(chartDom);
      myChart.setOption(option);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.section {
  width: 500px;
  height: 220px;
}
</style>
