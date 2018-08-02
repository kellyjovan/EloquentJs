class Group {
    constructor () {
        this.group = []
    }

    add (item) {
        if (!this.group.includes(item)) {
            this.group.push(item)
        }
    }

    delete (item) {
        this.group = this.group.filter((el) => el != item)
    }

    has (item) {
        return this.group.includes(item)
    }

    static from (obj) {
        let newGroup = new Group
        for (let item of obj) {
            newGroup.add(item)
        }
        return newGroup
    }

    [Symbol.iterator] () {
        return new GroupIterator(this)
    }
}

class GroupIterator {
    constructor (group) {
        this.index = 0
        this.group = group
    }

    next () {
        if (this.index === this.group.group.length) {
            return {done: true}
        }

        let item = this.group.group[this.index]
        this.index++

        return {value: item, done: false}
    }
}

let group = Group.from(['Apples', 'Peaches', 'Bananas', 'Strawberries']);

for (let value of group) {
    console.log(value);
  }