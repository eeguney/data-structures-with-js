/*
    Data Structure with Javascript: Queue
*/

// -- What is Queue?
// Queue is an ordered and linear data structure.
// It works with the FIFO method.

// -- What is FIFO?
// FIFO is short for 'first in first out'. The element added to the list is added to the start of the list. 
// And if you want to get the last element of the list, you will get the first element added to the list.


// 🧠 Let's write our own Queue class on Javascript...

class Queue {
    constructor() {
      this.elements = [];
    }
  
    enqueue(element) {
      return this.elements.unshift(element)
    }
  
    dequeue() {
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

// Here! It's done. 😎 We now have a Queue! Let's try this. 

// first let's get instance of our new Queue class

const fancyQueue = new Queue();

// let's see first, if our queue list is empty?

fancyQueue.isEmpty();
// output: true; 

// now time to add some item to our queue list!!!

fancyQueue.enqueue("Yeah!");

// hmm. looks like it's working... check this out...

fancyQueue.showLastItem();
// output: Yeah!

// add more item...
fancyQueue.enqueue(234);

// OK. Let's check at the size of list again...

fancyQueue.size();
// output: 2

fancyQueue.showLastItem();
// output: "Yeah"

// Really sweety, right? Okey, now burn something... 😈
// let dequeue this out

fancyQueue.dequeue(); 
// output: Yeah

// Whoa?! What just happened? 

fancyQueue.showLastItem();
// output: 234

// See? The first element we added, the string "Yeah!", exploded! Why? 'cause FIFO baby! 

