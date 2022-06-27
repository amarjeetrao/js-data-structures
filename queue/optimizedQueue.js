// A Queue is a linear structure which follows a particular order in which the operations are performed.
// The order is First In First Out (FIFO).

// Basic Operations
// enqueue() − add (store) an item to the queue [time - O(1), space - O(1)].
// dequeue() − remove (access) an item from the queue [time - O(1), space - O(1)].
// peek() − Gets the element at the front of the queue without removing it [time - O(1), space - O(1)].
// isEmpty() − check if queue is empty.

class Queue {
	constructor() {
		this.item = {};
		this.front = 0;
		this.rear = 0;
	}

	size() {
		return this.rear - this.front;
	}

	isEmpty() {
		return this.size() == 0;
	}

	enqueue(data) {
		this.item[this.rear++] = data
	}

	dequeue() {
		const item = this.item[this.front];
		delete this.item[this.front];
		this.front++
		return item;
	}

	peek() {
		return this.item[this.front];
	}

	print() {
		return this.item;
	}
}

//sample data
const queue = new Queue();
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
