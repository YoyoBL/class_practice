// function createComicBook() {
//    return {
//       title: "mickey mouse",
//       pages: 45,
//       price: 50,
//       author: "J.K. Rolling",
//    };
// }

function ex1() {
   const $btn1 = document.getElementById("btn1");
   const $btn2 = document.getElementById("btn2");

   console.log($btn1, $btn2);

   function changeInnerHTMLOfElements(HTMLElement, chooseYourText, add) {
      //    if (add) {
      //       HTMLElement.innerHTML += chooseYourText;
      //       return;
      //    }

      add
         ? (HTMLElement.innerHTML += chooseYourText)
         : (HTMLElement.innerHTML = chooseYourText);

      //    HTMLElement.innerHTML = chooseYourText;
   }

   changeInnerHTMLOfElements($btn2, "Coka Cola", true);
   changeInnerHTMLOfElements($btn1, "Something else");
   changeInnerHTMLOfElements($btn1, "another");

   // question ? true : false

   // {if(qustion){
   //     true
   //     return
   // }
   // false
   // }
}

const $container = document.getElementById("container");
const $newDiv = document.getElementById("newDiv");

function createContent(chooseTag, innerHTML, HTMLArea) {
   let html = `
    <${chooseTag} id="btn1">${innerHTML}</${chooseTag}>
    `;
   return html;
}

// $container.innerHTML = createContent("h6", "This is my new Headline");
createContent("h6", "This is my new Headline", $container);
createContent("h6", "This is my new Headline", $newDiv);
