module.exports = (targetVal) => {
    if (
        !('items' in targetVal) &&
        (targetVal.type === 'array' || targetVal.control === 'radio.group') &&
        targetVal.control !== 'register'
    ) {
        return [
            {
                message: `Missing the items property`,
            },
        ];
    }
};
