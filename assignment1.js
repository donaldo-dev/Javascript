// a. Whrite a Javascript program to find the diagonal of a square where the length of each side is 9

const side = 12;
var diagonal = Math.sqrt(side*side + side*side)

console.log(diagonal)

// b. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

const side1 = 5, side2 = 6, side3 = 7;
var semiperimeter = (side1 + side2 + side3)/2;
var area = Math.sqrt(semiperimeter*((semiperimeter-side1)*(semiperimeter-side2)*(semiperimeter-side3)));
console.log(area);

// Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.

const pi = 3.14;
const radius = 4;
var perimeter = 2 * pi * radius;
var area_circle = pi * radius * radius;
console.log(area_circle, perimeter)

// Assignment 3 ( Conditional Statements & Loops)
// a) Write a JavaScript program that accepts two integers and displays the larger of the two.

function findGreater(x, y) {
    if(x > y){
        return x;
    }
    else{
        return y;
    }
}

// b) Write a JavaScript program that checks whether an integer is an even or an odd number.

function checkNumber(a) {
    if( a % 2 == 0){
        console.log("Number is even");
    }
    else{
        console.log("Number is Odd");
    }
}

checkNumber(-1);