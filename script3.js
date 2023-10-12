const arr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

console.log('3.1. Get only positive numbers.')
const positiveNumbers = arr.filter(item => typeof item === 'number' && item > 0);
console.log(positiveNumbers);

console.log('3.2. Get only negative numbers.')
const negativeNumbers = arr.filter(item => typeof item === 'number' && item < 0);
console.log(negativeNumbers);

console.log('3.3. Get only numbers that are divisible by 2.')
const divisibleBy2 = arr.filter(item => typeof item === 'number' && item % 2 === 0);
console.log(divisibleBy2);

console.log('3.4. Get only numbers that are divisible by 3.')
const divisibleBy3 = arr.filter(item => typeof item === 'number' && item % 3 === 0);
console.log(divisibleBy3);

console.log('3.5. Get only numbers that are divisible by 5.')
const divisibleBy5 = arr.filter(item => typeof item === 'number' && item % 5 === 0);
console.log(divisibleBy5);

console.log('3.6. Get only numbers that are divisible by 11.')
const divisibleBy11 = arr.filter(item => typeof item === 'number' && item % 11 === 0);
console.log(divisibleBy11);

console.log('3.7. Get only numbers that are divisible by 31.')
const divisibleBy31 = arr.filter(item => typeof item === 'number' && item % 31 === 0);
console.log(divisibleBy31);

console.log('3.8. Get only numbers that are divisible by 2 and 3.')
const divisibleBy2And3 = arr.filter(item => typeof item === 'number' && item % 2 === 0 && item % 3 === 0);
console.log(divisibleBy2And3);

console.log('3.9. Get only numbers that are divisible by 3 and 7.')
const divisibleBy3And7 = arr.filter(item => typeof item === 'number' && item % 3 === 0 && item % 7 === 0);
console.log(divisibleBy3And7);

console.log('3.10. Get only numbers that are divisible by 5 and 9.')
const divisibleBy5And9 = arr.filter(item => typeof item === 'number' && item % 5 === 0 && item % 9 === 0);
console.log(divisibleBy5And9);

console.log('3.11. Get only numbers that are divisible by 5 and 11.')
const divisibleBy5And11 = arr.filter(item => typeof item === 'number' && item % 5 === 0 && item % 11 === 0);
console.log(divisibleBy5And11);

console.log('3.12. Get only numbers that are divisible by 2, 8, and 12.')
const divisibleBy2And8And12 = arr.filter(item => typeof item === 'number' && item % 2 === 0 && item % 8 === 0 && item % 12 === 0);
console.log(divisibleBy2And8And12);

console.log('3.13. Get only numbers that are divisible by 2 or 3.');
const divisibleBy2Or3 = arr.filter(num => typeof num === 'number' && (num % 2 === 0 || num % 3 === 0));
console.log(divisibleBy2Or3);

console.log('3.14. Get only numbers that are divisible by 3 or 5.')
const divisibleBy3Or5 = arr.filter(num => typeof num === 'number' && (num % 3 === 0 || num % 5 === 0));
console.log(divisibleBy3Or5);

console.log('3.15. Get only numbers that are divisible by 5 or 6.')
const divisibleBy5Or6 = arr.filter(num => typeof num === 'number' && (num % 5 === 0 || num % 6 === 0));
console.log(divisibleBy5Or6);

console.log('3.16. Get only numbers that are divisible by 7 or 8.')
const divisibleBy7Or8 = arr.filter(num => typeof num === 'number' && (num % 7 === 0 || num % 8 === 0));
console.log();

console.log('3.17. Get only numbers that are divisible by 9 or 13.')
const divisibleBy9Or13 = arr.filter(num => typeof num === 'number' && (num % 9 === 0 || num % 13 === 0));
console.log(divisibleBy9Or13);

console.log('3.18. Get only numbers that are divisible by 2, 3, or 5.')
const divisibleBy2Or3Or5 = arr.filter(num => typeof num === 'number' && (num % 2 === 0 || num % 3 === 0 || num % 5 === 0));
console.log(divisibleBy2Or3Or5);

console.log('3.19. Get only numbers that are divisible by 5, 7, or 9.')
const divisibleBy5Or7Or9 = arr.filter(num => typeof num === 'number' && (num % 5 === 0 || num % 7 === 0 || num % 9 === 0));
console.log(divisibleBy5Or7Or9);

console.log('3.20. Get only numbers that are divisible by 7, 8, or 11.')
const divisibleBy7Or8Or11 = arr.filter(num => typeof num === 'number' && (num % 7 === 0 || num % 8 === 0 || num % 11 === 0));
console.log(divisibleBy7Or8Or11);

console.log('3.21. Get only numbers that are divisible by 9, 12, or 13.')
const divisibleBy9Or12Or13 = arr.filter(num => typeof num === 'number' && (num % 9 === 0 || num % 12 === 0 || num % 13 === 0));
console.log(divisibleBy9Or12Or13);

console.log('3.22. Get only numbers that are greater than 100.')
const greaterThan100 = arr.filter(num => typeof num === 'number' && num > 100);
console.log(greaterThan100);

console.log('3.23. Only get numbers that are greater than 555.')
const greaterThan555 = arr.filter(num => typeof num === 'number' && num > 555);
console.log(greaterThan555);

console.log('3.24. Only get numbers that are greater than or equal to 888.')
const greaterThanOrEqualTo888 = arr.filter(num => typeof num === 'number' && num >= 888);
console.log(greaterThanOrEqualTo888);

console.log('3.25. Only get numbers that are greater than or equal to 6789.')
const greaterThanOrEqualTo6789 = arr.filter(num => typeof num === 'number' && num >= 6789);
console.log(greaterThanOrEqualTo6789);

console.log('3.26. Get only numbers that are less than 50.')
const lessThan50 = arr.filter(num => typeof num === 'number' && num < 50);
console.log(lessThan50);

console.log('3.27. Only get numbers that are less than 1000.')
const lessThan1000 = arr.filter(num => typeof num === 'number' && num < 1000);
console.log(lessThan1000);

console.log('3.28. Only get numbers that are less than or equal to -1.')
const lessThanOrEqualToMinus1 = arr.filter(num => typeof num === 'number' && num <= -1);
console.log(lessThanOrEqualToMinus1);

console.log('3.29. Only get numbers that are less than or equal to -5564.')
const lessThanOrEqualToMinus5564 = arr.filter(num => typeof num === 'number' && num <= -5564);
console.log(lessThanOrEqualToMinus5564);

console.log('3.30. Get only numbers that are less than 1000 and greater than 500.')
const between500And1000 = arr.filter(num => typeof num === 'number' && num > 500 && num < 1000);
console.log(between500And1000);

console.log('3.31. Only get numbers that are less than 100 and greater than 0.')
const between0And100 = arr.filter(num => typeof num === 'number' && num > 0 && num < 100);
console.log(between0And100);

console.log('3.32. Only get numbers that are less than 0 and greater than -50.')
const betweenMinus50And0 = arr.filter(num => typeof num === 'number' && num > -50 && num < 0);
console.log(betweenMinus50And0);

console.log('3.33. Only get numbers that are less than or equal to 0 and greater than -100.')
const betweenMinus100And0 = arr.filter(num => typeof num === 'number' && num >= -100 && num <= 0);
console.log(betweenMinus100And0);

console.log('3.34. Only get numbers that are greater than or equal to 0 and less than 55.')
const between0And55 = arr.filter(num => typeof num === 'number' && num >= 0 && num < 55);
console.log(between0And55);

console.log('3.35. Only get numbers greater than or equal to 444 and less than or equal to 654.')
const between444And654 = arr.filter(num => typeof num === 'number' && num >= 444 && num <= 654);
console.log(between444And654);

console.log('3.36. Get only positive numbers that are divisible by 2.')
const positiveDivisibleBy2 = arr.filter(num => typeof num === 'number' && num > 0 && num % 2 === 0);
console.log(positiveDivisibleBy2);

console.log('3.37. Get only positive numbers that are divisible by 3.')
const positiveDivisibleBy3 = arr.filter(num => typeof num === 'number' && num > 0 && num % 3 === 0);
console.log(positiveDivisibleBy3);

console.log('3.38. Get only negative numbers that are divisible by 4.')
const negativeDivisibleBy4 = arr.filter(num => typeof num === 'number' && num < 0 && num % 4 === 0);
console.log(negativeDivisibleBy4);

console.log('3.39. Get only negative numbers that are divisible by 111.')
const negativeDivisibleBy111 = arr.filter(num => typeof num === 'number' && num < 0 && num % 111 === 0);
console.log(negativeDivisibleBy111);

console.log(' 3.40. Get only numbers greater than 500 that are divisible by 2.')
const numbersGreaterThan500DivisibleBy2 = arr.filter(item => typeof item === 'number' && item > 500 && item % 2 === 0);
console.log(numbersGreaterThan500DivisibleBy2);

console.log(' 3.41. Only get numbers that are greater than 1000 and that are divisible by 3.')
const numbersGreaterThan1000DivisibleBy3 = arr.filter(item => typeof item === 'number' && item > 1000 && item % 3 === 0);
console.log(numbersGreaterThan1000DivisibleBy3);

console.log(' 3.42. Only get numbers that are less than 1000 and that are divisible by 9.')
const numbersLessThan1000DivisibleBy9 = arr.filter(item => typeof item === 'number' && item < 1000 && item % 9 === 0);
console.log(numbersLessThan1000DivisibleBy9);

console.log(' 3.43. Only get numbers that are less than 500 and that are divisible by 2.')
const numbersLessThan500DivisibleBy2 = arr.filter(item => typeof item === 'number' && item < 500 && item % 2 === 0);
console.log(numbersLessThan500DivisibleBy2);

console.log(' 3.44. Only get numbers greater than or equal to 33 that are divisible by 3.')
const numbersGreaterThanOrEqual33DivisibleBy3 = arr.filter(item => typeof item === 'number' && item >= 33 && item % 3 === 0);
console.log(numbersGreaterThanOrEqual33DivisibleBy3);

console.log(' 3.45. Only get numbers greater than or equal to 444 that are divisible by 12.')
const numbersGreaterThanOrEqual444DivisibleBy12 = arr.filter(item => typeof item === 'number' && item >= 444 && item % 12 === 0);
console.log(numbersGreaterThanOrEqual444DivisibleBy12);

console.log(' 3.46. Only get numbers that are less than or equal to 155 and that are divisible by 5.')
const numbersLessThanOrEqual155DivisibleBy5 = arr.filter(item => typeof item === 'number' && item <= 155 && item % 5 === 0);
console.log(numbersLessThanOrEqual155DivisibleBy5);

console.log(' 3.47. Only get numbers that are less than or equal to -333 and that are divisible by 9.')
const numbersLessThanOrEqualNegative333DivisibleBy9 = arr.filter(item => typeof item === 'number' && item <= -333 && item % 9 === 0);
console.log(numbersLessThanOrEqualNegative333DivisibleBy9);

console.log(' 3.48. Only numbers greater than 100, less than 500, and divisible by 5 are returned.')
const numbersBetween100And500DivisibleBy5 = arr.filter(item => typeof item === 'number' && item > 100 && item < 500 && item % 5 === 0);
console.log(numbersBetween100And500DivisibleBy5);

console.log(' 3.49. Get only numbers that are greater than or equal to 888, less than 1000, and divisible by 2.')
const numbersBetween888And1000DivisibleBy2 = arr.filter(item => typeof item === 'number' && item >= 888 && item < 1000 && item % 2 === 0);
console.log(numbersBetween888And1000DivisibleBy2);

console.log(' 3.50. Only get numbers that are less than or equal to 888, greater than or equal to -333, divisible by 3, and not zero.')
const numbersBetweenMinus333And888DivisibleBy3 = arr.filter(item => typeof item === 'number' && item >= -333 && item <= 888 && item % 3 === 0 && item !== 0);
console.log(numbersBetweenMinus333And888DivisibleBy3);

console.log(' 3.51. Get numbers only.')
const numbersOnly = arr.filter(item => typeof item === 'number');
console.log(numbersOnly);

console.log('3.52. Get only texts (string)');
const textsOnly = arr.filter(item => typeof item === 'string');
console.log(textsOnly);

console.log('3.53. Get only texts (string) that have more than 5 characters');
const textsMoreThan5Chars = arr.filter(item => typeof item === 'string' && item.length > 5);
console.log(textsMoreThan5Chars);

console.log('3.54. Get only texts (string) that have less than or exactly 5 characters');
const textsLessThanOrEqual5Chars = arr.filter(item => typeof item === 'string' && item.length <= 5);
console.log(textsLessThanOrEqual5Chars);

console.log('3.55. Get only texts (string) that have less than 7 characters');
const textsLessThan7Chars = arr.filter(item => typeof item === 'string' && item.length < 7);
console.log(textsLessThan7Chars);

console.log('3.56. Get only texts (string) that have the letter t');
const textsContainingT = arr.filter(item => typeof item === 'string' && item.includes('t'));
console.log(textsContainingT);

console.log('3.57. Get only texts (string) that contain the letter y');
const textsContainingY = arr.filter(item => typeof item === 'string' && item.includes('y'));
console.log(textsContainingY);

console.log('3.58. Get only texts (string) that contain letters e or a');
const textsContainingEOrA = arr.filter(item => typeof item === 'string' && (item.includes('e') || item.includes('a')));
console.log(textsContainingEOrA);

console.log('3.59. Get only texts (string) that contain the letters t and i');
const textsContainingTAndI = arr.filter(item => typeof item === 'string' && item.includes('t') && item.includes('i'));
console.log(textsContainingTAndI);

console.log('3.60. Get only texts (string) that contain the letter t but do not contain the letter k');
const textsContainingTNotK = arr.filter(item => typeof item === 'string' && item.includes('t') && !item.includes('k'));
console.log(textsContainingTNotK);

console.log('3.61. Get only texts (string) that contain the letter a but do not contain the letter s');
const textsContainingANotS = arr.filter(item => typeof item === 'string' && item.includes('a') && !item.includes('s'));
console.log(textsContainingANotS);

console.log('3.62. Get only texts (string) that have more than one letter t');
const textsMoreThanOneT = arr.filter(item => typeof item === 'string' && item.split('t').length - 1 > 1);
console.log(textsMoreThanOneT);

console.log('3.63. Get only texts (string) that have the combination of letters st');
const textsContainingST = arr.filter(item => typeof item === 'string' && item.includes('st'));
console.log(textsContainingST);

console.log('3.64. Get only texts (string) that contain the combination of letters nd');
const textsContainingND = arr.filter(item => typeof item === 'string' && item.includes('nd'));
console.log(textsContainingND);

console.log('3.65. Get only texts (string) that do not contain the letter s');
const textsNotContainingS = arr.filter(item => typeof item === 'string' && !item.includes('s'));
console.log(textsNotContainingS);

console.log('3.66. Get only texts (string) that do not contain the letter t');
const textsNotContainingT = arr.filter(item => typeof item === 'string' && !item.includes('t'));
console.log(textsNotContainingT);

console.log('3.67. Get only texts (string) that do not contain the letters r and l');
const textsNotContainingRandL = arr.filter(item => typeof item === 'string' && !item.includes('r') && !item.includes('l'));
console.log(textsNotContainingRandL);

console.log('3.68. Get only texts (string) that start with a number');
const textsStartingWithNumber = arr.filter(item => typeof item === 'string' && /^\d/.test(item));
console.log(textsStartingWithNumber);

console.log('3.69. Get only texts (string) that start with the letter s');
const textsStartingWithS = arr.filter(item => typeof item === 'string' && item.startsWith('s'));
console.log(textsStartingWithS);

console.log('3.70. Get only texts (string) that start with the letter o');
const textsStartingWithO = arr.filter(item => typeof item === 'string' && item.startsWith('o'));
console.log(textsStartingWithO);

console.log('3.71. Get only texts (string) that end with the letter d');
const textsEndingWithD = arr.filter(item => typeof item === 'string' && item.endsWith('d'));
console.log(textsEndingWithD);

console.log('3.72. Get only texts (string) that end with the letter s');
const textsEndingWithS = arr.filter(item => typeof item === 'string' && item.endsWith('s'));
console.log(textsEndingWithS);

console.log('3.73. Get only texts (string) that have more than 4 characters and contain the letter o');
const textsMoreThan4CharsWithO = arr.filter(item => typeof item === 'string' && item.length > 4 && item.includes('o'));
console.log(textsMoreThan4CharsWithO);

console.log('3.74. Get only texts (string) that have more or exactly 5 characters and contain the letter a');
const textsExactly5CharsWithA = arr.filter(item => typeof item === 'string' && item.length >= 5 && item.includes('a'));
console.log(textsExactly5CharsWithA);

console.log('3.75. Get only texts (string) that have an even number of characters');
const textsEvenLength = arr.filter(item => typeof item === 'string' && item.length % 2 === 0);
console.log(textsEvenLength);

console.log('3.76. Get only texts (string) that have an odd number of characters and contain the letter s');
const textsOddLengthWithS = arr.filter(item => typeof item === 'string' && item.length % 2 !== 0 && item.includes('s'));
console.log(textsOddLengthWithS);

console.log('3.77. Get only texts (string) whose third character is a');
const textsWithThirdCharA = arr.filter(item => typeof item === 'string' && item.length >= 3 && item.charAt(2) === 'a');
console.log(textsWithThirdCharA);

console.log('3.78. Get only text (string) whose fourth character is l');
const textWithFourthCharL = arr.filter(item => typeof item === 'string' && item.length >= 4 && item.charAt(3) === 'l');
console.log(textWithFourthCharL);

console.log('3.79. Get only texts (string) whose fifth character is not t and which have more than 4 characters');
const textsFifthCharNotT = arr.filter(item => typeof item === 'string' && item.length > 4 && item.charAt(4) !== 't');
console.log(textsFifthCharNotT);

console.log('3.80. Get only texts (string) that do not have the first character as "e," have less than 6 characters, and do not start with a number');
const textsFirstCharNotE = arr.filter(item => (
  typeof item === 'string' &&
  item.length < 6 &&
  item.charAt(0) !== 'e' &&
  !/^\d/.test(item)
));
console.log(textsFirstCharNotE);
