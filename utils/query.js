const isArray = (item) => {
    return item !== null && item.length && typeof item === 'object';
}

export const mountQuery = (
    queries,
    useJoin,
) => {
    return Object.entries(queries).reduce((acc, [key, value]) => {
        const reduceTag = acc === '?' ? '' : '&';

        if (value === null) {
            return `${acc}`;
        }

        if (isArray(value) && useJoin) {
            return `${acc}${reduceTag}${key}=${value.join(',')}`;
        }

        if (isArray(value) && !useJoin) {
            const valueMap = value.map((value) => `${key}=${value}`);
            return `${acc}${reduceTag}${valueMap.join('&')}`;
        }

        const keyValue = `${key}=${value}`;
        return `${acc}${reduceTag}${keyValue}`;
    }, '?');
};
