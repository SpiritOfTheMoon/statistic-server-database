export function limitParser(count: number): string {

    return `FETCH NEXT ${count} ROWS ONLY`;

}
