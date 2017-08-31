export const relayerApiFeesPayloadSchema = {
    id: '/RelayerApiFeesPayload',
    type: 'object',
    properties: {
        maker: {$ref: '/Address'},
        taker: {$ref: '/Address'},
        makerToken: {$ref: '/Address'},
        takerToken: {$ref: '/Address'},
        makerTokenAmount: {$ref: '/Number'},
        takerTokenAmount: {$ref: '/Number'},
    },
    required: ['makerToken', 'takerToken', 'makerTokenAmount', 'takerTokenAmount'],
};
