module.exports = (targetVal) => {
    if ('keyId' in targetVal && typeof targetVal.keyId !== 'number') {
        return [
            {
                message: `keyId must be number`,
            },
        ];
    }
};
