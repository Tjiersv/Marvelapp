import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComicListService } from "../../app/services/comic-list.services";

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {

  comic: any;
  pjs: any;
  autores: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _comicList : ComicListService
  ) {
    this.pjs = []
    this.autores = []
    this.comic = this.navParams.data.comic
    this.pjs = this._comicList.getCharacters(this.comic.id)
    this.autores = this._comicList.getAuthor(this.comic.id)
  }

}
