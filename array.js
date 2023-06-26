
export class myArray {
    constructor() {
        this.data = {}
        this.length = 0
    }

    get(index) {
        return this.data[index]
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.data;
    }

    pop() {
        delete this.data[this.length-1]
        this.length--;
        return this.data
    }

    delete(index) {
        delete this.data[index]
        this.length--;
        return this.data
    }
}

const newArray = new myArray();
newArray.push("hello")
newArray.push("o")
newArray.push(":D")
newArray.push("h")
console.log(newArray)
newArray.pop()
console.log(newArray)
newArray.delete(1)
console.log(newArray)