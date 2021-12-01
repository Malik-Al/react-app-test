export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    getAllCharacter = async () => {
        const res = await this.getResource('/characters?page=5');
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
       const getCharacter = await this.getResource(`/characters/${id}`);
       return this._transformCharacter(getCharacter)
    }

    getAllHouses = async () => {
        const houses = await this.getResource(`/houses/`);
        return houses.map(this._transformHouse)
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house)
    }

    getAllBooks = async () => {
        const books = await this.getResource(`/books/`);
        return books.map(this._transformBook)
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`)
        return this._transformBook(book)
    }

    _transformCharacter(char){
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house){
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book){
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released,
        }
    }
}


