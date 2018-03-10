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
    // obtiene la data del comic seleccionado
    this.comic = this.navParams.data.comic
    // obtiene los personajes que aparecen en el comic seleccionado por el id
    this.pjs = this._comicList.getCharacters(this.comic.id)
    // obtiene los creadores del comic seleccionado por el id
    this.autores = this._comicList.getAuthor(this.comic.id)
  }

}
