import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { MapComponent } from './components/map/map.component';
import { GraphComponent } from './components/graph/graph.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {  MatCardModule, MatSelectModule,MatInputModule, MatFormFieldModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    MapComponent,
    GraphComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgxDatatableModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule, MatCardModule,
    MatSelectModule,
     MatInputModule, 
     MatFormFieldModule, MatProgressBarModule, MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCFzsI4LYp0ioKehUAOmzvZcA3z2HQzWCk"
     
      /* apiKey is required, unless you are a premium customer, in which case you can use clientId */
  }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
