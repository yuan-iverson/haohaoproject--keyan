<template>
  <div class="fans-container">
    <div ref="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'FansIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
  },
  watch: {},
  created () {},
  mounted () {
    var myChart = echarts.init(this.$refs.main)
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '粉丝数据'
      },
      tooltip: {},
      legend: {
        data: ['人数']
      },
      xAxis: {
        data: ['Java', 'PHP', 'Python', 'C++', 'C#', 'C语言']
      },
      yAxis: {},
      series: [{
        name: '人数',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>
