const uneDobraRetorna = ((arr, ...args) => {
    const newArr = args.map((i) => i * 2);
    return [...arr, ...newArr];
});

const r1 = uneDobraRetorna([1, 2, 3], 4, 4);
console.log(r1);

const r2 = uneDobraRetorna([2], 10, 4, 8);
console.log(r2);

const r3 = uneDobraRetorna([6, 8]);
console.log(r3);