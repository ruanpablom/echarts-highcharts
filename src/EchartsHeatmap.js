import React, {useEffect} from 'react';
import * as echarts from 'echarts';

import './index.css'

const EchartsHeatmap = () => {
  let option;

  const hours = [
    1,2,3,4,5,6,7,8,9,10,11,12
  ];
  const days = [
    1,2,3,4,5,6,7,8,9,10,11,12
  ];

  let data = [
    {value: [1,11,1], itemStyle: { color: '#254057' }},
    {value: [0,10,1], itemStyle: {color: '#254057'} }, [1,10,100], {value: [2,10,2], itemStyle: {color: '#254057'} },
    {value: [0,9,2], itemStyle: { color: '#254057' }}, [2,9,100], {value: [3,9,3], itemStyle: { color: '#254057' }},
    {value: [0,8,3], itemStyle: {color: '#254057'}}, [3,8,100], {value: [4,8,4], itemStyle: {color: '#254057'}},
    {value: [0,7,4], itemStyle: {color: '#254057' }}, [4,7,100], {value: [5,7,5], itemStyle: {color: '#254057' }},
    {value: [0,6,5], itemStyle: {color: '#254057'}}, [5,6,100], {value: [6,6,6], itemStyle: {color: '#254057'}},
    {value: [0,5,6],itemStyle: {color: '#254057'}}, [6,5,100], {value: [7,5,7],itemStyle: {color: '#254057'}},
    {value: [0,4,7],itemStyle: {color: '#254057'}}, [7,4,100], {value: [8,4,8],itemStyle: {color: '#254057'}},
    {value: [0,3,8],itemStyle: {color: '#254057'}}, [8,3,100], {value: [9,3,9],itemStyle: {color: '#254057'}},
    {value: [0,2,9],itemStyle: {color: '#254057'}}, [9,2,100], {value: [10,2,10],itemStyle: {color: '#254057'}},
    {value: [0,1,10],itemStyle: {color: '#254057'}}, [1,1,45], [2,1,2], [3,1,-77], [4,1,-78], [5,1,35], [6,1,2], [7,1,35], [8,1,35], [8,1,35], {value: [11,1,11],itemStyle: {color: '#254057'}},
    {value: [0,0,11],itemStyle: {color: '#254057'}},[1,0,13],[2,0,36],[3,0,11],[4,0,74],[5,0,35],[6,0,-6],[7,0,35],[8,0,-2],[9,0,-6],[10,0,12],[11,0,100],
  ];

  option = {
    tooltip: {
        position: 'top',
        show: true
    },
    xAxis: {
        type: 'category',
        data: hours,
        show: false,
    },
    yAxis: {
        type: 'category',
        data: days,
        show: false,
    },
    visualMap: {
      id: 'visual',
      type: 'piecewise',
      inverse: true,
      min: -100,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0',
      pieces: [
        {min: -100, max: -76},
        {min: -75, max: -21},
        {min: -20, max: 19},
        {min: 20, max: 74},
        {min: 75, max: 100},
      ],
      formatter: function (value, value2) {
        return `${value2} até ${value}`
      },
      itemSymbol: 'rect',
      itemWidth: 90,
      itemHeight: 20,
      textGap: -85,
      itemGap: 0,
      inRange: {
        color: ['#E35D81', '#EE8C68', '#FCD401', '#4DDC8F', '#4EAFE0' ],
      },
      
  },
    series: [{
        name: 'Correlação',
        type: 'heatmap',
        data: data,
        label: {
            show: true
        },
        itemStyle: {
          borderType: 'solid',
          borderWidth: 1,
          borderColor: '#fff'
      }
    }]
  };

  useEffect(() => {
    const chartDom = document.getElementById('main');
    const chart = echarts.init(chartDom)
    option && chart.setOption(option);
  }, []);

  return (<div id="main" />)
}

export default EchartsHeatmap;