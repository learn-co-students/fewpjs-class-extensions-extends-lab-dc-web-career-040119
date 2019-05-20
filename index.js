class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {return this.sides.length}

    get perimeter() { return this.sides.reduce((total, side) => total + side) }

}

class Triangle extends Polygon {

    get isValid() {
        return (this.countSides === 3 &&
            this.sides[0] + this.sides[1] > this.sides[2] &&
            this.sides[2] + this.sides[1] > this.sides[0] &&
            this.sides[0] + this.sides[2] > this.sides[1])
    }

}

class Square extends Polygon {

    get isValid() {
        return (this.countSides === 4 &&
            this.sides[0] === this.sides[1] &&
            this.sides[0] === this.sides[2] &&
            this.sides[0] === this.sides[3])
    }

    get area() { return Math.pow(this.sides[0], 2) }
}