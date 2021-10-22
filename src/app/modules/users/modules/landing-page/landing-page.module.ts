import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {DialogModule} from 'primeng/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    OverlayPanelModule,
    DialogModule,
    TooltipModule,
    PdfViewerModule
  ]
})

export class LandingPageModule { }
