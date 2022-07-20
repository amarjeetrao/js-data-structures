// A Queue is a linear structure which follows a particular order in which the operations are performed.
// The order is First In First Out (FIFO).

// Implementing it with LinkedList

// Basic Operations
// enqueue() − add (store) an item to the queue [time - O(1), space - O(1)].
// dequeue() − remove (access) an item from the queue [time - O(n), space - O(1)].
// peek() − Gets the element at the front of the queue without removing it [time - O(1), space - O(1)].
// isFull() − check if queue is full.
// isEmpty() − check if queue is empty.


class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
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

	enqueue(data) {
		if (!this.isFull()) {
			const node = new Node(data);
			if (this.isEmpty()) {
				//case if list is empty
				this.first = node;
			} else {
				this.last.next = node;
			}
			//set the new tail
			this.last = node;
			return ++this.position;
		}
		return this.position;
	}

	dequeue() {
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
		if (this.isEmpty()) {
			console.log('List is Empty');
			return null;
		}

		let listValues = '';
		let current = this.first;
		while (current) {
			listValues += current.value + ' ';
			current = current.next;
		}
		return listValues;
	}
}

//sample data
const queue = new Queue(5);
console.log(queue.isEmpty());

queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(1);
console.log(queue.enqueue(4));
console.log(queue.size());
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.peek());
