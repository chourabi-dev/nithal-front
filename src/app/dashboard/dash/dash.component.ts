import { Component, OnInit } from '@angular/core'; 
 
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

 

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: ChartType = 'line';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [20 , 15 , 30,60], label: 'Approved', stack: 'a' }, 
  ];
  public barChartLabels: string[] = ['P', 'R', 'B','C'];
 

  employees = [];
  colis = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getEmployeesList().subscribe((res:any)=>this.employees = res);
    this.api.getAllColisRequest().subscribe((res:any)=>{ this.colis = res });


    // traintment
    setTimeout(() => {
      this.barChartData = [
        { data: [80 , 60 , 15,10], label: 'Approved', stack: 'a' }, 
      ];
    }, 4000);
  }



}
