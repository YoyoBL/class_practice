function timeOut(ms) {
   return new Promise((resolve) => {
      setTimeout(() => resolve(), ms * 1000);
   });
}

console.log("one");

timeOut(2)
   .then(() => {
      console.log("two");

      timeOut(2)
         .then(() => {
            console.log("eight");
            return timeOut(8);
         })
         .then(() => {
            console.log("nine");
         });

      return timeOut(3);
   })
   .then(() => {
      console.log("three");
      return timeOut(4);
   })
   .then(() => {
      console.log("four");
      return timeOut(4);
   })
   .then(() => {
      console.log("five");

      timeOut(3)
         .then(() => {
            console.log("ten");

            timeOut(3)
               .then(() => {
                  console.log("twelve");
                  return timeOut(1);
               })
               .then(() => {
                  console.log("fifteen");
               });

            return timeOut(3);
         })
         .then(() => {
            console.log("eleven");
         });

      timeOut(2)
         .then(() => {
            console.log("fourteen");
            return timeOut(3);
         })
         .then(() => {
            console.log("fifteen");
         });

      return timeOut(4);
   })
   .then(() => {
      console.log("six");
      return timeOut(2);
   })
   .then(() => {
      console.log("seven");
   });
