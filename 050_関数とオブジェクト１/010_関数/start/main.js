function fn(a, b = 1) {
    console.log(arguments)
    console.log(a, b)
    return a;
}

let c = fn(1, undefined);
console.log(c)

