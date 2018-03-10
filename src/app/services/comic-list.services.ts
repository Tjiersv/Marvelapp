import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comic } from '../../app/clases/comic';
import { Personaje } from '../../app/clases/personaje';
import { Autor } from '../../app/clases/autor';
import 'rxjs/add/operator/map'


@Injectable()
export class ComicListService {

  apiKey: string = '45775b57c8c73e1cedb257aa5c957232'
  ts: string = '1';
  hash: any = '5352bc52db2c3b7c664db3a9bdbf0068'
  url = 'https://gateway.marvel.com'
  comicList: Comic[] = []
  characters: Personaje[] = []
  author: Autor[] = []
  offset: number = 0;
  rangeInit: number = 1900
  rangeFinal: number = 2017

  constructor(private http: HttpClient) {
    this.getAllComics(null)
  }

  private getAllComics(data) {
    
    let params = `format=comic&dateRange=${this.rangeInit}-01-01%2C${this.rangeFinal}-12-31&limit=20&offset=${this.offset}&ts=1&apikey=${this.apiKey}&hash=${this.hash}`
    
    if(data != null){
      params = data
      this.comicList = []
    }

    this.http.get(`${this.url}/v1/public/comics?${params}`)
      .map((res: any) => res.data.results)
      .subscribe(comics => {
        for (const key in comics) {
          let res = new Comic(
            comics[key].id,
            comics[key].title,
            comics[key].thumbnail.path + '.' + comics[key].thumbnail.extension,
            comics[key].description,
            comics[key].prices[0].price,
            comics[key].dates[0].date,
            comics[key].format,
            comics[key].creators.collectionURI,
            comics[key].characters.collectionURI,
            comics[key].upc
          )
          this.comicList.push(res)
        }
      });
      this.offset = this.offset + 20
  }

  private getAllCharactersByComicId (id) {
    this.characters = [];
    console.log(id);
    this.http.get(`${this.url}/v1/public/comics/${id}/characters?ts=1&apikey=${this.apiKey}&hash=${this.hash}`)
      .map((res: any) => res.data.results)
      .subscribe((characters)=>{
        for (const key in characters) {
          let res = new Personaje(
            characters[key].name,
            characters[key].description,
            characters[key].thumbnail.path + '.' + characters[key].thumbnail.extension,
            characters[key].modified
          )
          this.characters.push(res) 
        }
      })
  }

  private getAuthorByComicId (id) {
    this.author = [];
    console.log(id);
    this.http.get(`${this.url}/v1/public/comics/${id}/creators?ts=1&apikey=${this.apiKey}&hash=${this.hash}`)
    .map((res: any) => res.data.results)
      .subscribe((authors)=>{
        for (const key in authors) {
          let res = new Autor(
            authors[key].fullName,
            authors[key].thumbnail.path + '.' + authors[key].thumbnail.extension,
            authors[key].modified
          )
          this.author.push(res) 
        }
      })
  }

  public getComicsByNameOrAge(data){
    let expNum = /^[0-9]*$/
    let params = null
    if(expNum.test(data)) {
      params = `format=comic&dateRange=${data}-01-01%2C${data}-12-31&limit=20&ts=1&apikey=${this.apiKey}&hash=${this.hash}`;
      this.getAllComics(params)
    } else {
      params = `format=comic&title=${data}&limit=30&ts=1&apikey=${this.apiKey}&hash=${this.hash}`;
      this.getAllComics(params)
    }
    return this.comicList
  }

  public getComics() {
    this.getAllComics(null)
    return this.comicList
  }

  public getCharacters(url) {
    this.getAllCharactersByComicId(url)
    return this.characters
  }

  public getAuthor(url) {
    this.getAuthorByComicId(url)
    return this.author
  }

  

}