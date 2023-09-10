let idCounter = 1;
function ComicBook(title) {
   this.id = idCounter++;
   this.title = title;
   this.pages = 45;
   this.price = 50;
   this.orders = [];
}

ComicBook.prototype.addOrder = function addOrder(name) {
   const newOrder = {
      name,
      createdAt: new Date(),
      isDelivered: false,
   };
   this.orders = [...this.orders, newOrder];
};

const booksTitles = [
   "Eli-Kopter in India",
   "Eli-Kopter in Japan tome 1",
   "Eli-Kopter in Japan tome 2",
   "Eli-Kopter in Antarctic tome 1",
];
let books = [];

function generateBooks(booksList) {
   for (let book of booksList) {
      const newBook = new ComicBook(book);
      books = [...books, newBook];
   }
   return books;
}

console.log(generateBooks(booksTitles));

