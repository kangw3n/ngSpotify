import {Component, NgZone, ChangeDetectorRef, ViewChild, ElementRef} from "@angular/core";
import {SpotifyService} from "../../services/spotify.service";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";
import {Observable} from "rxjs/Observable";
import {Artist} from "../../model/artist";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  searchStr: string = '';
  searchRes: Artist[];
  errorMsg: string;
  queryType: string = 'track';
  types: Array<string> = ['track', 'album', 'artist'];

  @ViewChild('input') inputElRef: ElementRef;

  constructor(private _spotifyService: SpotifyService,
              private ngzone: NgZone,
              private cdref: ChangeDetectorRef) {
  }

  onChange(val: string) {
    this.errorMsg = '';
    this.queryType = val;
    this.searchMusic();
  }

  searchMusic() {
    this.errorMsg = '';
    this._spotifyService.searchMusic(this.searchStr, this.queryType)
      .subscribe(
        res => {
          console.log(res);
          this.searchRes = res[this.queryType + 's'].items;
          if (!this.searchRes.length) this.errorMsg = 'No results Found!';
          this.cdref.detectChanges(); // run change detection!

        },
        err => {
          console.warn(err);
          this.errorMsg = err.message || 'Server Error';
          this.searchRes = [];
          this.cdref.detectChanges(); // run change detection!
        }
      )
  }

  ngAfterViewInit() { // use ngAfterViewInit instead of ngOninit to ensure @viewChild is defined
    this.ngzone.runOutsideAngular(() => {
      Observable.fromEvent(this.inputElRef.nativeElement, 'keyup')
      //create RxJS Observables from the events, outside of Angular's "zone", change detection is not called each time an event fires
        .debounceTime(1000)
        .subscribe(keyboardEvent => {
          this.searchStr = keyboardEvent.target.value;
          this.searchMusic();
        });
    })
  }


}
