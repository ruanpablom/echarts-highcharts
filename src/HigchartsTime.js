import React, {useEffect} from 'react';
import * as Highcharts from 'highcharts';

const HigchartsArea = () => {
  const data = [
    [
      1167609600000,
      0
    ],
    [
      1167696000000,
      -1
    ],
    [
      1167782400000,
      -2
    ],
    [
      1167868800000,
      -3
    ],
    [
      1167955200000,
      -4
    ],
    [
      1168214400000,
      -5
    ],
    [
      1168300800000,
      -6
    ],
    [
      1168387200000,
      -4
    ],
    [
      1168473600000,
      -3
    ],
    [
      1168560000000,
      -2.5
    ],
    [
      1168819200000,
      -1.5
    ],
    [
      1168905600000,
      -3
    ],
    [
      1168992000000,
      -2.2
    ],
    [
      1169078400000,
      -0.774
    ],
    [
      1169164800000,
      -0.7718
    ],
    [
      1169424000000,
      -0.7731
    ],
    [
      1169510400000,
      -0.767
    ],
    [
      1169596800000,
      -0.769
    ],
    [
      1169683200000,
      -0.7706
    ]
  ];
  const data2 = [
    [
      1167609600000,
      -1
    ],
    [
      1167696000000,
      -1
    ],
    [
      1167782400000,
      -4
    ],
    [
      1167868800000,
      -5
    ],
    [
      1167955200000,
      -2
    ],
    [
      1168214400000,
      -7
    ],
    [
      1168300800000,
      -2
    ],
    [
      1168387200000,
      -1
    ],
    [
      1168473600000,
      -2
    ],
    [
      1168560000000,
      -3
    ],
    [
      1168819200000,
      -1
    ],
    [
      1168905600000,
      -2
    ],
    [
      1168992000000,
      -4
    ],
    [
      1169078400000,
      -0
    ],
    [
      1169164800000,
      -1
    ],
    [
      1169424000000,
      -2
    ],
    [
      1169510400000,
      -5
    ],
    [
      1169596800000,
      -1
    ],
    [
      1169683200000,
      -2
    ]
  ];
  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        zoomType: 'x',
        type: 'area',
      },
      title: {
        text: 'Underwater - 30/03/11 a 28/08/20',
        align: 'left'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
              'Clique e arraste na área do gráfico para aumentar o zoom ' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        labels: {
          format: '{value}%'
        },
        title:{
          text: false
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          marker: {
            radius: 2
          },
          states: {
              hover: {
                  lineWidth: 1
              }
          },
          threshold: 0
      }
      },
      series: [
        {
          data: data,
          lineWidth: 3, 
          lineColor: '#09B4FF',
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
            stops: [
                [0, 'rgba(28, 182, 249, 0.4)'],
                [1, 'rgba(9, 180, 255, 0.05)'],
            ]
          }
        },
        {
          data: data2,
          lineWidth: 3, 
          lineColor: '#FF5D75',
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
            stops: [
                [0, 'rgba(255, 93, 117, 0.05)'],
                [1, 'rgba(255, 93, 117, 0.4)'],
            ]
          }
        },
      ]
    });
  }, []);
  return <div id="container" />
} 

export default HigchartsArea;