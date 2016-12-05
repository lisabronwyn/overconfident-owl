// Implement a version of range and sum (which you can then copy and use in your
// future Kata to make them smaller).

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
