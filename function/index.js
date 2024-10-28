//for miraj getting total marks
// let miraj_science = 75;

// let miraj_math=96;

// let miraj_total_marks = miraj_science+miraj_math;

// document.write(`miraj marks is ${miraj_total_marks} <br>`)


// for asmita getting total marks
// let asmita_science = 80;

// let asmita_math=6;

// let asmita_total_marks = asmita_science+asmita_math;

// document.write(`asmita marks is ${asmita_total_marks}<br>`)

// what if i have to do same for 20 students
// for that we use the concept of the functions becuse the code is repeating

// ES5

function calulateTotalMarks(a,b) // a and b are called function arguments that is need inside function for calculations
{

    let sum = a+b // 12+33

    return sum //45

}

// for susmita getting total marks

// let susmita_math=12
// let susmita_science=33
// let susmita_total_marks= calulateTotalMarks(susmita_math,susmita_science) // total_marks ma 45 aauxa
// document.write(`susmita marks is ${susmita_total_marks}`)

// function to caluclate the area of the square.

// function calculatearea(l){
//     let area = l*l
//     return area
// }
// let area = calculatearea (5)
// document.write(`calculate area is ${area}`)

// function calculate_rectangle_area(l,b)
// {
//     area = l*b
//     document.write(`calculate area is ${area}`)
// }

// calculate_rectangle_area(1,20)


// es6
// const calulate_area = (l) =>
// {
//     area= l*l
//     return area
// }

// let square_area=calulate_area(4)
// document.write(`calculate area is ${square_area}`)


// const calculatearea = (l,b) =>
// {
//     area= l*b
//     return area
// }
// let rectangle_area= calculatearea(4,5)
// document.write(`calculate area is ${rectangle_area}`)


//parameterized function

//if more than 2 arguments are there we use parematic function

function do_sum({a,b,c}){

    summ= a+b+c
    return summ
}

let totall=do_sum({c:1,a:3,b:2})
document.write(`sum is ${totall}`)

// paramrteric function argumenets iswrapped by {} and the parameter is also wrapped by {}

//Defult function

//Defult function are those function whose argrument have value.

//write a defult function to handle the language change.
const language =(languageName=language) =>{
    return `i am language ${languageName}`;
}
console.log(language("nepali"));
console.log(language ("english"));


