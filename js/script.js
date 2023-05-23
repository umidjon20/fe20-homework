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



// Homework

// let evenOrOdd = +prompt('Enter number')

// if(evenOrOdd % 2===0){
//     alert(`${evenOrOdd} is even number`)
// }else{
//     alert(`${evenOrOdd} is odd number`)
// }

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

let hour = +prompt('Enter hour')

if(hour >= 6 && hour <= 12){
    alert('Good morning')
}else if(hour >= 12 && hour <= 18){
    alert('Good afternoon')
}else if(hour >= 18 && hour <= 23){
    alert('Good evening')
}else if( hour >= 0 && hour < 6){
    alert('Good night')
}else{
    alert('Invalid number')
}