var Reference = {
    title: 'Reference',
    allOf: [
        {$ref: 'Element'}
    ],
    properties: {
        reference: {$ref: 'string'},
        display: {$ref: 'string'}
    }
};

module.exports = Reference;