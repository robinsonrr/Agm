
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyDJwOlzhTOuWV-yUke13qBfvn_fVQHDTGc'})
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
