// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'), 'macarons');
var myChart2 = echarts.init(document.getElementById('main2'), 'macarons');
var myChart3 = echarts.init(document.getElementById('main3'), 'macarons');
var gd_mod_chart = echarts.init(document.getElementById('option_gd_mod'), 'macarons');
var gd_mod_chart2 = echarts.init(document.getElementById('option_gd_mod2'), 'macarons');
var gd_mod_chart3 = echarts.init(document.getElementById('option_gd_mod3'), 'macarons');
var gz_mod_chart = echarts.init(document.getElementById('option_gz_mod'), 'macarons');
// var gz_mod_chart2 = echarts.init(document.getElementById('option_gz_mod2'), 'macarons');
var gz_mod_chart3 = echarts.init(document.getElementById('option_gz_mod3'), 'macarons');


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(optionRate);
myChart2.setOption(option_ch_add);
myChart3.setOption(optionBar);
gd_mod_chart.setOption(option_gd_mod);
gd_mod_chart2.setOption(optionX);
gd_mod_chart3.setOption(option_gd_mod);
gz_mod_chart.setOption(option_ch_day);
// gz_mod_chart2.setOption(option_gz_mod);
gz_mod_chart3.setOption(optionXO);

window.onresize = () => {
  myChart.resize()
  myChart2.resize()
  myChart2.resize()
  gd_mod_chart.resize()
  gd_mod_chart2.resize()
  gd_mod_chart3.resize()
  gz_mod_chart.resize()
  // gz_mod_chart2.resize()
  gz_mod_chart3.resize()
}