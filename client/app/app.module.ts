import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FotoModule } from './foto/foto.module';

// importou o módulo que já possui um provider configurado
import { HttpModule } from '@angular/http';

// importou a extensão map!
import 'rxjs/add/operator/map';

@NgModule({
  imports:      [ BrowserModule,FotoModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }