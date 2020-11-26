import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoicesComponent } from './choices/choices.component';
import { FormsModule } from '@angular/forms';
import { ChooserComponent } from './chooser/chooser.component';
import { ResultComponent } from './result/result.component';
import { CacheService } from './cache.service';

@NgModule({
  declarations: [
    AppComponent,
    ChoicesComponent,
    ChooserComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
