/*
    Data Structure with Javascript: STACK
*/

// -- What is Stack?
// Stack is an ordered and linear data structure.
// It works with the LIFO method.

// -- What is LIFO?
// LIFO is short for 'Last in first out'. The element added to the list is added to the end of the list. 
// And if you want to get the last element of the list, you will get the last element added to the list.


// 🧠 Let's write our own Stack class on Javascript...

class Stack {
    constructor() {
      this.elements = [];
    }
  
    push(element) {
      return this.elements.push(element);
    }
  
    pop() {
      return this.elements.pop();
    }
  
    showLastItem() {
      return this.elements[this.elements.length - 1];
    }
  
    isEmpty() {
      return this.elements.length < 1;
    }
  
    size() {
      return this.elements.length;
    }
  }

// Here! It's done. 😎 We now have a Stack! Let's try this. 

// first let's get instance of our new Stack class

const fancyStack = new Stack();

// let's see first, if our stack list is empty?

fancyStack.isEmpty();
// output: true; 

// now time to add some item to our stack list!!!

fancyStack.push("Yeah!");

// hmm. looks like it's working... check this out...

fancyStack.showLastItem();
// output: Yeah!

// add more item...
fancyStack.push(234);

// OK. Let's check at the size of list again...

fancyStack.size();
// output: 2

fancyStack.showLastItem();
// output: 234

// Really sweety, right? Okey, now burn something... 😈
// let pop this out

fancyStack.pop(); 
// output: 234

// Whoa?! What just happened? 

fancyStack.showLastItem();
// output: Yeah!

// See? The last element we added, the number "234", exploded!

