function toFahrenheit(celsius) {
 // Write your code here
	let res=(celsius*(9/5))+32;
	return res;
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
