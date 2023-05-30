// let colors = prompt('Enter color')

// if(colors == 'green'){
//     alert('Yellow')
// }else if(colors == 'yellow'){
//     alert('Red')
// }else if(colors == 'red'){
//     alert('Green')
// }else{
//     alert('The color you entered was not found')
// }
// let num = +prompt('Raqam kiriting')
// let num2 = +prompt('Raqam kiriting')

// if(num > num2){
//     alert(`${num2} dan ${num} katta`)
// }else if(num < num2){
//     alert(`${num} dan ${num} kichik`)
// }else{
//     alert(`${num} va ${num2} teng sonlar`)
// }



//                 Homework 1  

//             even-odd

// let evenOrOdd = +prompt('Enter number')

// if(evenOrOdd % 2===0){
//     alert(`${evenOrOdd} is even number`)
// }else{
//     alert(`${evenOrOdd} is odd number`)
// }


//                find season

// let monthNumber = +prompt('Enter number')

// if(monthNumber === 1 || monthNumber ===2 || monthNumber === 12){
//     alert('Now you are in winter')
// }else if(monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
//     alert('Now you are in spring')
// }else if(monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
//     alert('Now you are in summer')
// }else if(monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
//     alert('Now you are in autumn')
// }else{
//     alert('You have entered an invalid number')
// }


///              find day

// let dayNumber = prompt('Enter day')

// switch(dayNumber){
//     case 'Monday':
//         alert('Today is the 1st day of the week')
//         break
//     case 'Tuesday':
//         alert('Today is the 2nd day of the week')
//         break
//     case 'Wednesday':
//         alert('Today is the 3rd day of the week')
//         break
//     case 'Thursday':
//         alert('Today is the 4th day of the week')
//         break
//     case 'Friday':
//         alert('Today is the 5th day of the week')
//         break
//     case 'Saturday':
//         alert('Today is the 6th day of the week')
//         break
//     case 'Sunday':
//         alert('Today is a day off')
//         break
//     default:
//         alert('There is no such day of the week')
// }

//                 find hour

// let hour = +prompt('Enter hour')

// if(hour >= 6 && hour <= 12){
//     alert('Good morning')
// }else if(hour >= 12 && hour <= 18){
//     alert('Good afternoon')
// }else if(hour >= 18 && hour <= 23){
//     alert('Good evening')
// }else if( hour >= 0 && hour < 6){
//     alert('Good night')
// }else{
//     alert('Invalid number')
// }

// let age = +prompt('Enter your age')



// for(let i = 0; i < 1; i++){
//     let age = +prompt('Enter your age')
//     if(age < 0 || age > 128){
//         i--
//     }
    
// }

// let num = [6,7,1,-5,8,120]
// let x = num[0]

// for(let i = 1;i < num.length;i++){
//     if(num[i] < x){
//         x = num[i]
//     }
// }
// console.log(x)


//               Homework 2

// let num = [12, 23, 34, 54, 2]

// let x = 0
// for(let i = 0; i < num.length;i++){
//     x += num[i]
// }
// console.log(x)

// let num2 = [12, 3, -2, 45, -10, -8]

// let res = 0
// for(let i = 0; i < num2.length; i++){
//     if(num2[i] < 0){
//         res += num2[i]
//     }
// }
// console.log(res * -1)

////////////////////////////////////////

// let numbers = [12, 3, -2,-2, 45,45, -10, -10, -8, -8]

// let index = 0
// let arr = [0]

// for(let i = 0; i < numbers.length; i++){
//     for(let j = i +1; j < numbers.length; j++){
//         if(numbers[i] === numbers[j]){
//             arr[index] =  numbers[i]
//             index++
//         }
//     }
// }

// console.log(arr)

////////////////////////////////////

// function calc(arg1, arg2, op = '+'){
//     if(op == '/' && arg2 === 0){
//         console.log('Cannot be zero');

//     }else{
//         switch(op){
//             case '+':
//                 console.log(arg1 + arg2)
//                 break
//             case '-':
//                 console.log(arg1 - arg2)
//                 break
//             case '*':
//                 console.log(arg1 * arg2)
//                 break
//             case '/':
//                 console.log(arg1 / arg2)
//                 break
//             default:
//                 console.log('enter operator');
//         }
//     }
   
// }

// calc(2,0,'/')





/////////////////////////////////////

//                 Homework 3

let arr = [2,4,5,6,45,34,9]

function calcAverage(numbers){
    let length = numbers.length

    let result = 0

    for(let i = 0; i < length; i++){
        result += numbers[i]

    }
    return result / length
}

let  countAverage =  calcAverage(arr)

console.log(countAverage);

////////////////////////////////////////////////
let x = 'abva'
let y = 'some' 


///////////    siklni orqaga aylantirish    ////////////
// for(let i = 11 - 1;i > 0;i--){
//     console.log(i);
// }

/////////////////////////////////////
function isPalindrom(str) { 

    let result = ''

    for (let i = 0; i < str.length; i++){
        result = str[i] +=  result 
    }
    return str === result ? true : false
}

let palindrom2 = isPalindrom(x)

console.log(palindrom2);

/////////////////////////////////

let str = 'evaluation'


function countVovels(counter){
    let res = ''
    let vovels = 'aeiou'
    
    for(let i = 0; i < counter.length; i++ ){
        for(let j = 0; j < vovels.length; j++ ){
            if(counter[i] === vovels[j]){
                res++
            }
        }
    }
    return res > 0 ? res : 0
}

let vovels = countVovels(str)

console.log(vovels);