class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(data) {
        this.head = new Node(data, this.head) // use the previous head
        this.size++
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data)
        } else {
            let currentHead = this.head
            while (currentHead) {
                    if (currentHead.next == null) {
                        currentHead.next = new Node(data)
                        break
                    }
                currentHead = currentHead.next
            }
        }
        this.size++
    }

    insertAt(data, index) {
        // if index is out of range
        if (index > 0 && this.size < index) return

        // if the first index
        if (index === 0) {
            this.insertFirst();
            return
        }

        const node = new Node(data)
        let current, previous

        current = this.head
        let count = 0

        while (count < index) {
            previous = current // node before the index
            count++
            current = current.next // node after the index
        }

        node.next = current
        previous.next = node
    }

    printListData() {
        let currentHead = this.head 

        while (currentHead) {
            console.log(currentHead.data)
            currentHead = currentHead.next;
        }
    }
}

let ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.printListData()