import "./App.css";
import Gallery from "./components/gallery";
import Input from "./components/input";

const images = [
   {
      id: 1,
      url: "https://media.istockphoto.com/id/1317477239/photo/sunrise-or-sunset-in-rural-scene-with-silhouette-of-vegetation-in-front-of-a-lake.jpg?s=612x612&w=is&k=20&c=4jfO98-4e7MDPzOM4svoBEjs7LLQ4XWXAHsaWGBfDZw=",
      alt: "Landscape 1",
      description: "This is a landscape!",
   },
   {
      id: 2,
      url: "https://media.istockphoto.com/id/912315614/photo/sunrise-from-the-kayak-on-the-sulina-canal-that-flows-into-the-black-sea.jpg?s=612x612&w=is&k=20&c=-Fl6IqCtFlum6u2xn8mfjJjzPpskSXKEPoeOP7tD-4Q=",
      alt: "Landscape 2",
      description: "This is another landscape.",
   },
   {
      id: 3,
      url: "https://media.istockphoto.com/id/1184692500/photo/colorful-sunset-at-davis-lake.jpg?s=612x612&w=is&k=20&c=w2ftziMNyvUbaAs_LOg3_YwO0Ix9OAd8nisrRsj_H1k=",
      alt: "Landscape 3",
      description: "",
   },
];

function App() {
   return (
      <div className="App">
         <div className="container mt-5">
            <Gallery imagesList={images} isInfinite={true} />
         </div>
      </div>
   );
}

export default App;
