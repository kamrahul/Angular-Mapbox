import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsRoutingModule } from './common-components-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    CommonComponentsRoutingModule,
    SideNavComponent

  ],
  exports:[HeaderComponent,
    BodyComponent,
    FooterComponent,
    SideNavComponent

]
})
export class CommonComponentsModule { }
