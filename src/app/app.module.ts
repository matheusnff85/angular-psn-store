import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightGameComponent } from './components/highlight-game/highlight-game.component';
import { PhotoComponent } from './components/highlight-game/photo/photo.component';
import { DescriptionComponent } from './components/highlight-game/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    FooterComponent,
    HighlightGameComponent,
    PhotoComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
