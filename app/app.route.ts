import {Routes, RouterModule} from "@angular/router";
import {SearchComponent} from "./components/search/search.component";
import {AboutComponent} from "./components/about/about.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";
import {TrackComponent} from "./components/track/track.component";
import {PlaylistComponent} from './components/playlist/playlist.component';
import {SingleTrackComponent} from './components/single/single.component';



const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album/:id', component: AlbumComponent},
  {path: 'top-tracks/:id', component: TrackComponent},
  {path: 'track/:id', component: SingleTrackComponent},
  {path: 'playlist/:id', component: PlaylistComponent}

];

export const appRouterProviders = [
  RouterModule.forRoot(routes)
];






