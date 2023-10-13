const data = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

function createListItem(parentId, text) {
    const ul = document.getElementById(parentId);
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

console.groupCollapsed('4.1 Only numbers (number type data).')
console.log("4.1 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        createListItem('task-4-1', data[i]);
    }
}

console.log("4.1 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'number') {
        createListItem('task-4-1', item);
    }
});
console.groupEnd('4.1 Only numbers (number type data).')

console.groupCollapsed('4.2 Only text (string type data).')
console.log("4.2 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
        createListItem('task-4-2', data[i]);
    }
}

console.log("4.2 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'string') {
        createListItem('task-4-2', item);
    }
});
console.groupEnd('4.2 Only text (string type data).')


console.groupCollapsed('4.3 Only numbers (number type data) and exponent them by 4th degree.')
console.log("4.3 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        createListItem('task-4-3', data[i] ** 4);
    }
}

console.log("4.3 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'number') {
        createListItem('task-4-3', item ** 4);
    }
});
console.groupEnd('4.3 Only numbers (number type data) and exponent them by 4th degree.')

console.groupCollapsed('4.4 Only numbers (number type data) and add 55 to them.')
console.log("4.4 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        createListItem('task-4-4', data[i] + 55);
    }
}

console.log("4.4 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'number') {
        createListItem('task-4-4', item + 55);
    }
});
console.groupEnd('4.4 Only numbers (number type data) and add 55 to them.')

console.groupCollapsed('4.5 Only numbers (number type data) and dividing them by 2.')
console.log("4.5 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        createListItem('task-4-5', data[i] / 2);
    }
}

console.log("4.5 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'number') {
        createListItem('task-4-5', item / 2);
    }
});
console.groupEnd('4.5 Only numbers (number type data) and dividing them by 2.')

console.groupCollapsed('4.6 Only numbers (number type data) and add text before them, in the following format: "Number: 2".')
console.log("4.6 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        createListItem('task-4-6', `Number: ${data[i]}`);
    }
}

console.log("4.6 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'number') {
        createListItem('task-4-6', `Number: ${item}`);
    }
});
console.groupEnd('4.6 Only numbers (number type data) and add text before them, in the following format: "Number: 2".')

console.groupCollapsed('4.7 Only numbers (number type data) and add text with their own indexes.')
console.log("4.7 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        createListItem('task-4-7', `Index: ${i}, Number: ${data[i]}`);
    }
}

console.log("4.7 Map/forEach:");
data.forEach((item, index) => {
    if (typeof item === 'number') {
        createListItem('task-4-7', `Index: ${index}, Number: ${item}`);
    }
});
console.groupEnd('4.7 Only numbers (number type data) and add text with their own indexes.')

console.groupCollapsed('4.8 Only numbers (data type number) and multiply them by their own index.')
console.log("4.8 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        createListItem('task-4-8', data[i] * i);
    }
}

console.log("4.8 Map/forEach:");
data.forEach((item, index) => {
    if (typeof item === 'number') {
        createListItem('task-4-8', item * index);
    }
});
console.groupEnd('4.8 Only numbers (data type number) and multiply them by their own index.')

console.groupCollapsed('4.9 Only numbers (number data) and multiply them by the previous member.')
console.log("4.9 For Loop:");
for (let i = 1; i < data.length; i++) {
    if (typeof data[i] === 'number' && typeof data[i - 1] === 'number') {
        createListItem('task-4-9', data[i] * data[i - 1]);
    }
}

console.log("4.9 Map/forEach:");
data.forEach((item, index) => {
    if (typeof item === 'number' && index > 0 && typeof data[index - 1] === 'number') {
        createListItem('task-4-9', item * data[index - 1]);
    }
});
console.groupEnd('4.9 Only numbers (number data) and multiply them by the previous member.')

console.groupCollapsed('4.10 Only those numbers (number type data) which, when multiplied by 5, result in an answer greater than 350.')
console.log("4.10 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number' && data[i] * 5 > 350) {
        createListItem('task-4-10', data[i]);
    }
}

console.log("4.10 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'number' && item * 5 > 350) {
        createListItem('task-4-10', item);
    }
});
console.groupEnd('4.10 Only those numbers (number type data) which, when multiplied by 5, result in an answer greater than 350.')

console.groupCollapsed('4.11 Only text (string type data) and for each text write how many characters it has.')
console.log("4.11 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
        createListItem('task-4-11', `${data[i]} has ${data[i].length} characters`);
    }
}

console.log("4.11 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'string') {
        createListItem('task-4-11', `${item} has ${item.length} characters`);
    }
});
console.groupEnd('4.11 Only text (string type data) and for each text write how many characters it has.')

console.groupCollapsed('4.12 Text only (string data), but separating each letter of the word with a dash and making it uppercase.')
console.log("4.12 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
        const formatted = data[i].split('').join('-').toUpperCase();
        createListItem('task-4-12', formatted);
    }
}

console.log("4.12 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'string') {
        const formatted = item.split('').join('-').toUpperCase();
        createListItem('task-4-12', formatted);
    }
});
console.groupEnd('4.12 Text only (string data), but separating each letter of the word with a dash and making it uppercase.')

console.groupCollapsed('4.13 Only text (string type data), but replacing each first and third letter of the word with an underscore.')
console.log("4.13 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
        const formatted = data[i].replace(/(.)./g, '_$1');
        createListItem('task-4-13', formatted);
    }
}

console.log("4.13 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'string') {
        const formatted = item.replace(/(.)./g, '_$1');
        createListItem('task-4-13', formatted);
    }
});
console.groupEnd('4.13 Only text (string type data), but replacing each first and third letter of the word with an underscore.')

console.groupCollapsed('4.14 Only text (string type data) and write the word in reverse.')
console.log("4.14 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
        const reversed = data[i].split('').reverse().join('');
        createListItem('task-4-14', reversed);
    }
}

console.log("4.14 Map/forEach:");
data.forEach((item) => {
    if (typeof item === 'string') {
        const reversed = item.split('').reverse().join('');
        createListItem('task-4-14', reversed);
    }
});
console.groupEnd('4.14 Only text (string type data) and write the word in reverse.')

console.groupCollapsed('4.15 Only the text (string type data) and for each text write among which members in the array it is.')
console.log("4.15 For Loop:");
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
        const index = data.indexOf(data[i]);
        createListItem('task-4-15', `Word ${data[i]} is between ${index - 1} and ${index + 1} in the array`);
    }
}

console.log("4.15 Map/forEach:");
data.forEach((item, index) => {
    if (typeof item === 'string') {
        createListItem('task-4-15', `Word ${item} is between ${index - 1} and ${index + 1} in the array`);
    }
});
console.groupEnd('4.15 Only the text (string type data) and for each text write among which members in the array it is.')
