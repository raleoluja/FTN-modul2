const fibbonacif = (a, b) => {
	function vratiBroj() {
		let temp = a;
		a = b;
		b += temp;
		return temp;
	}
	
	return vratiBroj;
};

var fib = fibbonacif(0,1);

console.log(fib()); // 0
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13