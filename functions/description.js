module.exports = (targetVal) => {
    if (
        !(
            'description' in targetVal ||
            'helperText' in targetVal ||
            'htmlBlock' in targetVal
        )
    ) {
        return [
            {
                message: `Missing one of three required properties: description, helperText or htmlBlock`,
            },
        ];
    }
};
