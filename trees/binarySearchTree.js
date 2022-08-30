// Binary Search Tree is a node-based binary tree data structure which has the following properties:

//1. The left subtree of a node contains only nodes with keys lesser than the node’s key.
//2. The right subtree of a node contains only nodes with keys greater than the node’s key.
//3. The left and right subtree each must also be a binary search tree.

// Implementing it with LinkedList

// Basic Operations


class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		//check if BST empty
		if (this.isEmpty()) {
			this.root = new Node(value);
			return true;
		}

		//search and insert to the right
		if (value > this.value) {
			return true;
		}

		//search and insert to the left
		if (value < this.value) {
			return true;
		}
	}

	isEmpty() {
		return this.root;
	}
}

//sample data
const tree = new BinarySearchTree()
tree.root = new Node(10)
