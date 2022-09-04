// Binary Search Tree is a node-based binary tree data structure which has the following properties:

//1. The left subtree of a node contains only nodes with keys lesser than the node’s key.
//2. The right subtree of a node contains only nodes with keys greater than the node’s key.
//3. The left and right subtree each must also be a binary search tree.

// Implementing it with LinkedList

// Basic Operations
// insertion - Insert an element to the BST. [time - O(log(n)), space - O(log(n))]
// Search - Search an node in the BST. [time - O(log(n)), space - O(log(n))]

class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value, currentNode = this.root) {
		//check if BST empty
		if (this.isEmpty()) {
			this.root = new Node(value);
			return true;
		}

		//duplicate insertion handling
		if (value === currentNode.value) {
			console.log('Already in BST');
			return false;
		}

		//search and insert to the right
		if (currentNode && value > currentNode.value) {
			currentNode.right
				? this.insert(value, currentNode.right)
				: (currentNode.right = new Node(value));
			return true;
		}

		//search and insert to the left
		if (currentNode && value < currentNode.value) {
			currentNode.left
				? this.insert(value, currentNode.left)
				: (currentNode.left = new Node(value));
			return true;
		}
	}

	find(value, currentNode = this.root) {
		//check if BST empty
		if (this.isEmpty()) {
			return null;
		}

		if (value === currentNode.value) {
			return currentNode;
		}

		//search to the right
		if (currentNode && value > currentNode.value) {
			return currentNode.left
				? this.find(value, currentNode.right)
				: null;
		}

		//search to the left
		if (currentNode && value < currentNode.value) {
			return currentNode.left ? this.find(value, currentNode.left) : null;
		}
	}

	breadthFirstSearch() {
		let data = [];
		let queue = [];

		//check for bst is empty
		if (this.isEmpty()) {
			return data;
		}

		let node = this.root;
		queue.push(node);
		//until there is data in queue we remove it and mark it as visited
		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		return data;
	}

	//depth first search preOrder
	preOrder(data = [], node = this.root) {
		if (this.isEmpty()) {
			return data;
		}

		data.push(node.value);
		node.left && this.preOrder(data, node.left);
		node.right && this.preOrder(data, node.right);
		return data;
	}

	//depth first search inOrder
	inOrder(data = [], node = this.root) {
		if (this.isEmpty()) {
			return data;
		}

		node.left && this.preOrder(data, node.left);
		data.push(node.value);
		node.right && this.preOrder(data, node.right);
		return data;
	}

	//depth first search postOrder
	postOrder(data = [], node = this.root) {
		if (this.isEmpty()) {
			return data;
		}

		node.left && this.preOrder(data, node.left);
		node.right && this.preOrder(data, node.right);
		data.push(node.value);
		return data;
	}

	isEmpty() {
		return !this.root;
	}
}

//sample data
const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.preOrder());