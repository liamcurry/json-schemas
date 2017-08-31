export const relayerApiTokenPairsResponseSchema = {
    id: '/RelayerApiTokenPairsResponse',
    type: 'array',
    items: {
        properties: {
            tokenA: {$ref: '/RelayerApiTokenTradeInfo'},
            tokenB: {$ref: '/RelayerApiTokenTradeInfo'},
        },
        required: ['tokenA', 'tokenB'],
        type: 'object',
    },
};

export const relayerApiTokenTradeInfoSchema = {
    id: '/RelayerApiTokenTradeInfo',
    type: 'object',
    properties: {
        address: {$ref: '/Address'},
        symbol: {type: 'string'},
        precision: {type: 'number'},
        minAmount: {$ref: '/Number'},
        maxAmount: {$ref: '/Number'},
    },
    required: ['address', 'symbol', 'precision'],
};
