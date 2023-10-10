//console.log(data)
const numsArray = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
const data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(numsArray)
console.log(numsArray.length)


console.log('--pirmas--')
const slicedData1 = data.slice(0, 1)
console.log(slicedData1)

console.log('--paskutinis--')
const slicedData2 = data.slice(26, 27)
console.log(slicedData2)

console.log('--antras--')
const slicedData3 = data.slice(1, 2)
console.log(slicedData3)

console.log('--priešpaskutinis--')
const slicedData4 = data.slice(25, 26)
console.log(slicedData4)

console.log('--aštuntas--')
const slicedData5 = data.slice(7, 8)
console.log(slicedData5)

console.log('--devintas nuo galo--')
const slicedData6 = data.slice(-9, -8)
console.log(slicedData6)

console.log('--vidurinis--')
const slicedData7 = data.slice(13, 14)
console.log(slicedData7)

console.log('--primi trys--')
const slicedData8 = data.slice(0, 3)
console.log(slicedData8)

console.log('--paskutiniai trys--')
const slicedData9 = data.slice(24, 27)
console.log(slicedData9)

console.log('--pirmi dešimt--')
const slicedData10 = data.slice(0, 10)
console.log(slicedData10)

console.log('--paskutiniai dešimt--')
const slicedData11 = data.slice(18, 27)
console.log(slicedData11)

console.log('--nuo 3 iki 8--')
const slicedData12 = data.slice(2, 8)
console.log(slicedData12)

console.log('--nuo 5 iki 9 pabaigos--')
const slicedData13 = data.slice(17, 22)
console.log(slicedData13)

console.log('--nuo 11 iki 19 pabaigos--')
const slicedData14 = data.slice(10, 19)
console.log(slicedData14)

console.log('--nuo 9 iki 17 nuo pabaigos--')
const slicedData15 = data.slice(8, 17)
console.log(slicedData15)

console.log('--visi be pirmo--')
const slicedData16 = data.slice(1, 27)
console.log(slicedData16)

console.log('--visi be pasklutinio--')
const slicedData17 = data.slice(0, 26)
console.log(slicedData17)

console.log('--be pirmu penkiu--')
const slicedData18 = data.slice(5, 27)
console.log(slicedData18)

console.log('--be paskutiniu penkiu--')
const slicedData19 = data.slice(0, 22)
console.log(slicedData19)

console.log('--visi iki vidurinio be vidurinio--')
const slicedData20 = data.slice(0, 13)
console.log(slicedData20)

console.log('--visi nuo viduriniojo be viduriniojo--')
const slicedData21 = data.slice(14, 27)
console.log(slicedData21)

console.log('--visi be pirmojo ir paskutiniojo--')
const slicedData22 = data.slice(1, 26)
console.log(slicedData22)

console.log('--be pirmu penkiu ir be paskutniu triju--')
const slicedData23 = data.slice(5, 24)
console.log(slicedData23)

console.log('--be pirmojo ir paskutiniu astuoniu--')
const slicedData24 = data.slice(1, 20)
console.log(slicedData24)

console.log('--be pirmu 7 ir paskutiniojo--')
const slicedData25 = data.slice(7, 26)
console.log(slicedData25)

console.log('--be pirmu 9 ir paskutiniu 12--')
const slicedData26 = data.slice(9, 15)
console.log(slicedData26)

console.log('--devyni nariai nuo vienuoliktojo--')
const slicedData27 = data.slice(10, 19)
console.log(slicedData27)

console.log('--dvylika nariu nuo 8--')
const slicedData28 = data.slice(7, 19)

console.log('--pirmi penki ir paskutiniai sesi--')
const slicedData29 = data.slice(7, 19)
console.log(slicedData29)


// Define the slices based on your tasks
const firstFive = data.slice(0, 5);
const lastSix = data.slice(-6);
const taskTwoIndexes = data.slice(3, 6).concat(data.slice(15, 18));

// Combine the results into a single array
const combinedArray = [...firstFive, ...lastSix, ...taskTwoIndexes];

console.log(combinedArray);
