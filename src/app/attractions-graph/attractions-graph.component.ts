import {
  Component,
  OnInit
} from '@angular/core';
import {
  ViewChild
} from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartType
} from 'chart.js';
import {
  BaseChartDirective
} from 'ng2-charts';


@Component({
  selector: 'app-attractions-graph',
  templateUrl: './attractions-graph.component.html',
  styleUrls: ['./attractions-graph.component.css']
})
export class AttractionsGraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() {}

  ngOnInit(): void {}

  public polarAreaChartLabels: string[] = ['Spa', 'Radonné pédestre', 'Restauration', 'Kayak, plache à pagaie et canot', 'Masssothérapie', 'Galerie artistique'];
  public polarAreaChartData: ChartData < 'polarArea' > = {
    labels: this.polarAreaChartLabels,
    datasets: [{
      data: [500, 200, 800, 75, 300, 50],
      label: 'Activités'
    }]
  };
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  // events
  public chartClicked({
    event,
    active
  }: {
    event: ChartEvent,
    active: {} []
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: ChartEvent,
    active: {} []
  }): void {
    console.log(event, active);
  }
}
