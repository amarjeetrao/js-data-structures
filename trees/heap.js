// A Heap is a special Tree-based data structure in which the tree is a complete binary tree.

// heap has 2 main types and properties
// 1. Max Heap : parent node is always greater then its children
// 2. Min Heap : parent node is always less then its children
// 3. follows complete binary tree e.i. - levels are completely filled except possibly the lowest one, which is filled from the left.

// Implementing it with LinkedList

// Basic Operations
//Heapify - a process of creating a heap from an array.
// insertion - Insert an element to the Heap. [time - O(log(n)), space - O(log(n))]
// Search - Search an node in the Heap. [time - O(log(n)), space - O(log(n))]
// remove Max - remove the maximum node

class MaxHeap {
	constructor() {
		this.values = [];
	}

	// insert a node/value
	insert(value) {
		this.values.push(value);
		this.bubbleUp();
	}

	// remove maximum value node/value
	removeMax() {
		//we know the first value is maximum
		let currentItem = this.values[0];
		let lastItem = this.getLast();

		if (lastItem) {
			this.values[0] = lastItem;
			this.values.pop();
		}
		this.heapify();
		return currentItem ? currentItem : null;
	}

	bubbleUp(currentIndex = this.values.length - 1) {
		let currentItem = this.values[currentIndex];

		//get the parent using maths floor(n-1/2)
		let parentIndex = Math.floor((currentIndex - 1) / 2);
		let parentItem = this.values[parentIndex];

		//if current value is larger then move it to above
		if (parentIndex > -1 && currentItem > parentItem) {
			this.values[parentIndex] = currentItem;
			this.values[currentIndex] = parentItem;

			//call it again for next swap
			this.bubbleUp(parentIndex);
		}
		return currentIndex;
	}

	heapify(index = 0) {
		let item = this.values[index];

		// get the both children of this node with using math left : 2n+1 and right : 2n+2
		let jumpIdx = 2 * index;
		let leftChild = jumpIdx + 1 < this.values.length ? this.values[jumpIdx + 1] : null;
		let rightChild = jumpIdx + 2 < this.values.length ? this.values[jumpIdx + 2] : null;

		// if left child is ultimate largest
		if (leftChild && leftChild > rightChild && leftChild > item) {
			this.values[jumpIdx + 1] = item;
			this.values[index] = leftChild;
			this.heapify(jumpIdx + 1);
		}

		// if right child is ultimate largest
		if (rightChild && rightChild > leftChild && rightChild > item) {
			this.values[jumpIdx + 2] = item;
			this.values[index] = rightChild;
			this.heapify(jumpIdx + 2);
		}

		return true;
	}

	//get the last item
	getLast() {
		if (this.values.length) {
			return this.values[this.values.length - 1];
		}
		return null;
	}
}

let heap = new MaxHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.removeMax());
console.log(heap);
