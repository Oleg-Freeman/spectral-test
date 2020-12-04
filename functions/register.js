module.exports = targetVal => {
    if (targetVal.control === 'register' && targetVal.multiple === false && targetVal.type !== 'object') {
      return [
        {
          message: 'Type must be object',
        },
      ];
    };
    if (targetVal.control === 'register' && targetVal.multiple === true && targetVal.type !== 'array') {
        return [
          {
            message: 'Type must be array',
          },
        ];
      }
  };