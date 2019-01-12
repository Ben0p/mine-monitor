// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpsRoutingModule } from './gps-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MaterialModule } from '../material';

// Componenets
import { GpsHomeComponent } from './gps-home/gps-home.component';
import { GpsListComponent } from './gps-list/gps-list.component';

@NgModule({
  declarations: [GpsHomeComponent, GpsListComponent],
  imports: [
    CommonModule,
    GpsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class GpsModule { }