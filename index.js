// Your code here
class Polygon {
	constructor(sides) {
		this.sides = sides
	}

	get countSides() {
		return this.sides.length
	}

	get perimeter() {
		return this.sides.reduce((total, amount) => total + amount)
	}
}

class Triangle extends Polygon {
	get isValid() {
		let sideOne = this.sides[0]
		let sideTwo = this.sides[1]
		let sideThree = this.sides[2]
		if (sideOne + sideTwo > sideThree && 
			sideOne + sideThree > sideTwo && 
			sideTwo + sideThree > sideOne) {
			return true
		}
		else {
			return false
		}
	}
}

class Square extends Polygon {
	get isValid() {
		let square = true
		let side = this.sides[0]
		for (let value of this.sides) {
			if (value !== side) {
				square = false
			}
		}
		return square
	}

	get area() {
		return this.sides[0] * this.sides[1]
	}
}