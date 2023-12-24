export function generateRandomArray(count: number) {
    const randomArray = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 100); // Генерация случайного числа от 0 до 99
        randomArray.push(randomNumber);
    }
    return randomArray;
}

export function generateRandomStringArray(count: number) {
    const array = [];

    // Генерируем случайное количество строк

    // Заполняем массив случайными строками
    for (let i = 0; i < count; i++) {
        const randomString = Math.random().toString(36).substring(7);
        array.push(`\`${randomString}\``);
    }

    return array;
}