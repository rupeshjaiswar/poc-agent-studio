import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './modules/users/shared/layout/layout.component';
import { HeaderComponent } from './modules/users/shared/layout/header/header.component';
import {SideMenuComponent} from './modules/users/shared/layout/side-menu/side-menu.component';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DropdownModule} from 'primeng/dropdown';

import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import {DialogModule} from 'primeng/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ConversationalDesignerComponent } from './modules/users/modules/conversational-designer/conversational-designer.component';
import { EntityComponent } from './modules/users/modules/conversational-designer/entity/entity.component';
import { NodeConfigComponent } from './modules/users/modules/conversational-designer/node-config/node-config.component';
import { FlowAreaComponent } from './modules/users/modules/conversational-designer/flow-area/flow-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideMenuComponent,
    HeaderComponent,
    ConversationalDesignerComponent,
    EntityComponent,
    NodeConfigComponent,
    FlowAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    TooltipModule,
    InputSwitchModule,
    SidebarModule,
    PanelMenuModule,
    OverlayPanelModule,
    DropdownModule,
    DialogModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
