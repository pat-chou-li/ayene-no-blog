function curry(fn) {
    return function curriedFn(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }
        return (...moreargs) => curriedFn.apply(this, args.concat(moreargs))
    }
}

function add(a, b, c){
    console.log(a, b, c)
    return a + b + c;

}

const curriedAdd = curry(add);
curriedAdd(1)(2, 3)