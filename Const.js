// const first = () => {
// 	const greet = 'Hi';
// 	const second = () => {
// 		alert(greet);

// 	}
// 	return second;

// }

// var newFunc = first();
// newFunc();

// Currying


// const multiply = (a, b) => a*b;
// const curriedMultiply = (a)=>(b)=> a*b;
// curriedMultiply(3);

// const Add = (a, b) => a+b;
// const curriedAdd = (a)=>(b)=> a+b;
// curriedAdd(3);
// curriedAdd(5)(7);


// const subtract = (a, b) => a-b;
// const curriedSubtract = (a)=>(b)=> a-b;
// curriedAdd(3);
// curriedAdd(5)(7);

// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 3;
// compose (sum, sum)(6);


// Advance Array

const array = [5, 7, 8, 2, 10, 20];
const double = [];
const newArray = array.forEach(num =>{
	double.push(num * 5);
})

console.log(double);

// Map

const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

// filter

const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) =>{
	return accumulator + num
}, 0);

console.log('reduce', reduceArray);