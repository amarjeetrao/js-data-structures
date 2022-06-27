// A circular queue is the extended version of a regular queue where the last element is connected to the first element. Thus forming a circle-like structure.
// The order is First In First Out (FIFO).

// Basic Operations
// enqueue() − add (store) an item to the queue.
// dequeue() − remove (access) an item from the queue.
// peek() − Gets the element at the front of the queue without removing it.
// isEmpty() − check if queue is empty.

class Queue {
	constructor(length) {
		this.item = {};
		this.length = length;
		this.currentLength = 0;
		this.front = 0;
		this.rear = 0;
	}

	isFull() {
		return this.length == this.currentLength;
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.currentLength == 0;
	}

	enqueue(data) {
		if (!this.isFull()) {
			//get rear with modular to void length exceeding and set it as new rear
			this.rear = ++this.rear % this.length;
			this.item[this.rear] = data;
			this.currentLength++;
			return true;
		} else {
			return new RangeError('Queue Full');
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}

		const item = this.item[this.front];
		delete this.item[this.front];
		this.front = ++this.front % this.length;
		this.currentLength--;
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
const queue = new Queue(5);
console.log(queue.isEmpty());

queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(6);

console.log(queue.size());
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.print());
console.log(queue.peek());
