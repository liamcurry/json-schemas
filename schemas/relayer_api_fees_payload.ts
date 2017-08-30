export const relayerApiFeesPayload = {
    id: '/RelayerApiFeesPayload',
    type: 'object',
    properties: {
        maker: {type: 'string'},
        taker: {type: 'string'},
        makerToken: {$ref: '/Address'},
        takerToken: {$ref: '/Address'},
        makerTokenAmount: {$ref: '/Number'},
        takerTokenAmount: {$ref: '/Number'},
    },
    required: ['makerToken', 'takerToken', 'makerTokenAmount', 'takerTokenAmount'],
};
