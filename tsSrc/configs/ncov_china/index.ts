import fs from 'fs'
import path from 'path'
import axios from 'axios'
import { ChartName } from './enums'
import type {
  ApiRequestParams,
  Result,
  ChartNcovResUnion
} from './types'

export const rootPath = path.resolve(__dirname, '../../../')

export const mdPath = rootPath + '/assets/js'

export const BaseApiInfo = {
  GuangDongProvinceCode: '440000',
  GuangZhouCityCode: '440100',
  BASE_URL: 'https://wechat.wecity.qq.com/api/',
  SERVICE: 'THPneumoniaDataService',
  OUTER_SERVICE: 'THPneumoniaOuterService',
  OUTER_DATA_SERVICE: 'THPneumoniaOuterDataService',
  USERID: '830075f3162e41c89a790c70041cd031'
}

export const BaseUrl = {
  GetChinaRealTimeInfoURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getChinaRealTimeInfo`,
  GetProvinceInfoByCodeURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getProvinceInfoByCode`,
  GetCityInfoByProvCodeURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getCityInfoByProvCode`,
  GetProvinceInfoHisByCodeURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getProvinceInfoHisByCode`,
  GetCityInfoHisByCodeURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getCityInfoHisByCode`,
  GetTopicContentURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.OUTER_SERVICE}/getTopicContent`,
  GetChartInfoURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.OUTER_DATA_SERVICE}/getChartInfo`,
  GetProvinceMapInfoURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getProvinceMapInfo`
}

export const URL_Object = {
  getChinaRealTimeInfo: {
    func: 'getChinaRealTimeInfo',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetChinaRealTimeInfoURL
  },
  getProvinceInfoByCode: {
    func: 'getProvinceInfoByCode',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetProvinceInfoByCodeURL
  },
  getCityInfoByProvCode: {
    func: 'getCityInfoByProvCode',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetCityInfoByProvCodeURL
  },
  getProvinceInfoHisByCode: {
    func: 'getProvinceInfoHisByCode',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetProvinceInfoHisByCodeURL
  },
  getCityInfoHisByCode: {
    func: 'getCityInfoHisByCode',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetCityInfoHisByCodeURL
  },
  getTopicContent: {
    func: 'getTopicContent',
    service: BaseApiInfo.OUTER_SERVICE,
    url: BaseUrl.GetTopicContentURL
  },
  getChartInfo: {
    func: 'getChartInfo',
    service: BaseApiInfo.OUTER_DATA_SERVICE,
    url: BaseUrl.GetChartInfoURL
  },
  getProvinceMapInfo: {
    func: 'getProvinceMapInfo',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetProvinceMapInfoURL
  }
}

/**
 * @func writeMdWithContent
 * @param {string} timeStr
 * @param {string} content
 * @desc 写入md文件并更新路由
 */
export const writeMdWithContent = (name: string, content: string) => {
  const writePath = `${mdPath}/${name}.js`
  fs.writeFileSync(writePath, content, 'utf-8')
  console.log(`${name}.js created.`)
}

/**
 * @func getApiData
 * @param {string} url
 * @param {ApiRequestParams} params
 * @returns {Promise<Result<T>>}
 * @desc 接口统一处理
 */
export const getApiData = async <T>(
  url: string,
  params: ApiRequestParams
): Promise<Result<T>> => {
  const { req, service, func } = params
  const res = await axios.post(url, {
    args: {
      req
    },
    service,
    func,
    context: {
      userId: BaseApiInfo.USERID
    }
  })
  return res.data
}

export const dealWithNumber = (number: number | string) => {
  return number > 0 ? number : 1
}

export const renderResData = (params: ChartNcovResUnion) => {
  const {
    provinceMapInfo,
    chinaRealTimeInfo,
    provinceInfos,
    trendInfoRes,
    cityTrendRes,
    trendChartInfoRes
  } = params

  const { provinceMapData } = provinceMapInfo

  const {
    chinaDayModify,
  } = chinaRealTimeInfo
  const {
    localConfirmAdd, // 本土新增确诊
    noinfect, // 新增无症状
    importDesc, // 新增境外输入
    heal // 新增治愈
  } = chinaDayModify

  const { provinceInfo } = provinceInfos
  const {
    localAddPctDesc, // 描述
    localAdd, // 本土新增确诊
    asymptomAdd, // 本土新增无症状
    importAdd, // 新增境外输入
    lastImportAddTotal, // 本土近7日确诊
  } = provinceInfo

  const gdRate = localAddPctDesc.slice(localAddPctDesc.indexOf('占全国') + 3).replace('%','')

  const { modifyHistory } = trendInfoRes

  const { modifyHistory: cityModifyHistory } = cityTrendRes

  const { trendChartInfo } = trendChartInfoRes
  const chinaAddHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === ChartName.CH_ADD_HISTORY
  })[0].chartLineData
  const chinaNowHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === ChartName.CH_NOW_HISTORY
  })[0].chartLineData

  const content = `
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
      data: [${chinaAddHistoryData
        .map((x) => {
          return `"${x.x}",`
        })
        .join('')}]
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
        data: [${chinaAddHistoryData
          .map((x) => {
            return `${x.y1},`
          })
          .join('')}]
      },
      {
        name: '无症状感染',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [${chinaAddHistoryData
          .map((x) => {
            return `${x.y3},`
          })
          .join('')}]
      },
      {
        name: '新增境外输入',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [${chinaAddHistoryData
          .map((x) => {
            return `${x.y2},`
          })
          .join('')}]
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
      data: [${modifyHistory
        .map((x) => {
          return `"${x.day}",`
        })
        .join('')}]
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
        data: [${modifyHistory
          .map((x) => {
            return `${x.localAdd},`
          })
          .join('')}]
      },
      {
        name: '本土新增无症状',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [${modifyHistory
          .map((x) => {
            return `${x.asymptomAdd},`
          })
          .join('')}]
      },
      {
        name: '新增境外输入',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [${modifyHistory
          .map((x) => {
            return `${x.importAdd},`
          })
          .join('')}]
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
      data: [${cityModifyHistory
        .map((x) => {
          return `"${x.day.slice(4)}",`
        })
        .join('')}]
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
        data: [${cityModifyHistory
          .map((x) => {
            return `${x.confirm},`
          })
          .join('')}]
      },
      {
        name: '本土新增无症状',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [${cityModifyHistory
          .map((x) => {
            return `${x.noinfect},`
          })
          .join('')}]
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
            value: ${gdRate},
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
          { value: ${localAdd}, name: '本土新增确诊' },
          { value: ${asymptomAdd}, name: '本土新增无症状	' },
          { value: ${importAdd}, name: '新增境外输入' },
          { value: ${lastImportAddTotal}, name: '本土近7日确诊' },
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
            name: '本土新增确诊昨日+${localConfirmAdd}',
            value: ${dealWithNumber(localConfirmAdd)},
          },
          {
            name: '新增无症状昨日+${noinfect}',
            value: ${dealWithNumber(noinfect)},
          },
          {
            name: '新增境外输入昨日+${importDesc}',
            value: ${dealWithNumber(importDesc)},
          },
          {
            name: '新增治愈昨日+${heal}',
            value: ${dealWithNumber(heal)},
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
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [${chinaNowHistoryData
        .map((x) => {
          return `"${x.x}",`
        })
        .join('')}]
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
        data: [${chinaNowHistoryData
          .map((x) => {
            return `${x.y1},`
          })
          .join('')}]
      },
      {
        name: '无症状感染',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [${chinaNowHistoryData
          .map((x) => {
            return `${x.y3},`
          })
          .join('')}]
      },
      {
        name: '新增境外输入',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [${chinaNowHistoryData
          .map((x) => {
            return `${x.y2},`
          })
          .join('')}]
      }
    ]
  }
  
  var mapDatas = [${provinceMapData
    .map((x) => {
      return `{name: '${x.name.replace('省', '')}', value: ${
        x.localAdd
      }, addList: [${x.localAddCityData
        .map((a) => {
          return `{name: '${a.name}', num: ${a.num}},`
        })
        .join('')}]},`
    })
    .join('')}{name: '南海诸岛', value: 0, addList: []}];
  
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
`
  const name = 'source'

  writeMdWithContent(name, content)
}
