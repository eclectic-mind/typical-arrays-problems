exports.min = function minimum(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let minimum = array[0];
    array.forEach((item) => {
        item < minimum ? minimum = item : minimum;
    });
    return minimum;
}

exports.max = function maximum(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let maximum = array[0];
    array.forEach((item) => {
        item > maximum ? maximum = item : maximum;
    });
    return maximum;
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let sum = array.reduce(function (prev, curr) {
        return prev + curr;
    });
    return sum / array.length;
}
