exports.sum = (...numbers) =>{
    let result = 0;
    console.log(numbers);
    numbers.forEach(item => {
        result += item;
    });
    return result;
}

exports.avg = (...numbers) => {
    console.log(numbers);
    let result = 0;
    numbers.forEach(item => {
        result +=item;
    });
    return result/numbers.length;
}