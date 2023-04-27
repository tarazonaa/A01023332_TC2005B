const primerCaracter = (texto) => {
    return texto.charAt(0);
}

console.log(primerCaracter("abacddbec"))

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp
            }
        }
    }
    return array;
}

console.log(bubbleSort([1, 2, 4, 5, 3, 2]))

const invert = (array) => {
    let newArr = [];
    let idx = array.length - 1;
    while (idx >= 0){
        newArr.push(array[idx]);
        idx--;
    }
    return newArr; 
}

const modify = (array) => {
    let newArr = invert(array);
    array.forEach(element => {
         newArr.push(element /= 2);
    });
    return newArr;
}

console.log(invert([1, 2, 3, 4]))
console.log(modify([1, 2, 3, 4]))

const uppercase = (texto) => {
    let textArr = texto.split(" ")
    textArr.map((word, idx) => {
        word = word.charAt(0).toUpperCase() + word.slice(1)
        textArr[idx] = word;
    })
    const finalText = textArr.join(" ")
    return finalText;
}

console.log(uppercase("Hola mundo estoy haciendo las primera letras uppercase ehhh"));

const gcd = (n1, n2) => {
    let divisores1 = []
    let divisores2 = []

    let i = 0;
    while (i <= n1) {
        if (n1 % i == 0) {
            divisores1.push(i);
        }
        if (n2 % i == 0) {
            divisores2.push(i);
        }
        i++;
    }
    let gcd = 0;
    divisores1.forEach(element => {
        if (divisores2.includes(element)) {
            gcd = element;
        }
    })
    return gcd;
}

console.log(gcd(45, 9));

const hackerSpeak = (texto) => {
    let newString = texto.split("");
    let finalString = [];
    for (let i = 0; i < newString.length; i++) {
        const letter = newString[i];
        if (letter === "a") {
            finalString.push("4");
        } else if (letter === "e") {
            finalString.push("3");
        } else if (letter === "i") {
            finalString.push("1");
        } else if (letter === "s") {
            finalString.push("5");
        } else if (letter === "o") {
            finalString.push("0");
        } else {
            finalString.push(letter);
        }
    }
    return finalString.join("");
}

console.log(hackerSpeak("Javascript es divertido"))

const factoriza = (n) => {
    let i = 1;
    let factorArr = [];
    while (i <= n) {
        if (n % i == 0) {
            factorArr.push(i);
        }
        i++;
    }
    return factorArr;
}

console.log(factoriza(12));

const duplicados = (array) => {
    let newArr = [];
    array.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}

console.log(duplicados([1, 2, 3, 4, 5, 5, 5, 5, 5, 5]));

const cadenaMasCorta = (array) => {
    let min = array[0].length;
    let minString = array[0];
    array.forEach(element => {
        if (element.length < min) {
            min = element.length;
            minString = element;
        }
    });
    return minString;
}

console.log(cadenaMasCorta(["Hola", "Mundo", "Soy", "Unas", "h", "weCadena"]));

const palindromo = (texto) => {
    let textoArr = texto.split("");
    let textoArrReverse = textoArr.reverse();
    let textoReverse = textoArrReverse.join("");
    if (texto === textoReverse) {
        return true;
    }
    return false;
}

console.log(palindromo("ana"));
console.log(palindromo("nose"));

const alfabeticas = (array) => {
    let newArr = [];
    array.forEach(element => {
        newArr.push(element.split("").sort().join(""));
    });
    return newArr;
}

console.log(alfabeticas(["hola", "mundo", "soy", "un", "array"]));

const stats = (array) => {
    let median = 0;
    let mean = 0;

    let sum = array.reduce((a, b) => a + b, 0);
    mean = sum / array.length;

    if (array.length % 2 == 0) {
        median = (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
    } else {
        median = array[Math.floor(array.length / 2)];
    }

    return {median, mean}
}

console.log(stats([111, 231, 32124, 421, 321]));

const cadenaMasFrecuente = (array) => {
    let frecuencias = {};
    array.forEach(element => {
        if (frecuencias[element]) {
            frecuencias[element] += 1;
        } else {
            frecuencias[element] = 1;
        }
    });
    let max = 0;
    let maxString = "";
    for (const key in frecuencias) {
        if (frecuencias[key] > max) {
            max = frecuencias[key];
            maxString = key;
        }
    }
    return maxString;
}

console.log(cadenaMasFrecuente(["hola", "mundo", "soy", "un", "un", "un", "array"]))

const isPowerOfTwo = (n) => {
    let i = 0;
    while (i <= n) {
        if (2 ** i == n) {
            return true;
        }
        i++;
    }
    return false;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(9));

const numerosDescendientes = (array) => {
    let newArr = array.sort((a, b) => b - a);
    return newArr;
}

console.log(numerosDescendientes([1, 2, 3, 4, 5, 6, 7, 8, 9]));
