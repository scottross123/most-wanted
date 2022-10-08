const units = {
    //'height': ['\'', '\"'],
    'height': `in`,
    'weight': 'lb',
    'age': '',
}

const getRange = (min: number | undefined | null, max: number | undefined | null, unit: 'height' | 'weight' | 'age' ): string | undefined => {
    if (min === undefined || max === undefined || min === null || max === null) return;
    if (min === max) return `${min} ${units[unit]}`;
    return `${min} ${units[unit]} - ${max} ${units[unit]}`;
}

export default getRange;