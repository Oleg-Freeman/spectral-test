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
    const err = controls.find((control) => control === targetVal.control);
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
};
