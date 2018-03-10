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

  // retorna la lista de comics medieante la peticion al servicios comicListServices
  getComic() {
    console.log("Entro");
    this.comicList = this._comicListServices.getComics()
  }

  // redirecciona al comic seleccionado
  getDetalle(comic) {
    this.navCtrl.push(DetallePage, { comic });
  }

  // retorna la lista de comics medieante la peticion al servicios comicListServices realizada por el buscador
  getComicSearch(ev) {
    this.strSearch = ''
    this.strSearch = ev.target.value
    setTimeout(() => {
      this.comicList = this._comicListServices.getComicsByNameOrAge(this.strSearch)
    }, 1000)
  }

}
