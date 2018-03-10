export class Autor {
    fullName: string
    thumbnail: string
    modified: string

    constructor(fullName, thumbnail, modified) {
        this.fullName = fullName,
        this.thumbnail = thumbnail
        this.modified = modified
    }
}