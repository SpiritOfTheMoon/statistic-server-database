/**
 * Функция возвращает фрагмент запроса like...
 * @param keys массив UUID
 */
export function searchTextParser(searchText: string): string {

    const searchTextString: string = searchText !== ""
        ? `%${searchText.trim().split(" ").join("%")}%`
        : "%";
    return searchTextString;

}
