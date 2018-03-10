export class Personaje {
    name: string
    description: string
    thumbnail: string
    modified: string

    constructor(name, description, thumbnail, modified) {
        this.name = name,
        this.description = description,
        this.thumbnail = thumbnail
        this.modified = modified
    }
}