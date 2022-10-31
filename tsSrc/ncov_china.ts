import {
  BaseApiInfo,
  URL_Object,
  getApiData,
  renderResData
} from './configs/ncov_china'
import type {
  ProvinceMapRes,
  ChinaRealTimeInfo,
  ProvinceInfo,
  CityRes,
  TrendInfoRes,
  CityTrendRes,
  ContentsRes,
  TrendChartInfoRes
} from './configs/ncov_china/types'

const { GuangDongProvinceCode, GuangZhouCityCode } = BaseApiInfo

;(async () => {
  // 全国新增本土确诊
  const params_provinceMapInfo = URL_Object['getProvinceMapInfo']
  const res_provinceMapInfo = await getApiData<ProvinceMapRes>(
    params_provinceMapInfo['url'],
    {
      req: {},
      func: params_provinceMapInfo['func'],
      service: params_provinceMapInfo['service']
    }
  )

  // 全国信息
  const params_chinaRealTimeInfo = URL_Object['getChinaRealTimeInfo']
  const res = await getApiData<ChinaRealTimeInfo>(
    params_chinaRealTimeInfo['url'],
    {
      req: {},
      func: params_chinaRealTimeInfo['func'],
      service: params_chinaRealTimeInfo['service']
    }
  )

  // 省份信息
  const params_provinceInfoByCode = URL_Object['getProvinceInfoByCode']
  const res_province = await getApiData<ProvinceInfo>(
    params_provinceInfoByCode['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: params_provinceInfoByCode['func'],
      service: params_provinceInfoByCode['service']
    }
  )

  // 省份趋势信息
  const params_provinceInfoHisByCode = URL_Object['getProvinceInfoHisByCode']
  const res_trendInfo = await getApiData<TrendInfoRes>(
    params_provinceInfoHisByCode['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: params_provinceInfoHisByCode['func'],
      service: params_provinceInfoHisByCode['service']
    }
  )

  // 城市趋势信息
  const params_cityInfoHisByCode = URL_Object['getCityInfoHisByCode']
  const res_cityTrendInfo = await getApiData<CityTrendRes>(
    params_cityInfoHisByCode['url'],
    {
      req: { cityCode: GuangZhouCityCode },
      func: params_cityInfoHisByCode['func'],
      service: params_cityInfoHisByCode['service']
    }
  )

  // 趋势图表信息
  const params_trendChartInfo = URL_Object['getChartInfo']
  const res_chartInfo = await getApiData<TrendChartInfoRes>(
    params_trendChartInfo['url'],
    {
      req: {},
      func: params_trendChartInfo['func'],
      service: params_trendChartInfo['service']
    }
  )

  const resData = {
    provinceMapInfo: res_provinceMapInfo.args.rsp,
    chinaRealTimeInfo: res.args.rsp,
    provinceInfos: res_province.args.rsp,
    trendInfoRes: res_trendInfo.args.rsp,
    cityTrendRes: res_cityTrendInfo.args.rsp,
    trendChartInfoRes: res_chartInfo.args.rsp
  }

  renderResData(resData)
})()
