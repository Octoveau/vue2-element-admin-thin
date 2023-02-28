<template>
  <section ref="footerPieRef" class="section"></section>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      echartsData: [],
    };
  },
  created() {
    this.echartsData = [
      { name: '北京', value: null },
      { name: '天津', value: null },
      { name: '河北', value: null },
      { name: '山西', value: null },
      { name: '内蒙古', value: null },
      { name: '辽宁', value: null },
      { name: '吉林', value: null },
      { name: '黑龙江', value: null },
      { name: '上海', value: null },
      { name: '江苏', value: null },
      { name: '浙江', value: null },
      { name: '安徽', value: null },
      { name: '福建', value: null },
      { name: '江西', value: null },
      { name: '山东', value: null },
      { name: '河南', value: null },
      { name: '湖北', value: null },
      { name: '湖南', value: null },
      { name: '重庆', value: null },
      { name: '四川', value: null },
      { name: '贵州', value: null },
      { name: '云南', value: null },
      { name: '广西', value: null },
      { name: '海南', value: null },
    ];
    this.echartsData.forEach((data) => {
      data.value = Math.floor(Math.random() * (1000 - 1) + 1);
    });
  },
  mounted() {
    this.randerEcharts();
  },
  methods: {
    randerEcharts() {
      const option = {
        color: [
          '#FAE927',
          '#E9E416',
          '#C9DA36',
          '#9ECB3C',
          '#6DBC49',
          '#37B44E',
          '#3DBA78',
          '#14ADCF',
          '#209AC9',
          '#1E91CA',
          '#2C6BA0',
          '#2B55A1',
          '#2D3D8E',
          '#44388E',
          '#6A368B',
          '#7D3990',
          '#A63F98',
          '#C31C88',
          '#D52178',
          '#D5225B',
          '#D02C2A',
          '#D44C2D',
          '#F57A34',
          '#FA8F2F',
          '#D99D21',
          '#CF7B25',
          '#CF7B25',
          '#CF7B25',
        ],
        series: [
          {
            type: 'pie',
            startAngle: 0,
            clockwise: false,
            radius: ['40%', '100%'],
            center: ['50%', '50%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}-{c}',
              textStyle: {
                color: '#FAFAFA',
              },
            },
            data: this.echartsData.sort((a, b) => b.value - a.value).splice(0, 10),
          },
        ],
      };
      const chartDom = this.$refs.footerPieRef;
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
  height: 200px;
}
</style>
