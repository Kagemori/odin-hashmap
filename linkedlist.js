import { Node } from "./node.js";

class LinkedList {
    constructor(head = null){
        this.head = head;
    }

    append(key, value){
        let nodeToAdd = new Node();
        nodeToAdd.value = value;
        nodeToAdd.key = key;

        let node = this.head;

        if(node == null){
            this.head = nodeToAdd;
            return;
        }

        while(node.nextNode){
            node = node.nextNode;
        }

        node.nextNode = nodeToAdd;
    }

    prepend(value){
        let nodeToAdd = new Node();
        nodeToAdd.value = value;

        nodeToAdd.nextNode = this.head;
        this.head = nodeToAdd;
    }

    size(){
        let index = 0;
        let node = this.head;

        while(node.nextNode){
            index++;
            node = node.nextNode;
        }
        index++;
        console.log("Linked List Size: " + index);
    }

    listHead(){
        let node = this.head;
        console.log(node);
    }

    listTail(){
        let node = this.head;
        while(node.nextNode){
            node = node.nextNode;
        }
        console.log(node);
    }
    
    at(index){
        let i = 0;
        let node = this.head;
        while(node.nextNode){
            if(i == index){
                console.log(node);
                return;
            }else{
                node = node.nextNode;
                i++;
            }
        }
        if(i == index){
            console.log(node);
            return;
        }
    }

    pop(){
        let node = this.head;
        let nodePrev = this.head;
        while(node.nextNode){
            nodePrev = node;
            node = node.nextNode;
        }
        nodePrev.nextNode = null;
    }

    contains(value){
        let node = this.head;
        while(node.nextNode){
            if(node.value == value){
                console.log("Linked List contains: " + value);
                return;
            }
            node = node.nextNode;
        }
        if(node.value == value){
            console.log("Linked List contains: " + value);
            return;
        }
        console.log("Linked list does not contain value: " + value);
    }

    find(value){
        let node = this.head;
        let i = 0;
        while(node.nextNode){
            if(node.value == value){
                console.log("Linked list has: " + value + " at index: " + i);
                return;
            }
            node = node.nextNode;
            i++;
        }
        if(node.value == value){
            console.log("Linked list has: " + value + " at index: " + i);
            return;
        }
        console.log("Linked list does not have: " + value);
    }

    findKey(key){
        let node = this.head;
        let i = 0;
        while(node.nextNode){
            if(node.key == key){
                console.log("Linked list has: " + key + " at index: " + i + " with value: " + node.value);
                return i;
            }
            node = node.nextNode;
            i++;
        }
        if(node.key == key){
            console.log("Linked list has: " + key + " at index: " + i + " with value: " + node.value);
            return i;
        }
        return null;
    }

    toString(){
        let node = this.head;
        let nodeStr = "";
        while(node.nextNode){
            nodeStr += "( " + node.value + " ) -> "
            node = node.nextNode;
        }
        nodeStr += "( " + node.value + " ) -> "
        nodeStr += "null";
        console.log(nodeStr);
    }

    insertAt(value, index){
        let i = 0;
        let node = this.head;
        let prevNode = null;

        let nodeToAdd = new Node();
        nodeToAdd.value = value;

        if(i == index && i == 0){
            this.prepend(value);
        }

        while(node.nextNode){
            i++;
            prevNode = node;
            node = node.nextNode;

            if(i == index){
                prevNode.nextNode = nodeToAdd;
                nodeToAdd.nextNode = node;
                return;
            }
        }

        if(i == this.size - 1){
            prevNode.nextNode = nodeToAdd;
            nodeToAdd.nextNode = node;
            return;
        }
    }

    removeAt(index){
        let node = this.head;
        let nodePrev = this.head;
        let i = 0;

        if(i == index){
            node = node.nextNode;
            this.head = node;
            return;
        }

        while(node.nextNode){
            i++;
            nodePrev = node;
            node = node.nextNode;

            if(i == index){
                nodePrev.nextNode = node.nextNode;
                node.nextNode = null;
                return;
            }
        }

        if(i == this.size - 1){
            nodePrev.nextNode = null;
            return;
        }

    }

    updateValue(index, value){
        let node = this.head;
        let i = 0;

        if(i == index){
            node.value = value;
            return;
        }

        while(node.nextNode){
            i++;
            nodePrev = node;
            node = node.nextNode;

            if(i == index){
                node.value = value;
                return;
            }
        }

        if(i == this.size - 1){
            node.value = value;
            return;
        }
    }
}

export {LinkedList}