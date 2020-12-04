module.exports = (targetVal) => {
    if (
        !('properties' in targetVal) &&
        targetVal.type === 'object' &&
        targetVal.control !== 'register'
    ) {
        return [
            {
                message: `Missing object properties`,
            },
        ];
    }
};
