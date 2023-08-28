import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapLandingComponentComponent } from './components/map-landing-component/map-landing-component.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { SideNavComponent } from '../common-components/components/side-nav/side-nav.component';
import { MapViewComponent } from './components/map-view/map-view.component';


@NgModule({
  declarations: [
    MapLandingComponentComponent,
    MapViewComponent,

  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    CommonComponentsModule,
    SideNavComponent


  ]
})
export class MapModule { }
