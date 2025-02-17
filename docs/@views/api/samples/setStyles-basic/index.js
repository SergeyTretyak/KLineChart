import { init } from 'klinecharts';

const chart = init('setStyles-basic-chart');
chart.setStyles({
  candle: {
    bar: {
      upColor: '#8fd3e8',
      upBorderColor: '#8fd3e8',
      upWickColor: '#8fd3e8',
      downColor: '#edafda',
      downBorderColor: '#edafda',
      downWickColor: '#edafda',
    }
  }
});

fetch('https://klinecharts.com/datas/kline.json')
  .then(res => res.json())
  .then(dataList => { chart.applyNewData(dataList); });
