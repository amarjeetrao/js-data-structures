// A linked list is a linear data structure that includes a series of connected nodes. Here, each node stores the data and the address of the next node.
// Singly Linked List - Each node has data and a pointer to the next node only.

// Basic Operations
// Insertion -
// 1. at beginning (prepend) [time - O(1), space - O(1)]
// 2. at end (append) [time - O(1), space - O(1)]
// 3. random (insert) [time - O(n), space - O(1)]

// Deletion -
// 1. at beginning (unshift)
// 2. at end (pop)
// 3. random (remove)

// Display -
//Full List (print)
//Single Node

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//insert at beginning
	prepend(value) {
		const node = new Node(value);
		if (!this.head) {
			//case if list is empty
			this.tail = node;
		} else {
			node.next = this.head;
		}
		//set the new head
		this.head = node;
		this.length++;
		return this;
	}

	//insert at end
	append(value) {
		const node = new Node(value);
		if (!this.head) {
			//case if list is empty
			this.head = node;
		} else {
			this.tail.next = node;
		}
		//set the new tail
		this.tail = node;
		this.length++;
		return this;
	}

	//insert at random position
	insert(value, after) {
		//case if list is empty
		if (!this.head) {
			return null;
		}

		let node = new Node(value);
		let current = this.head;
		while (current) {
			// after values is at end
			if (after == current.value) {
				this.length++;
				if (after == this.tail.value) {
					this.tail.next = node;
					this.tail = node;
					return this;
				}

				node.next = current.next;
				current.next = node;
				return this;
			}

			current = current.next;
		}
		console.log('No point of insertion found');
		return null;
	}

	//deleting the last node
	pop() {
		//case if list is empty
		if (!this.head) {
			return null;
		}

		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		this.tail = current;
		this.tail.next = null;
		this.length--;
		return current;
	}

	// check for list is empty
	isEmpty() {
		return this.length == 0;
	}

	// check for size of list
	listLength() {
		return this.length;
	}

	//show full list
	print() {
		if (!this.head) {
			console.log('List is Empty');
			return null;
		}

		let listValues = '';
		let current = this.head;
		while (current) {
			listValues += current.value + ' ';
			current = current.next;
		}
		return listValues;
	}
}

const linkedList = new SinglyLinkedList();
console.log(linkedList.append('first'));
console.log(linkedList.append('second'));
console.log(linkedList.prepend('first top'));
console.log(linkedList.append('last'));
// console.log(linkedList.remove('second'));
console.log(linkedList.insert('random', 'last'));
console.log(linkedList.isEmpty());
console.log(linkedList.listLength());
console.log(linkedList.print());
