
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
      data: ["09.08","09.09","09.10","09.11","09.12","09.13","09.14","09.15","09.16","09.17","09.18","09.19","09.20","09.21","09.22","09.23","09.24","09.25","09.26","09.27","09.28","09.29","09.30","10.01","10.02","10.03","10.04","10.05","10.06","10.07","10.08","10.09","10.10","10.11","10.12","10.13","10.14","10.15","10.16","10.17","10.18","10.19","10.20","10.21","10.22","10.23","10.24","10.25","10.26","10.27","10.28","10.29","10.30","10.31","11.01","11.02","11.03","11.04","11.05","11.06","11.07",]
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
        data: [259,239,179,164,188,196,126,102,76,106,92,104,123,114,121,129,159,235,173,119,106,97,106,116,189,250,223,183,216,447,441,373,427,374,322,249,291,174,182,208,204,164,158,159,155,173,205,297,193,214,324,353,479,498,409,531,704,596,526,535,843,]
      },
      {
        name: '无症状感染',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [1033,994,959,785,727,762,823,746,505,930,715,525,485,512,627,624,601,597,636,625,526,625,549,432,466,626,747,1005,1267,1301,1307,1566,1662,1386,1154,1010,900,668,534,587,630,643,638,658,683,751,875,944,924,1123,1153,1566,2220,2221,2346,2669,3167,3063,3894,4961,6632,]
      },
      {
        name: '新增境外输入',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [42,51,55,62,54,41,41,59,64,48,55,48,43,51,54,59,58,60,72,75,64,59,66,63,51,57,50,46,72,54,62,61,64,43,50,64,70,70,63,42,43,47,56,56,52,48,41,41,38,48,53,48,42,49,56,50,53,61,62,34,47,]
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
      data: ["09.10","09.11","09.12","09.13","09.14","09.15","09.16","09.17","09.18","09.19","09.20","09.21","09.22","09.23","09.24","09.25","09.26","09.27","09.28","09.29","09.30","10.01","10.02","10.03","10.04","10.05","10.06","10.07","10.08","10.09","10.10","10.11","10.12","10.13","10.14","10.15","10.16","10.17","10.18","10.19","10.20","10.21","10.22","10.23","10.24","10.25","10.26","10.27","10.28","10.29","10.30","10.31","11.01","11.02","11.03","11.04","11.05","11.06","11.07",]
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
        data: [15,17,7,6,5,5,3,2,1,0,3,1,2,5,6,7,12,4,18,16,22,17,19,27,34,37,41,47,34,31,38,43,36,53,60,35,23,36,50,26,27,19,32,23,33,45,15,27,63,83,291,242,125,103,195,219,252,224,319,]
      },
      {
        name: '本土新增无症状',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [10,11,4,3,4,1,1,1,2,1,2,2,4,0,0,5,5,2,5,15,21,10,24,16,24,27,34,27,21,24,25,11,17,21,29,29,38,61,48,58,62,74,59,70,62,67,84,88,136,195,468,458,298,356,470,669,1330,1882,2330,]
      },
      {
        name: '新增境外输入',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [19,21,12,11,8,10,15,7,11,15,12,13,14,15,12,19,14,15,21,15,11,29,11,19,18,19,27,10,14,27,27,14,17,15,24,18,18,11,12,14,25,17,9,19,12,6,5,11,14,14,8,7,10,12,13,9,21,10,12,]
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
      data: ["0910","0911","0912","0913","0914","0915","0916","0917","0918","0919","0920","0921","0922","0923","0924","0925","0926","0927","0928","0929","0930","1001","1002","1003","1004","1005","1006","1007","1008","1009","1010","1011","1012","1013","1014","1015","1016","1017","1018","1019","1020","1021","1022","1023","1024","1025","1026","1027","1028","1029","1030","1031","1101","1102","1103","1104","1105","1106","1107",]
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
        data: [0,0,0,0,0,0,0,1,0,0,0,0,1,4,5,2,2,0,1,1,2,0,5,10,12,14,21,17,18,5,13,6,10,25,23,20,3,16,22,6,10,12,18,16,22,27,11,19,54,66,232,190,85,83,149,168,183,158,232,]
      },
      {
        name: '本土新增无症状',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,0,0,1,0,1,0,1,2,4,0,0,0,1,1,0,2,0,0,3,7,5,13,8,12,9,15,1,2,7,3,8,16,27,43,31,44,46,46,39,53,43,46,39,46,85,125,295,289,253,323,430,635,1259,1813,2263,]
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
            value: 34.68,
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
          { value: 319, name: '本土新增确诊' },
          { value: 2330, name: '本土新增无症状	' },
          { value: 12, name: '新增境外输入' },
          { value: 1437, name: '本土近7日确诊' },
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
            name: '本土新增确诊昨日+843',
            value: 843,
          },
          {
            name: '新增无症状昨日+6632',
            value: 6632,
          },
          {
            name: '新增境外输入昨日+47',
            value: 47,
          },
          {
            name: '新增治愈昨日+263',
            value: 263,
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
      data: ["09.08","09.09","09.10","09.11","09.12","09.13","09.14","09.15","09.16","09.17","09.18","09.19","09.20","09.21","09.22","09.23","09.24","09.25","09.26","09.27","09.28","09.29","09.30","10.01","10.02","10.03","10.04","10.05","10.06","10.07","10.08","10.09","10.10","10.11","10.12","10.13","10.14","10.15","10.16","10.17","10.18","10.19","10.20","10.21","10.22","10.23","10.24","10.25","10.26","10.27","10.28","10.29","10.30","10.31","11.01","11.02","11.03","11.04","11.05","11.06","11.07",]
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
        data: [5666,5575,5403,5083,4851,4714,4334,3681,3502,3293,3070,2881,2726,2606,2494,2477,2395,2404,2381,2378,2365,2359,2301,2314,2306,2341,2261,2263,2329,2666,2977,3240,3460,3637,3779,3824,3906,3854,3808,3777,3677,3595,3529,3362,3245,3179,3062,3127,3104,3107,3252,3440,3751,4101,4324,4641,5070,5473,5792,6113,6742,]
      },
      {
        name: '无症状感染',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [560,560,567,568,566,563,550,565,586,572,576,577,571,577,564,563,552,558,585,613,632,610,608,631,623,629,615,620,628,633,641,646,644,623,618,632,657,650,655,636,635,623,624,624,629,605,592,578,562,551,549,547,527,537,530,523,527,530,532,504,502,]
      },
      {
        name: '新增境外输入',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [23400,22660,22555,21919,21298,20832,20206,18729,18148,17756,17213,16241,14762,14010,13518,11627,11277,10573,10414,10373,10105,9829,9770,9618,8814,8449,8109,8069,8744,9419,10193,11206,11944,12805,13455,13998,14442,14606,14679,14750,14715,14774,14658,14360,14193,14094,14026,14399,14475,14817,15140,15931,17538,19036,20631,22423,24734,26924,30018,34158,39861,]
      }
    ]
  }
  
  var mapDatas = [{name: '台湾', value: 0, addList: []},{name: '香港', value: 0, addList: []},{name: '湖北', value: 0, addList: []},{name: '上海', value: 0, addList: []},{name: '吉林', value: 0, addList: []},{name: '广东', value: 319, addList: [{name: '广州', num: 232},{name: '茂名', num: 45},{name: '汕头', num: 25},{name: '清远', num: 12},{name: '佛山', num: 2},]},{name: '海南', value: 2, addList: [{name: '三亚', num: 1},{name: '海口', num: 1},]},{name: '四川', value: 21, addList: [{name: '外省返川人员', num: 11},{name: '乐山', num: 5},{name: '成都', num: 2},{name: '巴中', num: 2},{name: '自贡', num: 1},]},{name: '内蒙古', value: 159, addList: [{name: '呼和浩特', num: 156},{name: '包头', num: 2},{name: '鄂尔多斯', num: 1},]},{name: '福建', value: 3, addList: [{name: '福州', num: 3},]},{name: '北京', value: 31, addList: [{name: '朝阳', num: 15},{name: '昌平', num: 3},{name: '未公布来源', num: 3},{name: '通州', num: 3},{name: '西城', num: 2},]},{name: '陕西', value: 13, addList: [{name: '安康', num: 6},{name: '西安', num: 5},{name: '渭南', num: 2},]},{name: '河南', value: 86, addList: [{name: '郑州', num: 86},]},{name: '浙江', value: 1, addList: [{name: '杭州', num: 1},]},{name: '黑龙江', value: 3, addList: [{name: '哈尔滨', num: 2},{name: '绥化', num: 1},]},{name: '山东', value: 5, addList: [{name: '青岛', num: 3},{name: '枣庄', num: 2},]},{name: '江苏', value: 1, addList: [{name: '南京', num: 1},]},{name: '云南', value: 7, addList: [{name: '昆明', num: 4},{name: '德宏州', num: 3},]},{name: '天津', value: 2, addList: [{name: '未公布来源', num: 2},]},{name: '广西', value: 0, addList: []},{name: '辽宁', value: 0, addList: []},{name: '河北', value: 0, addList: []},{name: '新疆', value: 32, addList: [{name: '乌鲁木齐', num: 30},{name: '伊犁哈萨克自治州', num: 2},]},{name: '湖南', value: 16, addList: [{name: '怀化', num: 6},{name: '永州', num: 5},{name: '株洲', num: 3},{name: '邵阳', num: 2},]},{name: '重庆', value: 89, addList: [{name: '沙坪坝区', num: 17},{name: '大足区', num: 16},{name: '渝北区', num: 7},{name: '万州区', num: 6},{name: '北碚区', num: 6},]},{name: '山西', value: 33, addList: [{name: '大同', num: 29},{name: '吕梁', num: 2},{name: '忻州', num: 2},]},{name: '安徽', value: 0, addList: []},{name: '江西', value: 3, addList: [{name: '萍乡', num: 3},]},{name: '西藏', value: 0, addList: []},{name: '甘肃', value: 10, addList: [{name: '未公布来源', num: 10},]},{name: '贵州', value: 5, addList: [{name: '贵阳', num: 3},{name: '铜仁', num: 2},]},{name: '澳门', value: 0, addList: []},{name: '青海', value: 2, addList: [{name: '未公布来源', num: 2},]},{name: '宁夏', value: 0, addList: []},{name: '南海诸岛', value: 0, addList: []}];
  
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
