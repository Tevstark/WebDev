const getProperCase =  (name) => {
    let result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return result
}
console.log(getProperCase("hOt wHeelS"));