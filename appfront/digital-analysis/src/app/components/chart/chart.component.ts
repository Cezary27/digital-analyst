import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  EChartsOption,
  LegendComponentOption,
  SeriesOption,
  init,
} from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  @Input() xAxis!: any;
  @Input() yAxis!: any;
  @Input() chartType?: any;
  @Input() xName!: string;
  @Input() yName!: string;
  @Input() date?: any[];
  @Input() series!: any;
  @Input() dataSet?: any;
  @Input() tooltip?: any;
  @Input() isChartLoading: boolean = false;
  @Input() legendOptions?:
    | LegendComponentOption
    | LegendComponentOption[]
    | undefined;

  @Input() title?: string;

  options!: EChartsOption;

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.options = {
      legend: this.legendOptions,
      tooltip: this.tooltip,
      dataset: this.dataSet,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      series: this.series,
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
    this._changeDetectorRef.markForCheck();
  }
}
