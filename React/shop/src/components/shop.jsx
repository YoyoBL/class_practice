import { useState } from "react";
import Product from "./product";

const productsInitial = [
   {
      id: 1,
      title: "Apple iPhone 13 Pro Max",
      description:
         "The iPhone 13 Pro Max is the latest and greatest smartphone from Apple. It features a stunning 6.7-inch Super Retina XDR display, A15 Bionic chip, and a triple-camera system with 12MP ultra wide, wide, and telephoto lenses.",
      price: 1099,
      discount: null,
      image: {
         url: "https://th.bing.com/th/id/OIG.FIhu1wuNb3Ygbb62Ik3F?pid=ImgGn",
         alt: "Apple iPhone 13 Pro Max",
      },
      available: 10,
      quantity: 0,
   },
   {
      id: 2,
      title: "Samsung Galaxy S21 Ultra",
      description:
         "The Samsung Galaxy S21 Ultra is a powerful Android smartphone with a large 6.8-inch Dynamic AMOLED display, Exynos 2100 processor, and a quad-camera system with 108MP primary, 10MP periscope telephoto, and two 10MP telephoto lenses.",
      price: 1199,
      discount: 10,
      image: {
         url: "https://images.unsplash.com/photo-1611845652597-1c2d1e8f3b5e",
         alt: "Samsung Galaxy S21 Ultra",
      },
      available: 15,
      quantity: 0,
   },
   {
      id: 3,
      title: "Sony PlayStation 5",
      description:
         "The Sony PlayStation 5 is the latest gaming console from Sony. It features an AMD Zen 2-based CPU with eight cores at up to 3.5GHz, a custom AMD RDNA 2-based GPU with up to 10.28 teraflops of graphics processing power, and an ultra-high-speed SSD with up to 825GB of storage.",
      price: 499,
      discount: 10,
      image: {
         url: "https://images.unsplash.com/photo-1606318896767-4c0d9a4a8b4c",
         alt: "Sony PlayStation 5",
      },
      available: 8,
      quantity: 0,
   },

   {
      id: 11,
      title: "Bose QuietComfort 35 II",
      description:
         "The Bose QuietComfort 35 II is a premium wireless noise-canceling headphone that offers excellent sound quality and comfort. It features three levels of noise cancellation, Alexa and Google Assistant integration, and up to 20 hours of battery life.",
      price: 299,
      discount: null,
      image: {
         url: "https://images.unsplash.com/photo-1606168013033-0b5f8f4c0d9a",
         alt: "Bose QuietComfort 35 II",
      },
      available: 9,
      quantity: 0,
   },
   {
      id: 12,
      title: "Dyson V11 Absolute",
      description:
         "The Dyson V11 Absolute is a powerful cordless vacuum cleaner that offers excellent suction power and versatility. It features an LCD screen that displays real-time performance data, up to 60 minutes of run time, and a range of accessories for cleaning different surfaces.",
      price: 699,
      discount: 15,
      image: {
         url: "https://images.unsplash.com/photo-1616743947587-1a6e7c7e4f9e",
         alt: "Dyson V11 Absolute",
      },
      available: 7,
      quantity: 0,
   },
   {
      id: 13,
      title: "Apple MacBook Pro M1",
      description:
         "The Apple MacBook Pro M1 is a powerful laptop that features Apple's latest M1 chip for fast performance and long battery life. It has a stunning Retina display, up to 16GB of RAM, and up to 2TB of SSD storage.",
      price: 1299,
      discount: 10,
      image: {
         url: "https://images.unsplash.com/photo-1621268559926-5d4b2d5f5c6a",
         alt: "Apple MacBook Pro M1",
      },
      available: 6,
      quantity: 0,
   },
   {
      id: 21,
      title: "Samsung Galaxy Watch 4",
      description:
         "The Samsung Galaxy Watch 4 is a smartwatch that features a 1.4-inch Super AMOLED display, Exynos W920 processor, and up to 40 hours of battery life. It also has a range of health and fitness tracking features, including blood oxygen and body composition monitoring.",
      price: 249,
      discount: 20,
      image: {
         url: "https://images.unsplash.com/photo-1621268559926-5d4b2d5f5c6a",
         alt: "Samsung Galaxy Watch 4",
      },
      available: 5,
      quantity: 0,
   },
   {
      id: 22,
      title: "Bose SoundLink Revolve+",
      description:
         "The Bose SoundLink Revolve+ is a portable Bluetooth speaker that delivers high-quality sound in a compact package. It features a 360-degree design, up to 16 hours of battery life, and voice prompts for easy pairing.",
      price: 299,
      discount: null,
      image: {
         url: "https://images.unsplash.com/photo-1616743947587-1a6e7c7e4f9e",
         alt: "Bose SoundLink Revolve+",
      },
      available: true,
      quantity: 0,
   },
];

const Shop = () => {
   const [products, setProducts] = useState(productsInitial);

   const handleIncrement = (id) => {
      setProducts((products) =>
         products.map((product) => {
            if (product.id === id) {
               return { ...product, quantity: product.quantity + 1 };
            }
            return { ...product };
         })
      );
   };

   const handleDecrement = (id) => {
      setProducts((products) =>
         products.map((product) => {
            if (product.id === id) {
               return { ...product, quantity: product.quantity - 1 };
            }
            return { ...product };
         })
      );
   };

   return (
      <div className="container-fluid mt-3">
         <h1 className="text-center">My Shop</h1>
         <div className="row mt-3 g-3">
            {products.map((product) => (
               <Product
                  key={product.id}
                  product={product}
                  onProductIncrement={handleIncrement}
                  onProductDecrement={handleDecrement}
               />
            ))}
         </div>
      </div>
   );
};

export default Shop;
