// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((accumulator, currentValue)=>accumulator+currentValue,0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(super.countSides === 3 && this.sides.every(a=>a>0)){
        
            const [a,b,c] = this.sides.sort()
            return a + b > c
            }else{
                return false
            }
            
        }
    }

class Square extends Polygon{
    get isValid(){
        if(super.countSides === 4 && this.sides.every(a=>a>0)){
            const [a,b,c,d] = this.sides
            return a===b && b===c && c===d
        }else{
            return false
        }
    }

    get area(){
        if(this.isValid){
            return Math.pow(this.sides[0],2)
        }else{
            console.log("It's not a square!!!")
        }
    }
}

