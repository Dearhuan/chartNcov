
  // 指定图表的配置项和数据
  var option_ch_add = {
    title: {
      text: '新增疫情整体走势',
      textStyle: {
        color: '#5ab1ef'
      }
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
      data: [
        {
          name: '本土确诊',
          icon: 'rect'
        }, 
        {
          name: '无症状感染',
          icon: 'rect'
        },
        {
          name: '新增境外输入',
          icon: 'rect'
        } 
      ],
      top: 30,
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
      data: ["12.20","12.21","12.22","12.23","12.24","12.25","12.26","12.27","12.28","12.29","12.30","12.31","01.01","01.02","01.03",]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '本土确诊',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [3049,2966,3696,4103,2940,2637,4388,5136,5080,5491,7179,5102,4499,4804,7685,]
      },
      {
        name: '无症状感染',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
      },
      {
        name: '新增境外输入',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [52,64,65,25,43,31,48,95,22,24,25,36,24,29,4,]
      }
    ]
  };
  
  var option_gd_mod = {
    title: {
      text: '广东疫情新增趋势（人）',
      textStyle: {
        color: '#5ab1ef'
      }
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
      top: 30,
      data: [
        {
          name: '本土新增确诊',
          icon: 'rect'
        }, 
        {
          name: '本土新增无症状',
          icon: 'rect'
        },
        {
          name: '新增境外输入',
          icon: 'rect'
        } 
      ],
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
      data: ["12.23","12.24","12.25","12.26","12.27","12.28","12.29","12.30","12.31","01.01","01.02","01.03",]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '本土新增确诊',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [1737,1384,1182,1976,2233,2239,2400,2766,1784,1555,1829,2917,]
      },
      {
        name: '本土新增无症状',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,0,0,0,0,0,0,0,0,]
      },
      {
        name: '新增境外输入',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [6,11,5,22,82,4,18,9,31,17,18,2,]
      }
    ]
  }
  
  var option_gz_mod = {
    title: {
      text: '广州疫情新增趋势（人）',
      textStyle: {
        color: '#e1eaf1'
      }
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
      top: 30,
      data: [
        {
          name: '本土新增确诊',
          icon: 'rect'
        },
        {
          name: '本土新增无症状',
          icon: 'rect'
        } 
      ],
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
      data: ["1223","1224","1225","0103",]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '本土新增确诊',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,]
      },
      {
        name: '本土新增无症状',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,]
      }
    ]
  }
  
  var optionRate = {
    title: {
      text: '广东本土累计确诊占比',
      textStyle: {
        color: '#5ab1ef'
      }
    },
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
            value: 44.08,
            name: '',
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
    title: {
      text: '广东疫情新增概览',
      textStyle: {
        color: '#5ab1ef'
      }
    },
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
        name: '广东疫情',
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
            fontSize: '20',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 0, name: '本土新增确诊' },
          { value: 0, name: '本土新增无症状	' },
          { value: 0, name: '新增境外输入' },
          { value: 6492, name: '本土近7日确诊' },
        ]
      }
    ]
  }
  
  var option_ch_day = {
    title: {
      text: '国内新增概览',
      textStyle: {
        color: '#5ab1ef'
      }
    },
    series: [
      {
        type: 'treemap',
        data: [
          {
            name: '本土新增确诊昨日+0',
            value: 1,
          },
          {
            name: '新增无症状昨日+0',
            value: 1,
          },
          {
            name: '新增境外输入昨日+待公布',
            value: 1,
          },
          {
            name: '新增治愈昨日+0',
            value: 1,
          },
        ]
      }
    ]
  }
  
  var option_ch_now = {
    title: {
      text: '现有疫情整体走势',
      textStyle: {
        color: '#f0f2f2'
      }
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
      top: 30,
      data: [
        {
          name: '本土确诊',
          icon: 'rect'
        }, 
        {
          name: '无症状感染',
          icon: 'rect'
        },
        {
          name: '新增境外输入',
          icon: 'rect'
        } 
      ]
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
      data: ["12.20","12.21","12.22","12.23","12.24","12.25","12.26","12.27","12.28","12.29","12.30","12.31","01.01","01.02","01.03","01.04","01.05","01.06","01.07","01.08","01.09","01.10","01.11","01.12","01.13","01.14","01.15","01.16","01.17","01.18","01.19","01.20","01.21","01.22","01.23","01.24","01.25","01.26","01.27","01.28","01.29","01.30","01.31","02.01","02.02","02.03","02.04","02.05","02.06","02.07","02.08","02.09","02.10","02.11","02.12","02.13","02.14","02.15","02.16","02.17","02.18","02.19",]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '本土确诊',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [36636,37295,38884,41265,43449,45397,48154,51406,54566,57769,61980,65890,69817,73790,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,77937,]
      },
      {
        name: '无症状感染',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [475,475,471,434,419,406,396,445,435,421,406,408,404,398,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,]
      },
      {
        name: '新增境外输入',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,228687,]
      }
    ]
  }
  
  var mapDatas = [{name: '台湾', value: 0, addList: []},{name: '香港', value: 0, addList: []},{name: '广东', value: 0, addList: []},{name: '湖北', value: 0, addList: []},{name: '上海', value: 0, addList: []},{name: '吉林', value: 0, addList: []},{name: '四川', value: 0, addList: []},{name: '重庆', value: 0, addList: []},{name: '福建', value: 0, addList: []},{name: '海南', value: 0, addList: []},{name: '河南', value: 0, addList: []},{name: '北京', value: 0, addList: []},{name: '内蒙古', value: 0, addList: []},{name: '云南', value: 0, addList: []},{name: '浙江', value: 0, addList: []},{name: '陕西', value: 0, addList: []},{name: '黑龙江', value: 0, addList: []},{name: '山西', value: 0, addList: []},{name: '山东', value: 0, addList: []},{name: '湖南', value: 0, addList: []},{name: '江苏', value: 0, addList: []},{name: '广西', value: 0, addList: []},{name: '天津', value: 0, addList: []},{name: '辽宁', value: 0, addList: []},{name: '河北', value: 0, addList: []},{name: '澳门', value: 0, addList: []},{name: '新疆', value: 0, addList: []},{name: '江西', value: 0, addList: []},{name: '贵州', value: 0, addList: []},{name: '安徽', value: 0, addList: []},{name: '甘肃', value: 0, addList: []},{name: '西藏', value: 0, addList: []},{name: '青海', value: 0, addList: []},{name: '宁夏', value: 0, addList: []},{name: '南海诸岛', value: 0, addList: []}];
  
  var option_map = {
    title: {
      text: '全国新增本土确诊',
      textStyle: {
        color: '#5ab1ef'
      },
      subtext: '',
      y: '5%',
      x: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
  
    //左侧小导航图标
    visualMap: {
      show: true,
      x: 'left',
      y: 'center',
      pieces: [
        {
          gt: -1,
          lt: 1,
          label: '0人',
          color: '#85daef'
        },
        {
          gt: 1,
          lt: 10,
          label: '1-10人',
          color: '#9feaa5'
        },
        {
          gt: 10,
          lt: 20,
          label: '10-20人',
          color: '#74e2ca'
        },
        {
          gt: 20,
          label: '20人及以上',
          color: '#5475f5'
        }
      ],
    },
  
    //配置属性
    series: [{
      type: 'map',
      mapType: 'china',
      roam: true,
      label: {
        normal: {
          show: true  //省份名称
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      data: mapDatas  //数据
    }]
  }
