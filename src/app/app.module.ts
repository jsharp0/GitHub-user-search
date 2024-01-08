import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModeIconComponent } from './mode-icon/mode-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserCardComponent,
    ModeIconComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
