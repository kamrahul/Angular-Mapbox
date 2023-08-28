import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapLandingComponentComponent } from './components/map-landing-component/map-landing-component.component';
import { MapViewComponent } from './components/map-view/map-view.component';

const routes: Routes = [
  {path:"", component:MapLandingComponentComponent

  , children:[
    {path:"view",component:MapViewComponent},
    // {path:"contact",component:ContactComponent},
    // {path:"services",component:ServicesComponent},
    // {path:"home",component:HomeComponent},
    // { path: '', redirectTo: '/admin/home', pathMatch: 'full' },

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
