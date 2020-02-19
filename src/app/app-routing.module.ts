import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { MapComponent } from './components/map/map.component';
import { GraphComponent } from './components/graph/graph.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
