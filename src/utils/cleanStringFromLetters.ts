export function cleanFromLetters(string: string) {
    return string.replace(/[^0-9]/g, '');
}

export function removeLettersFromArray(array: any[]) {
    let cleanedArray = array.map(function(element) {
        if (typeof element === 'string') {
            let cleanedElement = element.replace(/[^0-9]/g, '');
            return cleanedElement.length > 0 ? cleanedElement : '0';
        }
        return element;
    });
    return cleanedArray;
}