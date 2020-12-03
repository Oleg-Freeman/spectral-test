module.exports = targetVal => {
    if (targetVal.control === 'toggle' && targetVal.type !== 'boolean') {
      return [
        {
          message: 'Toggle must be boolean',
        },
      ];
    };
  };