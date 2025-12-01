function deepCopy(obj) {
    if (!obj || typeof obj != 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        let res = [];
        for(let i = 0; i < obj.length; i++) {
            res.push(deepCopy(obj[i]));
        }
        return res;
    }
    let res = {};
    for(let key in obj) {
        res[key] =deepCopy(obj[key])
    }
    return res;
}

// 测试1: 基本数据类型
const num = 123;
const str = 'hello';
const bool = true;
const nul = null;
const undef = undefined;

console.log('测试1 - 基本数据类型:');
console.log(deepCopy(num) === num);  // true
console.log(deepCopy(str) === str);  // true
console.log(deepCopy(bool) === bool);  // true
console.log(deepCopy(nul) === nul);  // true
console.log(deepCopy(undef) === undef);  // true

// 测试2: 简单对象
const simpleObj = { a: 1, b: 'text', c: true };
const copiedSimpleObj = deepCopy(simpleObj);
console.log('\n测试2 - 简单对象:');
console.log(copiedSimpleObj.a === simpleObj.a);  // true
console.log(copiedSimpleObj.b === simpleObj.b);  // true
console.log(copiedSimpleObj.c === simpleObj.c);  // true
console.log(copiedSimpleObj !== simpleObj);  // true

// 测试3: 嵌套对象
const nestedObj = {
    a: 1,
    b: {
        c: [1, 2, 3],
        d: { e: 'deep' }
    }
};
const copiedNestedObj = deepCopy(nestedObj);
console.log('\n测试3 - 嵌套对象:');
console.log(copiedNestedObj.b.c[0] === nestedObj.b.c[0]);  // true
console.log(copiedNestedObj.b.d.e === nestedObj.b.d.e);  // true
console.log(copiedNestedObj.b.c !== nestedObj.b.c);  // true
console.log(copiedNestedObj.b.d !== nestedObj.b.d);  // true

// 测试4: 数组
const arr = [1, 'a', { b: 2 }, [3, 4]];
const copiedArr = deepCopy(arr);
console.log('\n测试4 - 数组:');
console.log(copiedArr[0] === arr[0]);  // true
console.log(copiedArr[1] === arr[1]);  // true
console.log(copiedArr[2].b === arr[2].b);  // true
console.log(copiedArr[3][0] === arr[3][0]);  // true
console.log(copiedArr !== arr);  // true
console.log(copiedArr[2] !== arr[2]);  // true
console.log(copiedArr[3] !== arr[3]);  // true