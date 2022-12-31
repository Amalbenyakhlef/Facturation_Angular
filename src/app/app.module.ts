import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartStatisticComponent } from './shared/highchart-statistic/highchart-statistic.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    FooterComponent,
    HighchartStatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    HighchartsChartModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
