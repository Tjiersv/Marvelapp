export class Comic {
    id: number
    title: string
    thumbnail: string
    description: string
    prices: number
    date: string
    format: string
    creators: string
    characters: string
    upc: string

    constructor(id, title, thumbnail, description, prices, date, format, creators, characters, upc) {
        this.id = id
        this.title = title
        this.thumbnail = thumbnail.endsWith('image_not_available.jpg') ? '../../assets/imgs/bg-marvel01.jpg' : thumbnail
        this.description = description != null ? description : 'Comic de Marvel'
        this.prices = prices != undefined ? prices : 'No disponible'
        this.date = date
        this.format = format
        this.creators = creators
        this.characters = characters
        this.upc = upc != "" ? upc : false
    }
}