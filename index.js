// Your code here
class Polygon{

  constructor(array){
    this.array = array
  }

  get countSides(){
    return this.array.length
  }

  get perimeter(){
    return this.array.reduce((total, sides) => sides + total, 0)
  }
}

class Triangle extends Polygon{

  get isValid(){
    if (this.countSides === 3){
      debugger
      if((this.array[0] + this.array[1] > this.array[2]) && (this.array[1] + this.array[2] > this.array[0]) && (this.array[0] + this.array[2] > this.array[1])){
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }
}

class Square extends Polygon{
  get area(){
    return (this.array[0] **2)
  }
  get isValid(){
    if (this.countSides === 4){
      return this.array.every(element => element=== this.array[0])
    }
  }
}
