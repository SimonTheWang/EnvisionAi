import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TensorflowService } from './../../services/tensorflow.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ResizableModule } from 'angular-resizable-element';
import { TrendsapiService } from './../../services/trendsapi.service';
import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  single: any[];
  view: any[] = [240,1500]
  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private TensorflowService: TensorflowService, private trendsapiService: TrendsapiService) {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log('clicked')
    console.log(event);
  }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
