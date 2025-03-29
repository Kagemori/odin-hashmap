class Node {
    constructor(){
        this.key = null;
        this.value = null;
        this.nextNode = null;
    }

    setValue(value){
        this.value = value;
    }

    setKey(key){
        this.key = key;
    }
}

export {Node}