module.exports = (targetVal) => {
    const controls = [
        'related.selects',
        'select.files',
        'toggle',
        'preview.document',
        'textArea',
        'date',
        'form.group',
        'signer.list',
        'checkbox.group',
        'dynamic.checkbox.group',
        'radio.group',
        'dynamic.radio.group',
        'register',
        'registry.select',
        'registry.search',
        'text.block',
        'tree.select',
        'table',
        'custom.data.select',
        'unit.select',
        'select.user',
        'payment',
        'tabs',
        'popup',
        'modal',
        'calculate.button',
        'file',
    ];
    if (
        targetVal.control &&
        !controls.find((control) => control === targetVal.control)
    ) {
        return [
            {
                message: 'Not correct control',
            },
        ];
    }
    if (
        targetVal.control === 'register' &&
        targetVal.multiple === false &&
        targetVal.type !== 'object'
    ) {
        return [
            {
                message: 'Type must be object',
            },
        ];
    }
    if (
        targetVal.control === 'register' &&
        targetVal.multiple === true &&
        targetVal.type !== 'array'
    ) {
        return [
            {
                message: 'Type must be array',
            },
        ];
    }
    if (targetVal.control === 'toggle' && targetVal.type !== 'boolean') {
        return [
            {
                message: 'Toggle must be boolean',
            },
        ];
    }
    if (targetVal.control === 'checkbox.group' && targetVal.type !== 'array') {
        return [
            {
                message: 'checkbox must be array',
            },
        ];
    }
    if (targetVal.control === 'radio.group' && targetVal.type !== 'string') {
        return [
            {
                message: 'radio group must be string',
            },
        ];
    }
};
