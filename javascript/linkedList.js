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