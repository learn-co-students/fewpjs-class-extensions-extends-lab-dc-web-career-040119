// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  get countSides(){
    return this.sides.length
  }
  get perimeter(){
    let sum = 0;
    for (var i = 0; i < this.sides.length; i++) {
      sum += this.sides[i]
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.sides.length === 3 &&
      this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[1] + this.sides[2] > this.sides[0] &&
      this.sides[2] + this.sides[0] > this.sides[1]
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.length === 4 && this.sides.every((val,i,arr) => val === arr[0])
    }
  get area() {
    return this.sides[Math.floor(Math.random() * 4)] * this.sides[Math.floor(Math.random() * 4)]
  }
}
