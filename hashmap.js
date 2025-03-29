import { LinkedList } from "./linkedlist.js";

class HashMap {
    constructor(){
        this.loadfactor = 0.75;
        this.capacity = 16;
        this.map = [];
    }    

    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }
        return hashCode;
    }

    set(key,value){
        let hashedKey = this.hash(key);
        if(this.get(key) != null){
            let i = this.get(key);
            let linkedlist = this.map[hashedKey];
            linkedlist.updateValue(i,value);
            console.log("Updated, key: " + key + " with new value: " + value);
        }else{
            this.map[hashedKey] = new LinkedList();
            let linkedlist = this.map[hashedKey];
            linkedlist.append(key, value);
        }
    }

    get(key){
        let hashedKey = this.hash(key);
        if(this.map[hashedKey] != undefined){
            let linkList = this.map[hashedKey];
            return linkList.findKey(key);
        }
    }

    
}

export {HashMap}