//https://www.tutorialspoint.com/es6/es6_objects.htm



name = "lucia"
age = 24
console.log("hello world " + name)

var gender = "female"
function get_gender(gender){
    console.log("i am a " + gender)
}


//constants doesnt change values
const pie = 3.142

//pie cannot be re-assinged eg pie = 5
console.log(pie)
var num1 = 0
var num2 = 0
function add_numbers(num1,num2){
    sum = num1 + num2
    console.log("total =" + sum)
}

get_gender(gender)
add_numbers(10, 20)
add_numbers(30, 8)


var number3 = 25

console.log(Math.sqrt(number3))
