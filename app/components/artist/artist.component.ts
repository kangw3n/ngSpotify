import {Component, OnInit} from "@angular/core";
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../model/artist";
import {Album} from "../../model/album";
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];
  private errorMsg: string;
  private albumMsg: string;

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getArtist(id)
          .subscribe(
            artists => {
              this.artist = artists;
            },
            err => {
              console.warn(err);
              this.errorMsg = err.message || err;
            }
          )

        this._spotifyService.getAlbums(id)
          .subscribe(
            albums => {
              this.albums = albums.items;
            },
            err => {
              console.log(err);
              this.albumMsg = err.statusText || err.message;
            })
      })
  }
}
