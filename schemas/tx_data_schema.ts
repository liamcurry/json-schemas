export const txDataSchema = {
    id: '/TxData',
    properties: {
        from: {$ref: '/Address'},
        to: {$ref: '/Address'},
        value: {$ref: '/Number'},
        gas: {$ref: '/Number'},
        gasPrice: {$ref: '/Number'},
        data: {
            type: 'string',
            pattern: '^0x[0-9a-f]*$',
        },
        nonce: {$ref: '/Number'},
    },
    required: ['from'],
    type: 'object',
    additionalProperties: false,
};
