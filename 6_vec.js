class Vec {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    plus (otherVec) {
        let newX = this.x + otherVec.x,
            newY = this.y + otherVec.y

        return new Vec (newX, newY)
    }

    minus (otherVec) {
        let newX = this.x - otherVec.x,
            newY = this.y - otherVec.y

        return new Vec (newX, newY)
    }

    get length () {
        let xSquared = Math.pow(this.x, 2),
            ySquared = Math.pow(this.y, 2)

        let sum = xSquared + ySquared
        let distance = Math.sqrt(sum)

        return distance
    }
}