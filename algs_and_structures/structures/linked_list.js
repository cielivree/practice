class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value) 
            this.size += 1
            return true
        }

        let node = this.root
        while (node.next) {
            node = node.next
        }

        let newNode = new Node(value)
        value.next = newNode
        this.size += 1
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}