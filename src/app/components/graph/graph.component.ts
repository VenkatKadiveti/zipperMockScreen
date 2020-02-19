import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  agents = ['All agencies','Few agencies'];
  days = ['7 days','14 days'];
  packets = ['Parcels','10 parcels'];
  selectedAgent = "All agencies";
  selectedDays = "7 days";
  selectedPackets = "Parcels";

  public activities = [
    { name: 'APKU - 40B00EM0GA', time: '02/19/2020 22:20', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GB', time: '02/19/2020 16:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GC', time: '02/04/2020 19:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GD', time: '02/15/2020 13:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GE', time: '02/2/2020 17:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GF', time: '01/05/2020 18:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GG', time: '01/9/2020 13:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GH', time: '01/20/2020 12:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GI', time: '01/05/2020 22:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GJ', time: '01/16/2020 23:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GK', time: '01/15/2020 02:30', createdBy: 'Sudhakar Rdus' },
    { name: 'APKU - 40B00EM0GL', time: '01/25/2020 03:30', createdBy: 'Sudhakar Rdus' },
  ]
  constructor() {


  }

  ngOnInit() {
    this.activities.map(x => {
      let oldData = new Date(x.time).getTime();

      let presentData = new Date().getTime();
      let date;
      const millSec = (presentData - oldData);
      let min = millSec / (1000 * 60)
      console.log(min)
      if (min < 60) {
        date = Math.ceil(min) + ' minutes'
      } else {
        min = min / 60;
        console.log(min)
        if (min < 24) {
          date = Math.ceil(min) + ' hours'
        } else {
          min = (min / 24)
          date = Math.ceil(min) + ' days'
        }
      }
      x['time'] = date
    });
    this.graph()
  }

  graph() {
    var ctx = document.getElementById("line-chart");

    var myChart = new Chart(ctx, {
      type: 'line',

      data: {
        labels: ['20191204', '20191206', '20191208', '20191210', '20180512'],

        datasets: [
          {
            data: [0, 0, 0, 0, 7],
            label: 'RDUS',
            lineTension: 0,
            radius: 0,
            backgroundColor: 'transparent',
            borderColor: 'blue',
            pointBackgroundColor: 'blue'
          }
        ]
      },
      options: {
        legend: {
          position: 'top',
          align: 'end',
          labels: { usePointStyle: true, padding: 5, fontFamily: 'sofia-pro, sans-serif', fontColor: 'blue' }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              linewidth: 1
            },
            ticks: {
              fontstyle: 'normal',
              callback: function (value, index, values) {
                return moment(value).format('DD-MM-YYYY').toLowerCase();
              }
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              linewidth: 1
            },
            ticks: {
              min: 0,
              max: 7,
              stepSize: 2
            }
          }]
        }
      }
    });
  }


}
