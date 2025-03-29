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
            if(this.map[hashedKey] != undefined){
                let linkedlist = this.map[hashedKey];
                linkedlist.append(key, value);
            }else{
                this.map[hashedKey] = new LinkedList();
                let linkedlist = this.map[hashedKey];
                linkedlist.append(key, value);
            }
        }
    }

    get(key){
        let hashedKey = this.hash(key);
        if(this.map[hashedKey] != undefined){
            let linkList = this.map[hashedKey];
            return linkList.findKey(key);
        }
    }

    has(key){
        let hashedKey = this.hash(key);
        if(this.map[hashedKey] != undefined){
            let linkList = this.map[hashedKey];
            let i = linkList.findKey(key);
            if(i != null){
                console.log("Has " + key + ": " + true);
                return true;
            }else{
                console.log("Has " + key + ": " +false);
                return false;
            }
        }
    }

    remove(key){
        if(this.has(key) == true){
            let hashedKey = this.hash(key);
            let linkList = this.map[hashedKey];
            let i = linkList.findKey(key);
            linkList.removeAt(i);
            console.log("Removed key: " + key);
            return true;
        }else{
            console.log(key + " not in hashmap.");
            return false;
        }
    }

    length(){
        let hashArr = this.map;
        // console.log(hashArr);
        let length = 0;
        hashArr.forEach(element => {
            if(element != undefined && element.head != null){
                length += element.size();
            }
        });
        console.log("Total keys in hashmap: " + length);
        return length;
    }

    
}

export {HashMap}