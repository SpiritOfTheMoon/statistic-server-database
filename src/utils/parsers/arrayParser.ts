export function arrayParser(array: string[], attribute: string): string {

    let answer = "";
    answer += `${attribute} in (`;
    // eslint-disable-next-line no-restricted-syntax
    for (const it of array) {

        answer += `'${it}', `;

    }
    answer = answer.slice(0, answer.length - 2);
    answer += `) `;
    return answer;

}
