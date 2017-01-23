import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Rx";

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private tracksUrl: string;
  private trackurl: string;
  private playListUrl: string;

  constructor(private _http: Http) {

  }

  searchMusic(str: string, type = 'artist') { // default params
    this.searchUrl = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=TW`;
    return this._http.get(this.searchUrl)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server Error'));
  }

  getArtist(id: string) {
    this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;
    return this._http.get(this.artistUrl)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server Error'));
  }

  getAlbums(artistId: string) {
    this.albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._http.get(this.albumsUrl)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server Error'));
  }

  getAlbum(id: string) {
    this.albumUrl = `https://api.spotify.com/v1/albums/${id}`;
    return this._http.get(this.albumUrl)
      .map(res => res.json());
  }

  getTopTracks(id: string) {
    this.tracksUrl = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=TW`;
    return this._http.get(this.tracksUrl)
      .map(res => res.json());
  }

  getTrack(id: string) {
    this.trackurl = `https://api.spotify.com/v1/tracks/${id}`;
    return this._http.get(this.trackurl)
      .map(res => res.json());
  }

  getPlaylist(link: string) {
    this.playListUrl = `${link}`;
    return this._http.get(this.playListUrl)
      .map(res => res.json());
  }
}