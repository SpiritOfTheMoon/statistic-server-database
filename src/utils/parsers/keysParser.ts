/**
 * Функция возвращает фрагмент запроса in(value1, ...)
 * @param keys массив UUID
 * @param columnName наименование столбца
 */
export function keysParser(keys: string[], columnName: string): string {

    let result = "";
    result += `${columnName} in (`;
    result += keys.map((key: string) => {

        if (key === ""){

            throw new Error(`Ключ не может быть равен ""`);
        
        }
        return `'${key}'`
    
    });
    result += `) `;
    return result;

}
