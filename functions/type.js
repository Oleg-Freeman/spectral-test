module.exports = (targetVal) => {
    const types = ['string', 'array', 'object', 'boolean', 'number'];
    if (!('type' in targetVal) && targetVal.control !== 'text.block') {
        return [
            {
                message: `Missing the type property`,
            },
        ];
    }
    const err = types.find((type) => type === targetVal.type);
    if (!err && targetVal.control !== 'text.block') {
        return [
            {
                message: `Not correct type`,
            },
        ];
    }
};
