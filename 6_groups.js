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
}

let group = Group.from(['Apples', 'Peaches', 'Bananas', 'Strawberries']);
console.log(group)
group.add('Apples')
group.add('Peaches')
group.delete('Apples')
console.log(group.has('Apples'))
console.log(group.has('Peaches'))