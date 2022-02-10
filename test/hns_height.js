
const encoding = require('./encoding');
const enforce = require('./enforce');

var h = pushU32(106613);
console.log(h);
var hString = h.toString();
console.log(hString);

/**
   * Push a uint32.
   * @param {Number} num
   */

function pushU32(num) {
    assert((num >>> 0) === num);
    const item = Buffer.allocUnsafe(4);
    const writeU32 = _write(encoding.writeU32, 4);
    writeU32(item, num, 0);
    // this.push(item);
    return item;
}

function _write(func, size) {
    console.log(size);
    return function (data, num, off) {
        enforce(Buffer.isBuffer(data), 'data', 'buffer');
        enforce((off >>> 0) === off, 'off', 'integer');
        // console.log(data.length);

        if (off + size > data.length)
            throw new EncodingError(off, 'Out of bounds write');

        return func(data, num, off);
    };
}



/*
 * Assert
 */

function assert(value, message) {
    if (!value) {
        let generatedMessage = false;

        if (arguments.length === 0) {
            message = 'No value argument passed to `assert()`.';
            generatedMessage = true;
        } else if (message == null) {
            message = 'Assertion failed.';
            generatedMessage = true;
        } else if (isError(message)) {
            throw message;
        }

        throw new AssertionError({
            message,
            actual: value,
            expected: true,
            operator: '==',
            generatedMessage,
            stackStartFn: assert
        });
    }
}