console.groupCollapsed('pop-push-slice-splice_TASKS')
const numsArray = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
//indexes          0  1    2      3   4     5      6      7     8    9      10      11   12  13    14  15   16   17     18       19   20     21   22

console.log(numsArray);
console.log(numsArray.length);

console.log('--1.1. Eliminate first element--');
const sliceFirst = numsArray.slice(1);
console.log(sliceFirst);

console.log('--1.2. Eliminate last element--');
const sliceLast = numsArray.slice(0, numsArray.length - 1);
console.log(sliceLast);

console.log('--1.3. Find and eliminate the middle array element--');
const middleIndex = Math.floor(numsArray.length / 2);
const newArrayWithoutMiddle = [...numsArray];
newArrayWithoutMiddle.splice(middleIndex, 1);
console.log(newArrayWithoutMiddle);

console.log('--1.4. Eliminate next to last element--');
const newArrayWithoutNextToLast = numsArray.slice(0, numsArray.length - 2);
console.log(newArrayWithoutNextToLast);

console.log('--1.5. Eliminate second element--');
const newArrayWithoutSecond = numsArray.slice(0, 1).concat(numsArray.slice(2));
console.log(newArrayWithoutSecond);

console.log('--1.6. Eliminate elements 7 and 8--');
const newArrayWithoutSeventhAndEighth = numsArray.slice(0, 7).concat(numsArray.slice(9));
console.log(newArrayWithoutSeventhAndEighth);

console.log('--1.7 Eliminate 4th, 5th, and 6th elements from end on--');
const newArrayWithout4th5th6thToLast = numsArray.slice(0, numsArray.length - 6);
console.log(newArrayWithout4th5th6thToLast);

console.log('--1.8 Eliminate 3rd Array element by replacing it with "888"--');
const newArray888for3rd = [...numsArray];
newArray888for3rd.splice(2, 1, 888);
console.log(newArray888for3rd);

console.log('--1.9 Eliminate 10th Array element by replacing it with numbers "33", "789", "6543"--');
const newArray3inFor10th = [...numsArray];
newArray3inFor10th.splice(9, 1, 33, 789, 6543);
console.log(newArray3inFor10th);

console.log('--1.10 Eliminate last Array element by replacing it with numbers "321", "654", "987"--');
const newArray3inForLast = [...numsArray];
newArray3inForLast.splice(numsArray.length - 1, 1, 321, 654, 987);
console.log(newArray3inForLast);

console.log('--1.11 Insert number "11" between 1st and 2nd Array elements--');
const newArray11Insert = [...numsArray];
newArray11Insert.splice(1, 0, 11);
console.log(newArray11Insert);

console.log('--1.12 Insert number "1" between 13th and 14th Array elements--');
const newArray1Between2 = [...numsArray];
newArray1Between2.splice(13, 0, 1);
console.log(newArray1Between2);

console.log('--1.13 Insert number "1" between last and next to last Array elements--');
const newArray1BetweenLast = [...numsArray];
newArray1BetweenLast.splice(numsArray.length - 1, 0, 1);
console.log(newArray1BetweenLast);

console.log('--1.14 Insert numbers "1", "2", "3" to start the Array--');
const newArrayStart123 = [...numsArray];
newArrayStart123.splice(0, 0, 1, 2, 3);
console.log(newArrayStart123);

console.log('--1.15 Insert numbers "-333", "-321", "-312" to end the Array--');
const newArray3ToEnd = [...numsArray];
newArray3ToEnd.splice(numsArray.length, 0, -333, -321, -312);
console.log(newArray3ToEnd);

console.log('--1.16 Insert number "0" to the middle of Array--');
const newArray0ToMiddle = [...numsArray];
const middleIndex2 = Math.floor(newArray0ToMiddle.length / 2);
newArray0ToMiddle.splice(middleIndex2, 0, 0);
console.log(newArray0ToMiddle);

console.log('--1.17 Eliminate the 1st Array element--');
const newArrayWithoutFirst = numsArray.slice(1);
console.log(newArrayWithoutFirst);

console.log('--1.18 Eliminate last Array element--');
const newArrayEliminateLast = numsArray.slice(0, numsArray.length - 1);
console.log(newArrayEliminateLast);

console.log('--1.19 Add element "start" to the start of Array--');
const newArrayStart = ['start', ...numsArray];
console.log(newArrayStart);

console.log('--1.20 Add element "end" as the last Array element--');
const newArrayEndToEnd = [...numsArray, 'end']; 
console.log(newArrayEndToEnd);


console.groupEnd();




//['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
