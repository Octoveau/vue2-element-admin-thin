<template>
  <section ref="liquid" class="section"></section>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-liquidfill';

export default {
  name: 'LeftMainCompPage',
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.randerEcharts();
  },
  methods: {
    randerEcharts() {
      const option = {
        series: [
          {
            type: 'liquidFill',
            radius: '95%',
            data: [0.74],
            color: 'rgba(67,209,100,1)',
            label: {
              normal: {
                color: '#fff',
                insideColor: 'transparent',
                textStyle: {
                  fontSize: 28,
                  fontWeight: 'bold',
                },
              },
            },
            outline: {
              show: true,
              borderDistance: 5,
              itemStyle: {
                borderColor: 'rgb(160, 207, 255)',
                borderWidth: 2,
              },
            },
            backgroundStyle: {
              color: '#409EFF',
            },
          },
        ],
      };
      const chartDom = this.$refs.liquid;
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
  width: 350px;
  height: 220px;
}
</style>
