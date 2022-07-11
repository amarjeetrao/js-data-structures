// A linked list is a linear data structure that includes a series of connected nodes. Here, each node stores the data and the address of the next node.
// Doubly Linked List - Each node has data and a pointer to the next node and the previous node.

// Basic Operations
// Insertion -
// 1. at beginning (prepend) [time - O(1), space - O(1)]
// 2. at end (append) [time - O(1), space - O(1)]
// 3. random (insert) [time - O(n), space - O(1)]

// Deletion -
// 1. at beginning (shift) [time - O(1), space - O(1)]
// 2. at end (pop) [time - O(1), space - O(1)]
// 3. random (remove) [time - O(n), space - O(1)]

// Display -
//Full List (print) [time - O(n), space - O(1)]
//Single Node by indexed (get) [time - O(n), space - O(1)]
//Find Node by value (find) [time - O(n), space - O(1)]

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//insert at beginning
	prepend(value) {
		const node = new Node(value);
		if (this.isEmpty()) {
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
		if (this.isEmpty()) {
			//case if list is empty
			this.head = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
		}
		//set the new tail
		this.tail = node;
		this.length++;
		return this;
	}

	//insert at random position
	insert(index, value) {
		if (index < 0 || index > this.length) {
			console.log('Out of bound Index');
			return false;
		}

		if (index == 0) {
			return !!this.prepend(value);
		}

		if (index == this.listLength()) {
			return !!this.append(value);
		}

		let prevNode = this.get(index - 1);
		if (prevNode) {
			let node = new Node(value);
			node.next = prevNode.next;
			prevNode.next = node;
			this.length++;
			return true;
		}

		return false;
	}

	//deleting the head node
	shift() {
		//case if list is empty
		if (this.isEmpty()) {
			return null;
		}
		let removedNode = this.head;
		this.head = this.head.next;
		this.head.prev = null;
		this.length--;

		//reset for length 0
		if (this.length === 0) {
			this.tail = null;
		}
		return removedNode;
	}

	//deleting the last node
	pop() {
		//case if list is empty
		if (this.isEmpty()) {
			return null;
		}

		let removedNode = this.tail;
		this.tail.prev.next = null;
		this.tail.prev = null;
		this.length--;

		//reset for length 0
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return removedNode;
	}

	//remove at random position
	remove(index) {
		if (index < 0 || index >= this.length) {
			console.log('Out of bound Index');
			return false;
		}

		if (index == 0) {
			return this.shift();
		}

		if (index == this.listLength() - 1) {
			return this.pop();
		}

		let removedNode = null;
		let prevNode = this.get(index - 1);
		if (prevNode) {
			removedNode = prevNode.next;
			prevNode.next = prevNode.next.next;
			this.length--;
		}

		return removedNode;
	}

	//get value by index
	get(index) {
		if (index < 0 || index >= this.length) {
			console.log('Out of bound Index');
			return null;
		}

		//case if list is empty
		if (this.isEmpty()) {
			return null;
		}

		let current = this.head;
		let start = 0;

		while (start < index) {
			current = current.next;
			start++;
		}

		return current;
	}

	//set value by index
	set(index, value) {
		let node = this.get(index);
		if (node) {
			node.value = value;
			return this;
		}
		return null;
	}

	//find item by value and return index
	find(value) {
		if (this.isEmpty()) {
			return -1;
		}

		let current = this.head;
		let index = 0;
		while (current) {
			if (current.value === value) {
				return index;
			}
			current = current.next;
			index++;
		}

		return -1;
	}

	//reverse the list
	reverse() {
		let prev = null;
		let curr = this.head;

		while (curr) {
			//get the current's next node
			let next = curr.next;
			//set the current node to previous
			curr.next = prev;
			//reset prev to current for future
			prev = curr;
			//set current to detached next node
			curr = next;
		}

		//swap tail and head
		this.tail = this.head;
		this.head = prev;

		return this;
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
		if (this.isEmpty()) {
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

const linkedList = new DoublyLinkedList();
console.log(linkedList.append('1'));
console.log(linkedList.append('2'));
console.log(linkedList.append('3'));
console.log(linkedList.append('4'));
console.log(linkedList.append('5'));
console.log(linkedList.append('6'));
console.log(linkedList.print());

console.log(linkedList.pop());
console.log(linkedList.shift());
console.log(linkedList.print());

// console.log(linkedList.listLength());
// console.log(linkedList.get(0));
// console.log(linkedList.set(1, '10'));
// console.log(linkedList.find('5'));
// console.log(linkedList.find('2'));
// console.log(linkedList.print());
// console.log(linkedList.reverse());
// console.log(linkedList.print());
