const randomNum5 = 5;

function funcForTest(num) {
    return num * randomNum5;
}

function myCacheFunc(callback) {
    const cache = new Map();
    const maxCache = 10;
    return function (item) {
        if (cache.size >= maxCache) {
            const keys = cache.keys();
            for (const key of keys) {
                cache.delete(key);
                break;
            }
        }
        if (!cache.get(item)) {
            cache.set(item, callback.call(this, item));
        }
        return cache.get(item);
    };
}

const foo = myCacheFunc(funcForTest);

const a = foo;
a(randomNum5);
// const d = foo(2);
// const b = foo(3);
// const c = foo(4);
// const r = foo(6);
// const t = foo(7);
// const u = foo(8);
// const i = foo(9);
// const o = foo(10);
// const n = foo(11);
// const m = foo(12);
// const mc = foo(13);
