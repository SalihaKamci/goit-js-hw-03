function makeArray(firstArray, secondArray, maxLength) {
    let newArray = [];
    if (firstArray.length + secondArray.length <= maxLength) {
        return newArray = firstArray.concat(secondArray);
    }
    else {
        if (maxLength === 0) {
            return newArray;
        }
        newArray = newArray.concat(firstArray);
        let a = maxLength - newArray.length;
        for (let i = 0; i < a; i++) {
            newArray.push(secondArray[i]);
        }
        return newArray;
    }
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []