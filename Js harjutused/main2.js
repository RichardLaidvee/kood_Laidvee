// suurim
function suurim(numbers) {
    if (numbers.length === 0) {
        return "Massiiv on tühi";
    }
    return Math.max(...numbers);
}
console.log("Suurim arv: " + suurim([1, 5, 3, 7, 2]));

// celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("Celsius to Fahrenheit: " + celsiusToFahrenheit(30) + "°F");

// korrutustabel
function korrutustabel(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
console.log("Korrutustabel number 5-ga:");
korrutustabel(5);

// faktoriaal
function faktoriaal(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Faktoriaal 5: " + faktoriaal(5));

// tähed
function tähed(n) {
    for (let i = 1; i <= n; i++) {
        let rida = '';
        for (let j = 1; j <= i; j++) {
            rida += '*';
        }
        console.log(rida);
    }
}
console.log("Tähtede muster:");
tähed(5);

// Algarvu kontroll
function onAlgarv(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Kas 7 on algarv? " + (onAlgarv(7) ? "Jah" : "Ei"));
