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
		this.root = null
	}

	insert(value, currentNode = this.root) {
		//check if BST empty
		if (this.isEmpty()) {
			this.root = new Node(value)
			return true
		}

		//duplicate insertion handling
		if (value === currentNode.value) {
			console.log('Already in BST')
			return false
		}

		//search and insert to the right
		if (currentNode && value > currentNode.value) {
			currentNode.right ? this.insert(value, currentNode.right) : currentNode.right = new Node(value)
			return true
		}

		//search and insert to the left
		if (currentNode && value < currentNode.value) {
			currentNode.left ? this.insert(value, currentNode.left) : currentNode.left = new Node(value)
			return true
		}
	}

	find(value, currentNode = this.root) {
		//check if BST empty
		if (this.isEmpty()) {
			return null
		}

		if (value === currentNode.value) {
			return currentNode;
		}

		//search to the right
		if (currentNode && value > currentNode.value) {
			return currentNode.left ? this.find(value, currentNode.right) : null;
		}

		//search to the left
		if (currentNode && value < currentNode.value) {
			return currentNode.left ? this.find(value, currentNode.left) : null;
		}
	}

	isEmpty() {
		return !this.root
	}
}

//sample data
const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(8)
tree.insert(20)
tree.insert(18)
tree.insert(30)
tree.insert(9)
tree.find(18)
