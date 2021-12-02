import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-homedashboard',
  templateUrl: './hr-homedashboard.component.html',
  styleUrls: ['./hr-homedashboard.component.css']
})
export class HrHomedashboardComponent implements OnInit {
  options: any;
  constructor() { }

  ngOnInit(): void {
    this.options = {
      colorBy:"series",
      color:[
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc'
      ],
      gradientColor:[
        '#f6efa6',
      '#d88273',
    '#bf444c'
      ],
      title: {
        text: 'Current Department Data',
        subtext: 'Employee Distribution',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      calculable: true, 
      visualMap: {
        show: false,
        min: 0,
        max: 60,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: 'Department Distribution',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data: [
            { value: 12, name: 'dept1' },
            { value: 5, name: 'dept2' },
            { value: 15, name: 'dept3' },
            { value: 25, name: 'dept4' },
            { value: 20, name: 'dept5' },
            { value: 35, name: 'dept6' },
            { value: 30, name: 'dept7' },
            { value: 40, name: 'dept8' }
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          labelLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(255, 255, 255, 0.5)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut'
        }
      ]
    };
  }


}
