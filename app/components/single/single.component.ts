import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'single',
  templateUrl: 'single.component.html'
})
export class SingleTrackComponent implements OnInit {
  id: string;
  track: Array<string>;

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute) {}


  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getTrack(id)
          .subscribe(track => {
            console.log(track);
            this.track = track;
          })

      })
  }

}
