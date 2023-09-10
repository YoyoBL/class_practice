let bookId = 1;

function Order(name) {
   this.name = name;
   this.createdAt = new Date();
   this.isDelivered = false;
}

function Book(/*this, */ title) {
   (this.id = bookId++),
      (this.title = title),
      (this.price = 45),
      (this.orders = []);

   this.addOrder = addOrder;
   this.removeOrder = removeOrder;
   this.changeIsDelivered = changeIsDelivered;
}

function addOrder(name) {
   let newOrder = new Order(name);
   this.orders.push(newOrder);
}

function removeOrder(name) {
   this.orders = this.orders.filter((e) => e.name !== name);
}

function changeIsDelivered(name) {
   this.orders.forEach((order) => {
      if (order.name === name) {
         order.isDelivered = !order.isDelivered;
      }
   });
}

let harryPotter = new Book("Harry Potter");

harryPotter.addOrder("Daniel");
harryPotter.addOrder("Yoel");
harryPotter.addOrder("Rapha");
harryPotter.addOrder("Dikla");

console.log(harryPotter);
harryPotter.removeOrder("Yoel");

console.log(harryPotter);
harryPotter.changeIsDelivered("Daniel");
