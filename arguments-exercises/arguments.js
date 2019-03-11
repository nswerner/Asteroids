function sumArgs() {
    let sum = 0;

    for (let idx = 0; idx < arguments.length; idx++) {

        sum += arguments[idx];
    }

    return sum;
}

function sumRest(...args) {
    let sum = 0;

    for (let idx = 0; idx < args.length; idx ++ ) {

        sum += args[idx];
    }

    return sum;
}


Function.prototype.myBind = function(ctx, ...bindArgs) {
    return (...callArgs) => {
        return this.apply(ctx, bindArgs.concat(callArgs));
    };
};

Function.prototype.myBindArgs = function() {
    let args = Array.from(arguments);
    let that = this;
    return function () {
        args = args.concat(Array.from(arguments));
        return that.apply(args[0], args.slice(1));
    };
};

function curriedSum(numArgs) {
    const numbers = [];
    const _curriedSum = (num) => {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return numbers.reduce(function(accum, ele) {
                return accum + ele;
            });
        } else {
            return _curriedSum;
        }
    };
    return _curriedSum;
}

Function.prototype.curry = function(numArgs) {

    const args = [];
    const that = this;
    const _curry = function (arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that.apply(null, args);
        } else {

            return _curry;
        }
    };

    return _curry;
};

Function.prototype.curry = function(numArgs) {
    const args = [];
    const that = this;
    const _curry = function (arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that.call(null, ...args);
        } else {

            return _curry;
        }
    };

    return _curry;
};






