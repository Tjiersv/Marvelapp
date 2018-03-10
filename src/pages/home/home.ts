import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComicListService } from '../../app/services/comic-list.services';
import { DetallePage } from "../detalle/detalle";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  comicList: any;
  strSearch = ''

  constructor(public navCtrl: NavController,
    private _comicListServices: ComicListService) {
    this.getComic()
  }

  getComic() {
    console.log("Entro");
    this.comicList = this._comicListServices.getComics()
  }

  getDetalle(comic) {
    this.navCtrl.push(DetallePage, { comic });
  }

  getComicSearch(ev) {
    this.strSearch = ''
    this.strSearch = ev.target.value
    setTimeout(() => {
      this.comicList = this._comicListServices.getComicsByNameOrAge(this.strSearch)
    }, 1000)
  }

}
