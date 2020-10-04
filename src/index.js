module.exports = function toReadable (number) {
    const toWord = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    }

    const dozensToWord = {
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    }

    let num = number.toString()
    while (num.length < 3) num = "0" + num 

    // zero
    if (num === '000') return 'zero'
    const result = []
    // hundreds
    if (num[0] != '0') {
        result.push(toWord[num[0]], 'hundred')
    }
    // teens (11 - 19)
    if (num[1] === '1') {
        result.push(toWord[num.slice(1)])
    // tens
    } else if (num[1] !== '0') {
        result.push(dozensToWord[num[1]])
    }
    // units
    if (num[2] !== '0' && num[1] !== '1') {
        result.push(toWord[num[2]])
    }

    return result.join(' ')
}
