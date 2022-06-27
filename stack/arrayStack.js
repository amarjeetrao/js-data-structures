// Stack is a linear data structure which follows a particular order in which the operations are performed.
// The order may be LIFO(Last In First Out).

// Implementing it with array

// Basic Operations
// push() − Pushing (storing) an element on the stack.
// pop() − Removing (accessing) an element from the stack.
// peek() − get the top data element of the stack, without removing it.
// isFull() − check if stack is full.
// isEmpty() − check if stack is empty.

class Stack {
	constructor(length) {
		this.length = length;
		this.item = [];
	}

	size() {
		return this.length;
	}

	isFull() {
		return this.length == this.item.length;
	}

	isEmpty() {
		return this.item.length == 0;
	}

	push(data) {
		if (!this.isFull()) {
			this.item.push(data);
		} else {
			return new RangeError('Stack Full');
		}
	}

	pop() {
		return this.item.pop();
	}

	peek() {
		return this.item[this.item.length - 1];
	}

	print() {
		return this.item.toString();
	}
}

//sample data
const stack = new Stack(5);
console.log(stack.isEmpty());

stack.push(2);
stack.push(5);
stack.push(7);
stack.push(1);
stack.push(4);
// console.log(stack.push(6));

console.log(stack.size());
console.log(stack.print());
console.log(stack.pop());
console.log(stack.peek());
