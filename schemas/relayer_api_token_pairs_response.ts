export const relayerApiTokenPairsResponse = {
    id: '/RelayerApiTokenPairsResponse',
    type: 'array',
    items: {
        properties: {
            tokenA: {$ref: '/TokenTradeInfo'},
            tokenB: {$ref: '/TokenTradeInfo'},
        },
        required: ['v', 'r', 's'],
        type: 'object',
    },
};

const relayerApiTokenTradeInfo = {
    id: '/RelayerApiTokenTradeInfo',
    type: 'object',
    properties: {
        address: {$ref: '/Address'},
        symbol: {type: 'string'},
        minAmount: {type: '/Number'},
        maxAmount: {type: '/Number'},
        precision: {type: '/Number'},
    },
    required: ['address'],
};
