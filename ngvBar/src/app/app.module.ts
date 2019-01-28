import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialMainModule } from './mainmodules/materialmod.module';   // Inport custom "materialmodul"
import { MainnavComponent } from './mainnav/mainnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
         MatButtonModule, 
         MatSidenavModule, 
         MatIconModule, 
         MatListModule 
        } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialMainModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
