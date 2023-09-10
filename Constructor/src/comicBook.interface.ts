interface Order {
   name: string;
   createdAt: Date;
   isDelivered: boolean;
}

export interface ComicBook {
   id: number;
   title: string;
   pages: number;
   price: number;
   orders: Order[];
}
