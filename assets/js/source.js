// 指定图表的配置项和数据
var option_ch_add = {
  title: {
    text: '新增疫情整体走势'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['本土确诊', '无症状感染', '新增境外输入'],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ["08.21", "08.22", "08.23", "08.24", "08.25", "08.26", "08.27", "08.28", "08.29", "08.30", "08.31", "09.01", "09.02", "09.03", "09.04", "09.05", "09.06", "09.07", "09.08", "09.09", "09.10", "09.11", "09.12", "09.13", "09.14", "09.15", "09.16", "09.17", "09.18", "09.19", "09.20", "09.21", "09.22", "09.23", "09.24", "09.25", "09.26", "09.27", "09.28", "09.29", "09.30", "10.01", "10.02", "10.03", "10.04", "10.05", "10.06", "10.07", "10.08", "10.09", "10.10", "10.11", "10.12", "10.13", "10.14", "10.15", "10.16", "10.17", "10.18", "10.19", "10.20",]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '本土确诊',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [360, 308, 380, 345, 262, 250, 259, 301, 349, 349, 307, 318, 440, 314, 303, 264, 323, 241, 259, 239, 179, 164, 188, 196, 126, 102, 76, 106, 92, 104, 123, 114, 121, 129, 159, 235, 173, 119, 106, 97, 106, 116, 189, 250, 223, 183, 216, 447, 441, 373, 427, 374, 322, 249, 291, 174, 182, 208, 204, 164, 158,]
    },
    {
      name: '无症状感染',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [1464, 1440, 1261, 1289, 1239, 1106, 1035, 1255, 1368, 1326, 1596, 1567, 1379, 1359, 1249, 1235, 1247, 1093, 1033, 994, 959, 785, 727, 762, 823, 746, 505, 930, 715, 525, 485, 512, 627, 624, 601, 597, 636, 625, 526, 625, 549, 432, 466, 626, 747, 1005, 1267, 1301, 1307, 1566, 1662, 1386, 1154, 1010, 900, 668, 534, 587, 630, 643, 638,]
    },
    {
      name: '新增境外输入',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [67, 74, 33, 45, 50, 50, 48, 51, 33, 43, 61, 55, 62, 70, 46, 46, 57, 39, 42, 51, 55, 62, 54, 41, 41, 59, 64, 48, 55, 48, 43, 51, 54, 59, 58, 60, 72, 75, 64, 59, 66, 63, 51, 57, 50, 46, 72, 54, 62, 61, 64, 43, 50, 64, 70, 70, 63, 42, 43, 47, 56,]
    }
  ]
};

var option_gd_mod = {
  title: {
    text: '广东疫情新增趋势（人）'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['本土新增确诊', '本土新增无症状', '新增境外输入'],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ["08.23", "08.24", "08.25", "08.26", "08.27", "08.28", "08.29", "08.30", "08.31", "09.01", "09.02", "09.03", "09.04", "09.05", "09.06", "09.07", "09.08", "09.09", "09.10", "09.11", "09.12", "09.13", "09.14", "09.15", "09.16", "09.17", "09.18", "09.19", "09.20", "09.21", "09.22", "09.23", "09.24", "09.25", "09.26", "09.27", "09.28", "09.29", "09.30", "10.01", "10.02", "10.03", "10.04", "10.05", "10.06", "10.07", "10.08", "10.09", "10.10", "10.11", "10.12", "10.13", "10.14", "10.15", "10.16", "10.17", "10.18", "10.19", "10.20",]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '本土新增确诊',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [17, 4, 4, 6, 13, 10, 24, 25, 40, 55, 65, 79, 63, 43, 42, 27, 36, 26, 15, 17, 7, 6, 5, 5, 3, 2, 1, 0, 3, 1, 2, 5, 6, 7, 12, 4, 18, 16, 22, 17, 19, 27, 34, 37, 41, 47, 34, 31, 38, 43, 36, 53, 60, 35, 23, 36, 50, 26, 27,]
    },
    {
      name: '本土新增无症状',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [5, 2, 4, 2, 4, 3, 12, 21, 34, 41, 40, 24, 26, 17, 18, 12, 28, 6, 10, 11, 4, 3, 4, 1, 1, 1, 2, 1, 2, 2, 4, 0, 0, 5, 5, 2, 5, 15, 21, 10, 24, 16, 24, 27, 34, 27, 21, 24, 25, 11, 17, 21, 29, 29, 38, 61, 48, 58, 62,]
    },
    {
      name: '新增境外输入',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [13, 16, 18, 15, 19, 12, 11, 10, 13, 16, 17, 18, 16, 16, 19, 6, 16, 23, 19, 21, 12, 11, 8, 10, 15, 7, 11, 15, 12, 13, 14, 15, 12, 19, 14, 15, 21, 15, 11, 29, 11, 19, 18, 19, 27, 10, 14, 27, 27, 14, 17, 15, 24, 18, 18, 11, 12, 14, 25,]
    }
  ]
}

var option_gz_mod = {
  title: {
    text: '广州疫情新增趋势（人）'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['本土新增确诊', '本土新增无症状'],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ["0823", "0824", "0825", "0826", "0827", "0828", "0829", "0830", "0831", "0901", "0902", "0903", "0904", "0905", "0906", "0907", "0908", "0909", "0910", "0911", "0912", "0913", "0914", "0915", "0916", "0917", "0918", "0919", "0920", "0921", "0922", "0923", "0924", "0925", "0926", "0927", "0928", "0929", "0930", "1001", "1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1011", "1012", "1013", "1014", "1015", "1016", "1017", "1018", "1019", "1020",]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '本土新增确诊',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [2, 0, 0, 0, 1, 1, 0, 5, 5, 3, 7, 4, 8, 5, 6, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 4, 5, 2, 2, 0, 1, 1, 2, 0, 5, 10, 12, 14, 21, 17, 18, 5, 13, 6, 10, 25, 23, 20, 3, 16, 22, 6, 10,]
    },
    {
      name: '本土新增无症状',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [0, 0, 0, 0, 1, 1, 0, 0, 4, 2, 3, 0, 1, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 2, 4, 0, 0, 0, 1, 1, 0, 2, 0, 0, 3, 7, 5, 13, 8, 12, 9, 15, 1, 2, 7, 3, 8, 16, 27, 43, 31, 44, 46,]
    }
  ]
}

var optionRate = {
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#464646'
        }
      },
      axisLine: {
        lineStyle: {
          width: 40
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: [
        {
          value: 80,
          name: 'Good',
          title: {
            offsetCenter: ['0%', '-10%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '10%']
          }
        }
      ],
      title: {
        fontSize: 14
      },
      detail: {
        width: 50,
        height: 14,
        fontSize: 14,
        color: 'auto',
        borderColor: 'auto',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
    }
  ]
};

var optionBar = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
}

var optionX = {
  title: {
    text: 'Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

var option_ch_day  = {
  series: [
    {
      type: 'treemap',
      data: [
        {
          name: '本土新增确诊昨日+158',
          value: 158,
        },
        {
          name: '新增无症状昨日+638',
          value: 638,
        },
        {
          name: '新增境外输入昨日+56',
          value: 56,
        },
        {
          name: '新增治愈昨日+279',
          value: 279,
        },
      ]
    }
  ]
}

var optionXO = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Hello']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: '#a90000'
          }
        },
        150,
        80,
        70,
        110,
        130,
        66
      ],
      type: 'bar'
    }
  ]
}