import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MapComponent } from './map/map.component';
import { DrawComponent } from './draw/draw.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DrawComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.maps
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
