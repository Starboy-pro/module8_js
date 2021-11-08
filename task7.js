let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
let k2;
let k1;
for (let i = 0; i < 11; i += 1) {
    if (i % 2 == 0) {
        k1 += 1;
    }
    else {
        k2 += 1;
    }
}
console.log(k1);
console.log(k2);