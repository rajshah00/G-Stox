import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
declare var ApexCharts: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '')
  constructor(public service: ApiServiceService) {

  }

  ngOnInit() {
    this.service.getClintDas(this.stroge.username).subscribe((res: any) => {
      console.log("res", res)
    }, (err: any) => {
      console.log("err", err)
    })

    new ApexCharts(document.querySelector("#reportsChart"), {
      series: [{
        name: 'Invested',
        data: [31, 40, 28, 51, 42, 82, 56],
      }, {
        name: 'Profit',
        data: [11, 32, 45, 32, 34, 52, 41]
      }, {
        name: 'Loss',
        data: [15, 11, 32, 18, 9, 24, 11]
      }],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      markers: {
        size: 4
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      }
    }).render();

  }
}
