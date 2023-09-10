import { ComicBook } from "./comicBook.interface";

let idCounter = 1;

function ComicBook(title: string) {
   this.id = idCounter++;
   this.title = title;
   this.pages = 45;
   this.price = 50;
   this.orders = [];
}

const eliKopter: ComicBook = new ComicBook("Eli-Kopter");
