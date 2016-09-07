import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SearchComponent} from "./components/search/search.component";
import {AboutComponent} from "./components/about/about.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";
import {TrackComponent} from "./components/track/track.component";
import {SpotifyService} from "./services/spotify.service";
import {HttpModule, JsonpModule} from "@angular/http";
import {appRouterProviders} from "./app.route";
import {FilterPipe} from "./app.filter.pipes";
import {MSPipe} from "./app.ms-to-minute.pipe";


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, appRouterProviders],
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    FilterPipe,
    MSPipe
  ],
  bootstrap: [AppComponent],
  providers: [SpotifyService]
})
export class AppModule {
}
