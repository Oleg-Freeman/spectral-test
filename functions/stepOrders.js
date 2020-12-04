module.exports = (targetVal) => {
    const i = targetVal.stepOrders.indexOf('[');
    if (i === -1)
        return [
            {
                message:
                    'stepOrders property must have array of steps or empty array',
            },
        ];
    const str = targetVal.stepOrders.slice(i);
    const q = str.match(/'/g);
    if (q.length % 2 && q.length !== 0)
        return [
            {
                message: 'quotes are missing',
            },
        ];
    const arr = eval(str);
    if (arr.length !== 0) {
        for (const el of arr) {
            if (!(el in targetVal.properties))
                return [
                    {
                        message: 'No such step in properties',
                    },
                ];
        }
    }
};
