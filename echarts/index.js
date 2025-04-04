import * as echarts from 'echarts';
import * as d3 from 'd3';

// export function csvToJson(filePath) {
//   let result = []
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", filePath, false);
//   xhr.onload = function (e) {
//     result = csvToJson(xhr.responseText)
//   }
//   xhr.send(null)
//   return result
// }
// export function csvJSON(csv) {
//   var lines = csv.split("\n");
//
//   var result = [];
//
//   var headers = lines[0].split(",");
//
//   for (var i = 1; i < lines.length; i++) {
//     var obj = {};
//     var currentline = lines[i].split(",");
//
//     for (var j = 0; j < headers.length; j++) {
//       obj[headers[j]] = currentline[j];
//     }
//
//     result.push(obj);
//   }
//   return result;
// }

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

option && myChart.setOption(option);
