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
 * @desc ??????md?????????????????????
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
 * @desc ??????????????????
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
    localConfirmAdd, // ??????????????????
    noinfect, // ???????????????
    importDesc, // ??????????????????
    heal // ????????????
  } = chinaDayModify

  const { provinceInfo } = provinceInfos
  const {
    localAddPctDesc, // ??????
    localAdd, // ??????????????????
    asymptomAdd, // ?????????????????????
    importAdd, // ??????????????????
    lastImportAddTotal, // ?????????7?????????
  } = provinceInfo

  const gdRate = localAddPctDesc.slice(localAddPctDesc.indexOf('?????????') + 3).replace('%', '')

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
  // ?????????????????????????????????
  var option_ch_add = {
    title: {
      text: '????????????????????????',
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
          name: '????????????',
          icon: 'rect'
        }, 
        {
          name: '???????????????',
          icon: 'rect'
        },
        {
          name: '??????????????????',
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
        name: '????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [${chinaAddHistoryData
      .map((x) => {
        return `${x.y1},`
      })
      .join('')}]
      },
      {
        name: '???????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [${chinaAddHistoryData
      .map((x) => {
        return `${x.y3},`
      })
      .join('')}]
      },
      {
        name: '??????????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
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
      text: '?????????????????????????????????',
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
          name: '??????????????????',
          icon: 'rect'
        }, 
        {
          name: '?????????????????????',
          icon: 'rect'
        },
        {
          name: '??????????????????',
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
        name: '??????????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [${modifyHistory
      .map((x) => {
        return `${x.localAdd},`
      })
      .join('')}]
      },
      {
        name: '?????????????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [${modifyHistory
      .map((x) => {
        return `${x.asymptomAdd},`
      })
      .join('')}]
      },
      {
        name: '??????????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
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
      text: '?????????????????????????????????',
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
          name: '??????????????????',
          icon: 'rect'
        },
        {
          name: '?????????????????????',
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
        name: '??????????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [${cityModifyHistory
      .map((x) => {
        return `${x.confirm},`
      })
      .join('')}]
      },
      {
        name: '?????????????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
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
      text: '??????????????????????????????',
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
      text: '????????????????????????',
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
        name: '????????????',
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
          { value: ${localAdd}, name: '??????????????????' },
          { value: ${asymptomAdd}, name: '?????????????????????	' },
          { value: ${importAdd}, name: '??????????????????' },
          { value: ${lastImportAddTotal}, name: '?????????7?????????' },
        ]
      }
    ]
  }
  
  var option_ch_day = {
    title: {
      text: '??????????????????',
      textStyle: {
        color: '#5ab1ef'
      }
    },
    series: [
      {
        type: 'treemap',
        data: [
          {
            name: '????????????????????????+${localConfirmAdd}',
            value: ${dealWithNumber(localConfirmAdd)},
          },
          {
            name: '?????????????????????+${noinfect}',
            value: ${dealWithNumber(noinfect)},
          },
          {
            name: '????????????????????????+${importDesc}',
            value: ${dealWithNumber(importDesc)},
          },
          {
            name: '??????????????????+${heal}',
            value: ${dealWithNumber(heal)},
          },
        ]
      }
    ]
  }
  
  var option_ch_now = {
    title: {
      text: '????????????????????????',
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
          name: '????????????',
          icon: 'rect'
        }, 
        {
          name: '???????????????',
          icon: 'rect'
        },
        {
          name: '??????????????????',
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
        name: '????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [${chinaNowHistoryData
      .map((x) => {
        return `${x.y1},`
      })
      .join('')}]
      },
      {
        name: '???????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [${chinaNowHistoryData
      .map((x) => {
        return `${x.y3},`
      })
      .join('')}]
      },
      {
        name: '??????????????????',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
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
        return `{name: '${x.name.replace('???', '')}', value: ${x.localAdd
          }, addList: [${x.localAddCityData
            .map((a) => {
              return `{name: '${a.name}', num: ${a.num}},`
            })
            .join('')}]},`
      })
      .join('')}{name: '????????????', value: 0, addList: []}];
  
  var option_map = {
    title: {
      text: '????????????????????????',
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
  
    //?????????????????????
    visualMap: {
      show: true,
      x: 'left',
      y: 'center',
      pieces: [
        {
          gt: -1,
          lt: 1,
          label: '0???',
          color: '#85daef'
        },
        {
          gt: 1,
          lt: 10,
          label: '1-10???',
          color: '#9feaa5'
        },
        {
          gt: 10,
          lt: 20,
          label: '10-20???',
          color: '#74e2ca'
        },
        {
          gt: 20,
          label: '20????????????',
          color: '#5475f5'
        }
      ],
    },
  
    //????????????
    series: [{
      type: 'map',
      mapType: 'china',
      roam: true,
      label: {
        normal: {
          show: true  //????????????
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      data: mapDatas  //??????
    }]
  }
`
  const name = 'source'

  writeMdWithContent(name, content)
}







