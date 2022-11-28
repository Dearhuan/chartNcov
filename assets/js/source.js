
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
      data: ["09.28","09.29","09.30","10.01","10.02","10.03","10.04","10.05","10.06","10.07","10.08","10.09","10.10","10.11","10.12","10.13","10.14","10.15","10.16","10.17","10.18","10.19","10.20","10.21","10.22","10.23","10.24","10.25","10.26","10.27","10.28","10.29","10.30","10.31","11.01","11.02","11.03","11.04","11.05","11.06","11.07","11.08","11.09","11.10","11.11","11.12","11.13","11.14","11.15","11.16","11.17","11.18","11.19","11.20","11.21","11.22","11.23","11.24","11.25","11.26","11.27",]
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
        data: [106,97,106,116,189,250,223,183,216,447,441,373,427,374,322,249,291,174,182,208,204,164,158,159,155,173,205,297,193,214,324,353,479,498,409,531,704,596,526,535,843,1294,1133,1150,1452,1675,1747,1621,1568,2328,2276,2055,2204,2277,2145,2641,3927,3041,3405,3648,3748,]
      },
      {
        name: '无症状感染',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [526,625,549,432,466,626,747,1005,1267,1301,1307,1566,1662,1386,1154,1010,900,668,534,587,630,643,638,658,683,751,875,944,924,1123,1153,1566,2220,2221,2346,2669,3167,3063,3894,4961,6632,6882,7691,9385,10351,13086,14325,16151,18491,20804,22853,22208,22011,24547,25754,26242,27517,29654,31504,35858,36304,]
      },
      {
        name: '新增境外输入',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [64,59,66,63,51,57,50,46,72,54,62,61,64,43,50,64,70,70,63,42,43,47,56,56,52,48,41,41,38,48,53,48,42,49,56,50,53,61,62,34,47,52,52,59,52,36,47,40,55,60,86,82,63,88,80,78,83,62,69,61,74,]
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
      data: ["09.30","10.01","10.02","10.03","10.04","10.05","10.06","10.07","10.08","10.09","10.10","10.11","10.12","10.13","10.14","10.15","10.16","10.17","10.18","10.19","10.20","10.21","10.22","10.23","10.24","10.25","10.26","10.27","10.28","10.29","10.30","10.31","11.01","11.02","11.03","11.04","11.05","11.06","11.07","11.08","11.09","11.10","11.11","11.12","11.13","11.14","11.15","11.16","11.17","11.18","11.19","11.20","11.21","11.22","11.23","11.24","11.25","11.26","11.27",]
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
        data: [22,17,19,27,34,37,41,47,34,31,38,43,36,53,60,35,23,36,50,26,27,19,32,23,33,45,15,27,63,83,291,242,125,103,195,219,252,224,319,592,500,546,760,727,707,586,564,1246,1338,1102,1157,984,781,860,1791,892,991,1386,1347,]
      },
      {
        name: '本土新增无症状',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [21,10,24,16,24,27,34,27,21,24,25,11,17,21,29,29,38,61,48,58,62,74,59,70,62,67,84,88,136,195,468,458,298,356,470,669,1330,1882,2330,2611,2507,2461,2996,3541,3941,5047,6215,8576,9110,8535,8381,8101,8241,7951,7505,7584,7405,7705,7761,]
      },
      {
        name: '新增境外输入',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [11,29,11,19,18,19,27,10,14,27,27,14,17,15,24,18,18,11,12,14,25,17,9,19,12,6,5,11,14,14,8,7,10,12,13,9,21,10,12,16,14,23,9,15,19,19,24,10,20,13,21,38,35,23,19,23,25,23,24,]
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
      data: ["0930","1001","1002","1003","1004","1005","1006","1007","1008","1009","1010","1011","1012","1013","1014","1015","1016","1017","1018","1019","1020","1021","1022","1023","1024","1025","1026","1027","1028","1029","1030","1031","1101","1102","1103","1104","1105","1106","1107","1108","1109","1110","1111","1112","1113","1114","1115","1116","1117","1118","1119","1120","1121","1122","1123","1124","1125","1126","1127",]
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
        data: [2,0,5,10,12,14,21,17,18,5,13,6,10,25,23,20,3,16,22,6,10,12,18,16,22,27,11,19,54,66,232,190,85,83,149,168,183,158,232,478,423,466,694,662,656,552,509,1189,1241,983,1050,882,681,722,1645,734,824,1177,1129,]
      },
      {
        name: '本土新增无症状',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0,0,3,7,5,13,8,12,9,15,1,2,7,3,8,16,27,43,31,44,46,46,39,53,43,46,39,46,85,125,295,289,253,323,430,635,1259,1813,2263,2546,2430,2358,2921,3464,3876,4977,6138,8486,8989,8444,8234,7885,7957,7735,7192,7267,7058,7266,7166,]
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
            value: 35.68,
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
          { value: 1347, name: '本土新增确诊' },
          { value: 7761, name: '本土新增无症状	' },
          { value: 24, name: '新增境外输入' },
          { value: 8048, name: '本土近7日确诊' },
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
            name: '本土新增确诊昨日+3748',
            value: 3748,
          },
          {
            name: '新增无症状昨日+36304',
            value: 36304,
          },
          {
            name: '新增境外输入昨日+74',
            value: 74,
          },
          {
            name: '新增治愈昨日+2103',
            value: 2103,
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
      data: ["09.28","09.29","09.30","10.01","10.02","10.03","10.04","10.05","10.06","10.07","10.08","10.09","10.10","10.11","10.12","10.13","10.14","10.15","10.16","10.17","10.18","10.19","10.20","10.21","10.22","10.23","10.24","10.25","10.26","10.27","10.28","10.29","10.30","10.31","11.01","11.02","11.03","11.04","11.05","11.06","11.07","11.08","11.09","11.10","11.11","11.12","11.13","11.14","11.15","11.16","11.17","11.18","11.19","11.20","11.21","11.22","11.23","11.24","11.25","11.26","11.27",]
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
        data: [2365,2359,2301,2314,2306,2341,2261,2263,2329,2666,2977,3240,3460,3637,3779,3824,3906,3854,3808,3777,3677,3595,3529,3362,3245,3179,3062,3127,3104,3107,3252,3440,3751,4101,4324,4641,5070,5473,5792,6113,6742,7801,8635,9385,10387,11647,12855,13935,14820,16631,17901,19102,20202,21550,22606,23923,26090,27429,28985,30646,32348,]
      },
      {
        name: '无症状感染',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [632,610,608,631,623,629,615,620,628,633,641,646,644,623,618,632,657,650,655,636,635,623,624,624,629,605,592,578,562,551,549,547,527,537,530,523,527,530,532,504,502,512,520,530,532,528,534,538,525,541,576,607,627,660,690,707,723,735,760,764,781,]
      },
      {
        name: '新增境外输入',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [10105,9829,9770,9618,8814,8449,8109,8069,8744,9419,10193,11206,11944,12805,13455,13998,14442,14606,14679,14750,14715,14774,14658,14360,14193,14094,14026,14399,14475,14817,15140,15931,17538,19036,20631,22423,24734,26924,30018,34158,39861,45493,51292,59141,67715,79170,91603,105362,120524,136643,154412,172048,188616,207376,226934,245895,264312,281195,299495,318626,340796,]
      }
    ]
  }
  
  var mapDatas = [{name: '台湾', value: 0, addList: []},{name: '香港', value: 0, addList: []},{name: '湖北', value: 18, addList: [{name: '武汉', num: 18},]},{name: '上海', value: 16, addList: [{name: '松江', num: 5},{name: '浦东', num: 3},{name: '徐汇', num: 2},{name: '静安', num: 2},{name: '金山', num: 2},]},{name: '吉林', value: 8, addList: [{name: '松原', num: 6},{name: '长白山管委会', num: 2},]},{name: '广东', value: 1347, addList: [{name: '广州', num: 1129},{name: '深圳', num: 54},{name: '湛江', num: 34},{name: '东莞', num: 33},{name: '佛山', num: 23},]},{name: '北京', value: 840, addList: [{name: '朝阳', num: 159},{name: '通州', num: 102},{name: '东城', num: 96},{name: '顺义', num: 86},{name: '昌平', num: 74},]},{name: '海南', value: 10, addList: [{name: '海口', num: 3},{name: '陵水县', num: 2},{name: '文昌', num: 2},{name: '三亚', num: 1},{name: '乐东', num: 1},]},{name: '四川', value: 157, addList: [{name: '成都', num: 104},{name: '外省返川人员', num: 22},{name: '阿坝', num: 10},{name: '巴中', num: 6},{name: '广安', num: 5},]},{name: '内蒙古', value: 121, addList: [{name: '呼和浩特', num: 66},{name: '呼伦贝尔', num: 34},{name: '鄂尔多斯', num: 14},{name: '赤峰', num: 6},{name: '乌兰察布', num: 1},]},{name: '福建', value: 56, addList: [{name: '厦门', num: 23},{name: '泉州', num: 13},{name: '漳州', num: 7},{name: '三明', num: 6},{name: '龙岩', num: 6},]},{name: '重庆', value: 238, addList: [{name: '南岸区', num: 73},{name: '渝北区', num: 24},{name: '万州区', num: 18},{name: '巴南区', num: 12},{name: '秀山县', num: 12},]},{name: '陕西', value: 54, addList: [{name: '安康', num: 20},{name: '渭南', num: 16},{name: '延安', num: 6},{name: '汉中', num: 5},{name: '西安', num: 4},]},{name: '黑龙江', value: 54, addList: [{name: '齐齐哈尔', num: 23},{name: '哈尔滨', num: 13},{name: '佳木斯', num: 8},{name: '黑河', num: 5},{name: '绥化', num: 3},]},{name: '浙江', value: 65, addList: [{name: '台州', num: 16},{name: '绍兴', num: 12},{name: '温州', num: 10},{name: '衢州', num: 9},{name: '湖州', num: 8},]},{name: '河南', value: 157, addList: [{name: '郑州', num: 142},{name: '济源示范区', num: 13},{name: '漯河', num: 1},{name: '濮阳', num: 1},]},{name: '山东', value: 90, addList: [{name: '济南', num: 46},{name: '青岛', num: 11},{name: '泰安', num: 11},{name: '聊城', num: 9},{name: '临沂', num: 5},]},{name: '云南', value: 133, addList: [{name: '大理', num: 35},{name: '昆明', num: 32},{name: '昭通市', num: 22},{name: '未公布来源', num: 16},{name: '丽江市', num: 8},]},{name: '山西', value: 162, addList: [{name: '大同', num: 44},{name: '临汾', num: 41},{name: '晋城', num: 18},{name: '朔州', num: 15},{name: '阳泉', num: 12},]},{name: '江苏', value: 30, addList: [{name: '无锡', num: 11},{name: '南京', num: 6},{name: '连云港', num: 5},{name: '宿迁', num: 5},{name: '盐城', num: 2},]},{name: '河北', value: 40, addList: [{name: '石家庄', num: 35},{name: '廊坊', num: 3},{name: '保定', num: 2},]},{name: '天津', value: 6, addList: [{name: '未公布来源', num: 6},]},{name: '新疆', value: 24, addList: [{name: '和田', num: 11},{name: '喀什', num: 10},{name: '乌鲁木齐', num: 3},]},{name: '辽宁', value: 50, addList: [{name: '沈阳', num: 37},{name: '铁岭', num: 4},{name: '阜新', num: 4},{name: '盘锦', num: 3},{name: '鞍山', num: 1},]},{name: '广西', value: 2, addList: [{name: '未公布来源', num: 2},]},{name: '湖南', value: 23, addList: [{name: '长沙', num: 6},{name: '郴州', num: 4},{name: '张家界', num: 4},{name: '岳阳', num: 4},{name: '湘潭', num: 2},]},{name: '安徽', value: 8, addList: [{name: '宣城', num: 5},{name: '合肥', num: 2},{name: '芜湖', num: 1},]},{name: '甘肃', value: 8, addList: [{name: '兰州', num: 8},]},{name: '江西', value: 0, addList: []},{name: '西藏', value: 5, addList: [{name: '未公布来源', num: 3},{name: '拉萨', num: 2},]},{name: '贵州', value: 22, addList: [{name: '遵义', num: 8},{name: '贵阳', num: 8},{name: '毕节', num: 1},{name: '黔南州', num: 1},{name: '六盘水', num: 1},]},{name: '澳门', value: 0, addList: []},{name: '青海', value: 4, addList: [{name: '未公布来源', num: 4},]},{name: '宁夏', value: 0, addList: []},{name: '南海诸岛', value: 0, addList: []}];
  
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
