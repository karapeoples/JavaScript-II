//@ ==== Challenge 1: Write your own closure ====
//@ Write a closure of your own creation.
//@ Keep it simple! Remember a closure is just a function
//@ that manipulates variables defined in the outer scope.
//@ The outer scope can be a parent function, or the top level of the script.
      
  
function sandwichbottom (){
    let layer1 = (`Bread`);
      console.log (`What goes on bottom? ${layer1}`);
  
  function hamSandwich (){
    let layer2 = (`Ham`)
    let layer3 = (`Cheese and`) 
    console.log (`What goes inside? ${layer2}`);

    function sandwich(){ 
      console.log 
      (`What goes on the top of the Ham? ${layer3} More ${layer1}`);
     
       
      };
       sandwich(); 
     };
     hamSandwich();
  };
  sandwichbottom();

//! STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

//#Also Included IIFE in Challenge 3 (couldn't figure out the challenge but helped Cathrine Kim with her IIFE)


//@ ==== Challenge 2: Implement a "counter maker" function ====
//@ IMPLEMENTATION OF counterMaker:
  //@ 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  //@ 2- Declare a function `counter`. It should increment and return `count`.
  //@ NOTE: This `counter` function, being nested inside `counterMaker`,
  //@ "closes over" the `count` variable. It can "see" it in the parent scope!
  //@ 3- Return the `counter` function.
// let count = 0
//   const counterMaker = () => {
//     return counter = () => { 
//       count = count + 1 
//       return count; 
//   };
//   }; 
// const increment = counterMaker();

// console.log(increment());
// console.log(increment());
// console.log(increment());

//@ Example usage: const myCounter = counterMaker();
//@ myCounter(); //@ 1
//@ myCounter(); //@ 2

//@ ==== Challenge 3: Make `counterMaker` more sophisticated ====
//@ It should have a `limit` parameter. Any counters we make with `counterMaker`
//@ will refuse to go over the limit, and start back at 1.

// let count = 0
// let limit = 10
//    const counterMaker =( () => {
//      return counter
//      });
//      let counter = function(){
//       while(count <= limit){
//       console.log (count);
//       count++
//       }();
      
      
    
// console.log (counterMaker);




//@ ==== Challenge 4: Create a counter function with an object that can increment and decrement ====

  //@ Return an object that has two methods called `increment` and `decrement`.
  //@ `increment` should increment a counter variable in closure scope and return it.
  //@ `decrement` should decrement the counter variable and return it.
  /* const counterFactory = () => {
}; */
