// models/Stack.js
class Stack {
  constructor(size) {
      this.size = size;
      this.stack = [];
  }

  push(item) {
      if (this.stack.length < this.size) {
          this.stack.push(item);
          return true;
      }
      return false; // Stack is full
  }

  pop() {
      if (this.stack.length > 0) {
          return this.stack.pop();
      }
      return null; // Stack is empty
  }

  getStack() {
      return this.stack;
  }
}

module.exports = Stack;
