import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchFieldComponent,
    JobsPageComponent,
    CardComponent,
    ButtonComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
