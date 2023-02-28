<template>
  <section ref="footerLineRef" class="section"></section>
</template>

<script>
import * as echarts from 'echarts';
import moment from 'moment';

export default {
  data() {
    return {
      xAxisData: [],
      successData: [],
      failData: [],
    };
  },
  created() {
    for (let i = 0; i < 7; i++) {
      this.xAxisData.push(moment(new Date().getTime() - i * 1000 * 60 * 60 * 24).format('YYYY-MM-DD'));
      this.failData.push(Math.floor(Math.random() * (100 - 1) + 1));
      this.successData.push(Math.floor(Math.random() * (50 - 1) + 1) + this.failData[i]);
    }
    this.xAxisData.reverse();
  },

  mounted() {
    this.randerEcharts();
  },
  methods: {
    randerEcharts() {
      const option = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'transparent',
          axisPointer: {
            lineStyle: {
              color: '#409EFF',
            },
          },
          textStyle: {
            color: '#606266',
          },
        },
        grid: {
          top: '15%',
          left: '5%',
          right: '5%',
          bottom: '15%',
          // containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: false,
            },
            axisTick: {
              show: false,
            },
            data: this.xAxisData,
          },
        ],
        yAxis: [
          {
            min: 0,
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              formatter(value) {
                if (value === 0) {
                  return value;
                }
                return value;
              },
            },
          },
        ],
        series: [
          {
            name: '成功',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 5,
                color: 'rgba(25,163,223,1)', // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
              color: 'rgba(25,163,223,1)',
              borderColor: '#646ace',
              borderWidth: 2,
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(25,163,223,.3)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(25,163,223, 0)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(25,163,223, 0.5)', // 阴影颜色
                shadowBlur: 20, // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
            data: this.successData,
          },
          {
            name: '失败',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 5,
                color: 'rgba(10,219,250,1)', // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
              color: 'rgba(10,219,250,1)',
              borderColor: '#646ace',
              borderWidth: 2,
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(10,219,250,.3)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(10,219,250, 0)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(10,219,250, 0.5)', // 阴影颜色
                shadowBlur: 20, // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
            data: this.failData,
          },
        ],
      };
      const chartDom = this.$refs.footerLineRef;
      const myChart = echarts.init(chartDom);
      myChart.setOption(option);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      let len = 0;
      setInterval(() => {
        if (len === this.xAxisData.length) {
          len = 0;
        }
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: len,
        });
        len++;
      }, 1000);
    },
  },
};
</script>

<style scoped lang="less">
.section {
  width: 1250px;
  height: 400px;
}
</style>
