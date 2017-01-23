import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Album} from "../../model/album";
import {ActivatedRoute} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'playlist',
  templateUrl: 'playlist.component.html'
})
export class PlaylistComponent implements OnInit {
  id: string;
  playlist: Array<string>;

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute) {}


  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getPlaylist(id)
          .subscribe(playlist => {
            console.log(playlist);
            this.playlist = playlist;
          })

      })
  }

}
