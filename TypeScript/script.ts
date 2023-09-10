let a = 5;
let b = 6;

// let arr: (string | number)[];

let arr: Array<string | number>;

arr = ["hello", 5];

// 
document.querySelectorAll<HTMLElement>("*").forEach((element) => {
   console.log(element.dir);
});

//
document.querySelectorAll("*").forEach((element) => {
   console.log((element as HTMLElement).dir);
});

//
(document.querySelectorAll("*") as NodeListOf<HTMLElement>).forEach(
   (element) => {
      console.log(element.dir);
   }
);

// const $elements = document.querySelectorAll("*") ;

// ($elements as HTMLElement)















// 
document.querySelectorAll<HTMLElement>("*").forEach((element) => {
    console.log(element.dir);
 });















































 
