const $select = document.querySelector(".form-select");
let boolean = true;

window.addEventListener("click", (e) => console.log(e.target));

$select.addEventListener("click", () => {
   if (boolean) {
      $select.innerHTML = `
     <option value="1">One</option>
     <option value="2">Two</option>
     <option value="3">Three</option>
     `;
      boolean = false;
   }
});

// $select.innerHTML = `
// <option value="1">One</option>
// <option value="2">Two</option>
// <option value="3">Three</option>
// `;
