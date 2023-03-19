console.log('Math.PI:', Math.PI)
console.log('Math.max:', Math.max(1, 2, 3, 5, 8, 9, 11, 2, 2));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max > item ? max : item);
  }
}

console.log('MyMath:', MyMath.PI)
console.log('MyMath.max:', MyMath.max(1,2,3,4,5,6,7,8,1,32,3,4,2,1,3,1,5))
const arrays = [1,2,3,4,5,6,7,8,1,32,3,4,2,1,3,1,5]
console.log('MyMath.max:', MyMath.max(...arrays))
const arraysneg = [-1,-2,-3,-4,-5,-6,-7,-8,-1,-32,-3,-4,-2,-1,-3,-1,-5]
console.log('MyMath.max:', MyMath.max(...arraysneg))
