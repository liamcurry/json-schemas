export const relayerApiErrorResponse = {
    id: '/RelayerApiErrorResponse',
    type: 'object',
    properties: {
        code: {$ref: '/Number'},
        reason: {type: 'string'},
        validationErrors: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
    },
    required: ['code', 'reason'],
};
