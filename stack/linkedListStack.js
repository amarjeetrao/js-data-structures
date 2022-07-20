// Stack is a linear data structure which follows a particular order in which the operations are performed.
// The order may be LIFO(Last In First Out).

// Implementing it with LinkedList

// Basic Operations
// push() − Pushing (storing) an element on the stack. [time - O(1), space - O(1)]
// pop() − Removing (accessing) an element from the stack. [time - O(1), space - O(1)]
// peek() − get the top data element of the stack, without removing it. [time - O(1), space - O(1)]
// isFull() − check if stack is full.
// isEmpty() − check if stack is empty.

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(length) {
		this.first = null;
		this.last = null;
		this.length = length;
		this.position = -1;
	}

	size() {
		return this.length;
	}

	isFull() {
		return this.length == this.position;
	}

	isEmpty() {
		return this.position == -1;
	}

	push(data) {
		if (!this.isFull()) {
			const node = new Node(data);
			if (this.isEmpty()) {
				//case if list is empty
				this.first = node;
				this.last = node;
			} else {
				let temp = this.first;
				this.first = node;
				node.next = temp;
			}
			return ++this.position;
		}
		return this.position;
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}
		const removedVal = this.first.value;
		this.first = this.first.next;
		return removedVal;
	}

	peek() {
		return this.first.value;
	}

	print() {
		return this.first.value;
	}
}

//sample data
const stack = new Stack(10);
console.log(stack.isEmpty());

stack.push(2);
stack.push(5);
stack.push(7);
stack.push(1);
stack.push(4);
stack.push(33);
stack.push(44);
console.log(stack.push(6));
console.log(stack.size());
console.log(stack.print());
console.log(stack.pop());
console.log(stack.peek());
