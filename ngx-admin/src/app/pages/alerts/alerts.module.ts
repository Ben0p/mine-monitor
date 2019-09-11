import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbSelectModule,
  NbButtonModule,
  NbIconModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';

import { AlertsRoutingModule, routedComponents } from './alerts-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { OverviewComponent } from './overview/overview.component';
import { AlertsComponent } from './alerts.component';
import { AlertsD3AdvancedPieComponent } from './overview/alerts-d3-advanced-pie.component';
import { ListComponent } from './list/list.component';
import { AllComponent } from './all/all.component'

import { ComponentsModule } from '../../@components/components.module';
import { DisplayComponent } from './display/display.component';
import { DetailComponent } from './detail/detail.component'



@NgModule({
  declarations: [
    ...routedComponents,
    AlertsComponent,
    OverviewComponent,
    AlertsD3AdvancedPieComponent,
    ListComponent,
    AllComponent,
    DisplayComponent,
    DetailComponent,
  ],
  imports: [
    AlertsRoutingModule,
    ThemeModule,
    NbCardModule,
    NbSelectModule,
    NbButtonModule,
    NgxEchartsModule,
    NgxChartsModule,
    Ng2SmartTableModule,
    NbIconModule,
    ComponentsModule,
    RouterModule
  ]
})
export class AlertsModule { }
