let x = [1, 2, 5, 6, 88, 5];
let result = 0;
for (let i = 0; i < x.length; i++) {
    result += x[i];
}
console.log(result);

let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 200];
let result2 = 0;
for (let i = 0; i < num.length; i++){
    result2 += num[i] * [10];
}
console.log(result2);

let digit = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result3 = 0;
for (let i=0; i < digit.length; i++) {
    if (digit[i] % 2 === 0){
        console.log(digit[i])
        console.log(result3)
    }
}
