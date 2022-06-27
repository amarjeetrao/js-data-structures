// A Queue is a linear structure which follows a particular order in which the operations are performed.
// The order is First In First Out (FIFO).

// Implementing it with array

// Basic Operations
// enqueue() − add (store) an item to the queue.
// dequeue() − remove (access) an item from the queue.
// peek() − Gets the element at the front of the queue without removing it.
// isFull() − check if queue is full.
// isEmpty() − check if queue is empty.

class Queue {
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

	enqueue(data) {
		if (!this.isFull()) {
			this.item.push(data);
		} else {
			return new RangeError('Queue Full');
		}
	}

	dequeue() {
		return this.item.shift();
	}

	peek() {
		return this.item[0];
	}

	print() {
		return this.item.toString();
	}
}

//sample data
const queue = new Queue(5);
console.log(queue.isEmpty());

queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(1);
queue.enqueue(4);

console.log(queue.size());
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.peek());
