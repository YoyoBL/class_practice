// function reverse(string) {
//    const array = [];
//    for (let i = string.length - 1; i >= 0; i--) {
//       array.push(string[i]);
//    }
//    return array.join("");
// }

// console.log(reverse("This is a reversed text"));
// console.log(reverse("hello"));

// console.log("hello".split("").reverse());

const words = "This is a long string";

function reverse(string, separator) {
   return string.split(separator).reverse().join(separator);
}

const reversedWords = reverse(words, " ");
console.log(reversedWords);
const reverseAll = reverse(reversedWords, "");
console.log(reverseAll);
