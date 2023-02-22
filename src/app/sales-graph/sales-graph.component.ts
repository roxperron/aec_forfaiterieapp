import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  ChartData,
  ChartType
} from 'chart.js';
import {
  BaseChartDirective
} from 'ng2-charts';

@Component({
  selector: 'app-sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.css']
})
export class SalesGraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor() {}

  ngOnInit(): void {}

  public monGraphique = {
    type: < ChartType > 'bar',
    legende: true,
    plugins: [],
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  };
  public mesDonnees: ChartData < 'bar', number[], string | string[] > = {
    labels: ['Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre', 'Janvier'],
    datasets: [{
        data: [100, 120, 80, 90, 50, 55, 200, 120],
        label: 'Dollars (millier)'
      },
    ]


  }
}
