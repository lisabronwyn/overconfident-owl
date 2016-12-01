// Array.range(start, count) should return an array containing 'count' numbers from 'start' to
// 'start + count' Example: Array.range(0, 3) returns [0, 1, 2]
//
// Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3
// Example: Array.range(-1,4).sum() should return 2//

Array.range = function(start, count) {
    var arr = [], i;
    for (i = 0; i < count; i++) {
        arr.push(start + i);
    }
    return arr;
};

Array.prototype.sum = function() {
    var _length = this.length,
        sum = 0;

    for (var i = 0; i < _length; i += 1) {
        sum += this[i];
    }

    return sum;
};
